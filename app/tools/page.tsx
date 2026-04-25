import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, CheckCircle, Users, GraduationCap, Briefcase, RefreshCw, HelpCircle } from 'lucide-react';
import ToolsGrid from './ToolsGrid';
import { SITE_URL, OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free AI Career Tools: CV Reviewer, Interview Prep, Skills Gap Analyser and More',
  description: '7 free AI-powered career tools for job seekers and graduates: CV reviewer, interview prep generator, skills gap analyser, learning path builder, course recommender, job description decoder, and career quiz. No sign-up required.',
  alternates: { canonical: `${SITE_URL}/tools` },
  openGraph: {
    title: 'Free AI Career Tools | Graduates Hub',
    description: '7 free tools to plan your career, review your CV, prep for interviews, and find the right courses. Powered by Google Gemini. No account needed.',
    url: `${SITE_URL}/tools`,
    type: 'website',
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are these AI career tools really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All 7 tools on this page are completely free to use. There is no subscription, no credit card, and no account required. The AI tools are powered by Google Gemini and the Career Quiz runs entirely in your browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to create an account to use these tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No account is needed. Open any tool, enter your information, and get results instantly. Your data is not stored or shared.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the CV Reviewer work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paste the text of your CV into the tool and optionally enter the job title you are applying for. The AI reviews your CV and returns a score out of 100, a list of strengths, specific improvements for each section, any missing elements, and free courses to strengthen your profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Skills Gap Analyser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Skills Gap Analyser compares your current skills against the requirements of your target job role. It identifies which skills you already have, which skills you still need, and recommends free courses to close the gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is the Interview Prep Generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Interview Prep Generator uses Google Gemini to produce realistic interview questions based on your job title and experience level. Questions cover behavioural, technical, and situational categories. Each question includes a model answer and common mistakes to avoid. We recommend using it as a preparation guide alongside real practice with a friend or mentor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Career Quiz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Career Quiz is a 6-question multiple-choice quiz that matches your interests and natural strengths to one of six career categories: IT and Software, Data Analytics, Business and Management, Digital Marketing, Accounting and Finance, or Languages and Communication. It runs entirely in your browser with no AI required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these tools on my phone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All tools are fully responsive and work on any smartphone or tablet browser. No app download is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Job Description Decoder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Job Description Decoder lets you paste any job posting and get a plain-English breakdown of it. It separates required skills from nice-to-have skills, rewrites responsibilities in simple language, flags any red flags in the posting, and recommends free courses to help you meet the requirements.',
      },
    },
  ],
};

const audiences = [
  {
    icon: GraduationCap,
    title: 'Recent Graduates',
    body: 'You have qualifications but limited work experience. Use the Career Quiz to identify your best path, the Skills Gap Analyser to see what employers expect, and the CV Reviewer to make sure your CV stands out before you apply.',
  },
  {
    icon: Briefcase,
    title: 'Active Job Seekers',
    body: 'You are actively applying for roles. Use the Job Description Decoder to understand exactly what each posting requires, the Interview Prep Generator to practise before every interview, and the Course Recommender to quickly fill any skill gaps.',
  },
  {
    icon: RefreshCw,
    title: 'Career Changers',
    body: 'You are switching fields and starting fresh. Use the Learning Path Generator to get a structured roadmap for your new career, the Skills Gap Analyser to see how your existing experience transfers, and the Career Quiz if you are still deciding on a direction.',
  },
  {
    icon: Users,
    title: 'Self-Taught Learners',
    body: 'You are building skills independently and want to make sure they count. Use the Course Recommender to find the most relevant free certified courses, and the CV Reviewer to check that your self-taught background is presented clearly and credibly.',
  },
];

const howItWorks = [
  {
    step: '1',
    title: 'Choose a tool',
    body: 'Select the tool that matches your immediate need. Not sure where to start? The Career Quiz takes under two minutes and gives you a clear direction.',
  },
  {
    step: '2',
    title: 'Enter your information',
    body: 'Each tool asks for only what it needs. The CV Reviewer needs your CV text. The Interview Prep Generator needs a job title. The Career Quiz just needs your answers to 6 questions.',
  },
  {
    step: '3',
    title: 'Get actionable results',
    body: 'Results come back in seconds. Every tool gives you specific, practical output: scores, skill lists, questions with model answers, or a phased learning roadmap. Not just generic advice.',
  },
];

const faqs = [
  {
    q: 'Are these AI career tools really free?',
    a: 'Yes. All 7 tools on this page are completely free. There is no subscription, no credit card, and no account required. The AI tools are powered by Google Gemini. The Career Quiz runs entirely in your browser at no cost.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account is needed. Open any tool, enter your information, and get results instantly. Your data is not stored or shared.',
  },
  {
    q: 'How does the CV Reviewer work?',
    a: 'Paste the text of your CV into the tool and optionally enter your target job title. The AI reviews it and returns a score out of 100, a list of what is working, specific improvements per section, any missing elements, and free courses to strengthen your profile.',
  },
  {
    q: 'How accurate is the Interview Prep Generator?',
    a: 'The tool generates realistic questions based on your job title and experience level, covering behavioural, technical, and situational categories. Each question comes with a model answer and common mistakes to avoid. We recommend using it as a preparation guide alongside practice with a friend or mentor.',
  },
  {
    q: 'What is the Job Description Decoder?',
    a: 'Paste any job posting and get a plain-English breakdown: required vs. nice-to-have skills, responsibilities in simple language, any red flags in the posting, and free courses to meet the requirements.',
  },
  {
    q: 'What is the Career Quiz?',
    a: 'A 6-question quiz that matches your interests and strengths to one of six career paths: IT and Software, Data Analytics, Business and Management, Digital Marketing, Accounting and Finance, or Languages and Communication. It runs in your browser with no AI involved.',
  },
  {
    q: 'Can I use these tools on my phone?',
    a: 'Yes. All tools are fully responsive and work on any smartphone or tablet. No app download is needed.',
  },
  {
    q: 'Are the course recommendations actually free?',
    a: 'Yes. All courses recommended by our tools are sourced from Alison.com, which offers free certified online courses. Some courses offer paid certificates but the learning itself is always free.',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-yellow-400" />
            7 Free Tools · No Sign-up Required
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Free AI Career Tools for Job Seekers and Graduates
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Review your CV, prepare for interviews, find skill gaps, decode job postings, and build a learning roadmap. Seven free tools, no account needed, results in seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400">
            {['Powered by Google Gemini', 'No login required', 'Works on any device'].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-300 font-medium">AI Tools</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-14 flex flex-col gap-20">

        {/* Tools grid */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">All 7 Free Career Tools</h2>
            <p className="text-gray-500">Click any tool to open it instantly. No login, no waiting.</p>
          </div>
          <ToolsGrid />
        </section>

        {/* What these tools are */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">What Are These Tools?</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed flex flex-col gap-4 text-[15px]">
            <p>
              Graduates Hub offers seven free, AI-powered career tools designed specifically for graduates and job seekers in South Africa and beyond. Each tool is built around a specific stage of the job search process, from figuring out which career to pursue all the way through to walking into an interview prepared.
            </p>
            <p>
              The AI tools use Google Gemini to generate personalised results based on your input. The Career Quiz is the exception: it runs entirely in your browser using a weighted scoring system with no AI involved, which means it is instant and works offline.
            </p>
            <p>
              Every tool connects to our catalog of 128+ free certified courses from Alison.com. When a tool identifies a skill gap or recommends learning material, it links directly to a relevant free course so you can act immediately. No upsells, no paywalls.
            </p>
            <p>
              These tools do not replace a career counsellor or a mentor. They are designed to give you structured, specific starting points that you can then build on with real-world practice, networking, and continued learning.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map(({ step, title, body }) => (
              <div key={step} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-lg flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Who These Tools Are For</h2>
          <p className="text-gray-500 mb-8 text-[15px]">
            These tools are built for anyone navigating the early or transitional stages of their career. Here is how different users typically get the most value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Graduates Hub */}
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Why Graduates Hub Built These Tools</h2>
          <div className="flex flex-col gap-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              Most job seekers know they need to improve their CV, prepare for interviews, and keep their skills up to date. The challenge is that practical, personalised guidance has always required access to a career counsellor, a recruiter willing to give feedback, or an expensive course. Not everyone has those resources.
            </p>
            <p>
              Graduates Hub was built on the belief that career guidance should be accessible to everyone, regardless of budget or location. We started by curating free certified courses from Alison.com and organising them by career category. These AI tools are the next step: turning that course catalog into a set of practical, personalised tools that help you figure out where to start and what to do next.
            </p>
            <p>
              All seven tools are free because the platform earns a small affiliate commission when users enrol in courses through our links. The tools themselves will never be paywalled.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={24} className="text-indigo-600 shrink-0" />
            <h2 className="text-2xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related resources */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/portfolio', label: 'Proof of Work Portfolio', desc: 'Complete practical tasks and earn a shareable Badge of Competence for LinkedIn' },
              { href: '/career-roadmaps', label: 'Career Roadmaps', desc: 'Step-by-step guides to getting job-ready in a specific field' },
              { href: '/interview-prep', label: 'CV and Interview Prep', desc: 'Expert-written guides for writing a strong CV and preparing for interviews' },
              { href: '/search', label: 'Free Course Search', desc: 'Browse and filter 128+ free certified courses by topic and level' },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-primary hover:shadow-md transition-all group flex flex-col gap-2"
              >
                <p className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                <span className="text-xs font-bold text-primary mt-auto">Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Looking for free certified courses?</h3>
            <p className="text-gray-500 text-sm">Browse 128+ free courses across IT, Business, Marketing, Data Analytics, Accounting, Languages, and Personal Development.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/search"
              className="bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-bold transition-colors text-sm whitespace-nowrap"
            >
              Browse All Courses
            </Link>
            <Link
              href="/career-roadmaps"
              className="border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-6 py-2.5 rounded-lg font-bold transition-colors text-sm whitespace-nowrap"
            >
              Career Roadmaps
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
