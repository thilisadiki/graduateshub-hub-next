import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, Database, BarChart2, ChevronRight } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Free Courses for Data Analysts (2026)',
  description:
    'Discover the best free courses for data analysts in 2026. Learn SQL, Python, databases, and financial analysis, all free with certificates. No degree required.',
  alternates: { canonical: `${SITE_URL}/free-courses-for-data-analysts` },
  openGraph: {
    title: 'Best Free Courses for Data Analysts (2026) | Graduates Hub',
    description:
      'Discover the best free courses for data analysts in 2026. Learn SQL, Python, databases, and financial analysis, all free with certificates. No degree required.',
    url: `${SITE_URL}/free-courses-for-data-analysts`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Free Courses for Data Analysts (2026)',
  url: `${SITE_URL}/free-courses-for-data-analysts`,
  datePublished: '2025-01-01',
  dateModified: '2026-01-01',
  description: 'Discover the best free courses for data analysts in 2026. Learn SQL, Python, databases, and financial analysis, all free with certificates. No degree required.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    { '@type': 'ListItem', position: 3, name: 'Free Courses for Data Analysts', item: `${SITE_URL}/free-courses-for-data-analysts` },
  ],
};

const courseCategories = [
  {
    label: 'Spreadsheets & Visualisation',
    description: 'Excel and Power BI are the two tools most entry-level analyst roles test on day one.',
    ids: ['microsoft-excel-data-analysis', 'intro-power-bi', 'mastering-financial-statement-analysis'],
    categoryHref: '/category/accounting',
    categoryLabel: 'Accounting & Finance',
  },
  {
    label: 'SQL & Databases',
    description: 'SQL is the single most important technical skill for a data analyst. Start here.',
    ids: ['intro-database-concepts', 'diploma-databases-t-sql', 'databases-dml-sql-server'],
    categoryHref: '/category/it',
    categoryLabel: 'IT & Technology',
  },
  {
    label: 'Python for Data',
    description: 'Python handles datasets, automates reporting, and unlocks machine learning.',
    ids: ['python-for-beginners-data', 'diploma-python-programming', 'machine-learning-with-ai'],
    categoryHref: '/category/software-engineering',
    categoryLabel: 'Software Development',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'High Demand Across Industries',
    body: 'Finance, healthcare, tech, retail, every sector needs people who can interpret data.',
  },
  {
    icon: Database,
    title: 'No Degree Required',
    body: 'Data analytics is skill-based. Employers care what you can do, not just what you studied.',
  },
  {
    icon: BarChart2,
    title: 'Clear Learning Path',
    body: 'SQL → Python → visualisation → ML. The roadmap is well-defined and learnable for free.',
  },
  {
    icon: Award,
    title: 'Earn Certificates',
    body: 'Every course includes a downloadable certificate to add to your CV and LinkedIn.',
  },
  {
    icon: Clock,
    title: 'Self-Paced Learning',
    body: 'Study around your schedule. Most foundational courses take just a few hours.',
  },
  {
    icon: CheckCircle2,
    title: '100% Free to Start',
    body: 'No upfront cost. Every course on Graduates Hub is free to begin.',
  },
];

const toolPath = [
  { tool: 'Excel / Google Sheets', use: 'Cleaning, sorting, and summarising small datasets', level: 'Beginner' },
  { tool: 'SQL', use: 'Querying databases to extract and filter data at scale', level: 'Beginner to Intermediate' },
  { tool: 'Python (Pandas / NumPy)', use: 'Automating analysis and working with large, complex datasets', level: 'Intermediate' },
  { tool: 'Power BI / Tableau', use: 'Building dashboards and visual reports for stakeholders', level: 'Intermediate' },
  { tool: 'Machine Learning basics', use: 'Predictive modelling and pattern recognition in data', level: 'Advanced' },
];

const careerPaths = [
  { role: 'Junior Data Analyst', detail: 'Entry-level role focused on data cleaning, reporting, and basic insights.' },
  { role: 'Reporting Analyst', detail: 'Creates dashboards and recurring reports for business decision-makers.' },
  { role: 'Business Intelligence Analyst', detail: 'Combines data analysis with business strategy and tooling.' },
  { role: 'Data Assistant', detail: 'Supports senior analysts with data collection, formatting, and quality checks.' },
  { role: 'Data Scientist', detail: 'Requires further learning in statistics and machine learning.' },
  { role: 'Machine Learning Engineer', detail: 'Builds and trains predictive models, advanced technical role.' },
];

const faqs = [
  {
    q: 'Do you need coding experience to become a data analyst?',
    a: 'Not at first. You can start with Excel and basic data tools with no coding background. However, learning SQL and Python will significantly increase your job prospects, salary ceiling, and ability to work with larger datasets. Most employers expect at least basic SQL from entry-level analysts.',
  },
  {
    q: 'How long does it take to learn data analytics from scratch?',
    a: 'With consistent study (1 to 2 hours per day), you can cover the fundamentals, SQL, basic Python, and data interpretation, within 3 to 6 months. Completing several certificates along the way gives you tangible proof of progress for your CV.',
  },
  {
    q: 'Is SQL really necessary for data analysts?',
    a: 'Yes, it is arguably the most important tool. Most real-world data lives in relational databases. SQL lets you extract, filter, group, and join that data directly. It is typically the first technical skill employers test for in data analyst interviews.',
  },
  {
    q: 'Are free data analytics certificates worth adding to a CV?',
    a: 'Absolutely, especially early in your career. They show initiative, demonstrate that you have covered specific topics, and give interviewers a clear talking point. Pairing a certificate with a personal project (even a simple dataset analysis on GitHub) is even more compelling.',
  },
  {
    q: 'What is the difference between a data analyst and a data scientist?',
    a: 'A data analyst focuses on interpreting existing data to answer business questions using tools like SQL, Excel, and visualisation software. A data scientist goes further, building predictive models, working with unstructured data, and applying machine learning techniques. Most data scientists start as analysts.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function FreeCoursesForDataAnalystsPage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Free Courses for Data Analysts 2026',
    itemListElement: allFeatured.slice(0, 9).map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: { '@type': 'Organization', name: 'Alison', sameAs: 'https://alison.com' },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          duration: `PT${parseInt(course.duration.split('-')[0])}H`,
        },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const relatedCarousel = courses
    .filter(
      (c) =>
        (c.category.toLowerCase().includes('data analytics') ||
          c.category.toLowerCase().includes('accounting') ||
          c.subCategory === 'Artificial Intelligence' ||
          c.subCategory === 'Database & Software Development') &&
        c.rating >= 4.5 &&
        !allFeatured.find((f) => f.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto w-full px-6 py-4 text-sm text-gray-500 flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Free Courses for Data Analysts</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Free Courses for Data Analysts (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Data is one of the most valuable assets in today's economy, and companies are actively hiring
            people who know how to work with it. If you are starting out or switching careers, this guide covers
            the best free data analytics courses in 2026, designed to build real, job-ready skills with no prior
            experience required.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              No Degree Required
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Award size={16} className="text-primary" />
              Free Certificates Included
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Database size={16} className="text-gray-500" />
              SQL, Python & More
            </div>
          </div>
          <AuthorByline authors={['jason']} lastUpdated="January 2026" />
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Why Become a Data Analyst */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Become a Data Analyst?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Data analytics is one of the most in-demand career paths globally, and it is one of the few
            where free, self-directed learning genuinely works.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Course sections */}
        {courseCategories.map((cat) => {
          const catCourses = getCoursesByIds(cat.ids);
          if (catCourses.length === 0) return null;
          return (
            <section key={cat.label} className="mb-20">
              <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{cat.label}</h2>
                  <p className="text-gray-500 mt-1">{cat.description}</p>
                </div>
                <Link
                  href={cat.categoryHref}
                  className="text-primary font-bold hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap text-sm"
                >
                  See all {cat.categoryLabel} courses <ChevronRight size={16} />
                </Link>
              </div>
              <div className="w-12 h-1 bg-primary rounded-full mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Related courses carousel */}
        {relatedCarousel.length > 0 && (
          <div className="mb-20">
            <CourseCarousel
              courses={relatedCarousel}
              title="More Courses to Build Your Data Skills"
              subtitle="Accounting, AI, and finance courses that complement a data analytics career"
            />
          </div>
        )}

        {/* The Data Analyst Tool Path */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            What Skills Do You Need to Become a Data Analyst?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Most data analyst roles expect a core set of tools and skills. Here is the standard learning path,
            from beginner to job-ready.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left font-bold text-gray-900 py-3 pr-6">Tool</th>
                  <th className="text-left font-bold text-gray-900 py-3 pr-6">What You Use It For</th>
                  <th className="text-left font-bold text-gray-900 py-3">Level</th>
                </tr>
              </thead>
              <tbody>
                {toolPath.map(({ tool, use, level }, i) => (
                  <tr key={tool} className={i < toolPath.length - 1 ? 'border-b border-gray-50' : ''}>
                    <td className="py-4 pr-6 font-semibold text-gray-800 whitespace-nowrap">{tool}</td>
                    <td className="py-4 pr-6 text-gray-600">{use}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                        level === 'Beginner'
                          ? 'bg-green-50 text-green-700'
                          : level === 'Intermediate'
                          ? 'bg-blue-50 text-blue-700'
                          : level === 'Beginner to Intermediate'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-purple-50 text-purple-700'
                      }`}>
                        {level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Do You Need Coding */}
        <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Do You Need Coding to Become a Data Analyst?</h2>
          <p className="text-blue-100 mb-10">Not always, but learning Python and SQL will make you significantly more competitive.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-4">You can start without coding:</h3>
              <ul className="space-y-3">
                {['Excel and Google Sheets for basic data manipulation', 'Online dashboarding tools with drag-and-drop interfaces', 'Basic reporting and data interpretation skills'].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-4">However, learning Python and SQL will:</h3>
              <ul className="space-y-3">
                {['Increase your job opportunities significantly', 'Let you work with larger, more complex datasets', 'Make you more competitive at salary negotiation', 'Open paths into data science and machine learning'].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Choose the Right Course</h2>
          <p className="text-gray-500 mb-10">A clear starting strategy prevents wasted time and dropped momentum.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Start with the Basics',
                body: 'Begin with introductory database and SQL courses before jumping into Python. Understanding how data is stored and queried is the most foundational skill.',
              },
              {
                step: '2',
                title: 'Learn Tools Step-by-Step',
                body: 'Follow the natural progression: databases and SQL → Python → visualisation tools. Each layer builds on the last and maps directly to real job requirements.',
              },
              {
                step: '3',
                title: 'Focus on Practical Skills',
                body: 'Prioritise courses that use real-world examples and datasets. Theory is useful, but employers hire for what you can actually do with the data in front of you.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Career Paths in Data Analytics
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            These free courses lead directly to entry-level roles, and lay the foundation for more advanced
            positions with further learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {careerPaths.map(({ role, detail }) => (
              <div key={role} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <p className="font-bold text-gray-900 text-lg mb-1">{role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/category/it"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors"
          >
            Browse all IT &amp; Data courses <ChevronRight size={16} />
          </Link>
        </section>

        {/* Related Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Best Free AI Courses for Beginners (2026)',
                desc: 'Machine learning and AI are the natural next step after data analytics fundamentals.',
                href: '/free-ai-courses-for-beginners',
              },
              {
                title: 'Best Free Online Courses with Certificates (2026)',
                desc: 'The complete guide to free certified courses across all fields and career paths.',
                href: '/free-courses-with-certificates',
              },
              {
                title: 'Browse All IT & AI Courses',
                desc: 'SQL, databases, software engineering, and AI, all in one place.',
                href: '/category/it',
              },
              {
                title: 'Accounting & Finance Courses',
                desc: 'Financial data analysis skills that complement a data analyst career.',
                href: '/category/accounting',
              },
            ].map(({ title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-8 bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Ready to Start Your Data Analytics Journey?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Becoming a data analyst does not require a traditional degree; it requires the right skills.
            Start with one course, build your foundation, and expand from there. Consistency and practice are
            what set successful learners apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/it"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse IT &amp; Data Courses
            </Link>
            <Link
              href="/free-courses-with-certificates"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-bold hover:border-gray-300 transition-colors"
            >
              All Free Courses with Certificates
            </Link>
          </div>
        </section>
      </main>

      <NewsletterBanner />
    </div>
  );
}
