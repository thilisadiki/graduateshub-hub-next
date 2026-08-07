import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Clock, Award, Lock, HelpCircle, Sparkles } from 'lucide-react';
import { getCategoryById } from '@/data/portfolioCategories';
import { portfolioTopics, getTopicById } from '@/data/portfolioTopics';
import { getTaskByLocation } from '@/data/portfolioTasks';
import { getPortfolioCategorySeo } from '@/data/portfolioCategorySeo';
import type { PortfolioLevel } from '@/types';
import { BreadcrumbList, ItemList, FAQPage, WithContext } from 'schema-dts';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export async function generateStaticParams() {
  return portfolioTopics.map((t) => ({ category: t.categoryId, topic: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; topic: string }>;
}): Promise<Metadata> {
  const { category, topic } = await params;
  const cat = getCategoryById(category);
  const top = getTopicById(category, topic);
  if (!cat || !top) return {};
  const skills = top.skillsProven.slice(0, 4).join(', ');
  const description = `Master ${top.title} in ${cat.name}. ${top.description} Practical, graded briefs across Beginner, Intermediate, and Advanced levels with rubrics.`;
  const url = `${SITE_URL}/portfolio-tasks/${cat.id}/${top.id}`;
  const title = `${top.title} Portfolio Tasks & Graded Briefs - ${cat.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: SITE_NAME,
      title: `${title} | Graduates Hub`,
      description,
      url,
      type: 'article',
      images: [OG_IMAGE],
    },
  };
}

const LEVELS: PortfolioLevel[] = ['beginner', 'intermediate', 'advanced'];

const LEVEL_COPY: Record<PortfolioLevel, { label: string; blurb: string; accent: string; dot: string }> = {
  beginner: {
    label: 'Beginner',
    blurb: 'Narrow scope, clear brief, 1 to 2 hours. Ideal for building foundational proof.',
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
  },
  intermediate: {
    label: 'Intermediate',
    blurb: 'Added constraints and realistic complications. 2 to 4 hours. Demonstrates judgment.',
    accent: 'border-amber-200 bg-amber-50 text-amber-700',
    dot: 'bg-amber-500',
  },
  advanced: {
    label: 'Advanced',
    blurb: 'Open-ended, senior-level scenario. 4 to 8 hours. Trade-offs and architectural defence.',
    accent: 'border-rose-200 bg-rose-50 text-rose-700',
    dot: 'bg-rose-500',
  },
};

export default async function TopicPage({
  params,
}: {
  params: Promise<{ category: string; topic: string }>;
}) {
  const { category, topic } = await params;
  const cat = getCategoryById(category);
  const top = getTopicById(category, topic);
  if (!cat || !top) notFound();

  const topicSeo = top.seo;
  const catSeo = getPortfolioCategorySeo(cat.id);

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio-tasks` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE_URL}/portfolio-tasks/${cat.id}` },
      { '@type': 'ListItem', position: 4, name: top.title, item: `${SITE_URL}/portfolio-tasks/${cat.id}/${top.id}` },
    ],
  };

  const availableTasks = LEVELS
    .map((lvl) => ({ lvl, task: getTaskByLocation(cat.id, top.id, lvl) }))
    .filter((x): x is { lvl: PortfolioLevel; task: NonNullable<ReturnType<typeof getTaskByLocation>> } => Boolean(x.task));

  const itemListSchema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${top.title} - Portfolio Tasks`,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: availableTasks.length,
    itemListElement: availableTasks.map(({ lvl, task }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/portfolio-tasks/${cat.id}/${top.id}/${lvl}`,
      name: `${task.title} (${task.difficulty})`,
    })),
  };

  const faqSchema: WithContext<FAQPage> | null = topicSeo?.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topicSeo.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
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
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400 flex-wrap">
            <Link href="/portfolio-tasks" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <Link href={`/portfolio-tasks/${cat.id}`} className="hover:text-white transition-colors">{cat.name}</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">{top.title}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Award size={16} className="text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Topic</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 leading-tight">{top.title}</h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">{top.description}</p>
          {top.skillsProven.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {top.skillsProven.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">
        {/* Choose Level Grid */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Choose Your Level</h2>
          <p className="text-gray-500 mb-8">Pick the difficulty that matches where you are. You can come back and try a harder level later.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LEVELS.map((lvl) => {
              const task = getTaskByLocation(cat.id, top.id, lvl);
              const copy = LEVEL_COPY[lvl];
              if (task) {
                return (
                  <Link
                    key={lvl}
                    href={`/portfolio-tasks/${cat.id}/${top.id}/${lvl}`}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${copy.dot}`} />
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${copy.accent}`}>
                        {copy.label}
                      </span>
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{task.tagline}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                      <span className="flex items-center gap-1.5"><Clock size={13} /> {task.estimatedHours}</span>
                      <span className="flex items-center gap-1.5"><Award size={13} /> {task.rubric.length} criteria</span>
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary">
                      Start this level <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              }
              return (
                <div
                  key={lvl}
                  className="bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-6 flex flex-col opacity-80"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-gray-200 bg-white text-gray-500">
                      {copy.label}
                    </span>
                  </div>
                  <h3 className="font-black text-gray-500 text-lg mb-2">Coming soon</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{copy.blurb}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-gray-400">
                    <Lock size={14} /> Not yet available
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hand-crafted Custom Topic SEO Section (Rendered ONLY when topicSeo exists) */}
        {topicSeo && (
          <div className="flex flex-col gap-10 border-t border-gray-200 pt-12">
            {/* Practical Topic Overview */}
            <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={20} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Topic Execution Guide</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                {topicSeo.overviewTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {topicSeo.overviewBody}
              </p>
            </section>

            {/* Deliverables Breakdown */}
            {topicSeo.deliverables.length > 0 && (
              <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {topicSeo.deliverables.map((d) => (
                  <div key={d.title} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-2">
                    <h3 className="font-bold text-gray-900 text-base">{d.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </section>
            )}

            {/* Topic FAQs */}
            {topicSeo.faqs.length > 0 && (
              <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle size={22} className="text-primary" />
                  <h2 className="text-2xl font-extrabold text-gray-900">
                    Frequently Asked Questions ({top.title})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topicSeo.faqs.map((faq) => (
                    <div key={faq.question} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col gap-2">
                      <h3 className="font-extrabold text-gray-900 text-base">{faq.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Navigation & Career Roadmap CTA */}
            <section className="bg-gradient-to-r from-[#1F1B13] to-[#2A241A] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h3 className="text-xl font-extrabold mb-1">Explore {cat.name} Career Paths</h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Build proof of work across other topics or view full career roadmaps mapping technical skills to hiring expectations.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <Link
                  href={`/portfolio-tasks/${cat.id}`}
                  className="bg-[#3D3325] hover:bg-[#4E4231] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap border border-[#5E503C] text-center flex-1 md:flex-initial"
                >
                  All {cat.name} Topics →
                </Link>
                {catSeo?.relatedRoadmapHref && (
                  <Link
                    href={catSeo.relatedRoadmapHref}
                    className="bg-primary hover:bg-[#5a4000] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap shadow-sm border border-primary text-center flex-1 md:flex-initial"
                  >
                    {catSeo.relatedRoadmapLabel || 'Career Roadmap'} →
                  </Link>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
