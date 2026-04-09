import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, TrendingUp, Award, Zap, Brain, ChevronRight } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';
import CourseCard from '@/components/CourseCard';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Best Free AI Courses for Beginners (2026)',
  description:
    'Discover the best free AI courses for beginners in 2026. No prior experience required. Start learning Artificial Intelligence, Machine Learning, and Generative AI, all free with certificates.',
  alternates: { canonical: `${SITE_URL}/free-ai-courses-for-beginners` },
  openGraph: {
    title: 'Best Free AI Courses for Beginners (2026) | Graduates Hub',
    description:
      'Discover the best free AI courses for beginners in 2026. No prior experience required. Start learning Artificial Intelligence, Machine Learning, and Generative AI, all free with certificates.',
    url: `${SITE_URL}/free-ai-courses-for-beginners`,
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Free AI Courses for Beginners (2026)',
  url: `${SITE_URL}/free-ai-courses-for-beginners`,
  datePublished: '2025-01-01',
  dateModified: '2026-01-01',
  description: 'Discover the best free AI courses for beginners in 2026. No prior experience required. Start learning Artificial Intelligence, Machine Learning, and Generative AI, all free with certificates.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
};

const courseCategories = [
  {
    label: 'AI Fundamentals',
    description: 'Start with the core concepts, what AI is, how it works, and where it is headed.',
    ids: ['diploma-fundamentals-ai', 'diploma-applied-generative-ai', 'machine-learning-with-ai'],
  },
  {
    label: 'Tech Skills for AI',
    description: 'Build the foundational data and programming skills that underpin every AI system.',
    ids: ['python-flask-docker', 'databases-dml-sql-server', 'diploma-foundations-cognitive-robotics'],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Future-Proof Skill',
    body: 'AI is reshaping every industry. Learning it now puts you ahead of the curve.',
  },
  {
    icon: Brain,
    title: 'No Technical Background Needed',
    body: 'Beginner courses start from zero. You do not need a degree or coding experience to start.',
  },
  {
    icon: Zap,
    title: 'Opportunities Across Industries',
    body: 'From healthcare to finance to marketing, AI skills are in demand everywhere.',
  },
  {
    icon: Award,
    title: 'Earn a Certificate',
    body: 'Complete your course and download a certificate to add to your CV or LinkedIn.',
  },
  {
    icon: Clock,
    title: 'Self-Paced Learning',
    body: 'Study at your own pace. Most beginner AI courses take just a few hours to complete.',
  },
  {
    icon: CheckCircle2,
    title: '100% Free to Start',
    body: 'Every AI course on Graduates Hub is free to begin. No payment required.',
  },
];

const careerPaths = [
  { role: 'Data Analyst', detail: 'Interpret data using AI-assisted tools and dashboards.' },
  { role: 'AI Specialist', detail: 'Deploy and manage AI systems within an organisation.' },
  { role: 'Business Intelligence Analyst', detail: 'Use AI to surface insights from business data.' },
  { role: 'Automation Specialist', detail: 'Design workflows that use AI to reduce manual effort.' },
  { role: 'Machine Learning Engineer', detail: 'Build and train models, requires further technical study.' },
  { role: 'Prompt Engineer', detail: 'Design effective prompts for generative AI tools and platforms.' },
];

const faqs = [
  {
    q: 'Do I need coding experience to learn AI?',
    a: 'Not at the beginning. Many beginner AI courses focus on concepts, real-world applications, and tools rather than programming. However, learning Python later will significantly expand your options and help you build real AI projects.',
  },
  {
    q: 'How long does it take to learn AI basics?',
    a: 'A foundational AI certificate typically takes 3 to 10 hours to complete. If you study for an hour a day, you can finish a beginner course within one to two weeks. Diplomas covering broader AI topics take longer, usually 10 to 15 hours.',
  },
  {
    q: 'Are free AI certificates recognised by employers?',
    a: 'Increasingly, yes. Employers value demonstrated skills and initiative. Completing a free AI course and earning a certificate shows you are proactive about learning in one of the most in-demand areas in tech. It is especially impactful in non-technical roles where AI literacy is becoming an expectation.',
  },
  {
    q: 'What is the difference between AI, Machine Learning, and Generative AI?',
    a: 'Artificial Intelligence is the broad field of building systems that simulate human intelligence. Machine Learning is a subset of AI where systems learn from data without being explicitly programmed. Generative AI (like ChatGPT or image generators) is a subset of Machine Learning that creates new content (text, images, code) based on patterns in training data.',
  },
  {
    q: 'Which AI course should I start with?',
    a: 'If you have no technical background, start with the Diploma in Fundamentals of Artificial Intelligence, it covers concepts before tools. If you already have some tech experience, the Diploma in Applied Generative AI is a strong next step. Python and data skills can run alongside your AI learning at any stage.',
  },
];

function getCoursesByIds(ids: string[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export default function FreeAICoursesForBeginnersPage() {
  const allFeatured = courseCategories.flatMap((cat) => getCoursesByIds(cat.ids));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Free AI Courses for Beginners 2026',
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
        (c.subCategory === 'Software Engineering' || c.subCategory === 'Database & Software Development') &&
        c.rating >= 4.7 &&
        !allFeatured.find((f) => f.id === c.id)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

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
          <span className="text-gray-900 font-medium">Free AI Courses for Beginners</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Best Free AI Courses for Beginners (2026)
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
            Artificial Intelligence is no longer a future skill. It is a present-day advantage. If you are
            starting from scratch, this guide covers the best free AI courses for beginners in 2026, with no
            prior experience required. Understand AI concepts, tools, and real-world applications, and earn a
            certificate along the way.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              No Prior Experience Needed
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Award size={16} className="text-primary" />
              Free Certificates Included
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              <Clock size={16} className="text-gray-500" />
              Start in Minutes
            </div>
          </div>
          <AuthorByline authors={['jason']} lastUpdated="January 2026" />
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">

        {/* Why Learn AI */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Why Learn AI as a Beginner?</h2>
          <p className="text-gray-500 mb-10 text-lg">
            AI is one of the fastest-growing fields globally, and you do not need a technical background to get
            started.
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
                  href="/category/it"
                  className="text-primary font-bold hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap text-sm"
                >
                  See all IT &amp; AI courses <ChevronRight size={16} />
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

        {/* Related tech courses carousel */}
        {relatedCarousel.length > 0 && (
          <div className="mb-20">
            <CourseCarousel
              courses={relatedCarousel}
              title="More Tech & Development Courses"
              subtitle="Expand your skills with highly rated courses in software and data"
            />
          </div>
        )}

        {/* Do You Need Coding */}
        <section className="mb-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Do You Need Coding to Learn AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not at the beginning. Many beginner AI courses require no coding knowledge at all. They
                focus on concepts, applications, and understanding how AI systems work at a high level.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This makes them ideal for business professionals, marketers, managers, and anyone curious about
                how AI fits into their field.
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-4">However, learning Python later will:</p>
              <ul className="space-y-3">
                {[
                  'Open up hands-on machine learning and data science roles',
                  'Let you build and test your own AI projects',
                  'Significantly increase your earning potential in tech',
                  'Prepare you for more advanced AI and ML courses',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">How to Choose the Right AI Course</h2>
          <p className="text-blue-100 mb-10">If you are new to AI, your starting point matters. Here is how to choose.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Start with Fundamentals',
                body: 'Pick a course that explains concepts before tools. Understanding what AI is and why it works prepares you to learn faster later.',
              },
              {
                step: '2',
                title: 'Decide Your Path',
                body: 'Non-technical learner? Focus on AI for business and strategy. Tech-oriented? Pair a fundamentals course with Python and data skills.',
              },
              {
                step: '3',
                title: 'Keep It Simple First',
                body: 'Avoid overly complex courses early on. Build confidence with one beginner certificate before moving to machine learning or data science.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-9 h-9 bg-white text-primary rounded-full flex items-center justify-center font-extrabold text-lg mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Career Paths You Can Explore with AI
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Starting with free AI courses can open doors to a wide range of roles, from entry-level to
            specialist positions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPaths.map(({ role, detail }) => (
              <div key={role} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <p className="font-bold text-gray-900 text-lg mb-1">{role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/category/it"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors"
            >
              Browse all IT &amp; AI courses <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Best Free Online Courses with Certificates (2026)',
                desc: 'The complete guide to free certified courses across all fields.',
                href: '/free-courses-with-certificates',
              },
              {
                title: 'Browse All IT & AI Courses',
                desc: 'Every free IT and AI course we offer, organised by sub-category.',
                href: '/category/it',
              },
              {
                title: 'Software Development Courses',
                desc: 'Learn web development, databases, and engineering from scratch.',
                href: '/category/software-engineering',
              },
              {
                title: 'All Course Categories',
                desc: 'Explore every subject area available on Graduates Hub.',
                href: '/categories',
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
            Ready to Start Learning AI?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            AI can feel overwhelming at first, but the key is to start simple. Choose one beginner-friendly
            course, complete it, and build from there. Consistency matters more than complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/it"
              className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Browse AI & IT Courses
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
