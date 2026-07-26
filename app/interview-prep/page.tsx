import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText, ChevronRight, DollarSign, Target, CheckCircle2,
  HelpCircle, ShieldCheck, Sparkles, Award, ArrowRight,
  BookOpen, Lightbulb
} from 'lucide-react';
import { interviewPreps } from '@/data/interviewPrep';
import { formatLastUpdated } from '@/utils/dateUtils';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'CV & Interview Prep for Entry-Level Roles (2026)',
  description:
    'Field-specific CV advice, STAR-method interview frameworks, technical screening questions, and regional salary benchmarks for entry-level roles.',
  alternates: { canonical: `${SITE_URL}/interview-prep` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'CV & Interview Prep for Entry-Level Roles (2026) | Graduates Hub',
    description:
      'Field-specific CV advice, STAR-method interview frameworks, technical screening questions, and regional salary benchmarks for entry-level roles.',
    url: `${SITE_URL}/interview-prep`,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'CV & Interview Prep', item: `${SITE_URL}/interview-prep` },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'CV & Interview Prep Guides',
  description: 'Field-specific CV tips, interview questions, and regional salary benchmarks for entry-level roles.',
  numberOfItems: interviewPreps.length,
  itemListElement: interviewPreps.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.role,
    url: `${SITE_URL}/interview-prep/${p.id}`,
    description: p.description,
  })),
};

const FAQS = [
  {
    q: 'What is the STAR method for answering behavioral interview questions?',
    a: 'STAR stands for Situation, Task, Action, and Result. It is the industry-standard framework for answering behavioral interview questions (e.g. "Tell me about a time you solved a technical issue"). You describe the context (Situation), your objective (Task), the specific steps you took (Action), and the measurable outcome (Result).',
  },
  {
    q: 'How do ATS (Applicant Tracking Systems) screen graduate CVs?',
    a: 'ATS scanners filter incoming resumes by matching text against job description keywords, technical tool competencies, and standard formatting. Our guides highlight exact keywords and formatting rules to ensure your CV passes automated screening.',
  },
  {
    q: 'Why are regional salary benchmarks included in these guides?',
    a: 'Salary expectations vary significantly across markets. We provide realistic annual compensation ranges across the US, UK, Canada, Australia, and South Africa so entry-level candidates can negotiate compensation with confidence.',
  },
  {
    q: 'How are these CV & interview prep guides curated?',
    a: 'Every guide is written and audited by named specialists with real-world hiring experience in tech, engineering, marketing, accounting, and business analysis, ensuring practical relevance over generic advice.',
  },
  {
    q: 'How do I build an ATS-optimized CV using Graduates Hub?',
    a: 'Once you review the role-specific tips in our prep guides, use our free CV Builder (/cv-builder). It provides 3 professional, ATS-compliant templates, an interactive photo cropper, and instant PDF download.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const CURATORS = {
  jason: { name: 'Jason Sadiki', photo: '/jason-sadiki.jpg' },
  ndulamiso: { name: 'Ndulamiso Mamburu', photo: '/ndulamiso-mamburu.jpg' },
};

const CATEGORY_BADGES: Record<string, string> = {
  it: 'IT & Technology',
  'software-engineering': 'Software Engineering',
  marketing: 'Marketing',
  accounting: 'Accounting',
  business: 'Business',
};

const CATEGORY_COLOURS: Record<string, string> = {
  it: 'bg-[#FFDF9C]/20 text-[#5a4000] border-[#D1C5B4]',
  'software-engineering': 'bg-violet-50 text-violet-700 border-violet-100',
  marketing: 'bg-pink-50 text-pink-700 border-pink-100',
  accounting: 'bg-amber-50 text-amber-700 border-amber-100',
  business: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

export default function InterviewPrepPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">CV & Interview Prep</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <FileText size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">CV & Interview Prep</h1>
            <p className="text-gray-500 mt-2 text-lg max-w-2xl">
              Role-specific CV advice, practical interview questions, and global salary context for entry-level job seekers.
            </p>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-6 mb-6 bg-[#FFDF9C]/20 border border-[#D1C5B4] rounded-xl px-5 py-4 text-sm text-[#5a4000] max-w-2xl">
          Every guide is written with practical hiring context in mind: role-specific skills, common interview patterns, and salary benchmarks across several regions.
          <Link href="/curation-policy" className="font-bold ml-1 underline underline-offset-2 hover:text-[#261A00] transition-colors">
            How we curate →
          </Link>
        </div>

        {/* CV Builder nudge */}
        <div className="mb-12 max-w-2xl flex items-center justify-between gap-4 bg-violet-50 border border-violet-100 rounded-xl px-5 py-4">
          <p className="text-sm text-violet-700">
            <span className="font-bold">Once you have the tips, build the CV.</span> Our free builder has 3 professional templates, photo cropper, and instant PDF download.
          </p>
          <Link
            href="/cv-builder"
            className="shrink-0 text-sm font-bold text-violet-700 hover:text-violet-900 transition-colors whitespace-nowrap"
          >
            Free CV Builder →
          </Link>
        </div>

        {/* 1. Prep Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {interviewPreps.map((prep) => {
            const curators = Array.isArray(prep.curator) ? prep.curator : [prep.curator];
            const categoryColour = CATEGORY_COLOURS[prep.category] ?? 'bg-gray-50 text-gray-600 border-gray-200';
            return (
              <Link
                key={prep.id}
                href={`/interview-prep/${prep.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-4"
              >
                {/* Category badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${categoryColour}`}>
                    {CATEGORY_BADGES[prep.category] ?? prep.category}
                  </span>
                </div>

                {/* Role & description */}
                <div>
                  <h2 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors leading-snug">
                    {prep.role}
                  </h2>
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                    <DollarSign size={13} className="text-gray-400 shrink-0" />
                    <span>Salary benchmarks by region</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium">{prep.questions.length} interview questions</span>
                  <span>·</span>
                  <span>{prep.cvTips.length} CV tips</span>
                  <span>·</span>
                  <span className="text-gray-400">Updated {formatLastUpdated(prep.lastUpdated)}</span>
                </div>

                {/* Curator + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {curators.map((key) => (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          key={key}
                          src={CURATORS[key].photo}
                          alt={CURATORS[key].name}
                          className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {curators.map((k) => CURATORS[k].name.split(' ')[0]).join(' & ')}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-primary group-hover:underline">View Guide →</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 2. Educational Section: STAR Framework & Preparation Pillars */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Preparation Strategy
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-4">
              The 4 Pillars of a High-Converting Job Application
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Winning job offers requires more than submitting generic resumes. Our prep guides focus on four essential pillars that separate top candidates from the stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold mb-4">
                <Target size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">STAR Method Answers</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Frame behavioral answers into Situation, Task, Action, and Result to demonstrate concrete problem-solving ability.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-primary font-semibold">
                Behavioral Strategy
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-4">
                <FileText size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">ATS Keyword Optimization</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Align CV technical skills, tools, and headers with exact applicant tracking software keywords to pass automated screening.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                Resume Formatting
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mb-4">
                <Award size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">Proof-of-Work Verification</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Back up your claims with links to verified portfolio badges, live web apps, GitHub repositories, and dynamic financial models.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-purple-600 font-semibold">
                Portfolio Badges
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold mb-4">
                <DollarSign size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">Regional Salary Benchmarks</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Understand localized entry-level pay expectations across US, UK, Canada, Australia, and South Africa to negotiate with confidence.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-amber-600 font-semibold">
                Compensation Intelligence
              </div>
            </div>
          </div>
        </section>

        {/* 3. Educational Section: Entry-Level Interview Readiness Checklist */}
        <section className="mb-20 bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Entry-Level Job Application Readiness Checklist
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Before submitting your resume to hiring managers, verify that your application hits all 4 critical readiness criteria:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm">1. Quantified Achievement Bullets</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Replaced passive task lists with action verbs and specific metrics (e.g. &quot;Analyzed 6 months of sales data to identify 15% churn reduction&quot;).
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm">2. Verifiable Portfolio Project Link</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Included a direct, clickable URL to a live portfolio, GitHub repo, Figma prototype, or verified Graduates Hub Badge of Competence.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm">3. Three Prepared STAR Stories</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Rehearsed 3 structured STAR narratives covering a technical challenge, a team collaboration scenario, and a mistake you resolved.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-gray-900 text-sm">4. Standard ATS File Format</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Exported your resume as a clean, single-column PDF built with standard fonts using our free CV Builder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ Accordion Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Answers to common questions about CV formatting, interview preparation, and compensation.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-base mb-2 flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-500 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Pair your interview prep with a career roadmap</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            Get the full step-by-step study path alongside technical interview questions, or audit your resume using our free AI tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/career-roadmaps"
              className="bg-primary hover:bg-[#5a4000] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Browse Career Roadmaps
            </Link>
            <Link
              href="/free-ai-career-tools"
              className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Try Free AI Career Tools
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
