import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Clock, Award, Lock } from 'lucide-react';
import { getCategoryById } from '@/data/portfolioCategories';
import { portfolioTopics, getTopicById } from '@/data/portfolioTopics';
import { getTaskByLocation } from '@/data/portfolioTasks';
import type { PortfolioLevel } from '@/types';
import { BreadcrumbList, ItemList, WithContext } from 'schema-dts';

const SITE_URL = 'https://www.graduateshub.co.za';

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
  const description = `${top.description}${skills ? ` Skills: ${skills}.` : ''} Beginner, Intermediate, and Advanced levels with graded rubrics.`;
  return {
    title: `${top.title} — ${cat.name} Portfolio Tasks | Graduates Hub`,
    description,
    alternates: { canonical: `${SITE_URL}/portfolio/${cat.id}/${top.id}` },
    openGraph: {
      title: `${top.title} | Graduates Hub Portfolio`,
      description,
      url: `${SITE_URL}/portfolio/${cat.id}/${top.id}`,
      type: 'article',
    },
  };
}

const LEVELS: PortfolioLevel[] = ['beginner', 'intermediate', 'advanced'];

const LEVEL_COPY: Record<PortfolioLevel, { label: string; blurb: string; accent: string; dot: string }> = {
  beginner: {
    label: 'Beginner',
    blurb: 'Narrow scope, clear brief, 1 to 2 hours. For first-time submissions.',
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
  },
  intermediate: {
    label: 'Intermediate',
    blurb: 'Added constraints and realistic complications. 2 to 4 hours. Shows judgment, not just execution.',
    accent: 'border-amber-200 bg-amber-50 text-amber-700',
    dot: 'bg-amber-500',
  },
  advanced: {
    label: 'Advanced',
    blurb: 'Open-ended, senior-level scenario. 4 to 8 hours. Defend trade-offs and prioritisation.',
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

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE_URL}/portfolio/${cat.id}` },
      { '@type': 'ListItem', position: 4, name: top.title, item: `${SITE_URL}/portfolio/${cat.id}/${top.id}` },
    ],
  };

  const availableTasks = LEVELS
    .map((lvl) => ({ lvl, task: getTaskByLocation(cat.id, top.id, lvl) }))
    .filter((x): x is { lvl: PortfolioLevel; task: NonNullable<ReturnType<typeof getTaskByLocation>> } => Boolean(x.task));

  const itemListSchema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${top.title} — Portfolio Tasks`,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: availableTasks.length,
    itemListElement: availableTasks.map(({ lvl, task }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/portfolio/${cat.id}/${top.id}/${lvl}`,
      name: `${task.title} (${task.difficulty})`,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400 flex-wrap">
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <Link href={`/portfolio/${cat.id}`} className="hover:text-white transition-colors">{cat.name}</Link>
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

      <main className="max-w-5xl mx-auto px-6 py-10">
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
                  href={`/portfolio/${cat.id}/${top.id}/${lvl}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all p-6 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${copy.dot}`} />
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${copy.accent}`}>
                      {copy.label}
                    </span>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{task.tagline}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {task.estimatedHours}</span>
                    <span className="flex items-center gap-1.5"><Award size={13} /> {task.rubric.length} criteria</span>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-indigo-600">
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
      </main>
    </div>
  );
}
