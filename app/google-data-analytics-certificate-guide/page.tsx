import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart, Award, Clock, ShieldCheck, Database, FileSpreadsheet, Code2 } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const CANONICAL = `${SITE_URL}/google-data-analytics-certificate-guide`;

export const metadata: Metadata = {
  title: 'Google Data Analytics Certificate Guide (2026) - SQL, R & Tableau',
  description:
    'Complete guide to the Google Data Analytics Professional Certificate on Grow with Google. Learn spreadsheets, SQL database queries, R programming, Tableau visualisations, and portfolio case studies.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Google Data Analytics Certificate Guide (2026) | Graduates Hub',
    description:
      'Master entry-level data analytics with the Google Data Analytics Professional Certificate. Covers spreadsheets, SQL, R, Tableau, and portfolio building.',
    url: CANONICAL,
  },
};

const analyticsModules = [
  { title: 'Foundations: Data, Data, Everywhere', desc: 'Understanding the data ecosystem, analytical thinking, spreadsheet basics, and data-driven decision making.' },
  { title: 'Ask Questions to Make Data-Driven Decisions', desc: 'Defining project scope, effective stakeholder communication, and asking structured business questions.' },
  { title: 'Prepare Data for Exploration', desc: 'Data structures, databases, data privacy, and accessing external data using SQL SELECT queries.' },
  { title: 'Process Data from Dirty to Clean', desc: 'Data integrity, cleaning techniques in Excel and SQL, checking for missing values, and data transformation.' },
  { title: 'Analyze Data to Answer Questions', desc: 'Organizing and calculating data, SQL calculations, aggregation functions, and conditional formatting.' },
  { title: 'Share Data Through the Art of Visualization', desc: 'Designing dashboards in Tableau, data storytelling principles, and presenting findings to executive teams.' },
  { title: 'Data Analysis with R Programming', desc: 'RStudio fundamentals, tidyverse package, data frames, ggplot2 visualisations, and automated report creation.' },
  { title: 'Google Data Analytics Capstone Project', desc: 'Building a real-world case study project from scratch to publish in your job application portfolio.' },
];

export default function GoogleDataAnalyticsGuidePage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      <div className="bg-[#1F1B13] text-white py-16 md:py-20 border-b border-[#D1C5B4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A5900]/30 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <BarChart size={14} className="text-yellow-400" /> Grow with Google Series
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Google Data Analytics Certificate Guide (2026)
          </h1>
          <p className="text-[#D1C5B4] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            The definitive guide to Google&apos;s flagship Data Analytics certificate. Learn spreadsheets, SQL, Tableau, and R programming.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#D1C5B4]">
            <span className="flex items-center gap-2"><Clock size={16} className="text-[#FFDF9C]" /> 3–6 Months (Self-Paced)</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-[#FFDF9C]" /> Issued by Google</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400" /> No Degree Needed</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        <section className="bg-white rounded-2xl border border-[#D1C5B4] p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-4">Why Google Data Analytics?</h2>
          <p className="text-[#4F4639] leading-relaxed mb-4">
            The Google Data Analytics Professional Certificate is widely recognized as one of the most effective entry points into data analysis. Over 80% of graduates report a positive career outcome within 6 months.
          </p>
          <p className="text-[#4F4639] leading-relaxed">
            The curriculum mirrors the exact day-to-day workflow of junior data analysts: taking unstructured business questions, retrieving data from SQL databases, cleaning records, running statistical calculations in R or Excel, and presenting executive dashboards in Tableau.
          </p>
        </section>

        {/* 4 Core Tools */}
        <section className="bg-[#FBF3EB] rounded-2xl border border-[#D1C5B4] p-8">
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">The 4 Tools You Will Master</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Spreadsheets', icon: FileSpreadsheet, desc: 'Excel & Google Sheets data cleaning, formulas, and pivot tables.' },
              { title: 'SQL', icon: Database, desc: 'Database queries, JOINs, aggregations, and subqueries.' },
              { title: 'Tableau', icon: BarChart, desc: 'Interactive business intelligence dashboard design.' },
              { title: 'R Language', icon: Code2, desc: 'Data manipulation with tidyverse & charting with ggplot2.' },
            ].map((t) => (
              <div key={t.title} className="bg-white p-5 rounded-xl border border-[#D1C5B4] flex flex-col gap-2">
                <t.icon className="text-primary" size={24} />
                <h3 className="font-bold text-[#1F1B13] text-base">{t.title}</h3>
                <p className="text-xs text-[#4F4639] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1F1B13] mb-6">Course Breakdown (8 Modules)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analyticsModules.map((m, idx) => (
              <div key={m.title} className="bg-white rounded-2xl border border-[#D1C5B4] p-6 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white font-bold flex items-center justify-center text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-[#1F1B13] text-sm">{m.title}</h3>
                </div>
                <p className="text-[#4F4639] text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">Build Your Data Analyst Career</h2>
            <p className="text-[#FFDF9C] text-sm max-w-xl">
              Pair your Google certificate with our step-by-step Data Analyst roadmap, CV templates, and real-world interview prep questions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/career-roadmaps/data-analyst"
              className="bg-white text-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#FFDF9C]/20 transition-colors whitespace-nowrap"
            >
              Data Analyst Roadmap →
            </Link>
            <Link
              href="/interview-prep/data-analyst"
              className="bg-[#5a4000] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#261A00] transition-colors whitespace-nowrap border border-[#FFDF9C]/30"
            >
              Data Analyst Interview Prep
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
