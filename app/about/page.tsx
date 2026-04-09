import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Users, Award, Heart, ArrowRight, Newspaper, ExternalLink } from 'lucide-react';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'About Graduates Hub – Meet the Team',
  description: 'Graduates Hub is built by Jason Sadiki (Technical SEO Specialist & Web Developer) and curated with Ndulamiso Mamburu (Accounting Science Graduate, SARS). Real credentials behind every resource.',
  alternates: { canonical: `${SITE_URL}/about` },
};

const jasonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Sadiki',
  jobTitle: 'Technical SEO Specialist & Web Developer',
  description: 'Technical SEO Specialist and web developer with over 7 years of experience. Founder of Graduates Hub.',
  url: 'https://thilisadiki.dev',
  sameAs: [
    'https://www.linkedin.com/in/jasonsadiki/',
    'https://thilisadiki.dev',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Graduates Hub',
    url: SITE_URL,
  },
};

const ndulamisoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ndulamiso Mamburu',
  jobTitle: 'Tax Professional & Accounting Science Graduate',
  description: 'Accounting Science Graduate pursuing a degree in Taxation. Works at the South African Revenue Service (SARS). Accounting and business content curator at Graduates Hub.',
  sameAs: ['https://www.linkedin.com/in/ndulamiso-mamburu/'],
  worksFor: {
    '@type': 'Organization',
    name: 'South African Revenue Service',
    alternateName: 'SARS',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Graduates Hub',
  url: SITE_URL,
  founder: {
    '@type': 'Person',
    name: 'Jason Sadiki',
    sameAs: 'https://www.linkedin.com/in/jasonsadiki/',
  },
  employee: [
    {
      '@type': 'Person',
      name: 'Ndulamiso Mamburu',
      sameAs: 'https://www.linkedin.com/in/ndulamiso-mamburu/',
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jasonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ndulamisoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">The people behind the platform</p>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Built and curated by <span className="text-primary">real specialists</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Every resource on Graduates Hub is backed by someone with direct, professional experience in that field. No generalists, no guesswork.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-16">

        {/* The Team */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          <div className="flex flex-col gap-6">

            {/* Jason */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-0">
                <div className="md:w-56 lg:w-64 shrink-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8 md:p-0">
                  <div className="w-32 h-32 md:w-full md:h-full md:min-h-[280px] rounded-full md:rounded-none overflow-hidden bg-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/jason-sadiki.jpg" alt="Jason Sadiki, Founder of Graduates Hub" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">Jason Sadiki</h3>
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-full">Founder</span>
                  </div>
                  <p className="text-primary font-semibold text-sm mb-2">Technical SEO Specialist &amp; Web Developer</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {['IT & Technology', 'Software Engineering', 'Digital Marketing', 'SEO'].map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With over 7 years of experience in Technical SEO and web development, Jason built Graduates Hub after noticing how hard it was to find quality free learning resources online. His background means every course is surfaced based on real personal experience and not paid placement.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Graduates Hub is independently built and run. No paywalls, no upsells, no investor mandates pushing paid content ahead of free alternatives.
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <a href="https://www.linkedin.com/in/jasonsadiki/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={14} /> LinkedIn
                    </a>
                    <span className="text-gray-200">|</span>
                    <a href="https://thilisadiki.dev" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-gray-800 transition-colors">
                      <ExternalLink size={14} /> thilisadiki.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ndulamiso */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-0">
                <div className="md:w-56 lg:w-64 shrink-0 bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center p-8 md:p-0">
                  <div className="w-32 h-32 md:w-full md:h-full md:min-h-[260px] rounded-full md:rounded-none overflow-hidden bg-teal-100 flex items-center justify-center">
                    {/* Add /ndulamiso-mamburu.jpg to /public when available */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu, Accounting Curator at Graduates Hub"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">Ndulamiso Mamburu</h3>
                    <span className="text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full">Curator</span>
                  </div>
                  <p className="text-teal-600 font-semibold text-sm mb-2">Tax Professional &amp; Accounting Science Graduate</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {['Accounting & Finance', 'Business', 'Taxation'].map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ndulamiso holds a degree in Accounting Science and is currently pursuing a further degree in Taxation. She works at the South African Revenue Service (SARS), giving her direct, practitioner-level insight into accounting, financial compliance, and business finance.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    She curates the accounting and business content on Graduates Hub, ensuring every recommended course reflects what is actually useful in practice, not just what looks good on paper.
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <a href="https://www.linkedin.com/in/ndulamiso-mamburu/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Mission</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed text-lg">
              Graduates Hub is built on a simple belief: <strong>quality education should be accessible to everyone, everywhere.</strong> We connect learners across Africa and beyond with internationally recognised, fully accredited online courses at absolutely zero cost.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 text-lg">
              Whether you are a recent graduate entering the job market, a professional looking to upskill, or a lifelong learner exploring something new, Graduates Hub gives you the tools, guides, and courses to get there without financial barriers.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </span>
              <p className="text-gray-600 text-sm">
                Join our community of{' '}
                <a href="https://facebook.com/Graduateshub" target="_blank" rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:underline">189,000+ followers on Facebook</a>
                {' '}— learners sharing opportunities, resources, and wins every day.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, color: 'bg-blue-100 text-primary', title: 'Free Learning Resources', desc: 'From IT and Software Engineering to Business, Accounting, and Marketing. Every resource is hand-picked for relevance, quality, and real-world applicability.' },
              { icon: Award, color: 'bg-green-100 text-green-600', title: 'Certificates & Diplomas', desc: 'Earn verifiable certificates and diplomas from internationally recognised providers to strengthen your CV and professional profile.' },
              { icon: Users, color: 'bg-purple-100 text-purple-600', title: 'AI-Powered Course Matching', desc: 'Our AI recommendation engine finds the right learning path based on your goals and experience level.' },
              { icon: Heart, color: 'bg-red-100 text-red-500', title: '100% Free, Always', desc: 'No hidden fees, no paywalls, no credit card required. Every resource on Graduates Hub is and will always be completely free.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}><Icon size={24} /></div>
                <div><h3 className="font-bold text-gray-800 text-lg">{title}</h3><p className="text-gray-600 text-sm mt-1">{desc}</p></div>
              </div>
            ))}
            <Link href="/blog" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start hover:border-primary transition-colors group md:col-span-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0"><Newspaper size={24} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">Career Guides & Study Articles</h3>
                <p className="text-gray-600 text-sm mt-1">Practical resources to help you choose the right path, study effectively, and land your next opportunity.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed">
              Graduates Hub surfaces high-quality, accredited learning resources from trusted global providers, including <strong>Alison</strong>, one of the world&apos;s largest free online learning platforms with over 40 million learners. Every course is hand-picked for relevance, quality, and real-world applicability.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              When you find a course that fits your goals, clicking <strong>&ldquo;Start Learning For Free&rdquo;</strong> takes you directly to the course platform where you can register (free) and begin immediately. Upon completion, you&apos;ll receive a certificate or diploma to share with employers and add to your professional profile.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Alongside courses, we publish free{' '}
              <Link href="/blog" className="text-primary font-semibold hover:underline">career guides and study articles</Link>
              {' '}to support every stage of your learning journey.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to start learning?</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8">Browse free learning resources across IT, Business, Accounting, Marketing, and more.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-all shadow-md text-lg">
                Explore Resources <ArrowRight size={20} />
              </Link>
              <Link href="/blog" className="inline-flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-8 py-4 rounded-lg font-bold transition-all text-lg border border-white/20">
                Read Our Guides <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
