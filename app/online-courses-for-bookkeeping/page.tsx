import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, CheckCircle2, ArrowRight, Award, HelpCircle, Briefcase, FileText, ExternalLink, ShieldCheck, DollarSign, Layers, BookOpen, Check, Building2, Landmark, Scale } from 'lucide-react';
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

const coreCompetencies = [
  { title: 'General Ledger Posting', detail: 'Accurately recording debits and credits for all revenue, expense, asset, and liability accounts.' },
  { title: 'Bank Reconciliation', detail: 'Matching bank statement line items with internal ledger entries to detect errors or missing vouchers.' },
  { title: 'Accounts Payable (AP)', detail: 'Managing supplier invoices, verifying purchase orders, and scheduling payment batches.' },
  { title: 'Accounts Receivable (AR)', detail: 'Issuing customer invoices, tracking payment due dates, and generating age analysis reports.' },
  { title: 'Month-End Trial Balance', detail: 'Verifying that total debit balances equal total credit balances before financial reporting.' },
  { title: 'Statutory Payroll Deductions', detail: 'Calculating PAYE tax brackets, UIF employee/employer contributions, and SDL payments.' },
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

        {/* Editorial Deep Dive: The Role of a Modern Bookkeeper */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Editorial Analysis: What Does a Modern Bookkeeper Do?</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-[15px] flex flex-col gap-4">
            <p>
              In the modern business environment, bookkeeping has evolved far beyond manual paper ledgers. Today&apos;s bookkeepers manage digital cloud software (Xero, QuickBooks Online, Sage), process automated bank feeds, manage payroll compliance, and ensure real-time financial accuracy for small and medium businesses.
            </p>
            <p>
              Because every operational company requires systematic financial tracking, **bookkeeping is one of the most resilient, high-demand entry points into the business and finance industry**. You do not need a 4-year degree in accounting to start working as a bookkeeper; mastering double-entry fundamentals and cloud accounting software provides direct entry into accounts assistant, accounts clerk, and junior bookkeeper roles.
            </p>
          </div>

          {/* 6 Core Competencies Grid */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">6 Core Bookkeeping Competencies Tested by Employers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreCompetencies.map((comp) => (
                <div key={comp.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{comp.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{comp.detail}</p>
                </div>
              ))}
            </div>
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

        {/* Editorial Deep Dive: Software Comparison */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Cloud Accounting Software Guide: Xero vs. QuickBooks vs. Sage</h2>
          <p className="text-gray-600 text-sm mb-6">Which accounting software platform should you learn first?</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Market Leader</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Xero Accounting</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Xero is widely used by modern tech startups, digital agencies, and small businesses across South Africa. Features automated bank feeds, intuitive chart of accounts, and built-in invoicing.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                Recommended Certification: Xero Advisor Certified
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Global Standard</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">QuickBooks Online</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  QuickBooks Online is the most popular global software for small business bookkeeping. Excellent for inventory tracking, job costing, and automated expense categorization.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                Recommended Certification: QuickBooks ProAdvisor
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">SA Industry Classic</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sage Business Cloud</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Sage (formerly Sage Pastel) has deep historical roots in South Africa. Widely used by established corporate firms, accounting practices, and retail businesses.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                Recommended Certification: Sage Authorized User
              </div>
            </div>
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

        {/* Editorial Guide: South African Statutory Compliance (SARS, PAYE, UIF, VAT) */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Landmark size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">South African Tax &amp; Payroll Compliance Overview</h2>
              <p className="text-xs text-gray-600">Essential SARS statutory filings every South African bookkeeper must know.</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div className="bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">1. Value-Added Tax (VAT201 Returns)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Businesses with taxable turnover exceeding R1 million per annum must register for VAT. Bookkeepers categorize transactions into Standard Rated (15%), Zero Rated (0%), and Exempt supplies, submitting bi-monthly VAT201 returns to SARS.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-600 rounded-r-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">2. Monthly Payroll Statutory Deductions (EMP201)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every employer must submit an EMP201 return by the 7th of each month, declaring Pay As You Earn (PAYE), Unemployment Insurance Fund (UIF 1% employee + 1% employer), and Skills Development Levy (SDL 1%).
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-600 rounded-r-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">3. Annual Employee Tax Reconciliations (EMP501)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Bi-annual EMP501 reconciliations verify that total PAYE tax withheld matches IRP5 tax certificates issued to staff before individual tax filing season.
              </p>
            </div>
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
