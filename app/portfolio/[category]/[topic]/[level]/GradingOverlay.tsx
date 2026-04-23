'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const PHRASES = [
  'Reading your submission...',
  'Analyzing code structure...',
  'Checking against rubric...',
  'Generating constructive feedback...',
  'Finalizing your score...',
];

export default function GradingOverlay() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Cycle through phrases every 2.5 seconds
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev < PHRASES.length - 1 ? prev + 1 : prev));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl border border-indigo-100 p-8 flex flex-col items-center text-center transform animate-in zoom-in-95 duration-300">
        
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 border-2 border-indigo-200 rounded-2xl animate-ping opacity-20"></div>
          <Sparkles className="text-indigo-600 w-8 h-8 animate-pulse" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">Grading in Progress</h3>
        
        <p className="text-gray-500 text-sm mb-8 h-5 transition-all duration-300 ease-in-out">
          {PHRASES[phraseIndex]}
        </p>

        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2 overflow-hidden">
          <div 
            className="bg-indigo-600 h-1.5 rounded-full transition-all duration-[10000ms] ease-out"
            style={{ width: '95%' }} // Simulates progress slowly approaching 100%
          />
        </div>
        
        <p className="text-xs text-gray-400 font-medium">This usually takes about 10-15 seconds.</p>
      </div>
    </div>
  );
}
