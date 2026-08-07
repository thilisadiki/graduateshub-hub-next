import type { Metadata } from 'next';
import Link from 'next/link';
import { Palette, Award, Clock, ArrowRight, CheckCircle2, Layout, Eye, Monitor, Layers } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-ux-design-certificate-guide`;

export const metadata: Metadata = {
  title: 'Google UX Design Certificate Guide (2026) - Figma & User Research',
  description:
    'Complete guide to the Google UX Design Professional Certificate on Grow with Google. Learn wireframing, Figma prototyping, user research, WCAG accessibility, and UX portfolio building.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google UX Design Certificate Guide (2026) | Graduates Hub',
    description:
      'Master user research, wireframing, high-fidelity Figma prototyping, and usability testing with the Google UX Design certificate.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Foundations of User Experience (UX) Design', desc: 'Understand fundamental UX principles, design thinking frameworks, user-centered design processes, and entry-level UX designer roles.' },
  { number: 2, title: 'Start the UX Design Process: Empathize, Define, and Ideate', desc: 'Conduct user research interviews, build user personas, craft user story maps, write problem statements, and perform competitive audits.' },
  { number: 3, title: 'Build Wireframes and Low-Fidelity Prototypes', desc: 'Sketch paper wireframes, create digital low-fidelity wireframes in Figma, and build interactive low-fi prototypes to test initial layout concepts.' },
  { number: 4, title: 'Conduct UX Research and Test Early Concepts', desc: 'Plan and conduct unmoderated/moderated usability studies, log user feedback, synthesize affinity diagrams, and refine designs.' },
  { number: 5, title: 'Create High-Fidelity Designs and Prototypes in Figma', desc: 'Apply visual design principles (typography, color theory, 8pt grid systems), build Figma component libraries, and construct high-fidelity prototypes.' },
  { number: 6, title: 'Responsive Web Design in Adobe XD / Figma', desc: 'Design responsive web interfaces across desktop, tablet, and mobile breakpoints while applying WCAG accessibility standards.' },
  { number: 7, title: 'Design a User Experience for Social Good & Prepare for Jobs', desc: 'Complete a third portfolio project for a non-profit/social enterprise, polish your UX case studies, build your portfolio website, and prepare for interviews.' },
];

const faqs = [
  {
    q: 'How long does the Google UX Design Certificate take to complete?',
    a: 'The certificate takes approximately 3 to 6 months to complete at a recommended pace of 10 hours per week. It is 100% self-paced.',
  },
  {
    q: 'Will I have a finished UX design portfolio upon completion?',
    a: 'Yes! The course requires you to complete 3 end-to-end portfolio projects: a mobile app, a responsive website, and a cross-platform dedicated project.',
  },
  {
    q: 'What software tools are taught in the course?',
    a: 'You will gain practical proficiency in industry-standard tools: Figma and Adobe XD for wireframing, prototyping, and design system component creation.',
  },
];

export default function GoogleUXDesignGuidePage() {
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
            <Palette size={14} className="text-yellow-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google UX Design Professional Certificate Guide (2026)
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master Figma prototyping, user research, wireframing, WCAG accessibility, and usability testing. Build 3 portfolio projects.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~3 to 6 Months (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Build 3 Portfolio Projects</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is the Google UX Design Certificate?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Google UX Design Professional Certificate is an immersive training program designed by Google UX designers to take beginners from foundational concepts to job-ready product designers.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Unlike purely theoretical design courses, you will practice the complete end-to-end design thinking process: interviewing target users, creating user personas, sketching low-fidelity wireframes, building interactive Figma prototypes, running usability tests, and completing 3 full portfolio case studies.
          </p>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Course Curriculum &amp; 7 Modules</h2>
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

        {/* Technical Tools Learned */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Core UX Skills &amp; Software Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Layout, title: 'Figma & Wireframing', desc: 'Low-fi and high-fi interactive wireframes, auto-layout components, and variants.' },
              { icon: Eye, title: 'User Research & Personas', desc: 'Qualitative user interviews, affinity mapping, user personas, and empathy maps.' },
              { icon: Monitor, title: 'Usability Testing', desc: 'Moderated/unmoderated task protocols, SUS scoring, and iteration synthesis.' },
              { icon: Layers, title: 'WCAG Accessibility', desc: 'Designing 4.5:1 contrast ratios, screen reader compatibility, and touch targets.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice Design &amp; UX Portfolio Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build practical portfolio tasks in UX audits, Figma wireframing, and accessibility compliance.
              </p>
              <Link
                href="/portfolio-tasks/design-ux"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore Design &amp; UX Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. Prepare for UX Design Interviews</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Review interview questions on portfolio walkthroughs, design critique scenarios, and accessibility.
              </p>
              <Link
                href="/interview-prep/ui-ux-designer"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                UX Design Interview Prep <ArrowRight size={16} />
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
