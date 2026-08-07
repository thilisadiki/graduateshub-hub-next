import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Award, CheckCircle2, Clock, ArrowRight, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-ai-essentials-course-guide`;

export const metadata: Metadata = {
  title: 'Google AI Essentials Certificate Guide (2026) - Modules & Prompt Engineering',
  description:
    'Complete guide to the Google AI Essentials certificate on Grow with Google. Learn prompt engineering frameworks, Generative AI tools (Gemini, ChatGPT), workplace automation, and how to add Google AI credentials to your CV.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google AI Essentials Certificate Guide (2026) | Graduates Hub',
    description:
      'Master AI for workplace productivity with the Google AI Essentials certificate. Learn prompt engineering, Gemini integration, automation, and AI ethics.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Introduction to AI & Large Language Models', desc: 'Understand how Generative AI works, token probability, LLM capabilities, and how tools like Google Gemini process human inputs.' },
  { number: 2, title: 'Structured Prompt Engineering Frameworks', desc: 'Master Persona prompting, context setting, few-shot examples, and the 5 Ws method (Who, What, When, Where, Why) to get exact outputs on your first attempt.' },
  { number: 3, title: 'Workplace Automation & Content Drafting', desc: 'Apply AI to draft reports, summarize lengthy PDF documents, compose targeted communications, and automate repetitive operational tasks.' },
  { number: 4, title: 'AI-Assisted Data Analysis & Visual Insights', desc: 'Upload spreadsheets and datasets into Gemini to extract key trends, calculate metrics, and draft executive summaries.' },
  { number: 5, title: 'Responsible AI, Safety & IP Protection', desc: 'Learn data privacy rules, preventing proprietary information leakage, hallucination verification, and ethical AI deployment in corporate environments.' },
];

export default function GoogleAIEssentialsGuidePage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      {/* Hero */}
      <div className="bg-[#1F1B13] text-white py-16 md:py-20 border-b border-[#D1C5B4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5900]/30 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={14} className="text-yellow-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google AI Essentials Certificate: Complete 2026 Guide
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Learn how to harness Generative AI and prompt engineering for workplace productivity. No coding background required.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~10 Hours (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Beginner-Friendly</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is Google AI Essentials?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            Google AI Essentials is a foundational program designed by Google AI experts to teach professionals across all industries how to use artificial intelligence tools effectively in their daily work.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Unlike technical machine learning degrees, this course focuses entirely on practical application: writing effective prompts, automating document summaries, analyzing datasets, and applying AI ethically.
          </p>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Course Curriculum &amp; Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m) => (
              <div key={m.number} className="bg-white rounded-2xl border border-[#D1C5B4] p-6 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white font-black flex items-center justify-center text-sm shrink-0">
                    {m.number}
                  </div>
                  <h3 className="font-bold text-[#1F1B13] text-base">{m.title}</h3>
                </div>
                <p className="text-[#4F4639] text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prompt Engineering Quick Framework */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={20} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Skill</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-3">The 5 Ws Prompting Framework</h2>
          <p className="text-[#4F4639] text-sm leading-relaxed mb-6">
            Google AI Essentials teaches the 5 Ws framework for writing high-performing prompts on the first attempt:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
            {[
              { w: 'Who', detail: 'Assign a clear persona to AI (e.g. Act as a Senior Project Manager)' },
              { w: 'What', detail: 'Specify the exact task and deliverable required' },
              { w: 'When', detail: 'Define timeline context or sequential order' },
              { w: 'Where', detail: 'Mention channel, platform, or audience location' },
              { w: 'Why', detail: 'Explain the goal so AI optimizes for business intent' },
            ].map((item) => (
              <div key={item.w} className="bg-white p-4 rounded-xl border border-[#D1C5B4]">
                <strong className="text-primary text-base block mb-1">{item.w}</strong>
                <span className="text-xs text-[#4F4639]">{item.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-primary text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">Want a structured AI career path?</h2>
            <p className="text-[#FFDF9C] text-sm max-w-xl">
              Follow our complete step-by-step career roadmap for AI Productivity Specialists, complete with CV tips and interview prep.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/career-roadmaps/google-ai-essentials"
              className="bg-white text-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#FFDF9C]/20 transition-colors whitespace-nowrap"
            >
              View AI Roadmap →
            </Link>
            <Link
              href="/interview-prep/google-ai-essentials"
              className="bg-[#5a4000] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#261A00] transition-colors whitespace-nowrap border border-[#FFDF9C]/30"
            >
              AI Interview Prep
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
