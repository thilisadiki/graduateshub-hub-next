import Link from 'next/link';
import { Search, Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertCircle size={80} className="text-gray-300" />
            <span className="absolute -bottom-2 -right-2 bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">404</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          It looks like the link you followed is broken or the page has been moved. Don&apos;t worry, there&apos;s still plenty to learn!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 transition-all shadow-md hover:shadow-lg">
            <Home size={20} />Return to Homepage
          </Link>
          <Link href="/search" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 border border-gray-200 focus:ring-4 focus:ring-gray-100 transition-all shadow-sm">
            <Search size={20} className="text-gray-500" />Browse Courses
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Think this is a mistake on our end? Please
            <Link href="/contact" className="text-primary hover:underline ml-1 font-medium">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
