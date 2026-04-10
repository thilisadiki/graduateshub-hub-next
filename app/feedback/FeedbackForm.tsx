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

const AREAS = [
  { value: 'course-content', label: 'Course quality and content' },
  { value: 'missing-courses', label: 'A topic or course that\'s missing' },
  { value: 'site-usability', label: 'Site navigation or usability' },
  { value: 'search', label: 'Search — I couldn\'t find what I needed' },
  { value: 'guides-articles', label: 'Career guides or articles' },
  { value: 'ai-tools', label: 'AI tools (Course Recommender, Learning Path, Skills Gap)' },
  { value: 'other', label: 'Something else' },
];

const RATINGS = [
  { value: '1', label: '1', sub: 'Poor' },
  { value: '2', label: '2', sub: '' },
  { value: '3', label: '3', sub: 'OK' },
  { value: '4', label: '4', sub: '' },
  { value: '5', label: '5', sub: 'Excellent' },
];

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FormData = {
  respondent_name: string;
  respondent_email: string;
  rating: string;
  area: string;
  message: string;
  can_follow_up: boolean;
};

export default function FeedbackForm() {
  const [form, setForm] = useState<FormData>({
    respondent_name: '',
    respondent_email: '',
    rating: '',
    area: '',
    message: '',
    can_follow_up: false,
  });
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

  useEffect(() => {
    if (!SITE_KEY) setTurnstileReady(true);
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken('');
    setTurnstileReady(!SITE_KEY);
    if (SITE_KEY && widgetId.current && window.turnstile) {
      window.turnstile.reset(widgetId.current);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/feedback', {
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
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      resetTurnstile();
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900">Thank you!</h3>
        <p className="text-gray-500 max-w-sm">
          Your feedback has been submitted. We read every response and it shapes what we build next.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({ respondent_name: '', respondent_email: '', rating: '', area: '', message: '', can_follow_up: false });
            resetTurnstile();
            formLoadTime.current = Date.now();
          }}
          className="mt-2 text-sm font-bold text-primary hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  const emailFilled = form.respondent_email.trim().length > 0;

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

        {/* Honeypot */}
        <div aria-hidden="true" className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden">
          <label htmlFor="_website">Leave this blank</label>
          <input id="_website" name="_website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="respondent_name" className="text-sm font-bold text-gray-700">
              Your name <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="respondent_name"
              name="respondent_name"
              type="text"
              value={form.respondent_name}
              onChange={handleChange}
              placeholder="e.g. Thabo"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="respondent_email" className="text-sm font-bold text-gray-700">
              Email address <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="respondent_email"
              name="respondent_email"
              type="email"
              value={form.respondent_email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-400">Only used if you want us to respond. No marketing emails.</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">
            Overall experience <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-2">
            {RATINGS.map(({ value, label, sub }) => (
              <label
                key={value}
                className={`flex-1 flex flex-col items-center justify-center cursor-pointer rounded-xl border-2 py-3 transition-all select-none ${
                  form.rating === value
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary'
                }`}
              >
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  required
                  checked={form.rating === value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-lg font-extrabold leading-none">{label}</span>
                {sub && <span className="text-xs mt-1 opacity-80">{sub}</span>}
              </label>
            ))}
          </div>
        </div>

        {/* Area */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="area" className="text-sm font-bold text-gray-700">
            What is your feedback mainly about? <span className="text-red-400">*</span>
          </label>
          <select
            id="area"
            name="area"
            required
            value={form.area}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
          >
            <option value="" disabled>Select an area</option>
            {AREAS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-bold text-gray-700">
            Tell us more <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            maxLength={500}
            value={form.message}
            onChange={handleChange}
            placeholder="What's working, what's missing, what could be better..."
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          />
          <p className="text-xs text-gray-400 text-right">{form.message.length}/500</p>
        </div>

        {/* Follow-up checkbox — only shown when email is filled */}
        {emailFilled && (
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="can_follow_up"
              checked={form.can_follow_up}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 accent-primary shrink-0"
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
              I&apos;m happy for you to follow up with me about this feedback
            </span>
          </label>
        )}

        {/* Turnstile */}
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
            <><Loader2 size={16} className="animate-spin" /> Sending...</>
          ) : (
            <><Send size={16} /> Submit Feedback</>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form you agree to our{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          Anonymous submissions are welcome.
        </p>
      </form>
    </>
  );
}
