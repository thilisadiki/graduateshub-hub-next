import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Award } from 'lucide-react';
import { portfolioCategories, getCategoryById } from '@/data/portfolioCategories';
import { getTopicsByCategory } from '@/data/portfolioTopics';
import { getTasksByTopic } from '@/data/portfolioTasks';
import type { PortfolioLevel } from '@/types';

const SITE_URL = 'https://www.graduateshub.co.za';

export async function generateStaticParams() {
  return portfolioCategories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) return {};
  return {
    title: `${cat.name} Portfolio Tasks: Prove Your Skills`,
    description: `${cat.tagline} Practical, graded tasks across Beginner, Intermediate, and Advanced levels.`,
    alternates: { canonical: `${SITE_URL}/portfolio/${cat.id}` },
    openGraph: {
      title: `${cat.name} Portfolio Tasks | Graduates Hub`,
      description: cat.tagline,
      url: `${SITE_URL}/portfolio/${cat.id}`,
      type: 'website',
    },
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
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  const topics = getTopicsByCategory(cat.id);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE_URL}/portfolio/${cat.id}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">{cat.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 leading-tight">{cat.name}</h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">{cat.description}</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {topics.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Topics coming soon</h2>
            <p className="text-gray-500">We are still writing the first briefs for this category. Check back soon or explore another category.</p>
            <Link href="/portfolio" className="inline-flex items-center gap-1.5 mt-5 text-indigo-600 font-bold text-sm">
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
                  href={`/portfolio/${cat.id}/${topic.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-indigo-500 shrink-0" />
                      <h2 className="text-lg md:text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
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
                  <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 shrink-0">
                    Open topic <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
