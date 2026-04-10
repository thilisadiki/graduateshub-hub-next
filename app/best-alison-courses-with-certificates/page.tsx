import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, BookOpen, Users, ChevronRight, Star, Globe } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Alison Courses with Certificates (2026)',
  description:
    'The top CPD-accredited diplomas and certificates available on the Alison platform, hand-picked by subject specialists. Free to study with no deadlines, no enrolment fees, and no prior experience required.',
  alternates: { canonical: `${SITE_URL}/best-alison-courses-with-certificates` },
  openGraph: {
    title: 'Best Alison Courses with Certificates (2026) | Graduates Hub',
    description:
      'The top CPD-accredited diplomas and certificates available on the Alison platform, hand-picked by subject specialists. Free to study with no deadlines, no enrolment fees, and no prior experience required.',
    url: `${SITE_URL}/best-alison-courses-with-certificates`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Alison Courses with Certificates (2026)',
  url: `${SITE_URL}/best-alison-courses-with-certificates`,
  datePublished: '2025-01-01',
  dateModified: '2026-01-01',
  description: 'The top CPD-accredited diplomas and certificates available on the Alison platform, hand-picked by subject specialists. Free to study with no deadlines, no enrolment fees, and no prior experience required.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    { '@type': 'ListItem', position: 3, name: 'Best Alison Courses with Certificates', item: `${SITE_URL}/best-alison-courses-with-certificates` },
  ],
};

const courseCategories = [
  {
    label: 'Business & Project Management',
    slug: 'business',
    description: 'Master the project lifecycle, agile methods, and process optimisation.',
    ids: ['diploma-project-management', 'agile-project-management', 'lean-six-sigma-yellow-belt'],
  },
  {
    label: 'IT & Technology',
    slug: 'it',
    description: 'From networking fundamentals to IT service management and infrastructure.',
    ids: ['diploma-in-it-management', 'computer-networking', 'foundations-of-itil-4'],
  },
  {
    label: 'Accounting & Finance',
    slug: 'accounting',
    description: 'Build the financial literacy employers expect from business professionals.',
    ids: ['fundamentals-of-accounting', 'diploma-effective-bookkeeping-payroll', 'diploma-financial-management-managers'],
  },
  {
    label: 'Digital Marketing',
    slug: 'marketing',
    description: 'SEO, content strategy, social media, and digital growth techniques.',
    ids: [
      'digital-marketing',
      'basic-concepts-of-digital-marketing',
      'growth-hacking-techniques-for-digital-marketing',
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: 'CPD-Accredited Certificates',
    body: 'Alison certificates are CPD-accredited, a globally recognised standard that many employers accept.',
  },
  {
    icon: BookOpen,
    title: '100% Free to Study',
    body: 'Every course is completely free to access. No subscription, no credit card required.',
  },
  {
    icon: Clock,
    title: 'Self-Paced, No Deadlines',
    body: 'Study at your own speed. Pick up where you left off whenever life allows.',
  },
  {
    icon: Globe,
    title: '6,000+ Courses Available',
    body: 'One of the largest free course libraries on the internet, covering every major career field.',
  },
  {
    icon: Users,
    title: '50 Million Learners',
    body: 'Alison is one of the world\'s most widely used free learning platforms, trusted by learners in 195 countries.',
  },
  {
    icon: TrendingUp,
    title: 'Career-Focused Content',
    body: 'Courses are built around real job skills, not academic theory, so you can apply what you learn immediately.',
  },
];

const careerPaths = [
  { role: 'Project Coordinator', category: 'Business & Management', href: '/category/business' },
  { role: 'IT Support Specialist', category: 'IT & Technology', href: '/category/it' },
  { role: 'Bookkeeper', category: 'Accounting & Finance', href: '/category/accounting' },
  { role: 'Digital Marketer', category: 'Marketing', href: '/category/marketing' },
  { role: 'Data Analyst', category: 'Data & Analytics', href: '/free-courses-for-data-analysts' },
  { role: 'HR Assistant', category: 'Business & Management', href: '/category/business' },
];

const faqs = [
  {
    q: 'Are Alison courses completely free?',
    a: 'Yes, all Alison courses are 100% free to study. The learning content, assessments, and course completion are all free. Alison does offer optional paid certificates (physical or digital) if you want an official printed credential, but the learning itself costs nothing.',
  },
  {
    q: 'What is the difference between an Alison certificate and an Alison diploma?',
    a: 'Certificate courses typically take 2 to 5 hours and focus on a specific skill or topic. Diploma courses are longer, usually 6 to 15 hours, and provide a more comprehensive, in-depth qualification. Diplomas carry more weight on a CV because they demonstrate deeper commitment and broader knowledge.',
  },
  {
    q: 'Are Alison certificates recognised by employers?',
    a: 'Alison has issued over 30 million certificates and is one of the most widely recognised free learning platforms globally. Recognition varies by industry and employer, but Alison\'s CPD accreditation is accepted by many companies as proof of practical skills. Combined with practical experience or portfolio work, Alison certificates can meaningfully strengthen a job application.',
  },
  {
    q: 'How do I get my Alison certificate?',
    a: 'You receive a certificate once you pass the final assessment at the end of your course. Alison issues a digital certificate that you can download, add to your LinkedIn profile, or share with employers. An optional paid physical certificate is also available.',
  },
  {
    q: 'How long does it take to complete an Alison course?',
    a: 'Short certificate courses typically take 2 to 6 hours, which most people complete in a few evenings. Diploma courses range from 8 to 15+ hours, usually two to four weeks of part-time study. There are no deadlines, so you progress at whatever pace suits your schedule.',
  },
  {
    q: 'Can I do multiple Alison courses at the same time?',
    a: 'Absolutely. Many learners combine a technical course (like IT or Accounting) with a soft-skills course (like Project Management) to build a well-rounded profile. Alison\'s self-paced format makes it easy to juggle multiple courses alongside work or study.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function BestAlisonCoursesPage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Alison Courses with Certificates 2026',
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
    .filter((c) => c.rating >= 4.6 && !allFeatured.find((f) => f.id === c.id))
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
          <span className="text-gray-900 font-medium">Best Alison Courses with Certificates</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Alison Courses with Certificates (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Alison is one of the world's leading free learning platforms, with over 6,000 courses, 50 million
            learners, and CPD-accredited certificates across Business, IT, Marketing, Finance, and more. We have
            curated the best Alison courses to help you build real skills and earn a recognised certificate at no
            cost.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              CPD-Accredited
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Award size={16} className="text-primary" />
              Free Certificates
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Clock size={16} className="text-gray-500" />
              Self-Paced
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Star size={16} className="text-yellow-500" />
              50M+ Learners
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Why Choose Alison */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Choose Alison?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            With thousands of free platforms competing for your attention, here is why Alison consistently stands
            out for learners looking for a genuine, practical qualification.
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

        {/* Course type explainer */}
        <section className="mb-20 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Certificate or Diploma, Which Should You Choose?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Alison offers two types of qualifications. Picking the right one depends on how much time you have and
            how deeply you want to go.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border-2 border-blue-100 bg-blue-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  Cert
                </div>
                <h3 className="font-bold text-gray-900 text-xl">Certificate Courses</h3>
              </div>
              <ul className="text-gray-700 text-sm space-y-3">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Duration: typically 2 to 6 hours</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Best for: quick skill building and adding specific tools to your CV</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Ideal for: career changers exploring a new field before committing deeper</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Great alongside an existing job or study schedule</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-indigo-100 bg-indigo-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  Dip
                </div>
                <h3 className="font-bold text-gray-900 text-xl">Diploma Courses</h3>
              </div>
              <ul className="text-gray-700 text-sm space-y-3">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Duration: typically 8 to 15+ hours</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Best for: comprehensive, in-depth qualifications that employers notice</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Carries more weight on a CV, demonstrates sustained commitment</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Ideal for career switchers making a serious move into a new field</li>
              </ul>
            </div>
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

        {/* Top-rated carousel */}
        {topRatedCarousel.length > 0 && (
          <div className="mb-20">
            <CourseCarousel
              courses={topRatedCarousel}
              title="More Top-Rated Alison Courses"
              subtitle="Highly rated courses across all categories, free to start today"
            />
          </div>
        )}

        {/* Are Alison Certificates Free? */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Are Alison Certificates Free?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl leading-relaxed">
              The short answer: the learning is completely free. All courses, assessments, and completion
              recognition are free to access. Alison does offer optional paid certificates, but the skills and
              the qualification are yours regardless.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  stat: 'Free to study',
                  body: 'All course content and assessments are 100% free. No subscription, no credit card needed.',
                },
                {
                  stat: 'Optional paid certificate',
                  body: 'Alison charges a small fee for an official digital or physical certificate if you want a printed credential.',
                },
                {
                  stat: 'Free digital badge',
                  body: 'Even without paying, you receive a digital badge and can showcase your completion on your Alison profile.',
                },
              ].map(({ stat, body }) => (
                <div key={stat} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <p className="font-bold text-white mb-2">{stat}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            How to Choose the Right Alison Course
          </h2>
          <p className="text-gray-500 mb-10">Three steps to finding the course that will actually move your career forward.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Start with Your Career Goal</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Career change? Choose a diploma-level course in your target field.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Skill upgrade? Pick a specific certificate that fills your knowledge gap.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Exploring? Start with a beginner certificate to test your interest before committing to a diploma.</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Focus on High-Demand Skills</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Not all skills are equally valuable. Focus on areas where employers are actively hiring and where
                your certificate can make a measurable difference to your application:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> IT & Programming</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Business & Project Management</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Data & Analytics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Digital Marketing</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Balance Time and Depth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Short certificate courses (2 to 6 hours) are great for quick wins. Diploma courses (8 to 15 hours) give
                you the depth that helps you stand out in a competitive job market. If you have two to four weeks
                of part-time study available, a diploma is almost always the better career investment.
              </p>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Career Paths You Can Start with Alison Courses
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Alison's CPD-accredited courses directly support entry-level hiring in these in-demand roles.
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
                title: 'Best Free Online Courses with Certificates (2026)',
                desc: 'A broader look at free certified courses across all topics and platforms, not just Alison.',
                href: '/free-courses-with-certificates',
              },
              {
                title: 'Best Free AI Courses for Beginners (2026)',
                desc: 'No coding required. Start learning Artificial Intelligence and Generative AI for free today.',
                href: '/free-ai-courses-for-beginners',
              },
              {
                title: 'Best Free Courses for Data Analysts (2026)',
                desc: 'Excel, SQL, Python, and Power BI, the complete data analyst learning path, all free.',
                href: '/free-courses-for-data-analysts',
              },
              {
                title: 'Best Free Business Courses Online (2026)',
                desc: 'Project management, Lean Six Sigma, GDPR, and economic strategy. All CPD-accredited and free.',
                href: '/free-business-courses',
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
          <p className="text-gray-500 mb-8">Browse every free Alison course we list, organised by field.</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'IT & Technology', href: '/category/it' },
              { label: 'Software Development', href: '/category/software-engineering' },
              { label: 'Business & Management', href: '/category/business' },
              { label: 'Accounting & Finance', href: '/category/accounting' },
              { label: 'Digital Marketing', href: '/category/marketing' },
              
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
            Ready to Earn Your Alison Certificate?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Choose a course, start today, and complete it. Consistent, small steps lead to real career progress , 
            and with Alison, the only thing standing between you and a certificate is the time you put in.
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
