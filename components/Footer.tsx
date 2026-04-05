import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Graduates <span className="text-blue-400">Hub</span></h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Empowering learners worldwide with 100% free, high-quality online courses. Build your skills, earn certificates, and advance your career today.
          </p>
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
            <li><a href="https://articles.graduateshub.co.za/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Career Guides</a></li>
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
            <li><Link href="/category/health" className="hover:text-blue-400 transition-colors">Health & Wellness</Link></li>
            <li><Link href="/categories" className="hover:text-blue-400 transition-colors">All Categories →</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/disclosure" className="hover:text-blue-400 transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>

      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Graduates Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
