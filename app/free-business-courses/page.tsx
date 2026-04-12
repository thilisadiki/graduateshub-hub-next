import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, Briefcase, Globe, ChevronRight, ArrowRight } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Free Business Courses Online (2026) | Graduates Hub',
  description:
    'Discover the best free business courses in 2026. Project management, Lean Six Sigma, GDPR compliance, and economic strategy. All CPD-accredited with free certificates.',
  alternates: { canonical: `${SITE_URL}/free-business-courses` },
  openGraph: {
    title: 'Best Free Business Courses Online (2026) | Graduates Hub',
    description:
      'Discover the best free business courses in 2026. Project management, Lean Six Sigma, GDPR compliance, and economic strategy. All CPD-accredited with free certificates.',
    url: `${SITE_URL}/free-business-courses`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Free Business Courses Online (2026)',
  url: `${SITE_URL}/free-business-courses`,
  datePublished: '2026-01-01',
  dateModified: '2026-01-01',
  description: 'Discover the best free business courses in 2026. Project management, Lean Six Sigma, GDPR compliance, and economic strategy. All CPD-accredited with free certificates.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    { '@type': 'ListItem', position: 3, name: 'Free Business Courses', item: `${SITE_URL}/free-business-courses` },
  ],
};

const courseCategories = [
  {
    label: 'Project Management',
    description: 'The skills behind planning, executing, and delivering projects on time and within scope.',
    ids: ['diploma-project-management', 'agile-project-management'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
  {
    label: 'Process & Quality',
    description: 'Lean, Six Sigma, and ISO auditing frameworks used across manufacturing, logistics, and corporate services.',
    ids: ['lean-six-sigma-white-belt', 'lean-six-sigma-yellow-belt', 'iso-19011-lead-auditor'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
  {
    label: 'Compliance & Regulation',
    description: 'The regulatory knowledge required in any organisation that handles personal data or financial transactions.',
    ids: ['gdpr-general-data-protection', 'anti-money-laundering'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
  {
    label: 'Economics & Strategy',
    description: 'Macroeconomic theory, sustainable development, and AI in business for those thinking at a strategic level.',
    ids: ['intro-economic-growth-development', 'diploma-economic-growth-development', 'intro-ai-business'],
    categoryHref: '/category/business',
    categoryLabel: 'Business',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Works in Every Industry',
    body: 'Business skills transfer across sectors. Project managers, compliance officers, and operations specialists are hired in every field.',
  },
  {
    icon: Briefcase,
    title: 'No Prior Experience Required',
    body: 'All four tracks start from beginner level. No business degree or corporate background is needed to begin.',
  },
  {
    icon: Award,
    title: 'CPD-Accredited Certificates',
    body: 'Every course issues a CPD-accredited certificate on completion. Accepted by employers in South Africa and internationally.',
  },
  {
    icon: Globe,
    title: 'Globally Recognised Frameworks',
    body: 'Lean Six Sigma, GDPR, ISO 9001, and Agile are used by organisations worldwide. These are not local qualifications.',
  },
  {
    icon: Clock,
    title: 'Self-Paced Learning',
    body: 'Certificate courses complete in 2 to 8 hours. Diplomas range from 10 to 15 hours. Study around your existing commitments.',
  },
  {
    icon: CheckCircle2,
    title: '100% Free to Start',
    body: 'Every course on Graduates Hub is free to begin. A paid physical certificate is optional but the full course content costs nothing.',
  },
];

const learningPath = [
  {
    step: '1',
    title: 'Learn How Projects Work',
    detail: 'The Diploma in Project Management covers the full lifecycle: initiation, planning, execution, monitoring, and closure. The foundation for most business roles.',
    href: '/course/diploma-project-management',
    courseName: 'Diploma in Project Management',
  },
  {
    step: '2',
    title: 'Improve Processes with Data',
    detail: 'Lean Six Sigma Yellow Belt introduces the DMAIC framework for identifying waste, measuring performance, and driving measurable process improvements.',
    href: '/course/lean-six-sigma-yellow-belt',
    courseName: 'Lean Six Sigma: Yellow Belt',
  },
  {
    step: '3',
    title: 'Meet Regulatory Requirements',
    detail: 'GDPR is now the baseline for any role involving personal data. Understanding data protection obligations is expected in compliance, HR, marketing, and IT roles alike.',
    href: '/course/gdpr-general-data-protection',
    courseName: 'General Data Protection Regulation (GDPR)',
  },
  {
    step: '4',
    title: 'Understand Economic Strategy',
    detail: 'Introduction to Economic Growth and Development gives you the macroeconomic context behind business decisions, growth models, and sustainable development policy.',
    href: '/course/intro-economic-growth-development',
    courseName: 'Introduction to Economic Growth and Development',
  },
];

const careerPaths = [
  { role: 'Project Coordinator', detail: 'Entry-level project role. Supports planning, scheduling, and stakeholder communication under a senior PM.' },
  { role: 'Scrum Master', detail: 'Agile team facilitator. Removes blockers, runs ceremonies, and protects the team from scope creep.' },
  { role: 'Quality Assurance Specialist', detail: 'Process improvement and ISO compliance role. Present wherever manufacturing, logistics, or corporate quality standards apply.' },
  { role: 'Compliance Officer', detail: 'Data protection, AML, and regulatory adherence. Fast-growing role in banking, insurance, fintech, and any regulated industry.' },
  { role: 'Operations Manager', detail: 'Senior role overseeing process efficiency and output quality. Lean Six Sigma is frequently listed as a preferred qualification.' },
  { role: 'Business Analyst', detail: 'Cross-functional role bridging data, operations, and strategy. In demand at corporates, consultancies, and public sector organisations.' },
];

const faqs = [
  {
    q: 'Do I need business experience to start these courses?',
    a: 'No. The Lean Six Sigma White Belt and Introduction to Economic Growth and Development are both designed for complete beginners. The Project Management diploma and Agile certificate assume no prior project management knowledge. Start with whichever track matches your immediate career goal.',
  },
  {
    q: 'What is the difference between the Lean Six Sigma White Belt and Yellow Belt?',
    a: 'The White Belt is a short introduction to Lean Six Sigma vocabulary and philosophy, designed so that any employee can participate intelligently in company-wide improvement initiatives. The Yellow Belt goes deeper: it covers the DMAIC framework in detail, process mapping, and data collection methods. If you want to actively lead or contribute to improvement projects, the Yellow Belt is the one employers look for.',
  },
  {
    q: 'Is GDPR relevant if I am based in South Africa?',
    a: 'Yes. Any organisation that processes data belonging to EU citizens must comply with GDPR regardless of where it is based. Beyond the EU, GDPR has directly influenced South Africa\'s own POPIA legislation. Understanding GDPR gives you a working knowledge of both frameworks and makes you more valuable in any compliance or data-handling role.',
  },
  {
    q: 'Which business course gives the best return for career progression?',
    a: 'The Diploma in Project Management has the broadest applicability. Project management is a recognised profession across almost every industry, and a formal diploma signals that you can take ownership of deliverables and manage stakeholders. If you are already in a tech environment, the Agile Project Management certificate is the faster, more targeted option.',
  },
  {
    q: 'Can these courses help me run my own business?',
    a: 'Yes, particularly the Project Management, Economics, and Compliance tracks. Understanding how to plan and execute projects, read macroeconomic signals, and stay compliant with data and financial regulations are practical skills for any business owner. The Diploma in Sustainable Development is also increasingly relevant as clients and investors ask for ESG evidence.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function FreeBusinessCoursesPage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Free Business Courses Online 2026',
    itemListElement: allFeatured.slice(0, 12).map((course, index) => ({
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
        c.category.toLowerCase().includes('business') &&
        c.rating >= 4.5 &&
        !allFeatured.find((f) => f.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

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
          <Link href="/category/business" className="hover:text-primary transition-colors">Business Courses</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Free Business Courses</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Free Business Courses Online (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Business skills transfer across every industry and every organisation size. This guide covers the
            best free courses across project management, process improvement, regulatory compliance, and
            economic strategy, all CPD-accredited and beginner-accessible.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              No Experience Required
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Award size={16} className="text-primary" />
              CPD-Accredited Certificates
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

        {/* Why Business */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Study Business?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Every organisation runs on business fundamentals. The skills in this guide appear in job listings
            across tech, finance, government, healthcare, and retail.
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

        {/* Related carousel */}
        {relatedCarousel.length > 0 && (
          <div className="mb-20">
            <CourseCarousel
              courses={relatedCarousel}
              title="More Business Courses"
              subtitle="Additional free courses to round out your business and management knowledge"
            />
          </div>
        )}

        {/* Learning Path */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Best Learning Path for Business
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            If you are starting from scratch, follow this path to build a complete, employer-ready business
            skill set step by step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPath.map(({ step, title, detail, href, courseName }) => (
              <div key={step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">{detail}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-800 transition-colors"
                  >
                    <ChevronRight size={12} /> {courseName}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Degree section */}
        <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Do You Need a Degree to Work in Business?</h2>
          <p className="text-blue-100 mb-10">Not for most entry-level and mid-level roles. Here is how to think about it.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-4">You can start without a degree:</h3>
              <ul className="space-y-3">
                {[
                  'Project coordinator and administrator roles',
                  'Process improvement and quality support positions',
                  'Compliance and data protection assistant roles',
                  'Operations support and business analyst entry points',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={16} className="text-green-300 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-white text-lg mb-4">For senior roles, further study helps:</h3>
              <ul className="space-y-3">
                {[
                  'Senior project manager roles often require a PMP or Prince2 certification',
                  'Chartered compliance and risk roles typically require postgraduate qualifications',
                  'Executive leadership benefits from an MBA or equivalent credential',
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
            Career Paths in Business
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            These courses map directly to entry-level and mid-level roles available across every industry.
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
            href="/category/business"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors"
          >
            Browse all Business courses <ChevronRight size={16} />
          </Link>
        </section>

        {/* Related Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Free AI Courses for Beginners (2026)',
                desc: 'Includes Introduction to AI in Business. No coding background required.',
                href: '/free-ai-courses-for-beginners',
              },
              {
                title: 'Free Courses for Accounting & Finance (2026)',
                desc: 'Bookkeeping, payroll, financial management, and auditing. A natural complement to business skills.',
                href: '/free-courses-for-accounting-and-finance',
              },
              {
                title: 'Free Courses with Certificates (2026)',
                desc: 'The complete guide to free certified courses across all fields.',
                href: '/free-courses-with-certificates',
              },
              {
                title: 'Browse All Business Courses',
                desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy in one place.',
                href: '/category/business',
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
            Ready to Build Your Business Skills?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Pick one track, complete it, and apply it. Business knowledge compounds when you practice it
            in real situations. The courses here give you the frameworks. You provide the context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/business"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse All Business Courses
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
