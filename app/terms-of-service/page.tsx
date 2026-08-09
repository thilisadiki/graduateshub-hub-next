import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service (2026)',
  description:
    'Read the Terms of Service for Graduates Hub. Information about your use of our course guides, AI career tools, portfolio briefs, CV builder, and platform resources.',
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Terms of Service (2026) | Graduates Hub',
    description:
      'Read the Terms of Service for Graduates Hub. Information about your use of our course guides, AI career tools, portfolio briefs, CV builder, and platform resources.',
    url: `${SITE_URL}/terms-of-service`,
    images: [OG_IMAGE],
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] flex flex-col">
      {/* Hero */}
      <div className="bg-[#1F1B13] text-white py-14 px-6 border-b border-[#D1C5B4]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Terms of <span className="text-[#FFDF9C]">Service</span>
          </h1>
          <p className="text-[#D1C5B4] mt-3 text-base">
            Last updated: August 2026 | Governing the use of Graduates Hub services, guides, and interactive tools
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-[#4F4639] [&_h2]:text-[#1F1B13] [&_h3]:text-[#1F1B13] [&_li]:text-[#4F4639] [&_strong]:text-[#1F1B13] [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Graduates Hub (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), located at{' '}
          <strong>graduateshub.org</strong>, you agree to comply with and be bound by these Terms of Service. These terms apply to all visitors, registered users, and job seekers accessing our website, course guides, AI career tools, portfolio tasks, CV builder, and career resources.
        </p>
        <p>
          If you do not agree with any part of these terms, you must discontinue your use of the website and services immediately.
        </p>

        <h2>2. Description of Platform Services</h2>
        <p>
          Graduates Hub provides free educational, career development, and job readiness tools designed to assist graduates and job seekers. Our platform services include:
        </p>
        <ul>
          <li>
            <strong>Structured Course &amp; Certification Guides:</strong> Curated directories and learning roadmaps referencing free online courses, certificates, and diplomas offered by third-party educational providers (including Google, Microsoft Learn, Alison, Coursera, and edX).
          </li>
          <li>
            <strong>Interactive AI Career Tools:</strong> Interactive utilities powered by Google Gemini API, including the CV Reviewer, Job Description Decoder, Skills Gap Analyzer, AI Interview Simulator, and Custom Learning Path Generator.
          </li>
          <li>
            <strong>Proof of Work Portfolio Briefs:</strong> Graded, real-world project briefs across 10 career categories to help learners build verifiable portfolio tasks.
          </li>
          <li>
            <strong>Free Resume &amp; CV Builder:</strong> Browser-based document creation tools allowing users to structure professional resumes.
          </li>
          <li>
            <strong>Career Roadmaps &amp; Interview Prep Guides:</strong> Step-by-step career path blueprints and role-specific interview preparation frameworks.
          </li>
        </ul>

        <h2>3. Third-Party Educational Content &amp; Certifications</h2>
        <p>
          Graduates Hub is an independent educational curation and resource hub. We do not host, create, or directly issue accredited degrees or certificates for third-party courses listed on our platform. All third-party course materials, logos, course names, and official credentials belong exclusively to their respective institutional owners (e.g., Google, Microsoft, Alison.com, Coursera).
        </p>
        <p>
          When you click on external course links, you are directed to third-party learning platforms with their own terms of service, privacy policies, and certification requirements.
        </p>

        <h2>4. Interactive AI Tools &amp; User Content</h2>
        <p>
          Our interactive tools utilize the Google Gemini API to analyze user-provided text (such as resume bullet points, job descriptions, or interview responses) and generate real-time feedback.
        </p>
        <ul>
          <li>
            <strong>Data Processing:</strong> User inputs provided to our AI career tools are processed securely via transient server-side API calls. We do not permanently store or publish personal CV documents or submitted text in public logs.
          </li>
          <li>
            <strong>Advisory Purpose:</strong> All AI-generated feedback, resume revisions, and interview evaluations are intended solely for educational guidance and career preparation. Users remain solely responsible for reviewing and verifying the accuracy of AI-suggested content before submitting job applications to employers.
          </li>
          <li>
            <strong>User Integrity:</strong> You agree not to upload harmful, offensive, confidential corporate data, or illegal material into our interactive AI tools or CV builder.
          </li>
        </ul>

        <h2>5. Affiliate &amp; Advertising Transparency</h2>
        <p>
          To keep our core learning resources 100% free for graduates, Graduates Hub participates in affiliate marketing programs (specifically with Alison.com) and displays third-party contextual advertising via Google AdSense.
        </p>
        <p>
          If you click on an affiliate link and subsequently purchase an optional paid certificate or diploma from a partner platform, we may earn a small commission at no additional cost to you. Our affiliate relationships never influence our course curation criteria or editorial ratings. For full details, please review our{' '}
          <Link href="/disclosure" className="text-primary font-bold hover:underline">
            Affiliate Disclosure
          </Link>.
        </p>

        <h2>6. Intellectual Property Rights</h2>
        <p>
          The layout, design system, original text, portfolio project briefs, dynamic metadata, source code, and logo of Graduates Hub are the exclusive intellectual property of Graduates Hub and its founders.
        </p>
        <p>
          You may view, download, and print individual guides or project briefs for your personal, non-commercial educational use. You may not scrape, reproduce, redistribute, or resell site content in bulk without prior written permission.
        </p>

        <h2>7. Limitation of Liability &amp; Disclaimer of Warranties</h2>
        <p>
          Graduates Hub is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied.
        </p>
        <p>
          While we make every effort to verify course links, accreditation status, and career guidance, we do not guarantee specific employment outcomes, job placements, or interview callbacks resulting from the use of our guides, CV builder, or AI tools. Graduates Hub shall not be liable for any direct, indirect, incidental, or consequential damages arising from your reliance on site content or third-party learning platforms.
        </p>

        <h2>8. Protection of Personal Information (POPIA Compliance)</h2>
        <p>
          We respect your privacy and process all personal information in accordance with South Africa&apos;s Protection of Personal Information Act (POPIA), Act 4 of 2013. For details on how we collect, process, and safeguard your data, please read our full{' '}
          <Link href="/privacy-policy" className="text-primary font-bold hover:underline">
            Privacy Policy
          </Link>.
        </p>

        <h2>9. Governing Law &amp; Jurisdiction</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the South African courts.
        </p>

        <h2>10. Modifications to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms of Service at any time. Any changes will be published on this page with an updated revision date. Your continued use of Graduates Hub following the posting of changes constitutes acceptance of the revised terms.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these Terms of Service, please contact us at:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@graduateshub.org" className="text-primary font-bold hover:underline">info@graduateshub.org</a></li>
          <li><strong>Contact Form:</strong> <Link href="/contact" className="text-primary hover:underline">graduateshub.org/contact</Link></li>
        </ul>
      </main>
    </div>
  );
}
