import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ChevronRight, DollarSign } from 'lucide-react';
import { interviewPreps } from '@/data/interviewPrep';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'CV & Interview Prep: South African Job Market | Graduates Hub',
  description:
    'Field-specific CV tips and the most common interview questions for junior roles in South Africa. IT support, data analyst, web developer, accounting, marketing, and business analyst.',
  alternates: { canonical: `${SITE_URL}/interview-prep` },
  openGraph: {
    title: 'CV & Interview Prep: South African Job Market | Graduates Hub',
    description:
      'Field-specific CV tips and the most common interview questions for junior roles in South Africa. IT support, data analyst, web developer, accounting, marketing, and business analyst.',
    url: `${SITE_URL}/interview-prep`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'CV & Interview Prep', item: `${SITE_URL}/interview-prep` },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'CV & Interview Prep Guides',
  description: 'Field-specific CV tips and interview questions for South African junior roles.',
  numberOfItems: interviewPreps.length,
  itemListElement: interviewPreps.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.role,
    url: `${SITE_URL}/interview-prep/${p.id}`,
    description: p.description,
  })),
};

const CURATORS = {
  jason: { name: 'Jason Sadiki', photo: '/jason-sadiki.jpg' },
  ndulamiso: { name: 'Ndulamiso Mamburu', photo: '/ndulamiso-mamburu.jpg' },
};

const CATEGORY_BADGES: Record<string, string> = {
  it: 'IT & Technology',
  'software-engineering': 'Software Engineering',
  marketing: 'Marketing',
  accounting: 'Accounting',
  business: 'Business',
};

const CATEGORY_COLOURS: Record<string, string> = {
  it: 'bg-blue-50 text-blue-700 border-blue-100',
  'software-engineering': 'bg-violet-50 text-violet-700 border-violet-100',
  marketing: 'bg-pink-50 text-pink-700 border-pink-100',
  accounting: 'bg-amber-50 text-amber-700 border-amber-100',
  business: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

export default function InterviewPrepPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">CV & Interview Prep</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <FileText size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">CV & Interview Prep</h1>
            <p className="text-gray-500 mt-2 text-lg max-w-2xl">
              Role-specific CV advice and the real interview questions SA employers ask. Written by people who work in these fields and have sat on hiring panels.
            </p>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-6 mb-12 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 text-sm text-blue-700 max-w-2xl">
          Every guide covers the South African job market specifically: local tools, local salary ranges, and the questions SA hiring managers actually use.
          <Link href="/curation-policy" className="font-bold ml-1 underline underline-offset-2 hover:text-blue-900 transition-colors">
            How we curate →
          </Link>
        </div>

        {/* Prep Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewPreps.map((prep) => {
            const curators = Array.isArray(prep.curator) ? prep.curator : [prep.curator];
            const categoryColour = CATEGORY_COLOURS[prep.category] ?? 'bg-gray-50 text-gray-600 border-gray-200';
            return (
              <Link
                key={prep.id}
                href={`/interview-prep/${prep.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-4"
              >
                {/* Category badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${categoryColour}`}>
                    {CATEGORY_BADGES[prep.category] ?? prep.category}
                  </span>
                </div>

                {/* Role & description */}
                <div>
                  <h2 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors leading-snug">
                    {prep.role}
                  </h2>
                  <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                    <DollarSign size={13} className="text-gray-400 shrink-0" />
                    <span>{prep.salaryRange}</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="font-medium">{prep.questions.length} interview questions</span>
                  <span>{prep.cvTips.length} CV tips</span>
                </div>

                {/* Curator + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {curators.map((key) => (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          key={key}
                          src={CURATORS[key].photo}
                          alt={CURATORS[key].name}
                          className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {curators.map((k) => CURATORS[k].name.split(' ')[0]).join(' & ')}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-primary group-hover:underline">
                    View Guide →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cross-link to Career Roadmaps */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Want a full study plan too?</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Our Career Roadmaps pair with each of these prep guides. Get the step-by-step learning path and the interview prep in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/career-roadmaps"
              className="bg-primary hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Browse Career Roadmaps
            </Link>
            <Link
              href="/guides"
              className="bg-white border-2 border-primary text-primary hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View All Guides
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
