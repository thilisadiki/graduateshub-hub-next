import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Clock, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';
import WhatsAppCard from './WhatsAppCard';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Contact Us | Graduates Hub',
  description: 'Get in touch with the Graduates Hub team. We are here to help with course questions, content feedback, partnership enquiries, and POPIA privacy requests.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Contact <span className="text-primary">Us</span></h1>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Have a question, feedback, or partnership enquiry? Fill in the form and we will get back to you.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Direct email */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Email us directly</h3>
              </div>
              <a
                href="mailto:info@graduateshub.co.za"
                className="text-sm font-bold text-primary hover:underline break-all"
              >
                info@graduateshub.co.za
              </a>
              <p className="text-xs text-gray-500 mt-1">For all general enquiries</p>
            </div>

            {/* Response time */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900">Response time</h3>
              </div>
              <p className="text-sm text-gray-600">
                We typically respond within <strong>24 to 48 hours</strong> on South African business days
                (Monday to Friday, excluding public holidays).
              </p>
            </div>

            <WhatsAppCard />

            {/* Facebook community */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Facebook community</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                189,000+ South African students and professionals follow us on Facebook. Ask questions, share wins, and get course recommendations from the community.
              </p>
              <a
                href="https://facebook.com/Graduateshub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline"
              >
                Visit our Facebook page
                <ExternalLink size={13} />
              </a>
            </div>

            {/* What we can help with */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-3 text-sm">What we can help with</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold mt-0.5">+</span>Course recommendations for your goals</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold mt-0.5">+</span>Corrections to course listings or guides</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold mt-0.5">+</span>Partnership and advertising enquiries</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold mt-0.5">+</span>POPIA privacy requests (access, correction, deletion)</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold mt-0.5">+</span>General feedback about the site</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xs text-blue-700">
                  For POPIA-related requests, please select &ldquo;POPIA / privacy request&rdquo; as your subject so we can route it to our Information Officer promptly. See our{' '}
                  <Link href="/privacy" className="font-bold underline hover:text-blue-900">Privacy Policy</Link>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
