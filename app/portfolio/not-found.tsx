import Link from 'next/link';
import { SearchX, ArrowLeft } from 'lucide-react';

export default function PortfolioNotFound() {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-14 max-w-lg w-full text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
          <SearchX size={32} className="text-indigo-500" />
        </div>
        
        <h1 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
          Portfolio Not Found
        </h1>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          We couldn't find the specific category, topic, or task you were looking for. It may have been moved or doesn't exist yet.
        </p>
        
        <Link 
          href="/portfolio" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 w-full sm:w-auto"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
