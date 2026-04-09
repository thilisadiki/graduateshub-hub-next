import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, BookOpen, Users, ChevronRight, Star } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Free Online Courses with Certificates (2026)',
  description:
    'Discover the best free online courses with certificates in 2026. Browse top-rated courses in IT, Business, Marketing, Finance, and Software Development, all free to start.',
  alternates: { canonical: `${SITE_URL}/free-courses-with-certificates` },
  openGraph: {
    title: 'Best Free Online Courses with Certificates (2026) | Graduates Hub',
    description:
      'Discover the best free online courses with certificates in 2026. Browse top-rated courses in IT, Business, Marketing, Finance, and Software Development, all free to start.',
    url: `${SITE_URL}/free-courses-with-certificates`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Free Online Courses with Certificates (2026)',
  url: `${SITE_URL}/free-courses-with-certificates`,
  datePublished: '2025-01-01',
  dateModified: '2026-01-01',
  description: 'Discover the best free online courses with certificates in 2026. Browse top-rated courses in IT, Business, Marketing, Finance, and Software Development, all free to start.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const courseCategories = [
  {
    label: 'IT & Technology',
    slug: 'it',
    description: 'From networking fundamentals to cybersecurity and IT management.',
    ids: ['diploma-in-it-management', 'computer-networking', 'html-css-web-dev'],
  },
  {
    label: 'Business & Project Management',
    slug: 'business',
    description: 'Learn the skills that keep organisations running efficiently.',
    ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'],
  },
  {
    label: 'Accounting & Finance',
    slug: 'accounting',
    description: 'Read financial statements, manage books, and understand money.',
    ids: [
      'diploma-financial-management-managers',
      'diploma-effective-bookkeeping-payroll',
      'accounts-management-xero',
    ],
  },
  {
    label: 'Digital Marketing',
    slug: 'marketing',
    description: 'SEO, content strategy, social media, and conversion skills.',
    ids: [
      'growth-hacking-techniques-for-digital-marketing',
      'digital-marketing',
      'using-digital-marketing-to-convert-customers',
    ],
  },
  {
    label: 'Software Development',
    slug: 'software-engineering',
    description: 'Web development, databases, and agile engineering practices.',
    ids: ['agile-essentials', 'it-management-software-databases', 'diploma-ecommerce-web-dev'],
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Learn at Your Own Pace',
    body: 'No fixed schedule. Study in the morning, evening, or whenever suits your life.',
  },
  {
    icon: Award,
    title: 'Earn a Recognised Certificate',
    body: 'Downloadable certificates you can add to your CV and LinkedIn profile immediately.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Your Career',
    body: 'Gain skills that employers are actively looking for across every industry.',
  },
  {
    icon: BookOpen,
    title: 'No Upfront Cost',
    body: 'Every course on Graduates Hub is free to start. No credit card required.',
  },
  {
    icon: Users,
    title: 'Ideal for Career Switchers',
    body: 'Practical, beginner-friendly courses designed to get you job-ready faster.',
  },
  {
    icon: Star,
    title: 'Top-Rated Content',
    body: 'Only highly rated courses make our list, quality you can trust.',
  },
];

const careerPaths = [
  { role: 'Data Analyst', category: 'IT & Accounting', href: '/category/it' },
  { role: 'Digital Marketer', category: 'Marketing', href: '/category/marketing' },
  { role: 'Junior Developer', category: 'Software Development', href: '/category/software-engineering' },
  { role: 'Project Coordinator', category: 'Business & Management', href: '/category/business' },
  { role: 'Bookkeeper', category: 'Accounting & Finance', href: '/category/accounting' },
  { role: 'IT Support Technician', category: 'IT Courses', href: '/category/it' },
];

const faqs = [
  {
    q: 'Are free online courses with certificates worth it?',
    a: 'Yes, especially for entry-level roles and career changers. Free certificates demonstrate initiative and practical skills to employers. While they do not replace a formal degree, they are a credible way to show you have learned and applied a specific skill set.',
  },
  {
    q: 'How long do free online courses take to complete?',
    a: 'It depends on the course. Short certificates typically take 2 to 6 hours, while comprehensive diplomas can range from 10 to 20+ hours. Most learners complete a certificate in one to two weeks studying part-time.',
  },
  {
    q: 'Are the certificates on Graduates Hub recognised by employers?',
    a: 'Graduates Hub partners with Alison, a globally recognised e-learning platform that has issued over 30 million certificates worldwide. While recognition varies by industry and employer, Alison certificates are widely accepted as proof of practical skills.',
  },
  {
    q: 'Do I need any prior experience to start?',
    a: 'Most courses are designed for beginners and require no prior experience. Each course page includes a Target Audience section so you can confirm the right fit before you begin.',
  },
  {
    q: 'Can I do more than one course at a time?',
    a: 'Absolutely. Many learners combine a technical course (like IT or Development) with a soft-skills course (like Project Management) to build a well-rounded profile. Start with whichever aligns most closely with your career goal.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function FreeCoursesWithCertificatesPage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Free Online Courses with Certificates 2026',
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

  const topRatedCarousel = courses
    .filter((c) => c.rating >= 4.8 && !allFeatured.find((f) => f.id === c.id))
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
          <span className="text-gray-900 font-medium">Free Online Courses with Certificates</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Free Online Courses with Certificates (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Looking to upgrade your skills without spending money? We have curated the best free online courses
            with certificates across IT, Business, Marketing, Finance, and Software Development, all free to
            start, all career-focused.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              100% Free to Start
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Award size={16} className="text-primary" />
              Recognised Certificates
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Clock size={16} className="text-gray-500" />
              Self-Paced Learning
            </div>
          </div>
          <AuthorByline authors={['jason', 'ndulamiso']} lastUpdated="January 2026" />
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Why Free Courses */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Choose Free Online Courses?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Free online courses have become one of the fastest ways to gain job-ready skills. Here is why they
            are worth considering.
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

        {/* Course sections by category */}
        {courseCategories.map((cat) => {
          const catCourses = getCoursesByIds(cat.ids);
          if (catCourses.length === 0) return null;
          return (
            <section key={cat.slug} className="mb-20">
              <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{cat.label}</h2>
                  <p className="text-gray-500 mt-1">{cat.description}</p>
                </div>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-primary font-bold hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap text-sm"
                >
                  See all {cat.label} courses <ChevronRight size={16} />
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

        {/* More top-rated courses carousel */}
        {topRatedCarousel.length > 0 && (
          <div className="mb-20">
            <CourseCarousel
              courses={topRatedCarousel}
              title="More Top-Rated Free Courses"
              subtitle="Highly rated courses across all categories, free to start"
            />
          </div>
        )}

        {/* How to Choose */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            How to Choose the Right Course
          </h2>
          <p className="text-gray-500 mb-10">Not all courses suit every goal. Here is how to pick the right one.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Define Your Goal</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Career change? Choose career-focused courses with a clear job outcome.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Skill upgrade? Pick a niche topic in your existing field.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Exploration? Start with a beginner-level certificate to test your interest.</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Check Course Duration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Short courses (2 to 6 hours) are great for quick wins and adding specific tools to your CV. Diplomas
                (10 to 20 hours) provide deeper, more comprehensive knowledge that stands out to employers.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Look for Certificates</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Courses with certificates can improve your CV, strengthen your LinkedIn profile, and demonstrate
                initiative to potential employers. Every course on Graduates Hub includes a downloadable
                certificate on completion.
              </p>
            </div>
          </div>
        </section>

        {/* Are Free Certificates Worth It */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Are Free Certificates Worth It?</h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl leading-relaxed">
              Yes, especially if you are starting out. While they may not replace a university degree, free
              certificates show employers that you are proactive, self-directed, and genuinely interested in
              developing your skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: 'Show initiative', body: 'Demonstrates that you learn independently and take career development seriously.' },
                { stat: 'Prove practical skills', body: 'Employers value demonstrated ability. A certificate is tangible proof you completed structured training.' },
                { stat: 'Stand out in entry-level roles', body: 'In competitive entry-level markets, every credential helps you move ahead of the queue.' },
              ].map(({ stat, body }) => (
                <div key={stat} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <p className="font-bold text-white mb-2">{stat}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Career Paths You Can Start with Free Courses
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            These free courses lead directly to entry-level roles that are in demand right now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPaths.map(({ role, category, href }) => (
              <Link
                key={role}
                href={href}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">{role}</p>
                    <p className="text-sm text-gray-500 mt-1">{category}</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Best Free AI Courses for Beginners (2026)',
                desc: 'No coding required. Start learning Artificial Intelligence, Machine Learning, and Generative AI for free.',
                href: '/free-ai-courses-for-beginners',
              },
              {
                title: 'Best Free Courses for Data Analysts (2026)',
                desc: 'SQL, Python, databases, and financial analysis, the full data analyst learning path.',
                href: '/free-courses-for-data-analysts',
              },
              {
                title: 'Browse All IT & AI Courses',
                desc: 'Every free IT and AI course we offer, organised by sub-category.',
                href: '/category/it',
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

        {/* Explore by Category */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Explore by Category</h2>
          <p className="text-gray-500 mb-8">Browse every free course we offer, organised by field.</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'IT & Technology', href: '/category/it' },
              { label: 'Software Development', href: '/category/software-engineering' },
              { label: 'Business & Management', href: '/category/business' },
              { label: 'Accounting & Finance', href: '/category/accounting' },
              { label: 'Digital Marketing', href: '/category/marketing' },
              { label: 'Management', href: '/category/management' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                {label}
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
            Ready to Begin?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Pick one course, complete it, and apply what you learn. The key is consistency: small steps taken regularly lead to real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse All Courses
            </Link>
            <Link
              href="/search"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-bold hover:border-gray-300 transition-colors"
            >
              Search a Specific Topic
            </Link>
          </div>
        </section>
      </main>

      <NewsletterBanner />
    </div>
  );
}
