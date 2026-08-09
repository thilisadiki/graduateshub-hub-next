import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText, CheckCircle2, ShieldCheck, Sparkles, Download,
  Crop, Eye, ArrowRight, HelpCircle, Target, Award,
  ChevronRight, Wrench, Layers, Play
} from 'lucide-react';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How to Write a Graduate CV (Free ATS CV Builder 2026)',
  description:
    'Learn how to write a graduate CV that passes ATS screening. Free interactive ATS CV builder, templates, profile cropper, and step-by-step graduate resume examples with zero sign-up required.',
  alternates: { canonical: `${SITE_URL}/cv-builder` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'How to Write a Graduate CV (Free ATS CV Builder 2026) | Graduates Hub',
    description:
      'Step-by-step guide on how to write a graduate CV. Free interactive ATS resume builder with templates, profile cropper, and instant PDF download.',
    type: 'website',
    url: `${SITE_URL}/cv-builder`,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Free CV Builder', item: `${SITE_URL}/cv-builder` },
  ],
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Graduates Hub Free CV Builder',
  operatingSystem: 'Any',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1240',
  },
  description: 'Free interactive CV builder with ATS-friendly templates, photo cropper, live preview, and instant PDF download.',
};

const FAQS = [
  {
    q: 'Is this CV Builder completely free to use?',
    a: 'Yes, 100% free with no hidden paywalls, no subscription traps, and no required credit card or account registration. You can create, edit, and download your CV as a high-resolution PDF as many times as you like.',
  },
  {
    q: 'Are the exported CV templates ATS-friendly?',
    a: 'Yes. All three of our built-in templates (Modern, Professional, Minimalist) are engineered using standard headings, clean typography, and predictable single-column and two-column layouts that Applicant Tracking Systems (ATS) can parse seamlessly.',
  },
  {
    q: 'How does the Profile Photo Cropper work?',
    a: 'Inside the Personal Information step in our workspace, uploading a photo opens our interactive HTML5 Canvas Cropper. You can drag to position your image, zoom from 100% to 300%, and rotate it 90 degrees before applying it to your template.',
  },
  {
    q: 'Is my personal information saved on a remote database?',
    a: 'No. We prioritize 100% data privacy. All information you type into the CV builder remains strictly within your browser local state. No personal resume data is ever sent to or stored on our servers.',
  },
  {
    q: 'Can I use this CV alongside the Graduates Hub AI tools?',
    a: 'Yes! Once you finish drafting your CV text, you can copy your summary or work experience into our free AI CV Reviewer (/free-ai-career-tools) to get automated ATS keyword scoring and feedback.',
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

export default function CVBuilderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-600 font-medium">Free CV Builder</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-[#FFDF9C]/20 border border-[#D1C5B4] px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={14} /> 100% Free · No Sign-Up Required · Instant PDF Download
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            How to Write a Graduate CV <br className="hidden sm:block" />
            <span className="text-primary">&amp; Build an ATS Resume</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn how to write a winning graduate CV that passes Applicant Tracking Systems (ATS). Use our free interactive CV builder to create, format, and download your resume with zero paywalls.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/cv-builder/create"
              className="bg-primary hover:bg-[#5a4000] text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base flex items-center gap-2.5"
            >
              Start Building My Free CV <Play size={16} className="fill-current" />
            </Link>
            <Link
              href="/free-courses-with-certificates"
              className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold px-6 py-4 rounded-xl transition-colors text-sm"
            >
              Browse Free Courses to Add →
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-gray-100 text-xs font-semibold text-gray-500">
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-500" /> 100% Privacy First
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Download size={16} className="text-blue-500" /> Zero PDF Watermarks
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Crop size={16} className="text-amber-500" /> Interactive Photo Cropper
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Eye size={16} className="text-purple-500" /> Real-Time Live Preview
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            3 Professional, ATS-Friendly Templates
          </h2>
          <p className="text-sm text-gray-500">
            Select a template below to launch directly into the builder workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col hover:border-primary transition-all">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold mb-4">
              🎨
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1">Modern Template</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Clean 2-column sidebar layout featuring a circular profile photo header, accent borders, and distinct skill tags.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                Tech & Creative
              </span>
              <Link
                href="/cv-builder/create"
                className="text-xs font-extrabold text-primary hover:underline flex items-center gap-1"
              >
                Use Template →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col hover:border-primary transition-all">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
              💼
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1">Professional Template</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Classic corporate header layout with traditional serif typography, structured section dividers, and formal contact badges.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                Corporate & Finance
              </span>
              <Link
                href="/cv-builder/create"
                className="text-xs font-extrabold text-blue-600 hover:underline flex items-center gap-1"
              >
                Use Template →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col hover:border-primary transition-all">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mb-4">
              ⚡
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1">Minimalist Template</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Single-column typography-first layout engineered specifically for maximum ATS text extraction efficiency.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">
                Engineering & Executive
              </span>
              <Link
                href="/cv-builder/create"
                className="text-xs font-extrabold text-purple-600 hover:underline flex items-center gap-1"
              >
                Use Template →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section A: Key Features Breakdown */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
            Built for Graduates
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-4">
            Why Use the Graduates Hub CV Builder?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We built this tool to solve the common frustrations job seekers face with expensive commercial resume tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Crop size={20} />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-2">Canvas Photo Cropper</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Drag, zoom (100%–300%), and rotate your profile picture inside an HTML5 canvas mask for a perfect headshot.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-2">100% Privacy Safe</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your data stays in your browser local state. No personal resume details are ever saved on remote servers.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Download size={20} />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-2">Instant PDF Export</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Clean print engine generates high-resolution A4 PDF documents with zero mandatory sign-up or watermarks.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-2">AI Review Ready</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Seamlessly copy your finished CV text into our free AI tools to audit ATS keywords and skill gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Section B: ATS Resume Writing Guidelines */}
      <section className="bg-white border-y border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              How to Write an ATS-Friendly Graduate Resume
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Follow these 4 core rules when filling out your work experience and summary steps inside the builder:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <h3 className="font-extrabold text-gray-900 text-sm">Start Bullet Points with Action Verbs</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pl-6">
                Avoid passive phrasing like &quot;Responsible for...&quot;. Use powerful action verbs such as <em>Engineered, Developed, Analyzed, Streamlined, Coordinated, or Executed</em>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <h3 className="font-extrabold text-gray-900 text-sm">Quantify Your Achievements</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pl-6">
                Include concrete metrics and percentages wherever possible (e.g. &quot;Boosted page performance by 40%&quot;, &quot;Managed a campaign generating 1,200 leads&quot;).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <h3 className="font-extrabold text-gray-900 text-sm">Link Verifiable Projects & Badges</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pl-6">
                Add links to live GitHub repositories, portfolio sites, or public Graduates Hub Badge of Competence URLs to prove hands-on skills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <h3 className="font-extrabold text-gray-900 text-sm">Keep Formatting Standard & Clean</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pl-6">
                Avoid complex multi-layer graphic elements or custom non-standard fonts that cause text extraction errors in legacy ATS software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm">
            Everything you need to know about building and exporting your free CV.
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

      {/* Bottom CTA Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to build your free professional CV?</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            Launch our distraction-free builder workspace to fill in your details, crop your headshot, and export your A4 PDF instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cv-builder/create"
              className="bg-primary hover:bg-[#5a4000] text-white font-extrabold px-8 py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              Launch CV Builder Workspace <ArrowRight size={16} />
            </Link>
            <Link
              href="/free-ai-career-tools"
              className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              Try Free AI Career Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
