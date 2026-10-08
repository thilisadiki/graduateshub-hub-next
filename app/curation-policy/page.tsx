import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Search, FileCheck, ExternalLink, RefreshCw, Scale } from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Content & Editorial Curation Policy',
  description: 'Our 7-part editorial standards governing how Graduates Hub produces original career guidance, evaluates learning resources, verifies labor statistics, and maintains strict independence.',
  alternates: { canonical: `${SITE_URL}/curation-policy` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Content & Editorial Curation Policy · Graduates Hub',
    description: 'Our 7-part editorial standards governing how Graduates Hub produces original career guidance, evaluates learning resources, verifies labor statistics, and maintains strict independence.',
    url: `${SITE_URL}/curation-policy`,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Curation Policy', item: `${SITE_URL}/curation-policy` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Content & Editorial Curation Policy',
  url: `${SITE_URL}/curation-policy`,
  description: 'Our 7-part editorial standards governing how Graduates Hub produces original career guidance, evaluates learning resources, verifies labor statistics, and maintains strict independence.',
  publisher: { '@type': 'Organization', name: 'Graduates Hub', url: SITE_URL },
  breadcrumb: breadcrumbSchema,
};

export default function CurationPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Curation Policy</span>
        </div>
      </div>

      {/* Header Hero */}
      <div className="bg-[#1F1B13] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-yellow-400" />
            Editorial Framework
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Editorial &amp; Curation Policy</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Our 7-part editorial standards governing how Graduates Hub produces original career roadmaps, evaluates educational resources, verifies global and regional labor market data, and maintains strict editorial independence.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12 flex-1">
        
        {/* Section 1 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">1</div>
            <h2 className="text-2xl font-extrabold text-gray-900">What We Publish &amp; Evaluate</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Graduates Hub produces original career roadmaps, proprietary portfolio task briefs, and editorial research while evaluating independent educational resources to help job seekers and career switchers worldwide transition from study to employment. Our editorial board creates and audits content across five core pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Original Career Roadmaps &amp; Prep Guides</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Stage-by-stage role blueprints, technical transition frameworks, and role-specific interview preparation guides developed by industry specialists.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Vetted Courses &amp; Industry Credentials</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Independently evaluated free, free-to-audit, and high-ROI certified learning pathways from recognized technology leaders and universities (e.g. Google, Microsoft, AWS, CompTIA, edX).</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Proof of Work Portfolio Briefs</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Proprietary real-world task briefs with objective rubric evaluations, enabling candidates to build concrete projects and earn verifiable proof-of-work badges.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Verified Labor Market &amp; Salary Research</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Granular compensation matrices, entry-level demand indicators, and occupational benchmarks verified against official statistical agencies (e.g. U.S. BLS, Stats SA, O*NET).</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 md:col-span-2">
              <h3 className="font-bold text-gray-900 text-base mb-1">Interactive Career Readiness Tools</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Custom in-house AI utilities (CV Reviewer, Job Description Decoder, Skills Gap Analyser, and ATS-friendly CV Builder) engineered to provide actionable feedback with zero mandatory fees.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">2</div>
            <h2 className="text-2xl font-extrabold text-gray-900">How We Evaluate Educational Resources</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Every external course, credential, or tool referenced on Graduates Hub must satisfy a seven-point quality and originality evaluation before inclusion:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Original Value &amp; Context:</strong> Resources are never listed as simple link directories. Every listed credential or course is embedded within our original career progression frameworks, accompanied by prerequisite guidance, estimated time commitments, and practical application advice.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Relevance to the Career Path:</strong> The resource must directly address technical competencies or soft skills explicitly required by verified job descriptions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Accessibility &amp; Device Compatibility:</strong> Content must be accessible online via standard web or mobile browsers without requiring proprietary software downloads.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Value-First Hierarchy &amp; Price Transparency:</strong> We prioritize free and free-to-audit learning options first. Paid courses or vendor certifications are listed only if they offer verified employer recognition (e.g. AWS, CompTIA, Cisco, Microsoft) or exceptional career ROI. Every listed resource explicitly displays its pricing model.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Pedagogical Quality &amp; Structure:</strong> Learning materials must offer clear pedagogical progression, updated instruction, and actionable exercises rather than superficial overviews.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Provider Credibility:</strong> Courses must originate from recognized educational institutions, technology vendors (e.g. Google, Microsoft, AWS, Cisco), or established accredited platforms.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Practical Proof of Work:</strong> Learners must finish with a practical outcome (e.g. a sample project, script, campaign plan, or spreadsheet model) suitable for a portfolio.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">3</div>
            <h2 className="text-2xl font-extrabold text-gray-900">How We Research Labor &amp; Career Data</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            To ensure high editorial accuracy, claims made across our career roadmaps and salary guides follow a structured empirical research methodology:
          </p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Official Government &amp; Statistical Sources:</strong>
              We benchmark compensation against statutory statistical datasets, including the U.S. Bureau of Labor Statistics (BLS OEWS and OOH) for North American benchmarks, and Statistics South Africa (Stats SA QES) alongside verified employer surveys for South African benchmarks.
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Primary Job Market Audits:</strong>
              Skills taxonomies and demand indicators are synthesized from audits of thousands of active job advertisements on major platforms (LinkedIn Jobs, Indeed, Pnet, OfferZen) to ensure alignment with current hiring requirements.
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Professional Accreditations &amp; Statutory Boards:</strong>
              Prerequisites and board examinations (e.g. SAICA, ECSA, CFA Institute, FINRA, CompTIA) are verified directly against official professional association registries.
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Regional &amp; Remote Context:</strong>
              Our insights address specific regional economic realities, distinguishing between corporate headquarters (e.g. Johannesburg, New York), regional technology hubs (Cape Town, Austin, Seattle), and international remote USD/EUR contracting opportunities.
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">4</div>
            <h2 className="text-2xl font-extrabold text-gray-900">How We Verify Information</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            We enforce strict verification checks before publishing or updating any career roadmap:
          </p>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span><strong className="text-gray-900 font-bold">Primary Sources:</strong> We rely on direct course catalogs, official documentation, and primary employer portals rather than secondary blogs.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span><strong className="text-gray-900 font-bold">Official Employer &amp; Provider Pages:</strong> Program details, module lists, and certificate fees are confirmed directly on provider domains.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span><strong className="text-gray-900 font-bold">Government &amp; Statutory Sources:</strong> Labor market data references official federal and national statistics (e.g. U.S. BLS, Stats SA, DHET).</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span><strong className="text-gray-900 font-bold">Reputable Industry Sources:</strong> Engineering, IT, and financial claims cross-reference established industry publications and professional association guidelines.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span><strong className="text-gray-900 font-bold">Structured Review Process:</strong> Every roadmap page displays an explicit verification log detailing the review date, reviewer credentials, and market sample methodology.</span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">5</div>
            <h2 className="text-2xl font-extrabold text-gray-900">Recommendations, Advertising &amp; Transparency</h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900 font-bold">Editorial Rationale:</strong> Every course, certification, or tool recommendation includes a transparent explanation detailing why it was chosen for that specific stage of learning.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Direct Provider Access:</strong> We always link directly to official provider websites so learners can inspect course curriculum details and terms independently.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Advertising &amp; Commercial Separation:</strong> Third-party advertising (including Google AdSense) is strictly separated from editorial copy. Ad placements are clearly distinguishable from site navigation and editorial guidance. Advertising partners have zero editorial influence on our reviews or rankings.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Affiliate Disclosure:</strong> Graduates Hub participates in select educational affiliate programs (e.g. Alison.com). We may earn a small referral commission if users make a purchase after clicking. This incurs zero additional cost to the user and supports platform research.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
              <strong className="text-slate-900 font-bold block mb-1">No Guarantee of Employment or Earnings:</strong>
              Enrolling in or completing recommended courses, roadmaps, or portfolio tasks does not guarantee job placement, employment offers, or specific salary outcomes. Employment outcomes depend on individual diligence, market conditions, and independent employer evaluation.
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">6</div>
            <h2 className="text-2xl font-extrabold text-gray-900">How We Keep Content Updated</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Career information and digital learning options evolve rapidly. We maintain content freshness through systematic maintenance:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-gray-900 font-bold block text-sm mb-1">Review Dates</strong>
              Every roadmap and guide displays dynamic month/year timestamps reflecting when data was last audited.
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-gray-900 font-bold block text-sm mb-1">Salary Updates</strong>
              Salary benchmarks are audited annually against current job market listings.
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-gray-900 font-bold block text-sm mb-1">Removing Unavailable Courses</strong>
              Broken links, deprecated modules, or paywalled courses are purged promptly upon discovery.
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-gray-900 font-bold block text-sm mb-1">Correcting Inaccuracies</strong>
              Users or industry partners can report content discrepancies via our feedback channel for rapid editorial review.
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">7</div>
            <h2 className="text-2xl font-extrabold text-gray-900">Editorial Independence &amp; Originality</h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900 font-bold">Commitment to Original Value:</strong> All roadmaps, articles, portfolio rubrics, and tools on Graduates Hub are original works produced by human specialists. We strictly prohibit content scraping, automated rewriting, and uncurated aggregation.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Commercial Relationships Do Not Determine Placements:</strong> Educational quality, verified utility, and career relevance are the sole criteria for inclusion in our roadmaps. An affiliate relationship never grants a provider automatic placement.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">No Subjective "Best" Claims Without Defined Criteria:</strong> We do not label a course or provider as objectively "best" without stating the explicit criteria used (e.g. CPD accreditation, zero content paywalls, user ratings, or employer recognition).
            </p>
          </div>
        </section>

        {/* Co-Founders Integrity Note */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8 md:p-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Questions About Our Curation Policy?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Our editorial standards are maintained by co-founders <strong className="text-gray-900">Jason Sadiki</strong> (Full-Stack Engineer) and <strong className="text-gray-900">Ndulamiso Mamburu</strong> (Accounting &amp; Tax Professional). If you notice an outdated course link or salary figure, please let us know.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-[#5a4000] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">
              Contact Editorial Team
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 bg-white border border-[#D1C5B4] text-gray-800 hover:text-primary font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors">
              Meet Our Authors &amp; Team
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
