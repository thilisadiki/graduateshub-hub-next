'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1F1B13] text-white shadow-[0_-4px_12px_rgba(0,0,0,0.2)] z-50 border-t border-[#D1C5B4]/30">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-gray-300 flex-1 leading-relaxed">
          <p>
            We use cookies and similar technologies to enhance your experience, serve personalized ads, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies as detailed in our{' '}
            <Link href="/privacy-policy" className="text-[#FFDF9C] hover:underline font-semibold">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={handleEssentialOnly}
            className="w-full sm:w-auto px-4 py-2 bg-transparent text-gray-300 font-medium text-xs rounded-lg border border-gray-600 hover:bg-gray-800 focus:outline-none transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-5 py-2 bg-primary text-white font-semibold text-xs rounded-lg hover:bg-[#5a4000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
