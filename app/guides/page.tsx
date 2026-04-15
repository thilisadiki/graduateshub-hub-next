import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, BookOpen, Users, RefreshCw, ArrowRight, ChevronRight } from 'lucide-react';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Online Course Guides for 2026 | Graduates Hub',
  description: 'Specialist-curated learning guides across tech, business, finance, and marketing. Every guide is written by a named expert, covers the best courses in that field, and is updated regularly.',
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: 'Online Course Guides for 2026 | Graduates Hub',
    description: 'Specialist-curated learning guides across tech, business, finance, and marketing. Every guide is written by a named expert, covers the best courses in that field, and is updated regularly.',
    url: `${SITE_URL}/guides`,
  },
};

const CURATORS = {
  jason: {
    name: 'Jason Sadiki',
    photo: '/jason-sadiki.jpg',
    short: 'SEO & Web Dev',
  },
  ndulamiso: {
    name: 'Ndulamiso Mamburu',
    photo: '/ndulamiso-mamburu.jpg',
    short: 'Accounting',
  },
} as const;

type CuratorKey = keyof typeof CURATORS;

interface Guide {
  title: string;
  badge: string;
  href: string;
  desc: string;
  curators: CuratorKey[];
  lastUpdated: string;
}

interface GuideGroup {
  label: string;
  blurb: string;
  guides: Guide[];
}

const GUIDE_GROUPS: GuideGroup[] = [
  {
    label: 'Tech & Development',
    blurb: 'Curated by Jason Sadiki, a Technical SEO Specialist and Web Developer with 7+ years building and optimising web products.',
    guides: [
      {
        title: 'Free Courses for Data Analysts',
        badge: 'Data',
        href: '/free-courses-for-data-analysts',
        desc: 'Excel, SQL, Python, and Power BI in one structured path. Everything you need to land your first analyst role without spending a cent.',
        curators: ['jason'],
        lastUpdated: 'Jan 2026',
      },
      {
        title: 'Free AI Courses for Beginners',
        badge: 'AI',
        href: '/free-ai-courses-for-beginners',
        desc: 'Generative AI, prompt engineering, and machine learning fundamentals. No coding background required. Start with the tools reshaping every industry.',
        curators: ['jason'],
        lastUpdated: 'Jan 2026',
      },
      {
        title: 'Free Courses for Software Developers',
        badge: 'Dev',
        href: '/free-courses-for-software-developers',
        desc: 'Web development, programming languages, DevOps, and software architecture. Structured by experience level so you know exactly where to start.',
        curators: ['jason'],
        lastUpdated: 'Jan 2026',
      },
    ],
  },
  {
    label: 'Business, Finance & Marketing',
    blurb: 'Curated by practitioners with direct professional experience, not content marketers picking courses from a spreadsheet.',
    guides: [
      {
        title: 'Free Business Courses',
        badge: 'Business',
        href: '/free-business-courses',
        desc: 'Project management, Lean Six Sigma, GDPR compliance, and economic strategy. Curated by a practising tax professional with real-world corporate experience.',
        curators: ['ndulamiso'],
        lastUpdated: 'Jan 2026',
      },
      {
        title: 'Free Courses for Accounting & Finance',
        badge: 'Finance',
        href: '/free-courses-for-accounting-and-finance',
        desc: 'Bookkeeping, financial statements, payroll, and auditing. Curated by an Accounting Science graduate who works at SARS. Not sourced from a generic list.',
        curators: ['ndulamiso'],
        lastUpdated: 'Jan 2026',
      },
      {
        title: 'Free Digital Marketing Courses',
        badge: 'Marketing',
        href: '/free-digital-marketing-courses',
        desc: 'SEO, content strategy, growth hacking, and conversion optimisation. Build a complete, employer-ready marketing skillset from scratch.',
        curators: ['jason'],
        lastUpdated: 'Jan 2026',
      },
    ],
  },
  {
    label: 'For Every Learner',
    blurb: 'Start here if you are new to online learning, exploring options, or looking for courses that come with a certificate you can actually use.',
    guides: [
      {
        title: 'Free Courses for Beginners',
        badge: 'Beginner',
        href: '/free-courses-for-beginners',
        desc: 'Zero experience needed. The best starting point if you are new to online learning, switching careers, or unsure where to begin.',
        curators: ['jason', 'ndulamiso'],
        lastUpdated: 'Jan 2026',
      },
      {
        title: 'Free Courses with Certificates',
        badge: 'Popular',
        href: '/free-courses-with-certificates',
        desc: 'Top-rated courses that issue a verifiable certificate on completion. Ranked by employer recognition across IT, business, and marketing.',
        curators: ['jason', 'ndulamiso'],
        lastUpdated: 'Jan 2026',
      },
      {
        title: 'Best Alison Courses with Certificates',
        badge: 'Alison',
        href: '/best-alison-courses-with-certificates',
        desc: 'CPD-accredited diplomas and certificates from Alison. Free to study, globally recognised, and available to anyone with no prerequisites.',
        curators: ['jason'],
        lastUpdated: 'Jan 2026',
      },
    ],
  },
  {
    label: 'Career & Jobs',
    blurb: 'Practical guides for SA graduates navigating the job market — from landing your first role to building a focused career path.',
    guides: [
      {
        title: 'How to Get Your First Graduate Job in SA',
        badge: 'Careers',
        href: '/first-graduate-job-south-africa',
        desc: 'A step-by-step framework for SA graduates: fix your CV, close your skills gaps, prepare for interviews, and navigate the hidden job market.',
        curators: ['jason'],
        lastUpdated: 'Jan 2026',
      },
    ],
  },
];

const ALL_GUIDES = GUIDE_GROUPS.flatMap(g => g.guides);

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Online Course Guides for 2026',
  description: 'Specialist-curated learning guides across tech, business, finance, and marketing.',
  numberOfItems: ALL_GUIDES.length,
  itemListElement: ALL_GUIDES.map((guide, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: guide.title,
    url: `${SITE_URL}${guide.href}`,
    description: guide.desc,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Online Course Guides for 2026',
  url: `${SITE_URL}/guides`,
  description: 'Specialist-curated learning guides across tech, business, finance, and marketing. Every guide is written by a named expert, covers the best courses in that field, and is updated regularly.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
  breadcrumb: breadcrumbSchema,
};

const START_PATHS = [
  {
    condition: "You're new to online learning",
    action: 'Start with the Beginners guide. It explains how free courses work, what certificates are worth pursuing, and which platforms to trust.',
    href: '/free-courses-for-beginners',
    label: 'Free Courses for Beginners',
  },
  {
    condition: 'You know your field, you need courses',
    action: 'Go straight to the guide for your subject area. Each one is structured by topic and experience level so you can skip to what you actually need.',
    href: '/categories',
    label: 'Browse by Subject Area',
  },
  {
    condition: 'You want a certificate employers will recognise',
    action: 'The certificates guide ranks courses by credential quality, provider reputation, and how often they appear in job listings.',
    href: '/free-courses-with-certificates',
    label: 'Free Courses with Certificates',
  },
];

function CuratorPips({ curators }: { curators: CuratorKey[] }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex -space-x-1.5">
        {curators.map((key) => (
          <div key={key} className="relative w-6 h-6 shrink-0">
            <Image src={CURATORS[key].photo} alt={CURATORS[key].name} fill sizes="24px" className="rounded-full object-cover ring-2 ring-white" />
          </div>
        ))}
      </div>
      <span className="text-xs text-gray-400">
        {curators.map(k => CURATORS[k].name.split(' ')[0]).join(' & ')}
      </span>
    </div>
  );
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Guides</span>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-14 w-full">

        {/* Page Hero */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4">
            {ALL_GUIDES.length} Guides · Updated 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Online Course Guides for 2026
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Every guide on this page was built by a subject-matter specialist, not an algorithm.
            Each one covers a specific field, explains which courses are worth your time, and tells you exactly who curated it and why.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We do not publish guides outside our areas of expertise. That is why you will not find health, language, or personal development guides here. Only fields where we have practitioners we trust.{' '}
            <Link href="/curation-policy" className="text-primary font-medium hover:text-blue-800 transition-colors">
              Read our curation policy →
            </Link>
          </p>
        </div>

        {/* Where Should I Start */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Where Should I Start?</h2>
          <p className="text-gray-500 mb-6">Not sure which guide fits your situation? Pick the path that sounds most like you.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {START_PATHS.map(({ condition, action, href, label }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-3"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">If…</p>
                <p className="font-bold text-gray-900 text-sm leading-snug group-hover:text-primary transition-colors">{condition}</p>
                <p className="text-xs text-gray-500 leading-relaxed flex-grow">{action}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-1">
                  {label} <ChevronRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Guide Groups */}
        {GUIDE_GROUPS.map((group) => (
          <section key={group.label} className="mb-14">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{group.label}</h2>
              <p className="text-gray-500 text-sm max-w-2xl">{group.blurb}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold text-primary bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full shrink-0">
                      {guide.badge}
                    </span>
                    <span className="text-xs text-gray-400 shrink-0 mt-1">Updated {guide.lastUpdated}</span>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                      {guide.title}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">{guide.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <CuratorPips curators={guide.curators} />
                    <span className="flex items-center gap-1 text-xs font-bold text-primary">
                      Read guide <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Career Roadmaps CTA */}
        <section className="mb-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div>
              <span className="text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full mb-3 inline-block">New</span>
              <h2 className="text-2xl font-extrabold mb-2">Not sure which courses to take?</h2>
              <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
                Our Career Roadmaps go further than guides. Each one maps the full path from zero experience to job-ready, with specific stages, free courses at every step, certifications worth getting, and portfolio project ideas.
              </p>
            </div>
            <Link
              href="/career-roadmaps"
              className="shrink-0 bg-white text-primary hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              Explore Career Roadmaps →
            </Link>
          </div>
        </section>

        {/* How Our Guides Are Different */}
        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 lg:p-12 mb-14">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">How Our Guides Are Different</h2>
            <p className="text-gray-500">
              There are hundreds of "best free courses" lists online. Most are written by content teams with no background in the subject.
              Here is what we do differently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Users size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900">Specialist-curated</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Each guide is owned by a named person with direct, verifiable experience in that field, not a freelance writer following a brief.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900">No filler courses</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every course on every list is manually reviewed against five criteria: provider credibility, curriculum depth, certificate value, accessibility, and learner outcome data.{' '}
                <Link href="/curation-policy" className="text-primary font-medium hover:text-blue-800 transition-colors">
                  See our standards
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <RefreshCw size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900">Updated regularly</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Courses go offline, platforms change pricing, and new options emerge. Every guide is reviewed every 6 months.
                You will always see the last-updated date at the top of each page.
              </p>
            </div>
          </div>
        </section>

        {/* Curator Spotlight */}
        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-8 mb-14">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
            The people behind these guides are not content marketers. They are practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="relative w-14 h-14 shrink-0">
                <Image src="/jason-sadiki.jpg" alt="Jason Sadiki" fill sizes="56px" className="rounded-full object-cover ring-2 ring-blue-100" />
              </div>
              <div>
                <p className="font-extrabold text-gray-900">Jason Sadiki</p>
                <p className="text-xs text-gray-500 mb-2">Technical SEO Specialist & Web Developer · 7+ years</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">
                  Curates all IT, software development, data, AI, and marketing guides. Founded Graduates Hub to make quality learning resources accessible to South African graduates.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['IT & Tech', 'Software Dev', 'Data', 'AI', 'Marketing'].map(tag => (
                    <span key={tag} className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-px bg-gray-100 self-stretch" />
            <div className="flex items-start gap-4 flex-1">
              <div className="relative w-14 h-14 shrink-0">
                <Image src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu" fill sizes="56px" className="rounded-full object-cover ring-2 ring-teal-100" />
              </div>
              <div>
                <p className="font-extrabold text-gray-900">Ndulamiso Mamburu</p>
                <p className="text-xs text-gray-500 mb-2">Accounting Science Graduate · SARS</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">
                  Curates all accounting, finance, and business guides. Currently pursuing a degree in Taxation while working at the South African Revenue Service.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['Accounting', 'Finance', 'Taxation', 'Business'].map(tag => (
                    <span key={tag} className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-gray-400">Want to understand exactly how courses are selected?</p>
            <Link href="/curation-policy" className="text-xs font-bold text-primary hover:text-blue-800 transition-colors">
              Read the Curation Policy →
            </Link>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-primary rounded-2xl p-8 flex flex-col gap-3">
            <BookOpen size={28} className="text-blue-200" strokeWidth={1.5} />
            <h3 className="font-extrabold text-white text-lg">Looking for a specific course?</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Search across hundreds of free certified courses by topic, platform, or skill level.
            </p>
            <Link
              href="/search"
              className="mt-2 self-start bg-white text-primary font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Search Free Courses →
            </Link>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-3 shadow-sm">
            <Users size={28} className="text-gray-300" strokeWidth={1.5} />
            <h3 className="font-extrabold text-gray-900 text-lg">Don&apos;t see a guide for your field?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We only publish guides for fields where we have a qualified curator. If your field is missing, let us know. We take requests seriously.
            </p>
            <Link
              href="/contact"
              className="mt-2 self-start border-2 border-gray-200 text-gray-700 font-bold text-sm px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Send a Request →
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
