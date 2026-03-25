import type { Metadata } from 'next';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for Graduates Hub. Information about your use of our platform and resources.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Terms of <span className="text-primary">Service</span></h1>
          <p className="text-gray-400 mt-4">Last updated: March 2025</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose prose-slate">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Graduates Hub ("we", "our", or "us"), you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Description of Service</h2>
        <p>Graduates Hub provides a curated directory of free online courses. We act as an affiliate for third-party course providers (specifically Alison.com). We do not host, create, or grant certifications for any of the educational content listed on our site.</p>

        <h2>3. Affiliate & Advertising Disclaimer</h2>
        <p>Some of the links on this website are affiliate links. This means that if you click on the link and sign up or purchase a certificate from our partners, we may receive a commission at no extra cost to you.</p>
        <p>Additionally, this site uses third-party advertising networks, such as Google AdSense, to serve personalized and non-personalized advertisements.</p>

        <h2>4. Intellectual Property</h2>
        <p>The site and its original content, features, and functionality are owned by Graduates Hub. Course material, names, and certifications belong to their respective owners (e.g., Alison.com).</p>

        <h2>5. Limitation of Liability</h2>
        <p>Graduates Hub shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the site or the courses listed herein.</p>

        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. We will always post the most current version on our site. By continuing to use the site after changes become effective, you agree to be bound by the revised terms.</p>
      </main>
    </div>
  );
}
