import type { Metadata } from 'next';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our Privacy Policy explains how Graduates Hub collects, uses, and protects your information.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Privacy <span className="text-primary">Policy</span></h1>
          <p className="text-gray-400 mt-4">Last updated: March 2025</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full prose [&_p]:text-gray-700 [&_h2]:text-gray-900 [&_h3]:text-gray-900 [&_li]:text-gray-700 [&_strong]:text-gray-900">
        <h2>1. Information We Collect</h2>
        <p>We only collect information about you if we have a reason to do so, for example, to provide our Services, to communicate with you, or to make our Services better.</p>

        <h3>Information you provide to us directly:</h3>
        <ul>
          <li><strong>Communications:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, and the contents of the message.</li>
        </ul>

        <h3>Information we collect automatically:</h3>
        <ul>
          <li><strong>Log Information:</strong> Browser type, IP address, unique device identifiers, language preference, referring site, and the date and time of access.</li>
          <li><strong>Usage Information:</strong> Information about your usage of our website.</li>
        </ul>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>To provide our Services.</li>
          <li>To further develop and improve our Services.</li>
          <li>To monitor and analyze trends and better understand how users interact with our Services.</li>
        </ul>

        <h2>3. Google Analytics 4 (GA4)</h2>
        <p>We use Google Analytics 4 to analyze the use of our website. GA4 gathers information about website use by means of cookies. Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy" className="text-primary hover:underline">policies.google.com/privacy</a>.</p>

        <h2>4. Google AdSense & Advertising</h2>
        <p>We use Google AdSense to display ads on some of our pages. Google, as a third-party vendor, uses cookies to serve ads on our site.</p>
        <ul>
          <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites.</li>
          <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline">Ads Settings</a>.</li>
        </ul>

        <h2>5. Third-Party Links</h2>
        <p>Our website contains links to other websites (primarily Alison.com). We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.</p>

        <h2>6. Cookies</h2>
        <p>This Service uses cookies explicitly for analytics (GA4) and advertising (Google AdSense). You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about our Privacy Policy, contact us at: <a href="mailto:info@graduateshub.co.za" className="text-primary font-bold hover:underline">info@graduateshub.co.za</a>.</p>
      </main>
    </div>
  );
}
