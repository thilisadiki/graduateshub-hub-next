import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, CheckCircle2, ArrowRight, Sparkles, BookOpen, ExternalLink, HelpCircle, ShieldCheck, Briefcase, Zap, Cpu, Terminal } from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free Artificial Intelligence Training & Certificates (2026)',
  description:
    'Explore free Artificial Intelligence (AI) training programs, prompt engineering courses, and machine learning credentials from Google, Microsoft, and accredited providers.',
  alternates: { canonical: `${SITE_URL}/artificial-intelligence-training` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Free Artificial Intelligence Training & Certificates (2026) | Graduates Hub',
    description:
      'Master Generative AI, prompt engineering, and machine learning with free artificial intelligence training tracks and certified courses.',
    url: `${SITE_URL}/artificial-intelligence-training`,
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
    { '@type': 'ListItem', position: 3, name: 'AI Training', item: `${SITE_URL}/artificial-intelligence-training` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a coding background to start Artificial Intelligence training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AI training is divided into non-technical tracks (prompt engineering, generative AI for workplace productivity, AI ethics) and technical tracks (Python, machine learning, neural networks). Complete beginners can start with prompt engineering and business AI tools without writing a single line of code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these Artificial Intelligence training courses free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All AI training programs featured on Graduates Hub are free to audit or study. Programs include CPD-accredited diplomas from Alison, free introductory credentials from Google and Microsoft, and open learning tracks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI certifications are recognized by employers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top industry-recognized AI credentials include Google AI Essentials, Microsoft Certified: Azure AI Fundamentals (AI-900), and CPD-accredited AI Diplomas. Employers look for these credentials alongside proof of practical application.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to complete basic AI training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Introductory AI literacy and prompt engineering training takes between 5 to 10 hours. Comprehensive Machine Learning and Python data preparation training paths take between 4 to 8 weeks of self-paced study.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do AI training credentials help South African graduates land jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South African employers across finance, marketing, IT, and business operations are actively seeking candidates who understand how to use AI tools to automate workflows, analyze datasets, and increase productivity.',
      },
    },
  ],
};

const nonTechTrack = [
  {
    title: 'Google AI Essentials',
    desc: 'Learn practical prompt engineering, Generative AI tools, workplace automation, and responsible AI use.',
    href: '/google-ai-essentials-course-guide',
    badge: 'Google Official',
    duration: '10 Hours',
  },
  {
    title: 'Applied Generative AI & Prompt Engineering',
    desc: 'Master ChatGPT, Claude, and Midjourney to automate daily tasks, write precise prompts, and streamline workflows.',
    href: '/free-ai-courses-for-beginners',
    badge: 'Popular',
    duration: '15 Hours',
  },
  {
    title: 'AI for Business & Executive Strategy',
    desc: 'Understand how artificial intelligence transforms operations, marketing, customer service, and decision-making.',
    href: '/free-business-courses',
    badge: 'Business',
    duration: '12 Hours',
  },
];

const technicalTrack = [
  {
    title: 'Python for Artificial Intelligence & ML',
    desc: 'Build foundational programming skills in Python to interact with LLM APIs, process datasets, and build custom models.',
    href: '/free-python-courses-with-certificates',
    badge: 'Dev Track',
    duration: '4 Weeks',
  },
  {
    title: 'SQL Data Preparation for AI Pipelines',
    desc: 'Learn database querying and data cleaning to prepare raw datasets for machine learning ingestion.',
    href: '/free-sql-courses-with-certificates',
    badge: 'Data Track',
    duration: '3 Weeks',
  },
  {
    title: 'Fundamentals of Machine Learning & Neural Networks',
    desc: 'Explore supervised and unsupervised learning algorithms, model evaluation, and cognitive robotics concepts.',
    href: '/free-ai-courses-for-beginners',
    badge: 'Core ML',
    duration: '5 Weeks',
  },
];

const vendorCertifications = [
  {
    title: 'Google AI Credentials',
    desc: 'Official Google AI Essentials certificate and Google Cloud Generative AI learning badges.',
    href: '/google-ai-essentials-course-guide',
    provider: 'Google',
  },
  {
    title: 'Microsoft Azure AI Fundamentals (AI-900)',
    desc: 'Learn core Computer Vision, Natural Language Processing (NLP), and Azure AI services.',
    href: '/microsoft-ai-fundamentals-course-guide',
    provider: 'Microsoft',
  },
  {
    title: 'Alison CPD-Accredited AI Diplomas',
    desc: 'Free certified diplomas in Artificial Intelligence, Machine Learning, and Robotics.',
    href: '/free-ai-courses-for-beginners',
    provider: 'Alison CPD',
  },
];

export default function AITrainingPage() {
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
          <span className="text-gray-900 font-medium">AI Training</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#1F1B13] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A5900]/20 border border-[#FFDF9C]/30 text-[#FFDF9C] font-bold text-xs uppercase tracking-wider mb-6">
            <Brain size={14} className="text-yellow-400" />
            Artificial Intelligence Training Hub · 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            Free Artificial Intelligence Training &amp; Certificates
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Master Generative AI, prompt engineering, and machine learning with free, certified training tracks from Google, Microsoft, and accredited providers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400">
            {['No Coding Required to Start', 'CPD & Vendor Credentials', 'Self-Paced Training'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12 flex-1">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Why Artificial Intelligence Training is Essential</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-[15px] flex flex-col gap-4">
            <p>
              Artificial Intelligence has shifted from a specialized research domain into an essential everyday skill across every major industry. Whether you work in Marketing, Finance, IT, Data, or Business Administration, knowing how to leverage AI tools and machine learning algorithms gives you a decisive advantage in the job market.
            </p>
            <p>
              Our Artificial Intelligence training directory structures learning into clear, practical tracks. Complete beginner modules require zero programming knowledge, while technical developer modules cover Python, SQL data prep, and model deployment.
            </p>
          </div>
        </section>

        {/* Track 1: Non-Technical AI */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Track 1: AI for Non-Technical Professionals</h2>
              <p className="text-gray-600 text-sm">Prompt engineering, Generative AI tools, and workplace productivity. Zero coding required.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nonTechTrack.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{item.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link href={item.href} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-auto pt-4 border-t border-gray-100">
                  Explore Training <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Track 2: Technical AI & ML */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Terminal size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Track 2: Technical AI &amp; Machine Learning</h2>
              <p className="text-gray-600 text-sm">Python, database management, and building machine learning algorithms.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalTrack.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{item.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link href={item.href} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-auto pt-4 border-t border-gray-100">
                  Explore Technical Track <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Track 3: Official Vendor Credentials */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Track 3: Official Vendor &amp; CPD AI Credentials</h2>
            <p className="text-gray-600 text-sm">Recognized certifications issued by global technology leaders and accreditation bodies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendorCertifications.map((vendor) => (
              <div key={vendor.title} className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block mb-3">
                    {vendor.provider}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{vendor.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{vendor.desc}</p>
                </div>
                <Link href={vendor.href} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 pt-3 border-t border-slate-200/60">
                  View Credential Guide <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* AI Tools & Portfolio Practice */}
        <section className="bg-gradient-to-br from-[#FBF3EB] to-[#FFF8F1] rounded-2xl border border-[#D1C5B4] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Practice with Free Interactive AI Tools</h2>
              <p className="text-xs text-gray-600">Test your skills with AI-powered career assistants and portfolio tasks.</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Put your AI training into practice immediately. Use our free interactive AI tools to audit your CV, decode complex job ads, or prep for interviews. Then complete hands-on portfolio tasks to earn an AI-graded proof-of-work assessment badge.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/free-ai-career-tools" className="inline-flex items-center gap-2 bg-primary hover:bg-[#5a4000] text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors">
              Access 7 Free AI Tools <ArrowRight size={15} />
            </Link>
            <Link href="/portfolio-tasks" className="inline-flex items-center gap-2 bg-white border border-[#D1C5B4] text-gray-800 hover:text-primary font-semibold text-sm px-5 py-3 rounded-lg transition-colors">
              View AI &amp; Tech Tasks
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
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
