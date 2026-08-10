import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Search, FileCheck, ExternalLink, RefreshCw, Scale } from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Content & Research Curation Policy',
  description: 'Our 7-part editorial standards governing how Graduates Hub selects resources, researches market data, verifies information, and maintains editorial independence.',
  alternates: { canonical: `${SITE_URL}/curation-policy` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Content & Research Curation Policy · Graduates Hub',
    description: 'Our 7-part editorial standards governing how Graduates Hub selects resources, researches market data, verifies information, and maintains editorial independence.',
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
  name: 'Content & Research Curation Policy',
  url: `${SITE_URL}/curation-policy`,
  description: 'Our 7-part editorial standards governing how Graduates Hub selects resources, researches market data, verifies information, and maintains editorial independence.',
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
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Curation Policy</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Our 7-part editorial standards governing how Graduates Hub selects learning materials, researches South African market data, verifies source claims, and maintains strict independence.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12 flex-1">
        
        {/* Section 1 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">1</div>
            <h2 className="text-2xl font-extrabold text-gray-900">What We Curate</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Graduates Hub aggregates and structures educational and career assets to help South African job seekers transition from learning to employment. We curate content across five primary areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Courses &amp; Certifications</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Free, free-to-audit, and high-ROI paid learning modules and vendor certifications (e.g. Google, Microsoft, AWS, CompTIA, Alison, Coursera, Udemy).</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Career Resources</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Role-specific interview preparation guides, ATS-friendly CV templates, and job hunting strategy frameworks.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Portfolio Projects</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Practical micro-internship briefs with objective rubrics and AI-graded proof-of-work assessment badges.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Career Information &amp; Market Data</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Salary benchmarks, entry-level demand metrics, and skill taxonomies tailored to the South African job market.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 md:col-span-2">
              <h3 className="font-bold text-gray-900 text-base mb-1">Tools &amp; Practical Utilities</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Interactive AI tools (CV reviewer, job description decoder, skills gap analyser) built to streamline job preparation.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">2</div>
            <h2 className="text-2xl font-extrabold text-gray-900">How We Select Resources</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Every course, tool, or roadmap listed on Graduates Hub must satisfy a six-point quality evaluation before inclusion:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Relevance to the Career Path:</strong> The resource must directly address technical competencies or soft skills explicitly required by entry-level job descriptions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 font-bold">Accessibility:</strong> Content must be accessible online via standard web or mobile browsers without requiring proprietary software downloads.
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
                <strong className="text-gray-900 font-bold">Quality &amp; Structure:</strong> Learning materials must offer clear pedagogical progression, updated instruction, and actionable exercises rather than superficial overviews.
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
                <strong className="text-gray-900 font-bold">Practical Usefulness:</strong> Learners must finish with a practical outcome (e.g. a sample project, script, campaign plan, or spreadsheet model) suitable for a portfolio.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-black text-base flex items-center justify-center shrink-0">3</div>
            <h2 className="text-2xl font-extrabold text-gray-900">How We Research Career Information</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            To ensure high editorial accuracy, claims made across our career roadmaps and guides follow a structured research methodology:
          </p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Salary Benchmarks:</strong>
              Figures reflect realistic entry-level pay ranges synthesized from active South African employer job listings, salary aggregate surveys (Payscale, SalaryExpert, Pnet), and verified employer career portals.
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Skills &amp; Qualifications:</strong>
              Taxonomies are constructed by analyzing recurring keyword requirements across active South African job advertisements for target roles.
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Career Demand Assessment:</strong>
              Demand ratings (Moderate, High, Very High) are derived by observing listing volumes across major South African recruitment hubs (LinkedIn, Pnet, OfferZen, Careers24).
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">Industry Requirements:</strong>
              Professional registration prerequisites (e.g. SAICA for accountants, ECSA for engineers) are validated against official South African professional bodies.
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <strong className="text-gray-900 block font-bold mb-1">South African Market Localization:</strong>
              All market insights prioritize South African economic context, regional hiring hubs (Gauteng, Western Cape, KwaZulu-Natal), and local graduate programs.
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
              <span><strong className="text-gray-900 font-bold">Government &amp; Statutory Sources:</strong> Labor market data and SETA accreditation frameworks reference official Statistics South Africa (Stats SA) and Department of Higher Education &amp; Training guidelines.</span>
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
            <h2 className="text-2xl font-extrabold text-gray-900">How We Handle Recommendations</h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900 font-bold">Why a Resource is Recommended:</strong> Every course or tool recommendation includes a rationale explaining why it was selected for that specific stage of the career roadmap.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Direct Links to Original Providers:</strong> We link directly to the official provider page so learners can inspect course syllabus details independently.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Affiliate Relationships &amp; Transparency:</strong> Graduates Hub participates in affiliate programs (including Alison.com). We receive a small commission when users click through and complete purchases. This comes at zero extra cost to the user and supports platform maintenance.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
              <strong className="text-slate-900 font-bold block mb-1">No Guarantee Disclosure:</strong>
              Enrolling in or completing recommended courses, roadmaps, or portfolio tasks does not guarantee job placement, employment offers, or specific salary outcomes. Employment outcomes depend on individual effort, market conditions, and employer evaluation.
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
            <h2 className="text-2xl font-extrabold text-gray-900">Editorial Independence</h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900 font-bold">Commercial Relationships Do Not Determine Recommendations:</strong> Educational quality, cost accessibility, and career relevance are the sole criteria for inclusion in our roadmaps. An affiliate relationship never grants a provider automatic placement.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">Affiliate Relationships Are Fully Disclosed:</strong> All monetized links follow clear disclosure guidelines across our site footers and individual guide pages.
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
