import Link from 'next/link';
import { Search, Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-[#FFF8F1]">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertCircle size={80} className="text-gray-300" />
            <span className="absolute -bottom-2 -right-2 bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">404</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1F1B13] tracking-tight mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-[#4F4639] mb-8 max-w-lg mx-auto leading-relaxed">
          It looks like the link you followed is broken or the page has been moved. Don&apos;t worry, there&apos;s still plenty to learn!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-[#5a4000] focus:ring-4 focus:ring-[#FFDF9C]/50 transition-all shadow-md hover:shadow-lg">
            <Home size={20} />Return to Homepage
          </Link>
          <Link href="/find-a-course" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#4F4639] font-medium rounded-xl hover:bg-[#FBF3EB] border border-[#D1C5B4] focus:ring-4 focus:ring-[#D1C5B4]/50 transition-all shadow-sm">
            <Search size={20} className="text-gray-500" />Browse Courses
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D1C5B4]">
          <p className="text-sm text-[#7C7061]">
            Think this is a mistake on our end? Please
            <Link href="/contact" className="text-primary hover:underline ml-1 font-medium">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
