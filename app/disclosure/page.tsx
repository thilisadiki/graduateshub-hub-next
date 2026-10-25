import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Commercial & Link Disclosure',
  description: 'Our transparent link disclosure policy explaining our affiliate-free model, direct provider links, and editorial independence on Graduates Hub.',
  alternates: { canonical: `${SITE_URL}/disclosure` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Commercial & Link Disclosure | Graduates Hub',
    description: 'Our transparent link disclosure policy explaining our affiliate-free model, direct provider links, and editorial independence on Graduates Hub.',
    url: `${SITE_URL}/disclosure`,
    images: [OG_IMAGE],
  },
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] flex flex-col">
      <div className="bg-[#1F1B13] text-white py-14 px-6 border-b border-[#D1C5B4]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Commercial &amp; Link <span className="text-[#FFDF9C]">Disclosure</span></h1>
          <p className="text-[#D1C5B4] mt-3 text-base">Transparency and editorial independence are central to everything we build.</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-[#4F4639] [&_h2]:text-[#1F1B13] [&_h3]:text-[#1F1B13] [&_li]:text-[#4F4639] [&_strong]:text-[#1F1B13] [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4">
        <h2>Our 100% Affiliate-Free Policy</h2>
        <p>Graduates Hub does not use affiliate links, referral tracking parameters, or commission-based partnerships. When you click on any course, certification, or tool link on our platform, you are directed straight to the official provider or agency portal with zero tracking codes, cookies, or financial kickbacks.</p>

        <h2>Why We Removed Affiliate Links</h2>
        <p>To preserve complete objectivity and protect learner trust, we made the conscious editorial decision to remove all affiliate links (including our previous participation in the Alison.com affiliate program). Our course selections, rankings, and career roadmaps are 100% merit-based, determined solely by curriculum quality, employer recognition, and career utility.</p>

        <h2>Direct, Neutral Provider References</h2>
        <p>Every learning path on Graduates Hub connects learners directly to authentic resources from leading technology vendors (e.g. Google, Microsoft, AWS, Cisco), accredited universities, and official government agencies (such as FEMA, CISA, CDC, SBA, and FAI). We receive no referral fees or compensation when you enroll, audit courses, or earn certificates from these providers.</p>

        <h2>How Graduates Hub is Funded</h2>
        <p>To keep our complete library of career roadmaps, interview guides, proof-of-work project briefs, and interactive AI tools 100% free for graduates and job seekers, our platform is funded through non-intrusive contextual advertising (such as Google AdSense) and direct platform self-funding. Advertising partners have zero editorial influence on our reviews, rankings, or curriculum curation.</p>

        <h2>Our Curation Commitment</h2>
        <p>Our core mission is to curate the highest-quality free and high-ROI learning resources to help candidates build verifiable skills and transition into sustainable employment. Every recommended course must satisfy our strict 7-part editorial framework. For a comprehensive breakdown of our evaluation process, please review our{' '}
          <Link href="/curation-policy" className="text-primary font-bold hover:underline">
            Editorial Curation Policy
          </Link>.
        </p>

        <div className="bg-[#FFDF9C]/30 border-l-4 border-primary p-6 mt-8 rounded-r-lg not-prose">
          <p className="m-0 text-[#261A00] font-medium">By using Graduates Hub, you can learn with complete confidence knowing that our recommendations are independent, unbiased, and completely free of affiliate incentives.</p>
        </div>
      </main>
    </div>
  );
}
