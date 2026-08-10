import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, CheckCircle2, ArrowRight, Sparkles, BookOpen, ExternalLink, HelpCircle, ShieldCheck, Briefcase } from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free Google Courses with Certificates (2026 Guide)',
  description:
    'Explore free Google courses and professional certificates across IT, Data Analytics, UX Design, AI, and Digital Marketing. Learn how to access Google credentials for free.',
  alternates: { canonical: `${SITE_URL}/free-google-courses-with-certificates` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Free Google Courses with Certificates (2026 Guide) | Graduates Hub',
    description:
      'Master in-demand skills with free Google courses and certificates. Complete guide to Grow with Google, Skillshop, and Coursera financial aid.',
    url: `${SITE_URL}/free-google-courses-with-certificates`,
    type: 'website',
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
    { '@type': 'ListItem', position: 3, name: 'Free Google Courses', item: `${SITE_URL}/free-google-courses-with-certificates` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are Google online courses really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Platforms like Google Skillshop, Google Digital Skills for Africa, and Google Cloud Skills Boost offer 100% free learning materials and official certificates. For Google Professional Certificates hosted on Coursera, you can audit courses for free or apply for 100% financial aid to receive a certified credential at zero cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a free certificate from Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can earn free certificates directly through Google Skillshop for Google Ads, Google Analytics 4, and Waze Ads. For Grow with Google Career Certificates, apply for Coursera Financial Aid by filling out the fee waiver application, or participate in regional bursaries like Google Digital Skills for Africa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Google certificates recognized by employers in South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google Professional Certificates are designed by Google engineers to align with entry-level job roles in Data Analytics, IT Support, Cybersecurity, UX Design, and Digital Marketing. South African employers recognize them as proof of practical capability, especially when paired with portfolio projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a university degree to take Google courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No prior degree or technical background is required. Google Career Certificates are specifically built for complete beginners, high school graduates, and career changers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Google Skillshop and Google Career Certificates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Skillshop focuses on product-specific training (e.g. Google Search Ads, GA4 Analytics) and issues 100% free vendor certifications. Google Career Certificates (Grow with Google) are comprehensive 3 to 6-month professional training programs covering broader career fields like Cybersecurity, Data Analytics, and UX Design.',
      },
    },
  ],
};

const googleCertificates = [
  {
    title: 'Google Data Analytics Certificate',
    desc: 'Master SQL, R programming, Tableau dashboards, and data cleaning for entry-level data analyst roles.',
    href: '/google-data-analytics-certificate-guide',
    roadmapHref: '/career-roadmaps/data-analyst',
    badge: 'High Demand',
    duration: '3 to 6 months',
  },
  {
    title: 'Google IT Support Certificate',
    desc: 'Learn computer networking, Linux CLI, system administration, and hardware troubleshooting.',
    href: '/google-it-support-certificate-guide',
    roadmapHref: '/interview-prep/it-support-specialist',
    badge: 'Beginner Friendly',
    duration: '3 to 6 months',
  },
  {
    title: 'Google Cybersecurity Certificate',
    desc: 'Build hands-on SOC analyst skills using Python, Linux, SIEM tools (Splunk, Chronicle), and Wireshark.',
    href: '/google-cybersecurity-certificate-guide',
    roadmapHref: '/guides',
    badge: 'Popular',
    duration: '3 to 6 months',
  },
  {
    title: 'Google Digital Marketing & E-Commerce Certificate',
    desc: 'Master Shopify storefronts, Google Search Ads, GA4 analytics, SEO, and targeted email flows.',
    href: '/google-digital-marketing-ecommerce-guide',
    roadmapHref: '/career-roadmaps/google-digital-marketing-ecommerce',
    badge: 'Top Rated',
    duration: '3 to 6 months',
  },
  {
    title: 'Google UX Design Certificate',
    desc: 'Conduct user research, design wireframes, build interactive Figma prototypes, and create a UX portfolio.',
    href: '/google-ux-design-certificate-guide',
    roadmapHref: '/guides',
    badge: 'Design',
    duration: '3 to 6 months',
  },
  {
    title: 'Google Project Management Certificate',
    desc: 'Learn traditional Waterfall project management, Agile/Scrum sprints, Jira workflows, and CAPM exam prep.',
    href: '/google-project-management-certificate-guide',
    roadmapHref: '/free-agile-project-management-courses',
    badge: 'Management',
    duration: '3 to 6 months',
  },
  {
    title: 'Google AI Essentials',
    desc: 'Learn practical prompt engineering, generative AI tools, workplace automation, and AI ethics.',
    href: '/google-ai-essentials-course-guide',
    roadmapHref: '/career-roadmaps/google-ai-essentials',
    badge: 'New AI',
    duration: '10 hours',
  },
];

const freePlatforms = [
  {
    title: 'Google Skillshop',
    desc: '100% free official certifications for Google Ads, Google Analytics 4 (GA4), Waze Ads, and Google Marketing Platform.',
    highlights: ['Zero cost', 'Official Google badge', 'Instant PDF certificate'],
  },
  {
    title: 'Google Digital Skills for Africa',
    desc: 'Free accredited course on Fundamentals of Digital Marketing certified by Google and IAB Europe.',
    highlights: ['40 hours self-paced', 'Interactive quizzes', 'Free recognized certificate'],
  },
  {
    title: 'Google Cloud Skills Boost',
    desc: 'Foundational cloud labs, Google Cloud Practitioner tracks, and Generative AI badge courses.',
    highlights: ['Hands-on Qwiklabs', 'Shareable skill badges', 'Free intro tracks'],
  },
];

export default function FreeGoogleCoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">›</span>
          <Link href="/guides" className="hover:text-primary transition-colors">Guides</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">Free Google Courses</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#1F1B13] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <Award size={14} className="text-yellow-400" />
            Grow with Google · Official Credentials
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Free Google Courses with Certificates (2026 Guide)
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Complete guide to free Google courses, professional career certificates, and official credentials across Data Analytics, IT, Cybersecurity, UX Design, Marketing, and AI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400">
            {['100% Free Learning Options', 'Recognized by Global Employers', 'Beginner Friendly'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12 flex-1">
        {/* Intro Banner */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Why Google Credentials Matter in 2026</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-[15px] flex flex-col gap-4">
            <p>
              Google Career Certificates are designed by senior Google engineers and product managers to teach job-ready technical skills without requiring a 4-year university degree. Whether you want to become a Data Analyst, SOC Cybersecurity Specialist, UX Designer, or Digital Marketer, Google credentials provide direct proof of competence.
            </p>
            <p>
              While Google Professional Certificates on Coursera normally charge a monthly subscription, **you can access Google learning materials completely free** through audit tracks, official 100% financial aid fee waivers, and free Google platforms like Skillshop.
            </p>
          </div>
        </section>

        {/* Section 1: Google Career Certificates */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">1. Google Career Certificates (Grow with Google)</h2>
            <p className="text-gray-600 text-sm">Deep-dive guides into Google&apos;s 7 flagship professional certificate programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {googleCertificates.map((cert) => (
              <div key={cert.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{cert.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{cert.desc}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                  <Link href={cert.href} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Full Guide &amp; Syllabus <ArrowRight size={13} />
                  </Link>
                  <Link href={cert.roadmapHref} className="text-xs font-medium text-gray-500 hover:text-gray-800">
                    Roadmap
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 100% Free Official Platforms */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">2. 100% Free Official Google Learning Platforms</h2>
            <p className="text-gray-600 text-sm">Platforms built directly by Google that offer free training and official certificates with no paywall.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freePlatforms.map((platform) => (
              <div key={platform.title} className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 text-base">{platform.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{platform.desc}</p>
                <div className="mt-auto pt-3 border-t border-slate-200/60 flex flex-col gap-1.5">
                  {platform.highlights.map((h) => (
                    <span key={h} className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 size={12} /> {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: How to Access Google Certificates for Free */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">3. Step-by-Step: How to Get Google Certificates for Free</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Follow these proven methods to access Grow with Google certificate courses without paying subscription fees:
          </p>

          <div className="space-y-6">
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Method A: Coursera Audit Mode (Free Course Content)</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                When opening any Google course on Coursera, click &quot;Enroll&quot; and look for the small <strong>Audit</strong> link at the bottom of the popup. This grants complete, free access to all video lectures, readings, and downloadable resources.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Method B: Coursera Financial Aid (100% Fee Waiver)</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                Coursera offers 100% financial aid for learners who cannot afford the monthly fee. Click &quot;Financial Aid Available&quot; next to the Enroll button. State your career goals and financial situation. Applications are processed within 15 days, granting full access to graded assignments and the official certificate.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-600 rounded-r-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">Method C: Regional Bursaries &amp; Google Digital Skills</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Google frequently partners with African educational organizations to distribute free Google Career Certificate scholarships. Check regional announcements on Google Digital Skills for Africa for active cohort intakes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Employer Recognition & Portfolio Integration */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Pair Google Certificates with Proof of Work</h2>
              <p className="text-xs text-gray-600">Stand out to recruiters in South Africa and globally.</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            A Google certificate proves you understand the theory. To land a graduate job or internship, pair your certificate with practical project deliverables. Complete real-world micro-internship tasks on Graduates Hub and earn a shareable proof-of-work assessment badge.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio-tasks" className="inline-flex items-center gap-2 bg-primary hover:bg-[#5a4000] text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors">
              Explore Portfolio Tasks <ArrowRight size={15} />
            </Link>
            <Link href="/career-roadmaps" className="inline-flex items-center gap-2 bg-white border border-[#D1C5B4] text-gray-800 hover:text-primary font-semibold text-sm px-5 py-3 rounded-lg transition-colors">
              View Career Roadmaps
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={24} className="text-primary shrink-0" />
            <h2 className="text-2xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
