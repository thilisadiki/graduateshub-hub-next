import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Award, Clock, ArrowRight, ShieldCheck, Cpu, Bot, Eye, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/microsoft-ai-fundamentals-course-guide`;

export const metadata: Metadata = {
  title: 'Microsoft Azure AI Fundamentals Guide (2026) - AI-900 Free Learning Paths',
  description:
    'Complete guide to Microsoft Azure AI Fundamentals (AI-900) on Microsoft Learn. Learn Generative AI, Azure OpenAI Service, Microsoft Copilot Studio, Computer Vision, and Responsible AI.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Microsoft Azure AI Fundamentals (AI-900) Guide (2026) | Graduates Hub',
    description:
      'Master Generative AI, Microsoft Copilot Studio, Azure OpenAI, and Responsible AI principles with free official Microsoft Learn learning paths.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Describe Artificial Intelligence Workloads & Considerations', desc: 'Understand foundational AI concepts, Machine Learning paradigms (Supervised vs Unsupervised), Deep Learning, and Microsoft Responsible AI principles (Fairness, Reliability, Safety, Privacy, Inclusiveness, Transparency, Accountability).' },
  { number: 2, title: 'Describe Fundamental Principles of Machine Learning on Azure', desc: 'Learn automated machine learning (AutoML) with Azure Machine Learning studio, regression, classification, and clustering models.' },
  { number: 3, title: 'Describe Features of Computer Vision Workloads', desc: 'Explore image classification, object detection, optical character recognition (OCR), and spatial analysis using Azure AI Vision.' },
  { number: 4, title: 'Describe Features of Natural Language Processing (NLP)', desc: 'Analyze text sentiment, entity extraction, key phrase extraction, speech recognition, and translation using Azure AI Language.' },
  { number: 5, title: 'Describe Features of Generative AI Workloads', desc: 'Understand Large Language Models (LLMs), prompt engineering, fine-tuning, Azure OpenAI Service deployment, and building custom Copilots in Microsoft Copilot Studio.' },
];

const faqs = [
  {
    q: 'How long does Microsoft Azure AI Fundamentals (AI-900) take to complete?',
    a: 'The learning paths take approximately 8 to 12 hours to complete on Microsoft Learn. It is completely self-paced and 100% free.',
  },
  {
    q: 'Does this guide cover Microsoft Copilot and Generative AI?',
    a: 'Yes! Microsoft updated the AI-900 curriculum to heavily feature Generative AI, Azure OpenAI Service, RAG (Retrieval-Augmented Generation), and Microsoft Copilot Studio.',
  },
  {
    q: 'Do I need a computer science degree or coding experience?',
    a: 'No prior programming background is required. AI-900 is beginner-friendly and designed for non-developers, analysts, and tech enthusiasts.',
  },
];

export default function MicrosoftAIFundamentalsGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="bg-[#1F1B13] text-white py-16 md:py-20 border-b border-[#D1C5B4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5900]/30 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles size={14} className="text-yellow-400" /> Microsoft Learn Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Microsoft Azure AI Fundamentals (AI-900) Guide
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master Generative AI, Azure OpenAI Service, Microsoft Copilot Studio, Computer Vision, and Responsible AI with free Microsoft Learn paths.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~8 to 12 Hours (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Prepares for AI-900 Exam</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Beginner-Friendly</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is Microsoft Azure AI Fundamentals (AI-900)?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            Microsoft Azure AI Fundamentals (AI-900) is designed to give learners a comprehensive understanding of artificial intelligence workloads, machine learning principles, and modern Generative AI services hosted on Microsoft Azure.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Through free interactive modules, you will explore Azure OpenAI Service capabilities, learn how to build custom AI assistants in Microsoft Copilot Studio, extract text with Azure AI Vision, and apply Responsible AI governance principles.
          </p>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Learning Path &amp; 5 Core Modules</h2>
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

        {/* Technical Capabilities Mastered */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Key AI Technologies Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Bot, title: 'Azure OpenAI & Copilot', desc: 'Deploying LLMs, prompt engineering, and Copilot Studio bots.' },
              { icon: Eye, title: 'Azure AI Vision', desc: 'Object detection, OCR document parsing, and facial analysis.' },
              { icon: MessageSquare, title: 'Azure AI Language', desc: 'Sentiment analysis, entity recognition, and speech translation.' },
              { icon: Cpu, title: 'Responsible AI Principles', desc: 'Ethics, privacy protection, fairness, and hallucination reduction.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#D1C5B4] p-5">
                <item.icon size={24} className="text-primary mb-3" />
                <h3 className="font-bold text-[#1F1B13] text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4F4639] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Outcomes & Next Steps */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Career Path &amp; Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice AI &amp; Prompting Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build practical portfolio proof of work tasks in structured prompt engineering, AI rubrics, and agent flows.
              </p>
              <Link
                href="/portfolio-tasks/ai-prompting"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore AI &amp; Prompting Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. View Google AI Essentials Guide</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Compare Microsoft Azure AI with Google Generative AI tools and workplace prompt frameworks.
              </p>
              <Link
                href="/google-ai-essentials-course-guide"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Google AI Essentials Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((f, idx) => (
              <div key={idx} className="border-b border-[#EBE3D5] pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-[#1F1B13] text-lg mb-2">{f.q}</h3>
                <p className="text-[#4F4639] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
