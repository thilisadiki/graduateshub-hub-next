import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Graduates <span className="text-blue-400">Hub</span></h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Empowering learners worldwide with 100% free, high-quality online courses. Build your skills, earn certificates, and advance your career today.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/category/it" className="hover:text-blue-400 transition-colors">IT Courses</Link></li>
            <li><Link href="/category/marketing" className="hover:text-blue-400 transition-colors">Marketing</Link></li>
            <li><Link href="/category/accounting" className="hover:text-blue-400 transition-colors">Accounting</Link></li>
            <li><a href="https://articles.graduateshub.co.za/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Articles</a></li>
          </ul>
        </div>
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
