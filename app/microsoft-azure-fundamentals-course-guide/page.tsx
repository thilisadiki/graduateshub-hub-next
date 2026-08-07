import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Award, Clock, ArrowRight, ShieldCheck, Cloud, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/microsoft-azure-fundamentals-course-guide`;

export const metadata: Metadata = {
  title: 'Microsoft Azure Fundamentals Guide (2026) - AZ-900 Free Learning Paths',
  description:
    'Complete guide to Microsoft Azure Fundamentals (AZ-900) on Microsoft Learn. Master cloud architecture, Virtual Machines, Blob Storage, VNets, ARM templates, and free sandbox labs.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Microsoft Azure Fundamentals (AZ-900) Guide (2026) | Graduates Hub',
    description:
      'Learn cloud computing, Azure VMs, storage, networking, and governance with official free Microsoft Learn paths. Prepare for AZ-900 certification.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Describe Cloud Concepts', desc: 'Understand IaaS, PaaS, and SaaS cloud service models, High Availability, Scalability, Agility, Disaster Recovery, and Capital vs Operational Expenditure (CapEx vs OpEx).' },
  { number: 2, title: 'Describe Azure Architecture & Services', desc: 'Explore Azure Regions, Availability Zones, Resource Groups, Azure Virtual Machines, App Services, Virtual Networks (VNets), and Azure VPN Gateway.' },
  { number: 3, title: 'Describe Azure Storage & Database Solutions', desc: 'Master Azure Blob Storage tiers (Hot, Cool, Archive), Disk Storage, Azure Files, Azure SQL Database, and Azure Cosmos DB NoSQL.' },
  { number: 4, title: 'Describe Azure Security, Identity & Compliance', desc: 'Configure Microsoft Entra ID (Azure AD), Role-Based Access Control (RBAC), Defense-in-Depth, Microsoft Defender for Cloud, and Zero-Trust architecture.' },
  { number: 5, title: 'Describe Azure Cost Management & Governance', desc: 'Use Azure Cost Management & Billing, Pricing Calculators, Azure Advisor recommendations, Blueprints, Azure Policy, and Resource Locks.' },
];

const faqs = [
  {
    q: 'Are the Microsoft Azure Fundamentals learning paths completely free?',
    a: 'Yes! All self-paced learning paths, documentation, interactive tutorials, and sandbox lab environments on Microsoft Learn are 100% free.',
  },
  {
    q: 'What certification exam does this guide prepare you for?',
    a: 'This guide aligns directly with the official Microsoft Certified: Azure Fundamentals (AZ-900) certification exam objectives.',
  },
  {
    q: 'Do I need a paid Azure subscription or credit card to practice?',
    a: 'No! Microsoft Learn provides free sandbox environments directly in your browser without requiring a credit card or paid subscription.',
  },
];

export default function MicrosoftAzureFundamentalsGuidePage() {
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
            <Cloud size={14} className="text-sky-400" /> Microsoft Learn Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Microsoft Azure Fundamentals (AZ-900) Guide
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master cloud computing principles, Azure VMs, Blob Storage, Virtual Networks, and cost optimization with official free Microsoft Learn paths.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~12 to 15 Hours (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Prepares for AZ-900 Exam</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Free Sandbox Labs Included</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is Microsoft Azure Fundamentals (AZ-900)?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            Microsoft Azure Fundamentals (AZ-900) is the foundational cloud certification path designed for IT professionals, developers, and data analysts looking to build a strong grounding in Microsoft Azure cloud infrastructure.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Through free interactive sandbox modules on Microsoft Learn, you will gain hands-on experience provisioning Azure Virtual Machines, setting up secure Blob Storage containers, configuring virtual networks (VNets), and enforcing security policies with Microsoft Entra ID.
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

        {/* Technical Services Mastered */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Core Azure Cloud Services Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: 'Compute & App Service', desc: 'Azure VMs, Scale Sets, Azure Functions, and Web App hosting.' },
              { icon: Database, title: 'Blob Storage & SQL', desc: 'Hot/Cool storage tiers, Azure SQL DB, and Cosmos DB NoSQL.' },
              { icon: Cloud, title: 'Virtual Networks (VNets)', desc: 'Network security groups (NSGs), Azure VPN, and Load Balancers.' },
              { icon: Terminal, title: 'ARM Templates & Policy', desc: 'Infrastructure as Code (IaC), Azure Policy, and Advisor alerts.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice IT &amp; Cloud Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build practical portfolio proof of work tasks in Azure cloud migration, hybrid VNets, and server administration.
              </p>
              <Link
                href="/portfolio-tasks/information-technology"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore IT &amp; Cloud Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. View Cloud &amp; DevOps Career Roadmap</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Explore skill ordering, salary expectations, and certification paths for Cloud Support Engineers.
              </p>
              <Link
                href="/career-roadmaps/cloud-support-devops"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Cloud &amp; DevOps Roadmap <ArrowRight size={16} />
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
