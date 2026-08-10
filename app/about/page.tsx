import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Users, Award, Heart, ArrowRight, Newspaper, ExternalLink } from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Graduates Hub – Our Mission & Team',
  description:
    'Graduates Hub is co-founded by Jason Sadiki (Technical SEO Specialist at Betway Africa) and Ndulamiso Mamburu (Tax Professional, SARS & Accounting Science Graduate). Real credentials behind every resource.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'About Graduates Hub – Our Mission & Team',
    description:
      'Graduates Hub is co-founded by Jason Sadiki (Technical SEO Specialist at Betway Africa) and Ndulamiso Mamburu (Tax Professional, SARS & Accounting Science Graduate). Real credentials behind every resource.',
    url: `${SITE_URL}/about`,
    images: [OG_IMAGE],
  },
};

const jasonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Sadiki',
  jobTitle: 'Technical SEO Specialist & Web Developer',
  description:
    'Technical SEO Specialist at Betway Africa and web developer with over 7 years of experience. Founder of Graduates Hub. Google-certified in Digital Marketing and Google Analytics 4. HubSpot Academy SEO certified. Full Stack Engineer certified by Codecademy.',
  url: 'https://thilisadiki.com',
  sameAs: ['https://www.linkedin.com/in/jasonsadiki/', 'https://thilisadiki.com'],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Betway Africa',
      url: 'https://www.betway.co.za',
    },
    {
      '@type': 'Organization',
      name: 'Graduates Hub',
      url: SITE_URL,
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'SEO Certification',
      credentialCategory: 'Certificate',
      url: 'https://app-eu1.hubspot.com/academy/achievements/6z3p70zn/en/1/jason-sadiki/seo',
      recognizedBy: { '@type': 'Organization', name: 'HubSpot Academy' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Analytics 4 Certificate',
      credentialCategory: 'Certificate',
      url: 'https://skillshop.credential.net/c8c90dfb-fba6-4296-8e42-e451b00c2660',
      recognizedBy: { '@type': 'Organization', name: 'Google Skillshop' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Digital Marketing Certificate',
      credentialCategory: 'Certificate',
      url: 'https://skillshop.exceedlms.com/student/award/rHfzphDrFqaZ7PNRdvdUnBMZ',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Full Stack Engineer Certificate',
      credentialCategory: 'Certificate',
      url: 'https://www.codecademy.com/profiles/jasonsadiki/certificates/ffd0f42cce1a44e9a0108b365047a0a6',
      recognizedBy: { '@type': 'Organization', name: 'Codecademy' },
    },
  ],
};

const ndulamisoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ndulamiso Mamburu',
  jobTitle: 'Tax Professional & Accounting Science Graduate',
  description:
    'Accounting Science Graduate pursuing a degree in Taxation. Works at the South African Revenue Service (SARS). Accounting and business content curator at Graduates Hub.',
  sameAs: ['https://www.linkedin.com/in/ndulamiso-mamburu/'],
  worksFor: [
    {
      '@type': 'Organization',
      name: 'South African Revenue Service',
      alternateName: 'SARS',
      url: 'https://www.sars.gov.za',
    },
    {
      '@type': 'Organization',
      name: 'Graduates Hub',
      url: SITE_URL,
    },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Graduates Hub',
  url: SITE_URL,
  founder: [
    {
      '@type': 'Person',
      name: 'Jason Sadiki',
      sameAs: 'https://www.linkedin.com/in/jasonsadiki/',
    },
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
          <p className="text-[#FFDF9C] font-bold text-sm uppercase tracking-widest mb-3">About Graduates Hub</p>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Democratizing Career Education for <span className="text-primary">Everyone, Everywhere</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Connecting job seekers and graduates with internationally recognized courses, step-by-step career roadmaps, and verified portfolio tools.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-16">
        {/* 1. The Mission (Placed First for Logical Context & E-E-A-T) */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Graduates Hub is built on a simple belief: <strong>quality career education should be accessible to everyone, everywhere.</strong> We connect learners across Africa and worldwide with internationally recognized, accredited online courses at absolutely zero cost.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 text-base">
              Whether you are a recent graduate entering the job market, a professional looking to upskill, or a career switcher exploring a new path, Graduates Hub provides the step-by-step roadmaps, interview prep guides, and CV tools to help you succeed without financial barriers.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </span>
              <p className="text-gray-600 text-sm">
                Join our community of{' '}
                <a
                  href="https://facebook.com/Graduateshub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  189,000+ followers on Facebook
                </a>{' '}
                - learners sharing opportunities, resources, and career wins every day.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Meet the Team (Founders & Curators) */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Meet the Founders &amp; Curators</h2>
          <p className="text-gray-500 text-sm mb-6">
            Every resource on Graduates Hub is backed by named specialists with direct, professional workplace experience.
          </p>

          <div className="flex flex-col gap-6">
            {/* Jason */}
            <div id="jason-sadiki" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-28">
              <div className="flex flex-col md:flex-row gap-0">
                <div className="md:w-48 shrink-0 bg-gradient-to-br from-[#FFF8F1] to-[#FFDF9C]/20 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200 relative shadow-md ring-4 ring-white">
                    <Image src="/jason-sadiki.jpg" alt="Jason Sadiki, Founder of Graduates Hub" fill sizes="128px" className="object-cover" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">Jason Sadiki</h3>
                    <span className="text-xs font-bold bg-[#FFDF9C]/20 text-[#5a4000] border border-[#D1C5B4] px-2.5 py-1 rounded-full">
                      Founder
                    </span>
                  </div>
                  <p className="text-primary font-bold text-sm mb-2">Technical SEO Specialist (Betway Africa) &amp; Web Developer</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {['IT & Technology', 'Software Engineering', 'Digital Marketing', 'Technical SEO'].map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    With over 7 years of hands-on experience in Technical SEO and web development, Jason built Graduates Hub to eliminate financial barriers for students. He currently works as a Technical SEO Specialist at Betway Africa.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Graduates Hub is independently built and operated. No paywalls, no hidden fees, and no investor mandates pushing paid content ahead of free alternatives.
                  </p>
                  <div className="mt-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Verified Credentials</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'Technical SEO Specialist', issuer: 'Betway Africa' },
                        { label: 'SEO Certified', issuer: 'HubSpot Academy', url: 'https://app-eu1.hubspot.com/academy/achievements/6z3p70zn/en/1/jason-sadiki/seo' },
                        { label: 'Google Analytics 4', issuer: 'Google Skillshop', url: 'https://skillshop.credential.net/c8c90dfb-fba6-4296-8e42-e451b00c2660#acc.tNqRO1Ex' },
                        { label: 'Digital Marketing', issuer: 'Google', url: 'https://skillshop.exceedlms.com/student/award/rHfzphDrFqaZ7PNRdvdUnBMZ' },
                        { label: 'Full Stack Engineer', issuer: 'Codecademy', url: 'https://www.codecademy.com/profiles/jasonsadiki/certificates/ffd0f42cce1a44e9a0108b365047a0a6' },
                      ].map(({ label, issuer, url }) => (
                        <a
                          key={label}
                          href={url || '#'}
                          target={url ? '_blank' : undefined}
                          rel={url ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                        >
                          <svg className="w-3 h-3 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {label} <span className="text-emerald-600">· {issuer}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <Link href="/authors/jason-sadiki" className="inline-flex items-center gap-1 text-sm font-extrabold text-primary hover:underline">
                      View Full Profile &amp; Curated Guides →
                    </Link>
                    <span className="text-gray-200">|</span>
                    <a
                      href="https://www.linkedin.com/in/jasonsadiki/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ndulamiso */}
            <div id="ndulamiso-mamburu" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-28">
              <div className="flex flex-col md:flex-row gap-0">
                <div className="md:w-48 shrink-0 bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-teal-100 relative shadow-md ring-4 ring-white">
                    <Image src="/ndulamiso-mamburu.jpg" alt="Ndulamiso Mamburu, Co-Founder of Graduates Hub" fill sizes="128px" className="object-cover object-top" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">Ndulamiso Mamburu</h3>
                    <span className="text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full">
                      Co-Founder
                    </span>
                  </div>
                  <p className="text-teal-600 font-bold text-sm mb-2">Accounting &amp; Tax Professional (SARS)</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {['Accounting & Finance', 'Business', 'Taxation'].map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Ndulamiso holds a degree in Accounting Science and is pursuing advanced studies in Taxation. She works at the South African Revenue Service (SARS), bringing direct practitioner insight into financial compliance and business finance.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    She leads the accounting and business content on Graduates Hub, ensuring every recommended course and career guide reflects what is actually useful in workplace practice.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <Link href="/authors/ndulamiso-mamburu" className="inline-flex items-center gap-1 text-sm font-extrabold text-primary hover:underline">
                      View Full Profile &amp; Curated Guides →
                    </Link>
                    <span className="text-gray-200">|</span>
                    <a
                      href="https://www.linkedin.com/in/ndulamiso-mamburu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What You Get */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                color: 'bg-[#FFDF9C]/40 text-primary',
                title: 'Free Learning Resources',
                desc: 'From IT and Software Engineering to Business, Accounting, and Marketing. Every resource is hand-picked for quality and workplace applicability.',
              },
              {
                icon: Award,
                color: 'bg-green-100 text-green-600',
                title: 'Certificates & Diplomas',
                desc: 'Earn verifiable certificates and diplomas from internationally recognized global providers to strengthen your CV.',
              },
              {
                icon: Users,
                color: 'bg-purple-100 text-purple-600',
                title: 'AI-Powered Career Tools',
                desc: 'Our interactive AI tools audit your CV, generate customized 90-day learning schedules, and analyze job skill gaps.',
              },
              {
                icon: Heart,
                color: 'bg-red-100 text-red-500',
                title: 'Value-First & Transparent',
                desc: 'Free and free-to-audit resources prioritized first. High-ROI paid credentials listed only with explicit price transparency.',
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start">
                <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shrink-0`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg">{title}</h3>
                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/blog"
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start hover:border-primary transition-colors group md:col-span-2"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                <Newspaper size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-primary transition-colors">
                  Career Guides &amp; Study Articles
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  Practical guides to help you choose the right career path, study effectively, and prepare for technical interviews.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* 4. How It Works */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">How It Works</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Graduates Hub surfaces high-quality, accredited learning resources from trusted global providers, including <strong>Alison</strong>, one of the world&apos;s largest free online learning platforms with over 40 million learners, alongside Google, Harvard edX, and IBM.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 text-sm md:text-base">
              When you select a recommended course inside a roadmap or guide, clicking <strong>&ldquo;Start Course&rdquo;</strong> takes you directly to the official provider where you can begin learning immediately for free.
            </p>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#7A5900] to-[#5a4000] rounded-3xl p-10 text-white shadow-md">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to build your career?</h2>
            <p className="text-[#FFDF9C] max-w-lg mx-auto mb-8 text-sm md:text-base">
              Explore step-by-step career roadmaps across IT, Business, Accounting, Marketing, and Software Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career-roadmaps"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#5a4000] hover:bg-[#FFDF9C]/20 px-8 py-4 rounded-xl font-extrabold transition-all shadow-md text-base"
              >
                Explore Career Roadmaps <ArrowRight size={20} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all text-base border border-white/20"
              >
                Read Our Guides <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
