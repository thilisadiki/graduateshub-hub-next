import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Award, Clock, ArrowRight, Shield, HardDrive, Wifi, Settings, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-it-support-certificate-guide`;

export const metadata: Metadata = {
  title: 'Google IT Support Certificate Guide (2026) - Modules & Help Desk Skills',
  description:
    'Complete guide to the Google IT Support Professional Certificate on Grow with Google. Learn TCP/IP networking, Active Directory DS, system administration, help desk SLAs, and CompTIA A+ mapping.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google IT Support Professional Certificate Guide (2026) | Graduates Hub',
    description:
      'Master IT help desk troubleshooting, computer networking, OS administration, and Active Directory with the Google IT Support certificate.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Technical Support Fundamentals', desc: 'Master hardware component identification, binary counting, operating system basics, internet protocols, and customer service troubleshooting.' },
  { number: 2, title: 'The Bits and Bytes of Networking', desc: 'Learn TCP/IP 5-layer model, IPv4/IPv6 CIDR subnetting, DNS resolution, DHCP lease flows, NAT, and wireless network security.' },
  { number: 3, title: 'Operating Systems and You: Becoming a Power User', desc: 'Command line administration across Windows (PowerShell/CMD) and Linux (Bash): user permissions, process management, and package installation.' },
  { number: 4, title: 'System Administration and IT Infrastructure Services', desc: 'Configure Directory Services (Active Directory DS), Group Policy Objects (GPOs), corporate email servers, backup restoration, and cloud compute.' },
  { number: 5, title: 'IT Security: Defense against the digital dark arts', desc: 'Understand encryption standards (AES/RSA), authentication mechanisms, firewall configurations, antivirus software, and organizational security policies.' },
];

const faqs = [
  {
    q: 'How long does the Google IT Support Certificate take to complete?',
    a: 'The certificate takes approximately 3 to 6 months to complete at a recommended pace of 5 to 10 hours per week. It is 100% self-paced.',
  },
  {
    q: 'Does the Google IT Support Certificate align with CompTIA A+?',
    a: 'Yes! The program covers core CompTIA A+ exam domains. Dual credential holders gain a strong competitive advantage during IT help desk hiring.',
  },
  {
    q: 'What entry-level job roles does this certificate prepare you for?',
    a: 'Graduates qualify for entry-level roles such as IT Support Specialist, Help Desk Technician, Desktop Support Technician, IT Service Desk Specialist, and Systems Administrator Associate.',
  },
];

export default function GoogleITSupportGuidePage() {
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
            <Server size={14} className="text-yellow-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google IT Support Professional Certificate Guide (2026)
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master IT help desk troubleshooting, networking, Active Directory DS, and OS administration. Prepare for entry-level IT Support roles.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~3 to 6 Months (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Prepares for CompTIA A+</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is the Google IT Support Certificate?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Google IT Support Professional Certificate is a hands-on training program designed by Google IT experts to prepare individuals with no prior experience for rewarding careers in Information Technology.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            Through interactive labs, you will learn day-to-day IT support tasks: assembling computer hardware, configuring wireless networks, managing active directory user accounts, running PowerShell/Bash command scripts, and enforcing security policies.
          </p>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Course Curriculum &amp; 5 Modules</h2>
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
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Key IT Tools &amp; Technologies Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: 'TCP/IP & Networking', desc: 'DNS, DHCP, IPv4/IPv6 subnetting, routers, and switch configuration.' },
              { icon: Server, title: 'Active Directory & IAM', desc: 'User account provisioning, Group Policy Objects (GPOs), and domain trusts.' },
              { icon: HardDrive, title: 'Windows & Linux Admin', desc: 'PowerShell scripts, Linux Bash CLI, disk partitioning, and process management.' },
              { icon: Settings, title: 'ITSM Help Desk SLAs', desc: 'ITIL incident triage, SLA breach prevention, and customer support macros.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice IT Portfolio Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build proof of work portfolio tasks in Microsoft 365, Active Directory, and network troubleshooting.
              </p>
              <Link
                href="/portfolio-tasks/information-technology"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore IT Portfolio Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. Prepare for IT Support Interviews</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Review technical interview questions on DNS, Active Directory GPOs, and help desk troubleshooting.
              </p>
              <Link
                href="/interview-prep/it-support-specialist"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                IT Support Interview Prep <ArrowRight size={16} />
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
