import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Information regarding the affiliate relationships and compensation associated with courses listed on Graduates Hub.',
  alternates: { canonical: `${SITE_URL}/disclosure` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Affiliate Disclosure | Graduates Hub',
    description: 'Information regarding the affiliate relationships and compensation associated with courses listed on Graduates Hub.',
    url: `${SITE_URL}/disclosure`,
    images: [OG_IMAGE],
  },
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] flex flex-col">
      <div className="bg-[#1F1B13] text-white py-14 px-6 border-b border-[#D1C5B4]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Affiliate <span className="text-[#FFDF9C]">Disclosure</span></h1>
          <p className="text-[#D1C5B4] mt-3 text-base">Transparency is central to everything we build.</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-[#4F4639] [&_h2]:text-[#1F1B13] [&_h3]:text-[#1F1B13] [&_li]:text-[#4F4639] [&_strong]:text-[#1F1B13] [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4">
        <h2>Our Relationship with Educational Partners</h2>
        <p>Graduates Hub is a participant in third-party affiliate programs (specifically the Alison.com Affiliate Program). This means we may earn a commission when users sign up or purchase optional digital/physical certificates through designated links on our platform.</p>

        <h2>How Affiliate Links Work</h2>
        <p>When you click on certain course links on Graduates Hub, the URL contains a unique tracking identifier (such as tracking parameter utm_campaign=43098205). If you register for a account or choose to buy an optional certificate or diploma after clicking our link, the course provider pays us a small percentage of that transaction.</p>

        <h2>Direct Non-Affiliate Provider References</h2>
        <p>Many of the learning roadmaps on Graduates Hub feature direct links to free educational programs provided by institutions like Google, Microsoft Learn, and official government youth initiatives (such as the YES Youth Program). We do not receive compensation for linking to official Google or Microsoft Learn tracks; we recommend them purely because they represent high-quality, free career resources.</p>

        <h2>Does This Affect Your Learning or Costs?</h2>
        <p><strong>Absolutely not.</strong> Our affiliate relationships do not increase the price of any optional certificates you choose to buy, nor do they restrict access to free learning materials. The courses listed remain 100% free to study. The commissions we earn help support platform hosting, tool development, and keeping our resources freely accessible to all graduates.</p>

        <h2>Our Curation Commitment</h2>
        <p>Our primary mission is to curate the best free educational tools to help job seekers build real-world skills. We never list a course simply because it pays a commission. Every recommended course must pass our strict curation and quality standards.</p>

        <div className="bg-[#FFDF9C]/30 border-l-4 border-primary p-6 mt-8 rounded-r-lg not-prose">
          <p className="m-0 text-[#261A00] font-medium">By using Graduates Hub, you acknowledge and agree to this affiliate disclosure. Thank you for supporting our mission!</p>
        </div>
      </main>
    </div>
  );
}
