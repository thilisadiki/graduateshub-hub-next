import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, CheckCircle2, ArrowRight, Award, HelpCircle, Briefcase, FileText, ExternalLink, ShieldCheck, DollarSign, Layers } from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Online Courses for Bookkeeping with Certificates (2026 Guide)',
  description:
    'Explore top online courses for bookkeeping, payroll, and accounting software (Xero, QuickBooks, Sage). Master double-entry bookkeeping and earn recognized certificates.',
  alternates: { canonical: `${SITE_URL}/online-courses-for-bookkeeping` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Online Courses for Bookkeeping with Certificates (2026 Guide) | Graduates Hub',
    description:
      'Master double-entry bookkeeping, bank reconciliations, payroll, and Xero accounting software with certified online bookkeeping courses.',
    url: `${SITE_URL}/online-courses-for-bookkeeping`,
    type: 'website',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    { '@type': 'ListItem', position: 3, name: 'Bookkeeping Courses', item: `${SITE_URL}/online-courses-for-bookkeeping` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a degree to become a bookkeeper in South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No formal university degree is required to work as an entry-level bookkeeper. Completing accredited online bookkeeping certificates (such as CPD-certified diplomas or ICB-aligned modules) and mastering accounting software like Xero or QuickBooks provides direct entry into accounts assistant and junior bookkeeping roles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between bookkeeping and accounting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bookkeeping focuses on the daily recording of financial transactions, issuing invoices, processing receipts, maintaining general ledgers, and bank reconciliations. Accounting involves analyzing, interpreting, and reporting financial data to guide business decisions and handle complex tax compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are online bookkeeping courses free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many online bookkeeping courses on Graduates Hub are free to audit or study. Platforms like Alison provide 100% free CPD-accredited learning materials, while vendor certifications (like Xero Central Advisor) offer free learning paths.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which software should a beginner bookkeeper learn first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xero and QuickBooks Online are the most widely used cloud accounting software platforms among South African small and medium businesses. Learning Xero or QuickBooks alongside Microsoft Excel prepares you for over 80% of entry-level bookkeeping listings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I work as a freelance remote bookkeeper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Remote bookkeeping is one of the fastest-growing freelance services. By completing bookkeeping training, learning cloud accounting software, and understanding VAT and payroll basics, you can manage financial records for small businesses remotely.',
      },
    },
  ],
};

const fundamentalTrack = [
  {
    title: 'Introduction to Bookkeeping & Accounting',
    desc: 'Master double-entry bookkeeping, debits and credits, general ledgers, trial balance, and bank reconciliations.',
    badge: 'Beginner Essential',
    duration: '6 Hours',
    href: 'https://alison.com/course/fundamentals-of-accounting-revised?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205',
  },
  {
    title: 'Financial Accounting Fundamentals',
    desc: 'Understand balance sheets, income statements, cash flow statements, and financial record accuracy.',
    badge: 'Core Accounting',
    duration: '10 Hours',
    href: '/free-courses-for-accounting-and-finance',
  },
  {
    title: 'Accounts Payable & Receivable Management',
    desc: 'Learn vendor invoice processing, customer billing, age analysis reports, and credit control procedures.',
    badge: 'Practical Skills',
    duration: '8 Hours',
    href: '/free-courses-for-accounting-and-finance',
  },
];

const softwareTrack = [
  {
    title: 'Accounts Management with Xero',
    desc: 'Hands-on training in setting up chart of accounts, processing bank feeds, invoicing, and generating financial reports in Xero.',
    badge: 'Top Software',
    duration: '8 Hours',
    href: '/free-courses-for-accounting-and-finance',
  },
  {
    title: 'QuickBooks Online Bookkeeping Basics',
    desc: 'Navigate QuickBooks Online interface, manage customer and vendor profiles, and perform month-end reconciliations.',
    badge: 'Cloud Tech',
    duration: '6 Hours',
    href: '/free-courses-for-accounting-and-finance',
  },
  {
    title: 'Advanced Excel for Financial Bookkeeping',
    desc: 'Build automated general ledgers, VLOOKUP reconciliations, pivot table expense summaries, and financial statements in Excel.',
    badge: 'Excel Track',
    duration: '12 Hours',
    href: '/free-excel-courses-with-certificates',
  },
];

const dualCertTrack = [
  {
    title: 'Diploma in Effective Bookkeeping & Payroll',
    desc: 'Comprehensive CPD-accredited diploma covering accounts management, statutory tax deductions (PAYE, UIF, SDL), and payroll processing.',
    badge: 'CPD Certified',
    duration: '15 Hours',
    href: 'https://alison.com/course/diploma-in-effective-bookkeeping-and-payroll?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205',
  },
  {
    title: 'Payroll Computation & Statutory Compliance',
    desc: 'Learn employee wage calculation, leave management, SARS EMP201 submissions, and statutory compliance rules.',
    badge: 'Tax & Payroll',
    duration: '10 Hours',
    href: '/free-courses-for-accounting-and-finance',
  },
];

export default function BookkeepingCoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <Link href="/guides" className="hover:text-primary transition-colors">Guides</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Bookkeeping Courses</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#1F1B13] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <Calculator size={14} className="text-yellow-400" />
            Accounting &amp; Finance Series · 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Online Courses for Bookkeeping with Certificates
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Master double-entry bookkeeping, bank reconciliations, payroll, and cloud accounting software (Xero, QuickBooks, Sage) with certified online learning paths.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400">
            {['No University Degree Needed', 'CPD & Software Credentials', 'South African Market Focus'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12 flex-1">
        {/* Editorial E-E-A-T Banner */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-teal-100 relative shrink-0 ring-4 ring-slate-100">
            <Image src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu, Accounting Curator" fill sizes="64px" className="object-cover object-top" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                Editorial Reviewer
              </span>
              <h2 className="text-lg font-bold text-gray-900">Curated by Ndulamiso Mamburu</h2>
            </div>
            <p className="text-xs font-semibold text-gray-500 mb-3">Accounting &amp; Tax Professional (South African Revenue Service - SARS)</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              &quot;Bookkeeping is the foundation of every financial operation. Whether you are aiming for an accounts assistant job in South Africa or starting a freelance bookkeeping practice, mastering double-entry ledgers, reconciliations, and Xero is the single fastest way to demonstrate immediate value to employers.&quot;
            </p>
          </div>
        </section>

        {/* Section 1: Bookkeeping Fundamentals */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Track 1: Bookkeeping Fundamentals</h2>
              <p className="text-gray-600 text-sm">Double-entry accounting, general ledgers, debits &amp; credits, and trial balance basics.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundamentalTrack.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{item.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-auto pt-4 border-t border-gray-100">
                  Access Course <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Software Track */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Layers size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Track 2: Accounting Software &amp; Excel Training</h2>
              <p className="text-gray-600 text-sm">Xero, QuickBooks Online, and financial modeling in Microsoft Excel.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwareTrack.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{item.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link href={item.href} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-auto pt-4 border-t border-gray-100">
                  View Software Guide <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Dual Bookkeeping & Payroll Track */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Track 3: Bookkeeping &amp; Payroll Diplomas</h2>
            <p className="text-gray-600 text-sm">Dual-certification programs teaching ledger management alongside statutory payroll tax compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dualCertTrack.map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{item.duration}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 pt-3 border-t border-slate-200/60">
                  Enroll in Diploma <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Practical Portfolio & Career Path */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Career Growth &amp; Portfolio Verification</h2>
              <p className="text-xs text-gray-600">Combine online certificates with practical bookkeeping deliverables.</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Employers hire bookkeepers who can execute tasks from day one. Complete real-world bookkeeping tasks on Graduates Hub to build a shareable portfolio of bank reconciliations, trial balances, and financial statements.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/free-courses-for-accounting-and-finance" className="inline-flex items-center gap-2 bg-primary hover:bg-[#5a4000] text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors">
              Explore Accounting Hub <ArrowRight size={15} />
            </Link>
            <Link href="/portfolio-tasks" className="inline-flex items-center gap-2 bg-white border border-[#D1C5B4] text-gray-800 hover:text-primary font-semibold text-sm px-5 py-3 rounded-lg transition-colors">
              View Portfolio Tasks
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={24} className="text-primary shrink-0" />
            <h2 className="text-2xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
