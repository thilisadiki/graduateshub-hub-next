import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, BarChart2, ChevronRight, ArrowRight } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Free Courses for Digital Marketing Careers (2026)',
  description:
    'Discover the best free digital marketing courses in 2026. Learn SEO, content marketing, paid ads, conversion strategy, and growth hacking, all free, all beginner-friendly.',
  alternates: { canonical: `${SITE_URL}/free-digital-marketing-courses` },
  openGraph: {
    title: 'Best Free Courses for Digital Marketing Careers (2026) | Graduates Hub',
    description:
      'Discover the best free digital marketing courses in 2026. Learn SEO, content marketing, paid ads, conversion strategy, and growth hacking, all free, all beginner-friendly.',
    url: `${SITE_URL}/free-digital-marketing-courses`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Free Courses for Digital Marketing Careers (2026)',
  url: `${SITE_URL}/free-digital-marketing-courses`,
  datePublished: '2025-01-01',
  dateModified: '2026-01-01',
  description: 'Discover the best free digital marketing courses in 2026. Learn SEO, content marketing, paid ads, conversion strategy, and growth hacking, all free, all beginner-friendly.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    { '@type': 'ListItem', position: 3, name: 'Free Digital Marketing Courses', item: `${SITE_URL}/free-digital-marketing-courses` },
  ],
};

const courseCategories = [
  {
    label: 'Marketing Fundamentals',
    slug: 'marketing',
    description: 'Understand the strategy, channels, and core concepts behind digital marketing before you specialise.',
    ids: ['basic-concepts-of-digital-marketing', 'digital-marketing-overview', 'digital-marketing'],
  },
  {
    label: 'Social Media Marketing',
    slug: 'marketing',
    description: 'Build, manage, and grow brand presence across Facebook, Instagram, and every major social platform.',
    ids: ['diploma-social-media-strategy', 'social-media-marketing-course', 'facebook-marketing-foundations'],
  },
  {
    label: 'Content Marketing & SEO',
    slug: 'marketing',
    description: 'Create content that actually gets found, covering YouTube SEO, content strategy, and Instagram growth.',
    ids: ['youtube-marketing-seo', 'content-creation-strategy', 'instagram-marketing-hashtags'],
  },
  {
    label: 'Growth & Conversion',
    slug: 'marketing',
    description: 'Take your skills further, learn how to grow audiences fast and turn traffic into paying customers.',
    ids: ['growth-hacking-techniques-for-digital-marketing', 'using-digital-marketing-to-convert-customers'],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'High Demand Across Every Industry',
    body: 'Every business, from startups to corporations, needs digital marketers. Demand is growing faster than supply.',
  },
  {
    icon: CheckCircle2,
    title: 'No Degree Required',
    body: 'Digital marketing is one of the few career paths where demonstrated skills outweigh formal qualifications.',
  },
  {
    icon: Clock,
    title: 'Fast Entry Point',
    body: 'You can go from zero knowledge to job-ready skills in a matter of weeks with focused, structured study.',
  },
  {
    icon: Award,
    title: 'Earn a Certificate',
    body: 'Every course includes a downloadable certificate, proof of your skills you can add to your CV and LinkedIn.',
  },
  {
    icon: BarChart2,
    title: 'Multiple Career Paths',
    body: 'Digital marketing branches into SEO, content, paid ads, social media, and analytics, you choose where to specialise.',
  },
  {
    icon: ChevronRight,
    title: 'Remote Work Friendly',
    body: 'Digital marketing roles are among the most remote-friendly in the world. Build a career that works anywhere.',
  },
];

const skills = [
  { skill: 'SEO', desc: 'Ranking content on Google through keyword research and on-page optimisation', level: 'Foundation' },
  { skill: 'Content Marketing', desc: 'Creating blogs, videos, and assets that attract and convert audiences', level: 'Foundation' },
  { skill: 'Social Media', desc: 'Growing and managing brand presence across platforms like Instagram and LinkedIn', level: 'Foundation' },
  { skill: 'Email Marketing', desc: 'Building subscriber lists, writing campaigns, and automating sequences', level: 'Foundation' },
  { skill: 'Paid Advertising (PPC)', desc: 'Running and optimising Google Ads and Meta campaigns on a budget', level: 'Intermediate' },
  { skill: 'Analytics & Reporting', desc: 'Reading Google Analytics data to measure performance and prove ROI', level: 'Intermediate' },
  { skill: 'Conversion Optimisation', desc: 'Testing landing pages and copy to increase the percentage of visitors who buy', level: 'Intermediate' },
  { skill: 'Growth Hacking', desc: 'Using data-driven experiments to achieve rapid audience and revenue growth', level: 'Advanced' },
];

const careerPaths = [
  { role: 'Digital Marketing Assistant', category: 'Entry Level', href: '/category/marketing' },
  { role: 'SEO Specialist', category: 'Entry to Mid Level', href: '/category/marketing' },
  { role: 'Social Media Manager', category: 'Entry to Mid Level', href: '/category/marketing' },
  { role: 'Content Marketer', category: 'Entry to Mid Level', href: '/category/marketing' },
  { role: 'PPC Specialist', category: 'Mid Level', href: '/category/marketing' },
  { role: 'Digital Marketing Manager', category: 'Senior Level', href: '/category/marketing' },
];

const faqs = [
  {
    q: 'Do I need any experience to start a digital marketing course?',
    a: 'No, every course on this page is designed for beginners. The fundamentals courses assume no prior knowledge of marketing or business. You simply need an internet connection and a willingness to learn.',
  },
  {
    q: 'Can I get a job in digital marketing with a free certificate?',
    a: 'Yes, especially at the entry level. Digital marketing is one of the most portfolio-driven careers, what you have done matters more than where you studied. A free certificate combined with a small personal project (a blog, a managed social account, a mock ad campaign) is a credible foundation for an entry-level application.',
  },
  {
    q: 'What is the difference between digital marketing and growth hacking?',
    a: 'Digital marketing is the broader discipline, it covers SEO, content, email, social, and paid channels. Growth hacking is a specific methodology within digital marketing, focused on rapid, data-driven experimentation to achieve explosive audience or revenue growth. It\'s typically used in tech startups. Start with digital marketing fundamentals before attempting growth hacking courses.',
  },
  {
    q: 'Which digital marketing skill should I learn first?',
    a: 'Start with a broad overview course to understand how the different channels (SEO, content, paid ads, social, email) relate to each other. Once you have that strategic picture, choose the one specialisation that interests you most and go deep. Most entry-level roles focus on one or two channels, not all of them.',
  },
  {
    q: 'How long does it take to become job-ready in digital marketing?',
    a: 'With focused part-time study, most people can complete the foundational courses in two to four weeks. Becoming genuinely job-ready, including building a small portfolio of real work, typically takes two to three months. Digital marketing rewards people who practice while they learn, so starting a blog or managing a social account alongside your courses dramatically accelerates the process.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function FreeDigitalMarketingCoursesPage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Free Digital Marketing Courses 2026',
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
          <Link href="/category/marketing" className="hover:text-primary transition-colors">Digital Marketing</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Free Digital Marketing Courses</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Free Courses for Digital Marketing Careers (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Digital marketing is one of the most accessible and in-demand career paths available today, and you
            do not need a degree to break in. These free courses cover everything from strategy and SEO to
            conversion optimisation and growth hacking, all designed for beginners.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              No Degree Required
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Award size={16} className="text-primary" />
              Free Certificates
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Clock size={16} className="text-gray-500" />
              Self-Paced
            </div>
          </div>
          <AuthorByline authors={['jason']} lastUpdated="January 2026" />
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Why digital marketing */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Choose a Career in Digital Marketing?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Digital marketing is growing faster than the talent pool. Here is why it is one of the smartest
            career moves you can make right now.
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
        {courseCategories.map((cat, i) => {
          const catCourses = getCoursesByIds(cat.ids);
          if (catCourses.length === 0) return null;
          return (
            <section key={`${cat.label}-${i}`} className="mb-20">
              <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{cat.label}</h2>
                  <p className="text-gray-500 mt-1">{cat.description}</p>
                </div>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-primary font-bold hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap text-sm"
                >
                  See all marketing courses <ChevronRight size={16} />
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

        {/* Carousel */}
        {topRatedCarousel.length > 0 && (
          <div className="mb-20">
            <CourseCarousel
              courses={topRatedCarousel}
              title="More Top-Rated Free Courses"
              subtitle="Expand your skill set beyond marketing, all free to start"
            />
          </div>
        )}

        {/* Key Skills */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Key Skills You Need for a Digital Marketing Career
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Digital marketing is a broad field. These are the core skills employers expect, organised by the
            level at which you need them.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>Skill</span>
              <span className="col-span-1 hidden sm:block">What It Means</span>
              <span className="text-right">Level</span>
            </div>
            <div className="divide-y divide-gray-50">
              {skills.map(({ skill, desc, level }) => (
                <div key={skill} className="grid grid-cols-3 px-6 py-4 items-center gap-4">
                  <span className="font-bold text-gray-900 text-sm">{skill}</span>
                  <span className="text-gray-500 text-sm leading-snug col-span-1 hidden sm:block">{desc}</span>
                  <span className={`text-right justify-self-end text-xs font-bold px-2.5 py-1 rounded-full ${
                    level === 'Foundation' ? 'bg-green-50 text-green-700' :
                    level === 'Intermediate' ? 'bg-blue-50 text-primary' :
                    'bg-purple-50 text-purple-700'
                  }`}>{level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Digital Marketing Career Progression</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl">
              Digital marketing has a clear, achievable progression, from entry-level assistant to senior
              strategist. Here is what the path typically looks like.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-stretch">
              {[
                { stage: 'Start', role: 'Digital Marketing Assistant', detail: 'Apply fundamentals across multiple channels under supervision', time: '0 to 1 year' },
                { stage: 'Specialise', role: 'SEO / Social / PPC Specialist', detail: 'Go deep on one or two channels and own campaigns independently', time: '1 to 3 years' },
                { stage: 'Lead', role: 'Digital Marketing Manager', detail: 'Manage a team, set strategy, and report on revenue impact', time: '3 to 5 years' },
                { stage: 'Strategise', role: 'Growth Marketer / Director', detail: 'Own the full growth function, audience, acquisition, and retention', time: '5+ years' },
              ].map(({ stage, role, detail, time }, i, arr) => (
                <div key={stage} className="flex md:flex-col items-start md:items-stretch gap-4 md:gap-0 flex-1">
                  <div className="bg-white/10 rounded-xl p-5 flex-1 backdrop-blur-sm">
                    <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">{stage}</p>
                    <p className="font-bold text-white mb-1">{role}</p>
                    <p className="text-blue-100 text-xs leading-relaxed mb-3">{detail}</p>
                    <p className="text-xs text-blue-200 font-semibold">{time}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex md:justify-center items-center md:py-2 shrink-0">
                      <ArrowRight size={18} className="text-blue-300 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            How to Choose the Right Digital Marketing Course
          </h2>
          <p className="text-gray-500 mb-10">
            Three steps to avoid overwhelm and build in the right order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">1</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Start Broad</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Begin with a general digital marketing overview course before picking a specialisation. Understanding
                how SEO, content, email, and paid ads all connect to each other will make every subsequent
                course far more useful.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">2</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Pick a Specialisation</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Prefer writing? Focus on content marketing and SEO.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Prefer data? Head toward paid ads and analytics.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" /> Prefer people and creativity? Social media and community management.</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-lg mb-4 shrink-0">3</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Practice While You Learn</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Digital marketing is a hands-on discipline. Employers respond to what you have done, not just
                what you have studied. Start a blog, manage a social account, or run a small ad campaign with
                a minimal budget, even unpaid projects build a portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Roles You Can Work Towards
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            These are the realistic entry and mid-level roles that digital marketing courses directly prepare you for.
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
                title: 'Best Free Courses for Beginners (2026)',
                desc: 'Zero experience needed. Build skills from scratch across tech, business, and marketing.',
                href: '/free-courses-for-beginners',
              },
              {
                title: 'Best Free Courses for Data Analysts (2026)',
                desc: 'Excel, SQL, Python, and Power BI, the full data analyst learning path.',
                href: '/free-courses-for-data-analysts',
              },
              {
                title: 'Best Free AI Courses for Beginners (2026)',
                desc: 'Understand AI and Generative AI without any coding background.',
                href: '/free-ai-courses-for-beginners',
              },
              {
                title: 'Best Free Business Courses Online (2026)',
                desc: 'Project management, Lean Six Sigma, and business strategy skills that complement a marketing career.',
                href: '/free-business-courses',
              },
              {
                title: 'Best Free Courses with Certificates (2026)',
                desc: 'Top-rated certified courses across IT, Business, Marketing, and Finance.',
                href: '/free-courses-with-certificates',
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
              { label: 'Digital Marketing', href: '/category/marketing' },
              { label: 'IT & Technology', href: '/category/it' },
              { label: 'Software Development', href: '/category/software-engineering' },
              { label: 'Business & Management', href: '/category/business' },
              { label: 'Accounting & Finance', href: '/category/accounting' },
              
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
            Ready to Start Your Digital Marketing Career?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Start with the fundamentals, pick a specialisation, and build something real while you study.
            Consistent practice, even on small personal projects, is what separates candidates who get hired
            from those who don't.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/marketing"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse Marketing Courses
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
