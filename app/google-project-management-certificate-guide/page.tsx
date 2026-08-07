import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Award, Clock, ArrowRight, CheckCircle2, Layout, Users, FileText, Target } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-project-management-certificate-guide`;

export const metadata: Metadata = {
  title: 'Google Project Management Certificate Guide (2026) - Agile, Scrum & Jira',
  description:
    'Complete guide to the Google Project Management Professional Certificate on Grow with Google. Learn Agile/Scrum, Jira, project charters, risk management, and CAPM mapping.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google Project Management Certificate Guide (2026) | Graduates Hub',
    description:
      'Master project coordination, Agile frameworks, Jira workflows, risk matrices, and stakeholder management with the Google Project Management certificate.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Foundations of Project Management', desc: 'Understand project manager roles, project life cycles (Initiation, Planning, Execution, Closing), organizational structures, and change management.' },
  { number: 2, title: 'Project Initiation: Starting a Successful Project', desc: 'Craft formal project charters, define project scope, perform stakeholder analysis (Power-Interest grid), and set measurable SMART goals.' },
  { number: 3, title: 'Project Planning: Putting It All Together', desc: 'Build work breakdown structures (WBS), project schedules, resource allocation plans, risk management matrices, and budget estimates.' },
  { number: 4, title: 'Project Execution: Running the Project', desc: 'Manage project execution, track quality metrics, handle change requests, lead project teams, and conduct clear status reporting.' },
  { number: 5, title: 'Agile Project Management & Scrum', desc: 'Master Agile principles, Scrum roles (Product Owner, Scrum Master), sprint events (Planning, Daily Standup, Review, Retrospective), and backlog refinement.' },
  { number: 6, title: 'Applying Project Management in the Real World', desc: 'Execute a comprehensive capstone project: building project documentation in Asana/Jira, communicating with stakeholders, and preparing for job interviews.' },
];

const faqs = [
  {
    q: 'How long does the Google Project Management Certificate take to complete?',
    a: 'The program takes approximately 3 to 6 months to complete at a recommended pace of 10 hours per week. It is 100% self-paced.',
  },
  {
    q: 'Does this certificate qualify you for PMI CAPM certification?',
    a: 'Yes! Completing the Google Project Management Certificate satisfies the 23 educational hours requirement needed to sit for the PMI Certified Associate in Project Management (CAPM) exam.',
  },
  {
    q: 'What software tools are taught in the course?',
    a: 'You will gain hands-on experience using Asana, Jira, Google Workspace (Docs/Sheets), and spreadsheet project templates for tracking milestones and RAID logs.',
  },
];

export default function GoogleProjectManagementGuidePage() {
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
            <Briefcase size={14} className="text-yellow-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google Project Management Certificate Guide (2026)
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master Agile frameworks, Jira workflows, project charters, risk management, and stakeholder coordination. Prepare for Project Coordinator roles.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~3 to 6 Months (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Qualifies for PMI CAPM</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is the Google Project Management Certificate?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Google Project Management Professional Certificate is a comprehensive online program designed by Google project managers. It teaches the foundational principles of traditional waterfall project management as well as modern Agile and Scrum methodologies.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Learners create real project documentation: writing project charters, building work breakdown structures (WBS), conducting risk assessments, managing sprint backlogs in Jira/Asana, and facilitating team communications.
          </p>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Course Curriculum &amp; 6 Modules</h2>
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
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Core Skills &amp; Software Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Layout, title: 'Agile & Scrum', desc: 'Sprint planning, daily standups, retrospectives, and backlog refinement.' },
              { icon: FileText, title: 'Project Charters & WBS', desc: 'Defining project scope, work breakdown structures, and success metrics.' },
              { icon: Users, title: 'Stakeholder Alignment', desc: 'Power-Interest grid mapping, RACI matrices, and communication plans.' },
              { icon: Target, title: 'Risk & RAID Logs', desc: 'Risk probability-impact scoring, issue tracking, and mitigation plans.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Build Business &amp; PM Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build practical portfolio proof of work tasks in project coordination, RACI matrices, and process mapping.
              </p>
              <Link
                href="/portfolio-tasks/business-analysis"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore Business &amp; PM Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. Prepare for Project Management Interviews</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Review interview questions on Agile sprint events, RACI matrices, and handling scope creep.
              </p>
              <Link
                href="/interview-prep/project-coordinator"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Project Management Interview Prep <ArrowRight size={16} />
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
