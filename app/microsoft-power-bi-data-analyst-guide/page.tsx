import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, Award, Clock, ArrowRight, ShieldCheck, Database, FileSpreadsheet, Layers, PieChart, CheckCircle2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/microsoft-power-bi-data-analyst-guide`;

export const metadata: Metadata = {
  title: 'Microsoft Power BI Data Analyst Guide (2026) - PL-300 Free Learning Paths',
  description:
    'Complete guide to the Microsoft Power BI Data Analyst (PL-300) certification on Microsoft Learn. Learn Power Query ETL, DAX measures, STAR schema modeling, and interactive dashboards.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Microsoft Power BI Data Analyst (PL-300) Guide (2026) | Graduates Hub',
    description:
      'Master data modeling, Power Query transformations, DAX calculations, and interactive dashboard publishing with free Microsoft Learn paths.',
    url: CANONICAL,
  },
};

const modules = [
  { number: 1, title: 'Prepare the Data (Power Query ETL)', desc: 'Connect to disparate data sources (SQL databases, Excel sheets, CSVs, Web APIs), profile data quality, clean null values, and apply data transformations in Power Query Editor.' },
  { number: 2, title: 'Model the Data (STAR Schema & Relationships)', desc: 'Design dimensional data models with Fact and Dimension tables, configure active/inactive relationship cardinalities, and manage cross-filter directions.' },
  { number: 3, title: 'Create Measures using DAX (Data Analysis Expressions)', desc: 'Write custom DAX calculations: CALCULATE, SUMX, AVERAGEX, Time Intelligence functions (SAMEPERIODLASTYEAR, TOTALYTD), and quick measures.' },
  { number: 4, title: 'Visualize and Analyze the Data', desc: 'Design interactive reports using matrices, KPI cards, drill-through filters, bookmarks, custom tooltips, and mobile-optimized dashboard layouts.' },
  { number: 5, title: 'Deploy and Maintain Deliverables (Power BI Service)', desc: 'Publish workspace reports to Power BI Service, configure scheduled data refresh gateways, manage Row-Level Security (RLS) roles, and export executive dashboards.' },
];

const faqs = [
  {
    q: 'Is Power BI Desktop free to use for learning?',
    a: 'Yes! Power BI Desktop is completely free to download and install on Windows. All learning paths on Microsoft Learn are also 100% free.',
  },
  {
    q: 'What certification exam does this guide align with?',
    a: 'This guide aligns directly with the official Microsoft Certified: Power BI Data Analyst Associate (PL-300) certification exam.',
  },
  {
    q: 'Do I need advanced coding knowledge to learn Power BI?',
    a: 'No prior programming experience is required. Basic familiarity with Excel formulas and relational tables makes picking up Power Query and DAX very straightforward.',
  },
];

export default function MicrosoftPowerBIGuidePage() {
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
      <div className="bg-[#1F1B13] text-[#FFF8F1] py-16 md:py-20 border-b border-[#D1C5B4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5900]/30 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <BarChart3 size={14} className="text-yellow-400" /> Microsoft Learn Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Microsoft Power BI Data Analyst (PL-300) Guide
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Master Power Query transformations, DAX calculations, STAR schema data modeling, and interactive dashboard publishing with free Microsoft Learn paths.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> ~15 to 20 Hours (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Prepares for PL-300 Exam</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> Power BI Desktop Free</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Overview */}
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">What is the Power BI Data Analyst (PL-300) Path?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Microsoft Power BI Data Analyst (PL-300) learning path is an industry-recognized program designed by Microsoft data experts to equip analysts with end-to-end business intelligence skills.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            You will gain hands-on experience pulling data from SQL databases and spreadsheets, structuring star-schema data models, writing advanced DAX measures, and configuring automated refreshes in Power BI Service.
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

        {/* Technical Skills Mastered */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Core Power BI Analytics Skills Mastered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FileSpreadsheet, title: 'Power Query ETL', desc: 'Data cleaning, unpivoting columns, data type casting, and merge joins.' },
              { icon: Layers, title: 'DAX Formulas', desc: 'CALCULATE, SUMX, Time Intelligence, and filter context manipulation.' },
              { icon: PieChart, title: 'Visual Storytelling', desc: 'Custom drill-through pages, matrix visual design, and interactive slicers.' },
              { icon: Database, title: 'Row-Level Security (RLS)', desc: 'Configuring user security roles and workspace publishing in Power BI Service.' },
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
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">1. Practice Data Analytics Portfolio Tasks</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Build practical portfolio proof of work tasks in SQL query optimization, Power BI dashboards, and KPI definitions.
              </p>
              <Link
                href="/portfolio-tasks/data-analytics"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Explore Data Analytics Tasks <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF8F1] border border-[#D1C5B4]">
              <h3 className="font-bold text-[#1F1B13] text-lg mb-2">2. View Data Analyst Career Roadmap</h3>
              <p className="text-[#4F4639] text-sm leading-relaxed mb-4">
                Review skills ordering, portfolio recommendations, and interview technical rounds for Data Analyst roles.
              </p>
              <Link
                href="/career-roadmaps/data-analyst"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
              >
                Data Analyst Career Roadmap <ArrowRight size={16} />
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
