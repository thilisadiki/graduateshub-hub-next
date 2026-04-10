import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Privacy Policy | Graduates Hub',
  description: 'Our Privacy Policy explains how Graduates Hub collects, uses, and protects your personal information in compliance with the Protection of Personal Information Act (POPIA), Act 4 of 2013.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Privacy <span className="text-primary">Policy</span></h1>
          <p className="text-gray-400 mt-4">Last updated: April 2026</p>
          <p className="text-gray-500 mt-2 text-sm">In compliance with the Protection of Personal Information Act (POPIA), Act 4 of 2013</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-gray-700 [&_h2]:text-gray-900 [&_h3]:text-gray-900 [&_li]:text-gray-700 [&_strong]:text-gray-900">

        <h2>1. Introduction and Responsible Party</h2>
        <p>
          Graduates Hub (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website at{' '}
          <strong>graduateshub.co.za</strong>. We are committed to protecting your personal information and processing
          it lawfully in accordance with the <strong>Protection of Personal Information Act, Act 4 of 2013 (POPIA)</strong>,
          which came into full effect on 1 July 2021.
        </p>
        <p>
          For purposes of POPIA, Graduates Hub is the <strong>responsible party</strong>: the entity that determines
          the purpose and means of processing your personal information. All queries regarding this policy may be
          directed to our Information Officer at{' '}
          <a href="mailto:info@graduateshub.co.za" className="text-primary font-bold hover:underline">
            info@graduateshub.co.za
          </a>.
        </p>

        <h2>2. What Personal Information We Collect</h2>
        <p>
          Under POPIA, &ldquo;personal information&rdquo; means information relating to an identifiable, living,
          natural person. We collect the following:
        </p>
        <h3>Information you provide directly:</h3>
        <ul>
          <li>
            <strong>Contact communications:</strong> If you contact us via email or our contact form, we collect your
            name, email address, and the contents of your message.
          </li>
          <li>
            <strong>Newsletter subscriptions:</strong> If you subscribe to our newsletter, we collect your email address.
          </li>
        </ul>
        <h3>Information collected automatically:</h3>
        <ul>
          <li>
            <strong>Log data:</strong> Browser type, IP address, unique device identifiers, language preference,
            referring site, and date and time of access.
          </li>
          <li>
            <strong>Usage data:</strong> Pages visited, time spent on pages, and how you interact with our content.
            This information is collected via Google Analytics 4 and is used in aggregated, anonymised form.
          </li>
          <li>
            <strong>Cookie data:</strong> See Section 7 below for full cookie details.
          </li>
        </ul>
        <p>
          We do not collect <strong>special personal information</strong> as defined in Section 26 of POPIA,
          which includes information relating to religious beliefs, race or ethnic origin, trade union membership,
          political views, health or sex life, biometric information, or criminal behaviour. If this ever changes,
          we will update this policy and obtain explicit consent.
        </p>

        <h2>3. The Eight Conditions for Lawful Processing (POPIA Section 4)</h2>
        <p>
          POPIA requires that all processing of personal information satisfy eight conditions. We process your
          information in accordance with all of them:
        </p>
        <ol>
          <li><strong>Accountability:</strong> We take responsibility for ensuring all conditions are met during collection and processing.</li>
          <li><strong>Processing Limitation:</strong> We process your information lawfully, reasonably, and not in a manner that unjustifiably infringes your privacy.</li>
          <li><strong>Purpose Specification:</strong> We collect personal information only for specific, explicitly defined purposes and inform you of those purposes at the time of collection.</li>
          <li><strong>Further Processing Limitation:</strong> We do not process your information for purposes incompatible with the original purpose of collection.</li>
          <li><strong>Information Quality:</strong> We take reasonable steps to ensure that the personal information we hold is complete, accurate, and up to date.</li>
          <li><strong>Openness:</strong> We maintain this policy and inform you about how your information is used. We do not collect information secretly or deceptively.</li>
          <li><strong>Security Safeguards:</strong> We implement and maintain appropriate technical and organisational measures to protect your information from loss, damage, or unauthorised access.</li>
          <li><strong>Data Subject Participation:</strong> You have the right to access, correct, and request deletion of your personal information. See Section 5 below.</li>
        </ol>

        <h2>4. How We Use Your Information</h2>
        <p>We use personal information only for the following purposes:</p>
        <ul>
          <li>To respond to enquiries you send us directly.</li>
          <li>To send newsletters to subscribers who have opted in (you may unsubscribe at any time).</li>
          <li>To analyse how our website is used in aggregate so that we can improve it.</li>
          <li>To display advertising through Google AdSense (see Section 6).</li>
          <li>To comply with applicable legal obligations.</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
        </p>

        <h2>5. Your Rights as a Data Subject (POPIA Section 5)</h2>
        <p>
          Under POPIA you have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Right of access:</strong> You may request confirmation of whether we hold personal information
            about you, and request access to that information. We will respond within <strong>30 days</strong> of
            receiving your request.
          </li>
          <li>
            <strong>Right to correction or deletion:</strong> You may request that we correct personal information
            that is inaccurate, irrelevant, excessive, out of date, incomplete, or misleading. You may also request
            deletion of information we no longer have a lawful basis to retain.
          </li>
          <li>
            <strong>Right to object:</strong> You may object to the processing of your personal information on
            reasonable grounds relating to your particular situation, unless legislation provides for such processing.
          </li>
          <li>
            <strong>Right to object to direct marketing:</strong> You may object at any time to the processing of
            your personal information for direct marketing purposes. See Section 8 below.
          </li>
          <li>
            <strong>Right to lodge a complaint:</strong> If you believe we have not handled your personal information
            in accordance with POPIA, you may lodge a complaint with the Information Regulator. See Section 9 below.
          </li>
          <li>
            <strong>Right to civil remedies:</strong> You may institute civil proceedings against us for alleged
            violations of POPIA.
          </li>
        </ul>
        <p>
          To exercise any of the above rights, contact us at{' '}
          <a href="mailto:info@graduateshub.co.za" className="text-primary font-bold hover:underline">
            info@graduateshub.co.za
          </a>.
        </p>

        <h2>6. Google Analytics 4 (GA4)</h2>
        <p>
          We use Google Analytics 4 to analyse the use of our website in aggregate. GA4 gathers information about
          website use by means of cookies. The data collected (such as page views and session duration) is
          anonymised and we do not use it to identify individual users. Google&apos;s privacy policy is available
          at{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            policies.google.com/privacy
          </a>
          . You may opt out of Google Analytics tracking by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <h2>7. Google AdSense &amp; Advertising</h2>
        <p>
          We use Google AdSense to display advertisements on some of our pages. Google, as a third-party vendor,
          uses cookies to serve ads based on a user&apos;s prior visits to our website and other sites on the internet.
        </p>
        <ul>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on visits to
            our site and other sites.
          </li>
          <li>
            You may opt out of personalised advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            You may also opt out via the{' '}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Network Advertising Initiative opt-out page
            </a>
            .
          </li>
        </ul>

        <h2>8. Direct Marketing (POPIA Section 69)</h2>
        <p>
          We will only send you direct marketing communications (such as our newsletter) if you have explicitly
          opted in or if you are an existing subscriber. Every marketing communication we send will include a
          clear, free-of-charge unsubscribe option. We will process unsubscribe requests promptly.
        </p>
        <p>
          You may object to receiving direct marketing from us at any time by emailing{' '}
          <a href="mailto:info@graduateshub.co.za" className="text-primary font-bold hover:underline">
            info@graduateshub.co.za
          </a>{' '}
          or by clicking the unsubscribe link in any email we send you.
        </p>

        <h2>9. Cookies (POPIA Section 11 &amp; Section 69)</h2>
        <p>
          This website uses the following cookies:
        </p>
        <ul>
          <li><strong>Analytics cookies (Google Analytics 4):</strong> Used to measure how visitors use the site. Data is aggregated and anonymised.</li>
          <li><strong>Advertising cookies (Google AdSense):</strong> Used by Google to serve relevant advertisements.</li>
        </ul>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Please
          note that refusing cookies may affect the functionality of certain parts of our website.
        </p>

        <h2>10. Third-Party Links and Affiliate Links</h2>
        <p>
          Our website contains links to third-party websites, primarily Alison.com. Some of these links are
          affiliate links, meaning we may receive a commission if you enrol in a course. We have no control over
          and assume no responsibility for the content, privacy policies, or practices of third-party sites. We
          encourage you to review the privacy policies of any third-party site you visit. You can read more in
          our{' '}
          <Link href="/disclosure" className="text-primary font-bold hover:underline">
            Affiliate Disclosure
          </Link>
          .
        </p>

        <h2>11. Transborder Transfers of Personal Information (POPIA Section 72)</h2>
        <p>
          Some of the third-party services we use (such as Google Analytics and Google AdSense) may transfer or
          store personal information outside of South Africa. Where such transfers occur, we rely on the fact
          that these services are subject to privacy frameworks that provide a level of protection substantially
          equivalent to POPIA, or we rely on your consent to the use of these services (indicated by your
          continued use of this website after being informed of this policy).
        </p>

        <h2>12. Security Safeguards and Breach Notification (POPIA Sections 19 and 22)</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal information
          from unauthorised access, loss, or misuse. However, no method of transmission over the internet or
          electronic storage is completely secure.
        </p>
        <p>
          In the event of a security compromise where there are reasonable grounds to believe that your personal
          information has been accessed or acquired by an unauthorised person, we will notify both the
          Information Regulator and you as soon as reasonably possible. Notification will include a description
          of the possible consequences of the compromise, the measures we have taken or intend to take, and any
          recommendations for steps you can take to mitigate potential harm.
        </p>

        <h2>13. Retention of Personal Information</h2>
        <p>
          We retain personal information only for as long as is necessary to fulfil the purpose for which it was
          collected, or as required by applicable law. Contact form submissions and email correspondence are
          retained for a reasonable period to enable us to respond and maintain records of communications.
          Newsletter subscriber data is retained until you unsubscribe. Analytics data is retained in accordance
          with Google&apos;s retention policies.
        </p>

        <h2>14. The Information Regulator</h2>
        <p>
          The <strong>Information Regulator</strong> is the independent statutory body established under
          Section 39 of POPIA to monitor and enforce compliance with POPIA and the Promotion of Access to
          Information Act (PAIA) in South Africa. If you believe your rights under POPIA have been violated and
          we have not resolved your concern, you may lodge a complaint with the Information Regulator:
        </p>
        <ul>
          <li><strong>Website:</strong> <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">inforegulator.org.za</a></li>
          <li><strong>Telephone:</strong> 010 023 5200 / Toll-free: 0800 017 160</li>
          <li><strong>General enquiries:</strong> <a href="mailto:enquiries@inforegulator.org.za" className="text-primary hover:underline">enquiries@inforegulator.org.za</a></li>
          <li><strong>POPIA complaints:</strong> <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">POPIAComplaints@inforegulator.org.za</a></li>
        </ul>

        <h2>15. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
          updated revision date. We encourage you to review this policy periodically. Continued use of this
          website after changes are posted constitutes your acceptance of the revised policy.
        </p>

        <h2>16. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, wish to exercise your data subject rights, or
          wish to contact our Information Officer, please reach out at:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@graduateshub.co.za" className="text-primary font-bold hover:underline">info@graduateshub.co.za</a></li>
          <li><strong>Website:</strong> <a href="https://graduateshub.co.za/contact" className="text-primary hover:underline">graduateshub.co.za/contact</a></li>
        </ul>
      </main>
    </div>
  );
}
