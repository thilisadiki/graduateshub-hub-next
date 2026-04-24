'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function PortfolioError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Portfolio Error Caught:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-14 max-w-lg w-full text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
          <AlertTriangle size={32} className="text-rose-500" />
        </div>
        
        <h1 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
          Something went wrong!
        </h1>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          We encountered an unexpected error while trying to load this portfolio section. Please try again.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 w-full sm:w-auto"
          >
            <RotateCcw size={18} />
            Try again
          </button>
          
          <Link 
            href="/portfolio" 
            className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Home size={18} />
            Portfolio Home
          </Link>
        </div>
      </div>
    </div>
  );
}
