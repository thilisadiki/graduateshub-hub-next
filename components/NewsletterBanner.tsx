'use client';

import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      console.log('Newsletter signup:', email);
      setStatus('success');
      setMessage('Thanks for subscribing! Check your inbox soon.');
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1200);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative mb-6 inline-block">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Mail size={40} className="text-primary" strokeWidth={1.5} />
              </div>
              <div className="absolute top-1 right-1 w-3 h-3 bg-blue-300 rounded-full border-2 border-primary animate-pulse"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Accelerate Your Career
            </h2>

            <p className="text-blue-50 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
              Join over{' '}
              <span className="text-white font-bold underline decoration-blue-400 decoration-2 underline-offset-4">
                10,000+
              </span>{' '}
              learners. Get early access to new courses, exclusive career guides, and platform updates delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg relative group">
              <div className="relative flex flex-col sm:flex-row shadow-2xl rounded-2xl sm:rounded-full bg-white/10 p-2 sm:p-0 backdrop-blur-md">
                <div className="absolute left-4 top-4 sm:top-1/2 sm:-translate-y-1/2 text-blue-700 group-focus-within:text-primary transition-colors z-10">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full pl-12 pr-4 sm:pr-40 py-4 rounded-full border-none focus:ring-4 focus:ring-blue-400/50 outline-none text-gray-900 font-medium placeholder:text-gray-400 shadow-inner bg-white/95 backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full mt-3 sm:mt-0 sm:absolute sm:right-1.5 sm:top-1.5 sm:bottom-1.5 sm:w-auto px-6 py-4 sm:py-0 bg-primary hover:bg-blue-800 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed shadow-md sm:shadow-none"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Subscribed!</span>
                  ) : (
                    <span>Subscribe Free</span>
                  )}
                </button>
              </div>
            </form>

            <div className="h-8 mt-3 flex items-center justify-center">
              {status === 'success' && (
                <p className="text-white font-medium flex items-center gap-2 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm text-sm">
                  <CheckCircle2 size={18} className="text-blue-300" /> {message}
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-200 font-medium flex items-center gap-2 bg-rose-900/30 px-4 py-1.5 rounded-full backdrop-blur-sm text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {message}
                </p>
              )}
            </div>

            <p className="text-blue-100/70 text-sm mt-6">
              By subscribing, you agree to our{' '}
              <a href="/terms" className="underline hover:text-white transition-colors">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a>. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
