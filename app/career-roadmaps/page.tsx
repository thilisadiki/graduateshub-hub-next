import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock, TrendingUp, ChevronRight, Map, CheckCircle2,
  BookOpen, Wrench, Award, FileText, HelpCircle, ArrowRight,
  Sparkles, ShieldCheck, Zap
} from 'lucide-react';
import { roadmaps } from '@/data/roadmaps';
import type { CareerRoadmap } from '@/types';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Career Roadmaps: How to Break Into Any Field (2026)',
  description:
    'Step-by-step career roadmaps for software engineering, cybersecurity, data analysis, UI/UX design, cloud DevOps, digital marketing, accounting, and business analysis. Free to follow with verified certificates.',
  alternates: { canonical: `${SITE_URL}/career-roadmaps` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Career Roadmaps: How to Break Into Any Field (2026) | Graduates Hub',
    description:
      'Step-by-step career roadmaps for software engineering, cybersecurity, data analysis, UI/UX design, cloud DevOps, digital marketing, accounting, and business analysis. Free to follow with verified certificates.',
    url: `${SITE_URL}/career-roadmaps`,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Career Roadmaps', item: `${SITE_URL}/career-roadmaps` },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Career Roadmaps',
  description: 'Step-by-step career roadmaps curated by working professionals.',
  numberOfItems: roadmaps.length,
  itemListElement: roadmaps.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `${SITE_URL}/career-roadmaps/${r.id}`,
    description: r.description,
  })),
};

const FAQS = [
  {
    q: 'Are these career roadmaps completely free to follow?',
    a: 'Yes, 100% free. Every stage in our career roadmaps links directly to free certified courses (from Google, Harvard edX, IBM, Alison, and Coursera financial aid options) alongside free practice portfolio tasks.',
  },
  {
    q: 'How long does it typically take to become job-ready using these roadmaps?',
    a: 'Most entry-level roadmaps take between 3 to 9 months of consistent study (around 8–12 hours per week). Each roadmap specifies a realistic time-to-job-ready benchmark based on industry hiring expectations.',
  },
  {
    q: 'Do I need a university degree to land a job using these roadmaps?',
    a: 'No. Over 80% of the roles featured in our roadmaps (including Data Analyst, Web Developer, Digital Marketer, IT Support, and UI/UX Designer) prioritize verifiable skills, portfolio projects, and technical certifications over traditional degree requirements.',
  },
  {
    q: 'How do Proof-of-Work portfolio badges help in job interviews?',
    a: 'Our portfolio tasks provide real-world business scenarios. When you submit a project, our automated system grades your submission against industry rubrics and issues a public, verifiable Badge of Competence with a unique URL that you can share on your CV and LinkedIn.',
  },
  {
    q: 'Can I switch careers using these roadmaps if I have zero background in tech or business?',
    a: 'Absolutely. Every roadmap begins at Stage 1 (Core Fundamentals), assuming zero prior experience. We build foundational terminology first before progressing to technical tools, hands-on projects, and interview questions.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const CURATORS = {
  jason: { name: 'Jason Sadiki', photo: '/jason-sadiki.jpg' },
  ndulamiso: { name: 'Ndulamiso Mamburu', photo: '/ndulamiso-mamburu.jpg' },
};

const DEMAND_COLOURS: Record<CareerRoadmap['demandLevel'], string> = {
  'Very High': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  High: 'bg-[#FFDF9C]/20 text-[#5a4000] border-[#D1C5B4]',
  Moderate: 'bg-amber-50 text-amber-700 border-amber-100',
};

const CATEGORY_BADGES: Record<string, string> = {
  it: 'IT & Technology',
  'software-engineering': 'Software Engineering',
  marketing: 'Marketing',
  accounting: 'Accounting',
  business: 'Business',
};

export default function CareerRoadmapsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-600 font-medium">Career Roadmaps</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <Map size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Career Roadmaps</h1>
            <p className="text-gray-500 mt-2 text-lg max-w-2xl">
              Step-by-step paths from zero experience to job-ready. Each roadmap is built around the exact skills employers test for, paired with free certified courses at every stage.
            </p>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-6 mb-10 bg-[#FFDF9C]/20 border border-[#D1C5B4] rounded-xl px-5 py-4 text-sm text-[#5a4000] max-w-2xl">
          Every roadmap is curated by a named specialist with real-world experience in that field, not generated from a generic list.
          <Link href="/curation-policy" className="font-bold ml-1 underline underline-offset-2 hover:text-[#261A00] transition-colors">
            How we curate →
          </Link>
        </div>

        {/* 1. Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {roadmaps.map((roadmap) => {
            const curators = Array.isArray(roadmap.curator) ? roadmap.curator : [roadmap.curator];
            return (
              <Link
                key={roadmap.id}
                href={`/career-roadmaps/${roadmap.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-4"
              >
                {/* Category + Demand */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-primary bg-[#FFDF9C]/20 border border-[#D1C5B4] px-2.5 py-1 rounded-full">
                    {CATEGORY_BADGES[roadmap.category] ?? roadmap.category}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DEMAND_COLOURS[roadmap.demandLevel]}`}>
                    {roadmap.demandLevel} Demand
                  </span>
                </div>

                {/* Title & tagline */}
                <div>
                  <h2 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors leading-snug">
                    {roadmap.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{roadmap.tagline}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gray-400" />
                    {roadmap.timeToJobReady}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp size={12} className="text-gray-400" />
                    {roadmap.stages.length} stages
                  </span>
                  {roadmap.entryLevel && <span className="text-emerald-600 font-semibold">No degree required</span>}
                </div>

                {/* Curator avatars + CTA */}
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
                  <span className="text-xs font-bold text-primary group-hover:underline">View Roadmap →</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 2. Educational Section: The 4-Stage Roadmap Framework */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Our Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-4">
              How Our 4-Stage Career Framework Works
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Breaking into a new field can feel overwhelming. We break every career track down into four manageable, sequential stages so you always know what to learn next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">Core Fundamentals</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Build foundational domain knowledge using free introductory courses from Google, Harvard, edX, and Alison.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-blue-600 font-semibold">
                <BookOpen size={13} /> Free Certificate Courses
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">Technical Tool Mastery</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Master the practical software, languages, and frameworks that employers test for (SQL, Figma, AWS, Python, Excel).
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-amber-600 font-semibold">
                <Wrench size={13} /> Hands-On Tools
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">Proof of Work</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Build real-world projects, submit them to our automated grader, and earn a public, verifiable Badge of Competence.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                <Award size={13} /> Portfolio Badges
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">Interview Preparation</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Prepare with STAR-method answer frameworks, common technical screening questions, and regional salary benchmarks.
              </p>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-xs text-purple-600 font-semibold">
                <FileText size={13} /> Interview Prep Guides
              </div>
            </div>
          </div>
        </section>

        {/* 3. Educational Section: Structured vs. Unstructured Learning Matrix */}
        <section className="mb-20 bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Why Follow a Curated Career Roadmap?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Random tutorial searches lead to tutorial hell. Our curated roadmaps streamline your focus onto high-impact skills that actually convert into job offers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Feature / Benefit</th>
                  <th className="py-3 px-4 text-primary bg-primary/5 rounded-t-xl font-extrabold">Graduates Hub Roadmaps</th>
                  <th className="py-3 px-4 text-gray-600">Unstructured YouTube Search</th>
                  <th className="py-3 px-4 text-gray-600">$10k Coding Bootcamps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-900">Cost</td>
                  <td className="py-4 px-4 font-bold text-emerald-600 bg-primary/5">100% Free</td>
                  <td className="py-4 px-4 text-gray-500">Free</td>
                  <td className="py-4 px-4 text-rose-600 font-semibold">$5,000 – $15,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-900">Curated Order & Sequence</td>
                  <td className="py-4 px-4 font-bold text-gray-900 bg-primary/5">✅ Structured 4 Stages</td>
                  <td className="py-4 px-4 text-rose-500">❌ Random & Unorganized</td>
                  <td className="py-4 px-4 text-gray-700">✅ Structured</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-900">Verifiable Proof of Work</td>
                  <td className="py-4 px-4 font-bold text-gray-900 bg-primary/5">✅ Public Badges & Code Reviews</td>
                  <td className="py-4 px-4 text-rose-500">❌ None</td>
                  <td className="py-4 px-4 text-gray-700">⚠️ Mixed Quality</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-900">Free Verified Certificates</td>
                  <td className="py-4 px-4 font-bold text-gray-900 bg-primary/5">✅ Google, edX, Alison, IBM</td>
                  <td className="py-4 px-4 text-rose-500">❌ No Certificates</td>
                  <td className="py-4 px-4 text-gray-700">⚠️ Bootcamp Certificate Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-900">Interview Q&A & Salary Benchmarks</td>
                  <td className="py-4 px-4 font-bold text-gray-900 bg-primary/5 rounded-b-xl">✅ Built-in per Role</td>
                  <td className="py-4 px-4 text-rose-500">❌ None</td>
                  <td className="py-4 px-4 text-gray-700">✅ Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. FAQ Accordion Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about starting and completing our career roadmaps.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-base mb-2 flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-gray-500 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to start building your career?</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            Pick a roadmap above to begin Stage 1, explore our free course directory, or use our AI tools to audit your current CV.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/portfolio-tasks"
              className="bg-primary hover:bg-[#5a4000] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Explore Portfolio Tasks
            </Link>
            <Link
              href="/free-ai-career-tools"
              className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Try Free AI Career Tools
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
