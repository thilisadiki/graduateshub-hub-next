'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback': () => void;
        'error-callback': () => void;
      }) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const SUBJECTS = [
  'General enquiry',
  'Course recommendation',
  'Partnership or advertising',
  'Content correction or feedback',
  'POPIA / privacy request',
  'Other',
];

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);

  const formLoadTime = useRef(Date.now());
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const renderTurnstile = () => {
    if (!SITE_KEY || !turnstileRef.current || !window.turnstile) return;
    widgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: SITE_KEY,
      callback: (token) => { setTurnstileToken(token); setTurnstileReady(true); },
      'expired-callback': () => { setTurnstileToken(''); setTurnstileReady(false); },
      'error-callback': () => { setTurnstileToken(''); setTurnstileReady(false); },
    });
  };

  // If Turnstile is not configured, treat form as ready
  useEffect(() => {
    if (!SITE_KEY) setTurnstileReady(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _hp: honeypot,
          _t: formLoadTime.current,
          _ts: turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTurnstileToken('');
      setTurnstileReady(!SITE_KEY);
      if (SITE_KEY && widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current);
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
      // Reset Turnstile on error so they can try again
      setTurnstileToken('');
      setTurnstileReady(!SITE_KEY);
      if (SITE_KEY && widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current);
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900">Message sent</h3>
        <p className="text-gray-500 max-w-sm">
          Thanks for reaching out. We typically respond within 24 to 48 hours on business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-bold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      {SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
          onLoad={renderTurnstile}
        />
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Honeypot — visually hidden, never filled by real users */}
        <div aria-hidden="true" className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden">
          <label htmlFor="_website">Leave this blank</label>
          <input
            id="_website"
            name="_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-bold text-gray-700">Full name <span className="text-red-400">*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-bold text-gray-700">Email address <span className="text-red-400">*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject <span className="text-red-400">*</span></label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
          >
            <option value="" disabled>Select a subject</option>
            {SUBJECTS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-bold text-gray-700">Message <span className="text-red-400">*</span></label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          />
          <p className="text-xs text-gray-400 text-right">{form.message.length}/2000</p>
        </div>

        {/* Turnstile widget */}
        {SITE_KEY && (
          <div>
            <div ref={turnstileRef} />
            {!turnstileReady && (
              <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                <ShieldCheck size={12} /> Loading security check...
              </p>
            )}
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-sm text-red-700">
            <AlertCircle size={16} className="shrink-0" />
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting' || !turnstileReady}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-sm"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form you agree to our{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          We will only use your information to respond to your enquiry.
        </p>
      </form>
    </>
  );
}
