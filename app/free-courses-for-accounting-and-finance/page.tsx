import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, Calculator, BarChart2, ChevronRight } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Free Courses for Accounting & Finance Careers (2026)',
  description:
    'Discover the best free online courses for accounting and finance careers in 2026. Learn bookkeeping, financial accounting, payroll, and more. All free with certificates.',
  alternates: { canonical: `${SITE_URL}/free-courses-for-accounting-and-finance` },
  openGraph: {
    title: 'Best Free Courses for Accounting & Finance Careers (2026) | Graduates Hub',
    description:
      'Discover the best free online courses for accounting and finance careers in 2026. Learn bookkeeping, financial accounting, payroll, and more. All free with certificates.',
    url: `${SITE_URL}/free-courses-for-accounting-and-finance`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Free Courses for Accounting & Finance Careers (2026)',
  url: `${SITE_URL}/free-courses-for-accounting-and-finance`,
  datePublished: '2026-01-01',
  dateModified: '2026-01-01',
  description: 'Discover the best free online courses for accounting and finance careers in 2026. Learn bookkeeping, financial accounting, payroll, and more. All free with certificates.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const courseCategories = [
  {
    label: 'Accounting Foundations',
    description: 'The core principles every accounting professional needs before moving into specialised roles.',
    ids: ['fundamentals-of-accounting', 'diploma-financial-accounting', 'introduction-bookkeeping-accounting'],
    categoryHref: '/category/accounting',
    categoryLabel: 'Accounting & Finance',
  },
  {
    label: 'Bookkeeping & Payroll',
    description: 'Two of the most in-demand entry-level skills across small businesses and corporate finance teams.',
    ids: ['diploma-effective-bookkeeping-payroll', 'payroll-computation-bookkeeping', 'introduction-payroll-accounting'],
    categoryHref: '/category/accounting',
    categoryLabel: 'Accounting & Finance',
  },
  {
    label: 'Financial Management & Analysis',
    description: 'Go beyond the basics. Understand how businesses manage, report, and evaluate financial performance.',
    ids: ['mastering-financial-statement-analysis', 'diploma-financial-management-managers', 'internal-auditing'],
    categoryHref: '/category/accounting',
    categoryLabel: 'Accounting & Finance',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'High Demand Across All Industries',
    body: 'Every organisation, public, private, or nonprofit, needs accounting and finance professionals.',
  },
  {
    icon: Calculator,
    title: 'Strong Job Stability',
    body: 'Accounting roles consistently rank among the most recession-resistant careers globally.',
  },
  {
    icon: BarChart2,
    title: 'Clear Career Progression',
    body: 'From Accounts Assistant to Financial Manager. The path is well-defined and achievable.',
  },
  {
    icon: Award,
    title: 'Earn Certificates',
    body: 'Every course includes a downloadable certificate to add to your CV and LinkedIn profile.',
  },
  {
    icon: Clock,
    title: 'Self-Paced Learning',
    body: 'Study around your schedule. Most foundational courses take just a few hours to complete.',
  },
  {
    icon: CheckCircle2,
    title: '100% Free to Start',
    body: 'No upfront cost. Every course on Graduates Hub is free to begin today.',
  },
];

const learningPath = [
  {
    step: '1',
    title: 'Learn Accounting Basics',
    detail: 'Start with fundamentals of accounting and bookkeeping to understand how financial records work.',
  },
  {
    step: '2',
    title: 'Understand Financial Concepts',
    detail: 'Move into financial management, statement analysis, and how businesses evaluate performance.',
  },
  {
    step: '3',
    title: 'Learn Payroll & Compliance',
    detail: 'Payroll and accounts management skills are among the most hired-for in entry-level finance roles.',
  },
  {
    step: '4',
    title: 'Apply with Real Scenarios',
    detail: 'Practice building financial reports, reconciling accounts, and interpreting balance sheets.',
  },
];

const careerPaths = [
  { role: 'Accounts Assistant', detail: 'Entry-level role supporting day-to-day financial recording and reconciliation.' },
  { role: 'Bookkeeper', detail: 'Manages financial records, ledgers, and cash flow for businesses of all sizes.' },
  { role: 'Payroll Administrator', detail: 'Processes employee salaries, deductions, and statutory submissions.' },
  { role: 'Finance Assistant', detail: 'Supports the finance team with reporting, invoicing, and data management.' },
  { role: 'Junior Accountant', detail: 'Prepares financial statements and supports month-end close processes.' },
  { role: 'Financial Analyst', detail: 'Analyses financial data to guide business decisions. Requires further learning.' },
];

const faqs = [
  {
    q: 'Do I need a degree to work in accounting or finance?',
    a: 'Not for entry-level roles. Many bookkeeping, payroll, and accounts assistant positions are accessible with certificates and demonstrated practical skills. For advanced roles like Chartered Accountant or Auditor, formal qualifications are typically required. Free courses are an excellent starting point to build foundational knowledge and explore the field before committing to a full degree.',
  },
  {
    q: 'How long does it take to complete these accounting courses?',
    a: 'Short certificate courses typically take 2 to 6 hours. Most can be completed in a weekend. Diploma-level programs range from 10 to 30 hours. Because everything is self-paced, you study at whatever speed suits your schedule.',
  },
  {
    q: 'Are free accounting certificates recognised by employers?',
    a: 'CPD-accredited certificates from providers like Alison are recognised by thousands of employers globally. While they carry more weight when combined with practical experience, they demonstrate commitment, cover specific competencies, and give interviewers a clear talking point during the hiring process.',
  },
  {
    q: 'What is the difference between bookkeeping and accounting?',
    a: 'Bookkeeping involves recording financial transactions accurately. It is the foundation. Accounting involves interpreting, analysing, and reporting on those records to support business decision-making. Many professionals start with bookkeeping and progress into broader accounting roles over time.',
  },
  {
    q: 'Do I need to know maths to study accounting?',
    a: 'You need basic arithmetic and the ability to work carefully with numbers, not advanced mathematics. Accounting is far more about attention to detail, logical thinking, and understanding financial systems than complex calculations. Most modern accounting uses software to handle the computation.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function FreeCoursesAccountingFinancePage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Free Courses for Accounting & Finance Careers 2026',
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
        c.category.toLowerCase().includes('accounting') &&
        c.rating >= 4.6 &&
        !allFeatured.find((f) => f.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto w-full px-6 py-4 text-sm text-gray-500 flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <Link href="/category/accounting" className="hover:text-primary transition-colors">Accounting & Finance</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Free Courses for Accounting & Finance</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Free Courses for Accounting &amp; Finance Careers (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Accounting and finance are among the most stable and in-demand career paths globally, offering
            strong job security, clear progression, and opportunities across every industry. This guide covers
            the best free courses to help you build practical, job-ready skills without needing a degree.
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
              <Clock size={16} className="text-gray-500" />
              Self-Paced
            </div>
          </div>
          <AuthorByline authors={['ndulamiso']} lastUpdated="January 2026" />
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Why Accounting & Finance */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Choose a Career in Accounting & Finance?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Every business relies on financial management, which means skilled professionals are always needed,
            regardless of economic conditions.
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

        {/* Course Sections */}
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
              title="More Accounting & Finance Courses"
              subtitle="Additional free courses to deepen your accounting and financial knowledge"
            />
          </div>
        )}

        {/* Learning Path */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Best Learning Path for Accounting & Finance
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            If you are starting from scratch, follow this structured roadmap to build both theoretical and
            practical knowledge step by step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPath.map(({ step, title, detail }) => (
              <div key={step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Do You Need a Degree */}
        <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Do You Need a Degree to Work in Accounting or Finance?</h2>
          <p className="text-blue-100 mb-10">Not always. The answer depends on the role you are targeting.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-4">You can start without a degree:</h3>
              <ul className="space-y-3">
                {[
                  'Entry-level bookkeeping and payroll roles',
                  'Accounts assistant and finance support positions',
                  'Practical certifications recognised by employers',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-4">For advanced roles, consider further study:</h3>
              <ul className="space-y-3">
                {[
                  'Chartered Accountant (CA) requires formal qualifications',
                  'Auditor roles typically require a recognised accounting degree',
                  'Financial management positions benefit from advanced credentials',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Career Paths in Accounting & Finance
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            These free courses lead directly to entry-level roles and lay the foundation for more senior
            positions with further learning and experience.
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
            href="/category/accounting"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors"
          >
            Browse all Accounting &amp; Finance courses <ChevronRight size={16} />
          </Link>
        </section>

        {/* Related Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Best Free Courses for Beginners (2026)',
                desc: 'New to learning online? Start here with zero prior experience required.',
                href: '/free-courses-for-beginners',
              },
              {
                title: 'Best Free Courses for Data Analysts (2026)',
                desc: 'Excel and financial analysis skills that complement an accounting career.',
                href: '/free-courses-for-data-analysts',
              },
              {
                title: 'Best Free Courses with Certificates (2026)',
                desc: 'The complete guide to free certified courses across all fields.',
                href: '/free-courses-with-certificates',
              },
              {
                title: 'Browse All Accounting & Finance Courses',
                desc: 'Bookkeeping, payroll, financial management, and more in one place.',
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
            Ready to Start Your Accounting & Finance Career?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Accounting and finance are skills that remain relevant in every economy. Start with the basics,
            build practical skills, and progress consistently. You do not need to learn everything at once.
            Just take the first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/accounting"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse Accounting &amp; Finance Courses
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
