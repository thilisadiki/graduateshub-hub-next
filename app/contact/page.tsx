import type { Metadata } from 'next';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Graduates Hub team. We\'re here to help you navigate our free online courses.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">Contact <span className="text-primary">Us</span></h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Have a question or feedback? We&apos;d love to hear from you.</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✉️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            For any inquiries regarding the courses listed, partnership opportunities, or general support, please reach out to us via email. We typically respond within 24-48 hours.
          </p>
          <a href="mailto:info@graduateshub.co.za" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-md text-lg">
            Email Us: info@graduateshub.co.za
          </a>
        </div>
      </main>
    </div>
  );
}
