import type { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Award, Clock, ArrowRight, ShieldCheck, Server, Lock, Users, HardDrive, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/microsoft-365-fundamentals-course-guide`;

export const metadata: Metadata = {
  title: 'Microsoft 365 Fundamentals Guide (2026) - MS-900 Free Learning Paths',
  description:
    'Complete guide to Microsoft 365 Fundamentals (MS-900) on Microsoft Learn. Learn Entra ID identity management, Exchange Online, SharePoint Online, Teams admin, and Conditional Access.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Microsoft 365 Fundamentals (MS-900) Guide (2026) | Graduates Hub',
    description:
      'Master Entra ID user provisioning, SharePoint permissions, Exchange mail routing, Teams administration, and Zero-Trust security with free Microsoft Learn paths.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Describe Microsoft 365 Cloud Concepts', desc: 'Understand Software as a Service (SaaS) architecture, M365 subscription plans (Business, Enterprise E3/E5), cloud deployment models, and digital transformation benefits.' },
  { number: 2, title: 'Describe Microsoft 365 Core Productivity & Teamwork Solutions', desc: 'Explore Microsoft Teams administration, Exchange Online mail flow rules, SharePoint Online site structures, OneDrive for Business, and Microsoft Viva employee experience.' },
  { number: 3, title: 'Describe Microsoft 365 Business Management Capabilities', desc: 'Manage Windows 11 enterprise deployment, Microsoft Intune Mobile Device Management (MDM), Endpoint Manager, and co-management options.' },
  { number: 4, title: 'Describe Microsoft 365 Security & Compliance Capabilities', desc: 'Master Microsoft Entra ID (Azure AD), Multi-Factor Authentication (MFA), Conditional Access policies, Microsoft Purview data loss prevention (DLP), and eDiscovery.' },
  { number: 5, title: 'Describe Microsoft 365 Pricing, Licensing & Support', desc: 'Navigate M365 tenant license allocation, Service Level Agreements (SLAs), Service Health Dashboard monitoring, and enterprise support request workflows.' },
];

const faqs = [
  {
    q: 'How long does Microsoft 365 Fundamentals (MS-900) take to complete?',
    a: 'The learning paths take approximately 10 to 14 hours to complete on Microsoft Learn. It is self-paced and 100% free.',
  },
  {
    q: 'What certification exam does this guide align with?',
    a: 'This guide aligns directly with the official Microsoft Certified: 365 Fundamentals (MS-900) certification exam.',
  },
  {
    q: 'What roles does Microsoft 365 certification help you land?',
    a: 'Graduates qualify for entry-level roles such as M365 Administrator Associate, IT Service Desk Specialist, Cloud Operations Support, and Systems Administrator Trainee.',
  },
];

export default function Microsoft365FundamentalsGuidePage() {
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
            <Monitor size={14} className="text-yellow-400" /> Microsoft Learn Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Microsoft 365 Fundamentals (MS-900) Guide
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master Microsoft Entra ID user provisioning, SharePoint permissions, Exchange mail routing, Teams administration, and Conditional Access MFA.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~10 to 14 Hours (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Prepares for MS-900 Exam</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Beginner-Friendly</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is Microsoft 365 Fundamentals (MS-900)?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            Microsoft 365 Fundamentals (MS-900) provides a comprehensive introduction to the cloud services and SaaS productivity stack that powers corporate enterprises across the globe.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Through free self-paced learning paths on Microsoft Learn, you will gain hands-on knowledge configuring Entra ID identity management, enforcing security policies, managing SharePoint sites, and administering enterprise communication tools.
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
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Core Microsoft 365 Admin Tools Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Entra ID (Azure AD)', desc: 'User provisioning, RBAC role assignment, and SSPR self-service reset.' },
              { icon: Server, title: 'Exchange & SharePoint', desc: 'Mail flow rules, transport policies, and SharePoint site security permissions.' },
              { icon: Lock, title: 'Conditional Access MFA', desc: 'Enforcing Zero-Trust policies, blocking legacy auth, and trusted IPs.' },
              { icon: HardDrive, title: 'Intune Endpoint MDM', desc: 'Device enrollment policies, remote wipe commands, and application deployment.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice IT &amp; M365 Portfolio Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build practical portfolio proof of work tasks in M365 tenant hardening, user provisioning, and SharePoint audits.
              </p>
              <Link
                href="/portfolio-tasks/information-technology"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore IT Portfolio Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. View Google IT Support Guide</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Compare Microsoft 365 administration with Google Workspace IT Support certifications.
              </p>
              <Link
                href="/google-it-support-certificate-guide"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Google IT Support Guide <ArrowRight size={16} />
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
