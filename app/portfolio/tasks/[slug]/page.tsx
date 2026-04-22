import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Award, CheckCircle2, Target } from 'lucide-react';
import { portfolioTasks, getTaskById } from '@/data/portfolioTasks';
import SubmissionForm from './SubmissionForm';

const SITE_URL = 'https://www.graduateshub.co.za';

export async function generateStaticParams() {
  return portfolioTasks.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const task = getTaskById(slug);
  if (!task) return {};
  return {
    title: `${task.title} (${task.field} Portfolio Task)`,
    description: `${task.tagline} Earn a public Badge of Competence.`,
    alternates: { canonical: `${SITE_URL}/portfolio/tasks/${task.id}` },
    openGraph: {
      title: `${task.title} | Graduates Hub Portfolio`,
      description: task.tagline,
      url: `${SITE_URL}/portfolio/tasks/${task.id}`,
      type: 'article',
    },
  };
}

export default async function PortfolioTaskPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const task = getTaskById(slug);
  if (!task) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
      { '@type': 'ListItem', position: 3, name: 'Tasks', item: `${SITE_URL}/portfolio/tasks` },
      { '@type': 'ListItem', position: 4, name: task.title, item: `${SITE_URL}/portfolio/tasks/${task.id}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <Link href="/portfolio/tasks" className="hover:text-white transition-colors">Tasks</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">{task.field}</span>
          </div>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
              {task.field}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-slate-300">
              {task.difficulty}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Clock size={13} /> {task.estimatedHours}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3 leading-tight">
            {task.title}
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">{task.tagline}</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Brief */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">The Scenario</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">{task.scenario}</p>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">The Brief</h2>
            <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-wrap">{task.brief}</p>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-4">Deliverables</h2>
            <ul className="flex flex-col gap-3">
              {task.deliverables.map((d, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-gray-700">
                  <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {task.submissionGuidance && (
            <section className="bg-indigo-50 rounded-2xl border border-indigo-100 p-6 md:p-8">
              <h2 className="text-lg font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                <Target size={18} className="text-indigo-600" /> Submission Guidance
              </h2>
              <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-wrap">
                {task.submissionGuidance}
              </p>
            </section>
          )}

          <SubmissionForm taskId={task.id} />
        </div>

        {/* Right: Rubric */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-indigo-600" />
              <h2 className="font-extrabold text-gray-900">Grading Rubric</h2>
            </div>
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              Your submission is graded on each criterion (1 to 5) and combined into a weighted score out of 100.
            </p>
            <ul className="flex flex-col gap-4">
              {task.rubric.map((c) => (
                <li key={c.key} className="border-l-2 border-indigo-200 pl-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="font-bold text-gray-900 text-sm">{c.label}</div>
                    <div className="text-xs font-bold text-indigo-600">{c.weight}%</div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.description}</p>
                </li>
              ))}
            </ul>

            {task.skillsProven.length > 0 && (
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Skills Proven</div>
                <div className="flex flex-wrap gap-2">
                  {task.skillsProven.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}
