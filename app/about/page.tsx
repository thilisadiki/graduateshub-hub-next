import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Users, Award, Heart, ArrowRight } from 'lucide-react';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Graduates Hub — our mission to make quality education accessible to everyone through 100% free online courses with certificates.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">About <span className="text-primary">Graduates Hub</span></h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">Making quality education accessible to everyone — completely free.</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed text-lg">
              Graduates Hub was founded with a simple but powerful belief: <strong>education should never have a price tag</strong>. We curate and connect learners across Africa and beyond to internationally recognised, fully accredited online courses — all available at absolutely zero cost.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 text-lg">
              Whether you&apos;re a recent graduate entering the job market, a professional looking to upskill, or a lifelong learner exploring a new passion, Graduates Hub is your gateway to quality education without financial barriers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, color: 'bg-blue-100 text-primary', title: '140+ Free Courses', desc: 'From IT and Software Engineering to Business, Languages, and Health — we cover the skills that matter most.' },
              { icon: Award, color: 'bg-green-100 text-green-600', title: 'Certificates & Diplomas', desc: 'Earn verifiable certificates and diplomas from internationally recognised providers to boost your CV.' },
              { icon: Users, color: 'bg-purple-100 text-purple-600', title: 'AI Course Recommendations', desc: 'Not sure where to start? Our AI-powered recommendation engine finds the perfect course based on your goals.' },
              { icon: Heart, color: 'bg-red-100 text-red-500', title: '100% Free Forever', desc: 'No hidden fees, no paywalls, no credit card required. Every course on Graduates Hub is and always will be free.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}><Icon size={24} /></div>
                <div><h3 className="font-bold text-gray-800 text-lg">{title}</h3><p className="text-gray-600 text-sm mt-1">{desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed">
              Graduates Hub partners with <strong>Alison</strong>, one of the world&apos;s largest free online learning platforms with over 40 million learners globally. We carefully curate the highest-quality courses from their catalogue and present them in an easy-to-navigate, beautifully designed experience.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              When you find a course you love, clicking <strong>&ldquo;Start Learning For Free&rdquo;</strong> takes you directly to Alison&apos;s platform where you can register (for free) and begin learning immediately. Upon completion, you&apos;ll receive a certificate or diploma directly from Alison.
            </p>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to start learning?</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8">Browse 140+ free courses across 9 categories and take the first step toward your next achievement.</p>
            <Link href="/categories" className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-all shadow-md text-lg">
              Explore Courses <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
