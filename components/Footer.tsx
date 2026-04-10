import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Graduates <span className="text-blue-400">Hub</span></h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Your free learning resource centre: career guides, study articles, and hundreds of free certified courses to help you grow your skills and advance your career.
          </p>
          <a
            href="https://facebook.com/Graduateshub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </span>
            <span><strong className="text-slate-300 group-hover:text-blue-400 transition-colors">189K+ followers</strong> on Facebook</span>
          </a>
        </div>

        {/* Popular Guides */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Popular Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/free-courses-for-beginners" className="hover:text-blue-400 transition-colors">Free Courses for Beginners</Link></li>
            <li><Link href="/free-courses-with-certificates" className="hover:text-blue-400 transition-colors">Free Courses with Certificates</Link></li>
            <li><Link href="/best-alison-courses-with-certificates" className="hover:text-blue-400 transition-colors">Best Alison Courses</Link></li>
            <li><Link href="/free-courses-for-data-analysts" className="hover:text-blue-400 transition-colors">Free Courses for Data Analysts</Link></li>
            <li><Link href="/free-ai-courses-for-beginners" className="hover:text-blue-400 transition-colors">Free AI Courses for Beginners</Link></li>
            <li><Link href="/free-courses-for-accounting-and-finance" className="hover:text-blue-400 transition-colors">Free Courses for Accounting & Finance</Link></li>
            <li><Link href="/free-courses-for-software-developers" className="hover:text-blue-400 transition-colors">Free Courses for Software Developers</Link></li>
            <li><Link href="/free-business-courses" className="hover:text-blue-400 transition-colors">Free Business Courses</Link></li>
            <li><Link href="/guides" className="hover:text-blue-400 transition-colors font-medium">View All Guides →</Link></li>
          </ul>
        </div>

        {/* Career Roadmaps */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Career Roadmaps</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/career-roadmaps/data-analyst" className="hover:text-blue-400 transition-colors">Data Analyst</Link></li>
            <li><Link href="/career-roadmaps/it-support-specialist" className="hover:text-blue-400 transition-colors">IT Support Specialist</Link></li>
            <li><Link href="/career-roadmaps/web-developer" className="hover:text-blue-400 transition-colors">Web Developer</Link></li>
            <li><Link href="/career-roadmaps/digital-marketing-specialist" className="hover:text-blue-400 transition-colors">Digital Marketing Specialist</Link></li>
            <li><Link href="/career-roadmaps/junior-accountant" className="hover:text-blue-400 transition-colors">Junior Accountant</Link></li>
            <li><Link href="/career-roadmaps/business-analyst" className="hover:text-blue-400 transition-colors">Business Analyst</Link></li>
            <li><Link href="/career-roadmaps" className="hover:text-blue-400 transition-colors font-medium">All Roadmaps →</Link></li>
          </ul>
        </div>

        {/* Course Categories */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/category/it" className="hover:text-blue-400 transition-colors">IT & Technology</Link></li>
            <li><Link href="/category/software-engineering" className="hover:text-blue-400 transition-colors">Software Development</Link></li>
            <li><Link href="/category/business" className="hover:text-blue-400 transition-colors">Business & Management</Link></li>
            <li><Link href="/category/marketing" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
            <li><Link href="/category/accounting" className="hover:text-blue-400 transition-colors">Accounting & Finance</Link></li>
            <li><Link href="/categories" className="hover:text-blue-400 transition-colors">All Categories →</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/curation-policy" className="hover:text-blue-400 transition-colors">Curation Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/disclosure" className="hover:text-blue-400 transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>

      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} Graduates Hub. All rights reserved.</p>
        <p className="text-slate-500">
          Founded and built by{' '}
          <a
            href="https://www.linkedin.com/in/jasonsadiki/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors font-medium"
          >
            Jason Sadiki
          </a>
          {' '}&mdash; Technical SEO Specialist &amp; Web Developer.
        </p>
      </div>
    </footer>
  );
}
