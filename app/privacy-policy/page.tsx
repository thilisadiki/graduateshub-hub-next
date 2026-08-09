import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy (POPIA & GDPR Compliant)',
  description:
    'Our Privacy Policy explains how Graduates Hub collects, uses, and safeguards personal information in compliance with POPIA (Act 4 of 2013) and the General Data Protection Regulation (GDPR).',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    siteName: SITE_NAME,
    title: 'Privacy Policy (POPIA & GDPR Compliant) | Graduates Hub',
    description:
      'Our Privacy Policy explains how Graduates Hub collects, uses, and safeguards personal information in compliance with POPIA (Act 4 of 2013) and the General Data Protection Regulation (GDPR).',
    url: `${SITE_URL}/privacy-policy`,
    images: [OG_IMAGE],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] flex flex-col">
      <div className="bg-[#1F1B13] text-white py-14 px-6 border-b border-[#D1C5B4]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Privacy <span className="text-[#FFDF9C]">Policy</span>
          </h1>
          <p className="text-[#D1C5B4] mt-3 text-base">Last updated: August 2026</p>
          <p className="text-[#D1C5B4]/80 mt-1 text-sm">
            In compliance with POPIA (Act 4 of 2013) &amp; General Data Protection Regulation (GDPR)
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-[#4F4639] [&_h2]:text-[#1F1B13] [&_h3]:text-[#1F1B13] [&_li]:text-[#4F4639] [&_strong]:text-[#1F1B13] [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4">
        <h2>1. Introduction, Data Controller &amp; Responsible Party</h2>
        <p>
          Graduates Hub (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at{' '}
          <strong>graduateshub.org</strong>. We are committed to respecting user privacy and protecting personal information in full compliance with South Africa&apos;s <strong>Protection of Personal Information Act, Act 4 of 2013 (POPIA)</strong> and the European Union&apos;s <strong>General Data Protection Regulation (GDPR) (EU Regulation 2016/679)</strong>.
        </p>
        <p>
          For the purposes of POPIA, Graduates Hub is the <strong>Responsible Party</strong>. Under the GDPR, Graduates Hub serves as the <strong>Data Controller</strong>: the entity determining the purposes and means of processing personal data.
        </p>
        <p>
          All privacy inquiries, data access requests, or regulatory queries may be directed to our Information Officer and Data Protection Lead at{' '}
          <a href="mailto:info@graduateshub.org" className="text-primary font-bold hover:underline">
            info@graduateshub.org
          </a>.
        </p>

        <h2>2. Personal Information We Collect</h2>
        <p>
          Under POPIA and GDPR, &ldquo;personal data&rdquo; or &ldquo;personal information&rdquo; refers to any information relating to an identified or identifiable natural person. We collect the following:
        </p>
        <h3>Information provided directly by you:</h3>
        <ul>
          <li>
            <strong>Contact communications:</strong> When you reach out via our contact form or direct email, we collect your name, email address, and message contents.
          </li>
          <li>
            <strong>Newsletter subscriptions:</strong> When you subscribe to updates, we collect your email address.
          </li>
          <li>
            <strong>Interactive AI tools &amp; CV Builder inputs:</strong> Text snippets, job descriptions, or resume bullet points uploaded into our interactive AI utilities (CV Reviewer, JD Decoder, Skills Gap Analyzer, AI Interview Simulator) or CV Builder are processed via secure server-side API calls to Google Gemini API for transient analysis. We do not store your uploaded documents permanently in public databases.
          </li>
        </ul>
        <h3>Information collected automatically:</h3>
        <ul>
          <li>
            <strong>Log data:</strong> Browser type, IP address, device identifiers, language preference, referring pages, and timestamp data.
          </li>
          <li>
            <strong>Usage analytics:</strong> Aggregated, anonymized browsing activity collected via Google Analytics 4 (GA4) to analyze content engagement.
          </li>
          <li>
            <strong>Cookie data:</strong> Technical and performance cookies (detailed in Section 9).
          </li>
        </ul>

        <h2>3. Legal Bases for Processing (GDPR Article 6 &amp; POPIA Section 11)</h2>
        <p>
          We process your personal information only when authorized by applicable data protection laws. Our lawful processing bases include:
        </p>
        <ul>
          <li>
            <strong>Consent (GDPR Art. 6(1)(a) / POPIA Sec. 11(1)(a)):</strong> You have given explicit consent for newsletter subscriptions, contact inquiries, or cookie preferences.
          </li>
          <li>
            <strong>Contract Performance &amp; Service Provision (GDPR Art. 6(1)(b) / POPIA Sec. 11(1)(b)):</strong> Processing is necessary to deliver user-requested features, such as generating real-time AI feedback in our CV Reviewer or CV Builder.
          </li>
          <li>
            <strong>Legitimate Interests (GDPR Art. 6(1)(f) / POPIA Sec. 11(1)(f)):</strong> Processing is necessary for our legitimate interests in maintaining site security, preventing fraudulent activity, analyzing aggregated traffic patterns, and improving educational guides.
          </li>
        </ul>

        <h2>4. The Eight Conditions for Lawful Processing (POPIA Section 4)</h2>
        <p>
          POPIA requires that all processing of personal information satisfy eight statutory conditions. We comply with all eight:
        </p>
        <ol>
          <li><strong>Accountability:</strong> We ensure all statutory data protection principles are enforced throughout the processing lifecycle.</li>
          <li><strong>Processing Limitation:</strong> Data is collected lawfully, minimally, and transparently without infringing privacy.</li>
          <li><strong>Purpose Specification:</strong> Data is collected for explicit, defined educational and communication purposes.</li>
          <li><strong>Further Processing Limitation:</strong> Secondary processing is strictly restricted to compatible purposes.</li>
          <li><strong>Information Quality:</strong> Reasonable measures are taken to ensure accuracy and freshness of retained data.</li>
          <li><strong>Openness:</strong> Detailed disclosures are published regarding our data collection practices.</li>
          <li><strong>Security Safeguards:</strong> Technical safeguards prevent unauthorized access, data loss, or disclosure.</li>
          <li><strong>Data Subject Participation:</strong> Rights of access, correction, and erasure are facilitated promptly.</li>
        </ol>

        <h2>5. Your Rights as a Data Subject (POPIA &amp; GDPR)</h2>
        <p>
          Whether located in South Africa, the European Economic Area (EEA), the United Kingdom, or globally, you hold extensive rights over your personal data:
        </p>
        <ul>
          <li>
            <strong>Right of Access (POPIA Sec. 23 / GDPR Art. 15):</strong> Request confirmation of whether we hold your personal data and obtain a copy.
          </li>
          <li>
            <strong>Right to Rectification (POPIA Sec. 24 / GDPR Art. 16):</strong> Request correction of inaccurate, incomplete, or outdated personal information.
          </li>
          <li>
            <strong>Right to Erasure / &quot;Right to be Forgotten&quot; (POPIA Sec. 24 / GDPR Art. 17):</strong> Request deletion of your personal data when it is no longer required for lawful processing.
          </li>
          <li>
            <strong>Right to Restrict Processing (GDPR Art. 18):</strong> Request temporary restriction of data processing under specific dispute circumstances.
          </li>
          <li>
            <strong>Right to Data Portability (GDPR Art. 20):</strong> Request your personal data in a structured, commonly used, machine-readable format.
          </li>
          <li>
            <strong>Right to Object (POPIA Sec. 11(3) / GDPR Art. 21):</strong> Object to data processing based on legitimate interests or direct marketing at any time.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email our Data Protection Lead at{' '}
          <a href="mailto:info@graduateshub.org" className="text-primary font-bold hover:underline">
            info@graduateshub.org
          </a>. We respond to all verified access and erasure requests within <strong>30 days</strong>.
        </p>

        <h2>6. Google Analytics 4 (GA4)</h2>
        <p>
          We use Google Analytics 4 to evaluate aggregated site performance. GA4 gathers information using anonymized IP addresses. Google&apos;s privacy policies are available at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            policies.google.com/privacy
          </a>. You may opt out of GA4 tracking via the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Google Analytics Opt-out Add-on
          </a>.
        </p>

        <h2>7. Google AdSense &amp; Advertising</h2>
        <p>
          We display third-party advertisements via Google AdSense. Google uses cookies to serve contextual ads based on previous website visits. Users may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Google Ads Settings
          </a> or the{' '}
          <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Network Advertising Initiative opt-out page
          </a>.
        </p>

        <h2>8. Direct Marketing &amp; Email Communications</h2>
        <p>
          We send electronic newsletters only to users who have explicitly opted in. Every marketing message contains a clear, one-click unsubscribe link. You may also object to marketing by emailing{' '}
          <a href="mailto:info@graduateshub.org" className="text-primary font-bold hover:underline">
            info@graduateshub.org
          </a>.
        </p>

        <h2>9. Cookie Policy</h2>
        <p>
          Our site utilizes functional and analytical cookies to maintain session states and measure site performance. You may configure your web browser to decline cookies, though certain interactive features may experience reduced functionality.
        </p>

        <h2>10. Third-Party Educational Links &amp; Affiliate Disclosure</h2>
        <p>
          Our pages link to external learning platforms (e.g., Alison.com, Coursera, Google, Microsoft Learn). Some course links include affiliate tracking codes. External sites maintain independent privacy policies. Please review our{' '}
          <Link href="/disclosure" className="text-primary font-bold hover:underline">
            Affiliate Disclosure
          </Link> for complete details.
        </p>

        <h2>11. International Data Transfers (GDPR Chapter V &amp; POPIA Section 72)</h2>
        <p>
          Because our infrastructure utilizes global cloud networks (including Vercel Edge hosting, Google Cloud API endpoints, and Google Analytics), personal data may be processed in servers located outside South Africa or the EEA. Where cross-border data transfers occur, we ensure robust data protection through Standard Contractual Clauses (SCCs) and adequacy frameworks providing protection equivalent to POPIA and GDPR standards.
        </p>

        <h2>12. Security Safeguards &amp; Breach Notification</h2>
        <p>
          We enforce appropriate administrative, technical, and physical safeguards to prevent data loss, corruption, or unauthorized disclosure. In the event of a security compromise affecting personal data, we will notify relevant supervisory authorities and affected users as required by POPIA Section 22 and GDPR Article 33.
        </p>

        <h2>13. Data Retention Limits</h2>
        <p>
          Personal information is retained only as long as necessary to fulfill the purpose for which it was collected. Newsletter records are maintained until unsubscription. Contact form communications are retained for historical recordkeeping, while AI tool inputs are processed transiently without permanent storage.
        </p>

        <h2>14. Supervisory Authorities &amp; Complaints</h2>
        <p>
          If you believe your privacy rights have been infringed, you have the right to lodge a complaint with supervisory regulators:
        </p>
        <ul>
          <li>
            <strong>South Africa (POPIA):</strong> The Information Regulator (South Africa) at{' '}
            <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              inforegulator.org.za
            </a> or email{' '}
            <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">
              POPIAComplaints@inforegulator.org.za
            </a>.
          </li>
          <li>
            <strong>European Union (GDPR):</strong> You have the right to lodge a complaint with your local EU Data Protection Authority (DPA) in the member state of your habitual residence or work place.
          </li>
        </ul>

        <h2>15. Contact Our Privacy Team</h2>
        <p>
          For any questions regarding this Privacy Policy or to submit data subject access requests, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@graduateshub.org" className="text-primary font-bold hover:underline">info@graduateshub.org</a></li>
          <li><strong>Website:</strong> <Link href="/contact" className="text-primary hover:underline">graduateshub.org/contact</Link></li>
        </ul>
      </main>
    </div>
  );
}
