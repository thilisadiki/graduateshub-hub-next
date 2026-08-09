import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Award, CheckCircle2, HelpCircle, Briefcase, Sparkles } from 'lucide-react';
import { portfolioCategories, getCategoryById } from '@/data/portfolioCategories';
import { getTopicsByCategory } from '@/data/portfolioTopics';
import { getTasksByTopic } from '@/data/portfolioTasks';
import { getPortfolioCategorySeo } from '@/data/portfolioCategorySeo';
import type { PortfolioLevel } from '@/types';
import { BreadcrumbList, ItemList, FAQPage, WithContext } from 'schema-dts';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';
import Pagination from '@/components/shared/Pagination';

export async function generateStaticParams() {
  return portfolioCategories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const { page } = await searchParams;
  const pageNum = Math.max(1, parseInt(page ?? '1'));
  const cat = getCategoryById(category);
  if (!cat) return {};
  const seoData = getPortfolioCategorySeo(cat.id);
  const topics = getTopicsByCategory(cat.id);
  const topicTitles = topics.slice(0, 5).map((t) => t.title).join(', ');
  
  const title = pageNum === 1 
    ? (seoData?.seoTitle ?? `${cat.name} Portfolio Tasks - Graded Briefs for SA Graduates`)
    : `${cat.name} Portfolio Tasks - Page ${pageNum} - Graded Briefs`;
    
  const description = seoData?.seoDescription ?? `${cat.tagline}${topicTitles ? ` Topics: ${topicTitles}.` : ''} Practical, graded tasks across Beginner, Intermediate, and Advanced levels.`;
  const url = `${SITE_URL}/portfolio-tasks/${cat.id}`;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const hasQueryParams = Object.keys(resolvedSearchParams).length > 0;

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(hasQueryParams && {
      robots: {
        index: false,
        follow: true,
      },
    }),
    openGraph: {
      siteName: SITE_NAME,
      title: `${title} | Graduates Hub`,
      description,
      url,
      type: 'website',
      images: [OG_IMAGE],
    },
    ...(pageNum > 1 && { robots: { index: false, follow: true } }),
  };
}

const LEVELS: PortfolioLevel[] = ['beginner', 'intermediate', 'advanced'];

const LEVEL_STYLES: Record<PortfolioLevel, { label: string; available: string; missing: string }> = {
  beginner: {
    label: 'Beginner',
    available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    missing: 'bg-gray-50 text-gray-400 border-gray-200',
  },
  intermediate: {
    label: 'Intermediate',
    available: 'bg-amber-50 text-amber-700 border-amber-200',
    missing: 'bg-gray-50 text-gray-400 border-gray-200',
  },
  advanced: {
    label: 'Advanced',
    available: 'bg-rose-50 text-rose-700 border-rose-200',
    missing: 'bg-gray-50 text-gray-400 border-gray-200',
  },
};

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { category } = await params;
  const resolvedParams = await searchParams;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  const seoData = getPortfolioCategorySeo(cat.id);
  const allTopics = getTopicsByCategory(cat.id);
  const PER_PAGE = 10;
  const totalPages = Math.ceil(allTopics.length / PER_PAGE);
  const page = Math.max(1, Math.min(totalPages || 1, parseInt(resolvedParams.page ?? '1')));
  const topics = allTopics.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio-tasks` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE_URL}/portfolio-tasks/${cat.id}` },
    ],
  };

  const itemListSchema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${cat.name} - Portfolio Topics`,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: topics.length,
    itemListElement: topics.map((t, i) => ({
      '@type': 'ListItem',
      position: (page - 1) * PER_PAGE + i + 1,
      url: `${SITE_URL}/portfolio-tasks/${cat.id}/${t.id}`,
      name: t.title,
    })),
  };

  const faqSchema: WithContext<FAQPage> | null = seoData?.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer ?? f.a ?? '',
      },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="bg-gradient-to-br bg-[#1F1B13] text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
            <Link href="/portfolio-tasks" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">{cat.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 leading-tight">{cat.name}</h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">{cat.description}</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">
        {allTopics.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Topics coming soon</h2>
            <p className="text-gray-500">We are still writing the first briefs for this category. Check back soon or explore another category.</p>
            <Link href="/portfolio-tasks" className="inline-flex items-center gap-1.5 mt-5 text-primary font-bold text-sm">
              Back to all categories <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {topics.map((topic) => {
              const tasksInTopic = getTasksByTopic(cat.id, topic.id);
              return (
                <Link
                  key={topic.id}
                  href={`/portfolio-tasks/${cat.id}/${topic.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-primary shrink-0" />
                      <h2 className="text-lg md:text-xl font-black text-gray-900 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h2>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {LEVELS.map((lvl) => {
                        const exists = tasksInTopic.some((t) => t.level === lvl);
                        const style = LEVEL_STYLES[lvl];
                        return (
                          <span
                            key={lvl}
                            className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                              exists ? style.available : style.missing
                            }`}
                          >
                            {style.label}{exists ? '' : ' · soon'}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary shrink-0">
                    Open topic <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}

            <Pagination 
              currentPage={page} 
              totalPages={totalPages} 
              baseUrl={`/portfolio-tasks/${cat.id}`} 
            />
          </div>
        )}

        {/* SEO Editorial Content Section */}
        {seoData && (
          <div className="flex flex-col gap-10 border-t border-gray-200 pt-12">
            {/* Why Build Proof of Work */}
            <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={20} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Proof of Work Guide</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Why Build a {cat.name} Portfolio?
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {seoData.whyBuildPortfolio}
              </p>
            </section>

            {/* Recruiter Expectations & Skills Tested */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-gray-900 font-extrabold text-lg">
                  <Briefcase size={20} className="text-primary shrink-0" />
                  <h3>What Hiring Managers Look For</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {seoData.whatRecruitersLookFor.map((item) => (
                    <div key={item.title} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <strong className="text-gray-900 text-sm font-bold block mb-1">{item.title}</strong>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-gray-900 font-extrabold text-lg">
                  <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  <h3>Key Skills Tested</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {seoData.keySkillsTested.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Category FAQs */}
            {seoData.faqs.length > 0 && (
              <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle size={22} className="text-primary" />
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    Frequently Asked Questions ({cat.name})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seoData.faqs.map((faq) => (
                    <div key={faq.question} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col gap-2">
                      <h3 className="font-extrabold text-gray-900 text-base">{faq.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer ?? faq.a ?? ''}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Roadmap Banner */}
            {seoData.relatedRoadmapHref && (
              <section className="bg-gradient-to-r from-[#1F1B13] to-[#2A241A] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <h3 className="text-xl font-extrabold mb-1">Want to prepare for job applications in {cat.name}?</h3>
                  <p className="text-slate-300 text-sm">
                    Follow our step-by-step career roadmap for skills, salary benchmarks, and interview preparation.
                  </p>
                </div>
                <Link
                  href={seoData.relatedRoadmapHref}
                  className="bg-primary hover:bg-[#5a4000] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap shadow-sm border border-primary"
                >
                  {seoData.relatedRoadmapLabel ?? 'Explore Roadmap'} →
                </Link>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
