import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { courses } from '@/data/courses';
import { categories } from '@/data/categories';
import CourseCarousel from '@/components/CourseCarousel';
import NewsletterBanner from '@/components/NewsletterBanner';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Free Online Courses by Subject Area (2026) | Graduates Hub',
  description:
    'Browse free online courses across IT, Software Engineering, Business, Accounting, and Marketing. Every subject area is curated by a named specialist and updated for 2026.',
  alternates: { canonical: `${SITE_URL}/categories` },
  openGraph: {
    title: 'Free Online Courses by Subject Area (2026) | Graduates Hub',
    description:
      'Browse free online courses across IT, Software Engineering, Business, Accounting, and Marketing. Every subject area is curated by a named specialist and updated for 2026.',
    url: `${SITE_URL}/categories`,
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Free Online Course Categories',
  description: 'Subject areas covered by Graduates Hub, each curated by a named specialist.',
  itemListElement: categories.map((cat, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: cat.name,
    url: `${SITE_URL}/category/${cat.id}`,
    description: cat.description,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'All Categories', item: `${SITE_URL}/categories` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Online Courses by Subject Area (2026)',
  url: `${SITE_URL}/categories`,
  description: 'Browse free online courses across IT, Software Engineering, Business, Accounting, and Marketing. Every subject area is curated by a named specialist and updated for 2026.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
  breadcrumb: breadcrumbSchema,
};

const CATEGORY_META: Record<string, {
  topSkill: string;
  bullets: string[];
  guideHref?: string;
  guideLabel?: string;
  accentClass: string;
}> = {
  it: {
    topSkill: 'Manage networks, secure systems, and work with enterprise IT infrastructure',
    bullets: [
      'Network administration, LAN architecture, and ITIL 4 service management',
      'Cybersecurity compliance, CISSP preparation, and DORA digital resilience',
      'Applied AI, machine learning, and database administration fundamentals',
    ],
    guideHref: '/free-ai-courses-for-beginners',
    guideLabel: 'Free AI Courses Guide',
    accentClass: 'bg-blue-50 border-blue-200',
  },
  'software-engineering': {
    topSkill: 'Build web apps, write code, and ship software using modern engineering practices',
    bullets: [
      'Web and app development with HTML, CSS, JavaScript, Python, PHP, and Swift',
      'Agile, Scrum, and DevOps for delivering software reliably',
      'Software testing, quality assurance, and systems architecture',
    ],
    guideHref: '/blog/how-to-become-a-self-taught-web-developer-for-free-in-2026',
    guideLabel: 'Self-Taught Developer Guide',
    accentClass: 'bg-violet-50 border-violet-200',
  },
  business: {
    topSkill: 'Plan projects, improve processes, and navigate compliance',
    bullets: [
      'Project management using Agile, Scrum, and Lean Six Sigma',
      'Regulatory compliance: GDPR, AML, and ISO auditing standards',
      'Economic strategy, sustainable development, and AI in business',
    ],
    guideHref: '/free-business-courses',
    guideLabel: 'Free Business Courses Guide',
    accentClass: 'bg-amber-50 border-amber-200',
  },
  accounting: {
    topSkill: 'Read financial statements, manage payroll, and track business money',
    bullets: [
      'Double-entry bookkeeping and financial statements',
      'Payroll processing and compliance fundamentals',
      'Financial analysis and management reporting',
    ],
    guideHref: '/free-courses-for-accounting-and-finance',
    guideLabel: 'Accounting & Finance Guide',
    accentClass: 'bg-teal-50 border-teal-200',
  },
  marketing: {
    topSkill: 'Drive traffic, convert leads, and grow brands online',
    bullets: [
      'SEO, content strategy, and organic growth',
      'Social media marketing and paid advertising',
      'Email marketing, analytics, and conversion optimisation',
    ],
    guideHref: '/free-digital-marketing-courses',
    guideLabel: 'Digital Marketing Guide',
    accentClass: 'bg-orange-50 border-orange-200',
  },
};

const DECISION_PATHS = [
  {
    goal: 'I want to build websites or software applications',
    detail: 'Web development, programming languages, agile and DevOps, testing, and systems architecture. Forty-four courses from beginner to advanced.',
    href: '/category/software-engineering',
    label: 'Browse Software Engineering',
  },
  {
    goal: 'I want to work in IT infrastructure or cybersecurity',
    detail: 'Networking, cybersecurity, database administration, applied AI, and IT service management. The skills behind the systems that developers build on top of.',
    href: '/category/it',
    label: 'Browse IT Courses',
  },
  {
    goal: 'I want to work in finance or accounting',
    detail: 'Bookkeeping, financial statements, payroll, and auditing. Build the skills that appear in every entry-level finance job listing.',
    href: '/category/accounting',
    label: 'Browse Accounting Courses',
  },
  {
    goal: 'I want to grow a brand or run marketing',
    detail: 'SEO, content strategy, social media, and conversion optimisation. The complete digital marketing skillset from scratch.',
    href: '/category/marketing',
    label: 'Browse Marketing Courses',
  },
  {
    goal: 'I want to manage projects or lead a business',
    detail: 'Project management, Agile, Lean Six Sigma, compliance, and economic strategy. Covers both operational and strategic business skills.',
    href: '/category/business',
    label: 'Browse Business Courses',
  },
];

export default function CategoriesPage() {
  const diplomaCourses = courses.filter(c => c.tag?.includes('Diploma')).sort((a, b) => b.rating - a.rating).slice(0, 10);
  const certificateCourses = courses.filter(c => c.tag === 'Certificate').sort((a, b) => b.rating - a.rating).slice(0, 10);
  const totalCourses = courses.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">All Categories</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-blue-50 border-b border-blue-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Updated for 2026</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight max-w-3xl leading-tight">
            Courses by Subject Area
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-3">
            Every subject area on Graduates Hub is curated by a named specialist with direct professional experience in that field.
            You will not find a generic list of courses here. Each category is deliberately scoped, regularly reviewed, and linked to real career outcomes.
          </p>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            We cover five fields: IT, Software Engineering, Business, Accounting, and Marketing.
            These are the areas where we have practitioners who can verify course quality.{' '}
            <Link href="/curation-policy" className="text-primary font-medium hover:text-blue-800 transition-colors">
              Read how we select courses
            </Link>
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-14 w-full">

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { value: `${categories.length}`, label: 'Subject Areas' },
            { value: `${totalCourses}+`, label: 'Free Courses' },
            { value: '2', label: 'Specialist Curators' },
            { value: '2026', label: 'Last Reviewed' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-primary mb-1">{value}</p>
              <p className="text-xs text-gray-500 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Which subject is right for you */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Which Subject is Right for You?</h2>
          <p className="text-gray-500 mb-6 text-sm">Pick the goal that best matches where you want to go.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DECISION_PATHS.map(({ goal, detail, href, label }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-3"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">If…</p>
                <p className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">{goal}</p>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">{detail}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-1">
                  {label} <ChevronRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Enriched category cards */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Browse All Subject Areas</h2>
          <p className="text-gray-500 mb-8 text-sm">Every category below links to a full course library, reviewed and updated for 2026.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map(item => {
              const Icon = item.icon;
              const meta = CATEGORY_META[item.id];
              const courseCount = courses.filter(c =>
                c.category.toLowerCase().includes(item.name.toLowerCase().replace(' courses', '')) ||
                c.category.toLowerCase() === item.id
              ).length;

              return (
                <div key={item.id} className={`rounded-xl border-2 p-6 ${meta?.accentClass ?? 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-extrabold text-gray-900 text-lg">{item.name}</h2>
                        {courseCount > 0 && (
                          <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                            {courseCount} courses
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                    </div>
                  </div>

                  {meta && (
                    <>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Top skill you will gain</p>
                      <p className="text-sm font-semibold text-gray-700 mb-4">{meta.topSkill}</p>
                      <ul className="flex flex-col gap-2 mb-5">
                        {meta.bullets.map(bullet => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      href={`/category/${item.id}`}
                      className="inline-flex items-center gap-1 bg-primary hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      Browse Courses <ChevronRight size={13} />
                    </Link>
                    {meta?.guideHref && (
                      <Link
                        href={meta.guideHref}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-800 transition-colors"
                      >
                        <BookOpen size={13} /> {meta.guideLabel}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why we cover these subjects */}
        <section className="mb-14 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Why We Cover These Five Subjects</h2>
          <div className="max-w-3xl space-y-4 text-gray-600 leading-relaxed">
            <p>
              Graduates Hub only publishes content in fields where we have a named specialist who can verify course quality.
              That is why you will find IT, Software Engineering, Business, Accounting, and Marketing on this page, and nothing else.
            </p>
            <p>
              We made a deliberate decision to remove Health, Languages, and Personal Development from our platform.
              Not because those fields lack value, but because we do not have qualified practitioners to vouch for course quality in those areas.
              Publishing in fields outside our expertise would make us no different from the generic course aggregators that flood search results with unreviewed lists.
            </p>
            <p>
              Every course that appears on Graduates Hub is reviewed against five criteria before it is listed:
              provider credibility, curriculum depth, certificate value, accessibility to learners without prior experience, and evidence of real learning outcomes.
              If a course does not meet those standards, it is not listed, regardless of how popular the platform is.
            </p>
            <div className="pt-2">
              <Link href="/curation-policy" className="inline-flex items-center gap-1.5 text-primary font-bold hover:text-blue-800 transition-colors text-sm">
                Read the full curation policy <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Diplomas section */}
        {diplomaCourses.length > 0 && (
          <section className="mb-14">
            <CourseCarousel
              courses={diplomaCourses}
              title="Top Diplomas"
              subtitle="Comprehensive programs covering a subject in depth, typically 10 to 30 hours. Better suited to career changers and those pursuing a specific specialisation."
            />
          </section>
        )}

        {/* Certificates section */}
        {certificateCourses.length > 0 && (
          <section className="mb-14">
            <CourseCarousel
              courses={certificateCourses}
              title="Top Certificates"
              subtitle="Focused, practical programs completed in 2 to 6 hours. Ideal for adding a specific skill to your profile or testing your interest in a field before committing to a diploma."
            />
          </section>
        )}

        {/* Bottom CTA */}
        <section className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">Not sure where to start?</h2>
            <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
              Our learning guides walk you through the best courses in each field, structured by experience level and career goal.
              Each guide is written by a specialist, not a content team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/guides" className="bg-white text-primary font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Browse All Guides
            </Link>
            <Link href="/search" className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Search Courses
            </Link>
          </div>
        </section>

      </main>

      <NewsletterBanner />
    </div>
  );
}
