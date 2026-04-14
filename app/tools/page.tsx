import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import ToolsGrid from './ToolsGrid';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Free AI Career Tools — CV Reviewer, Interview Prep, Skills Gap & More',
  description: '7 free AI-powered career tools in one place: CV reviewer, interview prep generator, skills gap analyser, learning path builder, course recommender, job description decoder, and career quiz. No sign-up required.',
  alternates: { canonical: `${SITE_URL}/tools` },
  openGraph: {
    title: 'Free AI Career Tools | Graduates Hub',
    description: '7 free tools to plan your career, review your CV, prep for interviews, and find the right courses — powered by AI.',
    url: `${SITE_URL}/tools`,
    type: 'website',
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-yellow-400" />
            7 Free Tools · No Sign-up Required
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Free AI Career Tools
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Plan your career, review your CV, prep for interviews, decode job postings, and find the right courses to get you there — all in one place, completely free.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-200 font-medium">AI Tools</span>
          </div>
        </div>
      </div>

      {/* Tools grid */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">All Tools</h2>
          <p className="text-gray-500">Click any tool to open it instantly — no login, no waiting.</p>
        </div>

        <ToolsGrid />

        {/* Bottom CTA */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Looking for free courses?</h3>
            <p className="text-gray-500 text-sm">Browse 128+ free certified courses across IT, Business, Marketing, Data Analytics, and more.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/search"
              className="bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-bold transition-colors text-sm whitespace-nowrap"
            >
              Browse Courses →
            </Link>
            <Link
              href="/career-roadmaps"
              className="border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-6 py-2.5 rounded-lg font-bold transition-colors text-sm whitespace-nowrap"
            >
              Career Roadmaps
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
