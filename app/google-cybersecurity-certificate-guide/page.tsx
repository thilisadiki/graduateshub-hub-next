import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Award, Clock, ArrowRight, Shield, Terminal, Database, Lock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-cybersecurity-certificate-guide`;

export const metadata: Metadata = {
  title: 'Google Cybersecurity Certificate Guide (2026) - Modules & Career Outcomes',
  description:
    'Complete guide to the Google Cybersecurity Professional Certificate on Grow with Google. Learn SIEM tools (Splunk, Chronicle), Linux CLI, Python security scripts, SQL, and CompTIA Security+ mapping.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google Cybersecurity Professional Certificate Guide (2026) | Graduates Hub',
    description:
      'Master SOC incident triage, SIEM tools, Linux CLI, and Python automation with the Google Cybersecurity certificate. Prepare for entry-level SOC Analyst roles.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Foundations of Cybersecurity', desc: 'Understand core security ethics, CISSP 8 domains, security frameworks (NIST CSF), and entry-level cybersecurity analyst job responsibilities.' },
  { number: 2, title: 'Managing Security Risks & Threat Landscapes', desc: 'Analyze vulnerability vectors, threat actors, ransomware tactics, playbooks, and business risk assessment matrices.' },
  { number: 3, title: 'Networks and Network Security', desc: 'Master TCP/IP network protocols, Wireshark packet analysis, firewall configuration rules, VPNs, and network segmentation.' },
  { number: 4, title: 'Linux & Command Line Interface (CLI)', desc: 'Learn Linux command line navigation, file permissions (chmod/chown), bash scripting, system log inspection, and process management.' },
  { number: 5, title: 'Assets, Threats & Vulnerabilities', desc: 'Understand asset management, vulnerability scanning (Nessus), threat intelligence feeds, and patch prioritization (CVE/CVSS).' },
  { number: 6, title: 'Sound the Alarm: Detection & Response', desc: 'Hands-on practice using SIEM tools (Splunk & Google Chronicle) to analyze log telemetry, detect intrusion alerts, and isolate compromised endpoints.' },
  { number: 7, title: 'Automating Cybersecurity Tasks with Python', desc: 'Write Python scripts to parse log files, automate IP address blocklists, manipulate string data, and extract security metrics.' },
  { number: 8, title: 'Put It to Work: Preparing for Security Jobs', desc: 'Build your security portfolio, prepare technical incident response interview scenarios, and map skills to CompTIA Security+ certification.' },
];

const faqs = [
  {
    q: 'How long does the Google Cybersecurity Certificate take to complete?',
    a: 'The certificate takes approximately 3 to 6 months to complete at a recommended pace of 7 to 10 hours per week. It is completely self-paced.',
  },
  {
    q: 'Does the Google Cybersecurity Certificate prepare you for CompTIA Security+?',
    a: 'Yes! The course curriculum aligns directly with CompTIA Security+ exam objectives. Graduates receive a 30% discount voucher for the CompTIA Security+ exam.',
  },
  {
    q: 'Do I need prior coding or cybersecurity experience?',
    a: 'No prior experience is required. The program starts with foundational concepts before introducing Linux, SQL, and Python step by step.',
  },
];

export default function GoogleCybersecurityGuidePage() {
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
            <ShieldCheck size={14} className="text-emerald-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google Cybersecurity Professional Certificate Guide (2026)
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master SOC incident response, SIEM tools (Splunk), Linux CLI, and Python automation. Prepare for entry-level Security Analyst roles.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~3 to 6 Months (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><Shield size={16} className="text-emerald-400" /> Prepares for CompTIA Security+</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is the Google Cybersecurity Certificate?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Google Cybersecurity Professional Certificate is an industry-recognized training program developed by Google security experts. It equips learners with the hands-on technical skills required to protect organizations against cyber threats and land entry-level roles such as SOC Analyst, Cybersecurity Analyst, or IT Security Specialist.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            You will gain practical experience using industry-standard tools including Splunk, Google Chronicle, Wireshark, Linux command line, SQL, and Python scripts to analyze security logs and mitigate vulnerabilities.
          </p>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Course Curriculum &amp; 8 Modules</h2>
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
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Key Technical Security Tools Learned</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Splunk & Chronicle', desc: 'SIEM log telemetry analysis, intrusion detection, and alert triage.' },
              { icon: Terminal, title: 'Linux CLI & Bash', desc: 'Command line navigation, user permissions, log inspection, and process control.' },
              { icon: Terminal, title: 'Python Security', desc: 'Automating IP blocklists, log string parsing, and incident task scripts.' },
              { icon: Database, title: 'SQL & Database Logs', desc: 'Filtering transaction logs, querying security events, and database auditing.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice Cybersecurity Portfolio Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Apply your SIEM and firewall skills to realistic security tasks and vulnerability reports.
              </p>
              <Link
                href="/portfolio-tasks/information-technology"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore IT &amp; Security Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. Prepare for Security Interviews</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Review technical questions on network protocols, incident response playbooks, and Security+.
              </p>
              <Link
                href="/interview-prep/cybersecurity-analyst"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Cybersecurity Interview Prep <ArrowRight size={16} />
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
