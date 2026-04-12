import type { Metadata } from 'next';

const SITE_URL = 'https://www.graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Information regarding the affiliate relationships and compensation associated with courses listed on Graduates Hub.',
  alternates: { canonical: `${SITE_URL}/disclosure` },
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Affiliate <span className="text-primary">Disclosure</span></h1>
          <p className="text-gray-400 mt-4">Transparency is important to us.</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-gray-700 [&_h2]:text-gray-900 [&_h3]:text-gray-900 [&_li]:text-gray-700 [&_strong]:text-gray-900">
        <h2>Our Relationship with Alison.com</h2>
        <p>Graduates Hub is a participant in the Alison.com Affiliate Program. This means that we earn a commission on qualifying sign-ups or purchases made through the links on this website.</p>

        <h2>How It Works</h2>
        <p>When you click on a course link on Graduates Hub, it contains a special tracking code (e.g., utm_campaign=43098205). If you decide to register for a free account on Alison.com or eventually purchase a digital/physical certificate after clicking our links, we may receive a small percentage of that sale.</p>

        <h2>Does This Affect Your Learning?</h2>
        <p><strong>Absolutely not.</strong> Our affiliate relationship does not influence the content available to you, nor does it increase the cost of any optional certificates you may choose to buy. Alison.com remains a free learning platform with thousands of courses available at no charge. The commissions we earn simply help us maintain and improve the Graduates Hub website.</p>

        <h2>Our Commitment</h2>
        <p>Our primary goal is to curate and organize the best free educational resources to help you achieve your learning and career goals. We only promote courses and materials that we believe offer genuine value to our users.</p>

        <div className="bg-blue-50 border-l-4 border-primary p-6 mt-8 rounded-r-lg not-prose">
          <p className="m-0 text-blue-800 font-medium">By using Graduates Hub, you acknowledge and agree to this affiliate relationship. Thank you for your support!</p>
        </div>
      </main>
    </div>
  );
}
