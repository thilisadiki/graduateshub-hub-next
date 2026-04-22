import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Award } from 'lucide-react';
import { portfolioTasks, portfolioFields } from '@/data/portfolioTasks';
import type { PortfolioDifficulty } from '@/types';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Portfolio Tasks: Practical Briefs to Prove Your Skills',
  description:
    'Browse practical, entry-level tasks in Marketing, Tech, Data, Finance, and Design. Complete one to earn a public Badge of Competence.',
  alternates: { canonical: `${SITE_URL}/portfolio/tasks` },
  openGraph: {
    title: 'Portfolio Tasks | Graduates Hub',
    description: 'Pick a task. Do the work. Earn a Badge.',
    url: `${SITE_URL}/portfolio/tasks`,
    type: 'website',
  },
};

const DIFFICULTY_COLOURS: Record<PortfolioDifficulty, string> = {
  Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Intermediate: 'bg-amber-50 text-amber-700 border-amber-100',
  Advanced: 'bg-rose-50 text-rose-700 border-rose-100',
};

const FIELD_ACCENTS: Record<string, string> = {
  Marketing: 'from-pink-500 to-rose-500',
  Tech: 'from-indigo-500 to-blue-500',
  Data: 'from-emerald-500 to-teal-500',
  Finance: 'from-amber-500 to-orange-500',
  Design: 'from-violet-500 to-purple-500',
  Business: 'from-slate-500 to-gray-600',
};

export default function PortfolioTasksPage() {
  const usedFields = portfolioFields.filter((f) => portfolioTasks.some((t) => t.field === f));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">Tasks</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
            Pick a task. Do the work. Earn a Badge.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {portfolioTasks.length} practical tasks across {usedFields.length} fields. Each one is scoped for 1 to 3 hours and graded against a public rubric.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioTasks.map((task) => {
            const accent = FIELD_ACCENTS[task.field] || 'from-indigo-500 to-blue-500';
            return (
              <Link
                key={task.id}
                href={`/portfolio/tasks/${task.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col overflow-hidden group"
              >
                <div className={`h-1.5 bg-gradient-to-r ${accent}`} />
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {task.field}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DIFFICULTY_COLOURS[task.difficulty]}`}>
                      {task.difficulty}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {task.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{task.tagline}</p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {task.estimatedHours}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award size={13} />
                      {task.rubric.length} criteria
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 pt-1">
                    Start task <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
