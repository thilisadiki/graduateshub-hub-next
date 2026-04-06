import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Users, Award, Heart, ArrowRight, Newspaper } from 'lucide-react';

const SITE_URL = 'https://graduateshub.co.za';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Graduates Hub — your free learning resource centre for career guides, study tips, and hundreds of free online courses with certificates.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">About <span className="text-primary">Graduates Hub</span></h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">Your free learning resource centre — built for learners who are serious about growth.</p>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed text-lg">
              Graduates Hub was built on a simple but powerful belief: <strong>quality education should be accessible to everyone, everywhere.</strong> We are a free learning resource centre that connects learners across Africa and beyond with internationally recognised, fully accredited online courses — at absolutely zero cost.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 text-lg">
              Whether you&apos;re a recent graduate entering the job market, a professional looking to upskill, or a lifelong learner exploring something new — Graduates Hub gives you the tools, guides, and courses to get there, without financial barriers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, color: 'bg-blue-100 text-primary', title: '140+ Free Learning Resources', desc: 'From IT and Software Engineering to Business, Languages, and Health — we cover the skills that matter most in today\'s job market.' },
              { icon: Award, color: 'bg-green-100 text-green-600', title: 'Certificates & Diplomas', desc: 'Earn verifiable certificates and diplomas from internationally recognised providers to strengthen your CV and professional profile.' },
              { icon: Users, color: 'bg-purple-100 text-purple-600', title: 'AI-Powered Course Matching', desc: 'Not sure where to start? Our AI recommendation engine finds the right learning path based on your goals and experience level.' },
              { icon: Heart, color: 'bg-red-100 text-red-500', title: '100% Free, Always', desc: 'No hidden fees, no paywalls, no credit card required. Every resource on Graduates Hub is and will always be completely free.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}><Icon size={24} /></div>
                <div><h3 className="font-bold text-gray-800 text-lg">{title}</h3><p className="text-gray-600 text-sm mt-1">{desc}</p></div>
              </div>
            ))}
            <Link href="/blog" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 items-start hover:border-primary transition-colors group md:col-span-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0"><Newspaper size={24} /></div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">Career Guides & Study Articles</h3>
                <p className="text-gray-600 text-sm mt-1">Explore our growing library of free career guides, study tips, and industry insights — practical resources to help you make the most of your learning journey.</p>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-600 leading-relaxed">
              Graduates Hub surfaces high-quality, accredited learning resources from trusted global providers — including <strong>Alison</strong>, one of the world&apos;s largest free online learning platforms with over 40 million learners. Every course is hand-picked for relevance, quality, and real-world applicability.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              When you find a course that fits your goals, clicking <strong>&ldquo;Start Learning For Free&rdquo;</strong> takes you directly to the course platform where you can register (free) and begin immediately. Upon completion, you&apos;ll receive a certificate or diploma to share with employers and add to your professional profile.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Alongside courses, we publish free{' '}
              <Link href="/blog" className="text-primary font-semibold hover:underline">career guides and study articles</Link>
              {' '}to support every stage of your learning journey — from choosing the right path to landing your next opportunity.
            </p>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to start learning?</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-8">Browse 140+ free learning resources across 9 categories and take the first step toward your next achievement.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-all shadow-md text-lg">
                Explore Resources <ArrowRight size={20} />
              </Link>
              <Link href="/blog" className="inline-flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-8 py-4 rounded-lg font-bold transition-all text-lg border border-white/20">
                Read Our Guides <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
