'use client';

import { useState, useRef, useMemo } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import TurnstileWidget, { TurnstileWidgetHandle } from '@/components/shared/TurnstileWidget';

const SUBJECTS = [
  'General enquiry',
  'Course recommendation',
  'Partnership or advertising',
  'Content correction or feedback',
  'POPIA / privacy request',
  'Other',
];

const LIMITS = {
  name: 100,
  email: 254,
  message: 2000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'subject' | 'message';

const LABELS: Record<FieldName, string> = {
  name: 'Full name',
  email: 'Email address',
  subject: 'Subject',
  message: 'Message',
};

function validateField(name: FieldName, value: string): string | null {
  switch (name) {
    case 'name': {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter your name.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
      if (value.length > LIMITS.name) return `Name must be ${LIMITS.name} characters or fewer.`;
      return null;
    }
    case 'email': {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter your email address.';
      if (!EMAIL_REGEX.test(trimmed)) return "That doesn't look like a valid email address.";
      if (trimmed.length > LIMITS.email) return `Email must be ${LIMITS.email} characters or fewer.`;
      return null;
    }
    case 'subject':
      if (!value) return 'Please choose a subject.';
      return null;
    case 'message': {
      const trimmed = value.trim();
      if (!trimmed) return 'Please enter your message.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters so we can help.';
      if (value.length > LIMITS.message) return `Message must be ${LIMITS.message} characters or fewer.`;
      return null;
    }
  }
}

const fieldClass = (hasError: boolean) =>
  `border rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${
    hasError
      ? 'border-red-300 focus:ring-red-400 bg-red-50/40'
      : 'border-gray-200 focus:ring-primary focus:border-transparent'
  }`;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const formLoadTime = useRef(Date.now());
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);

  const errors = useMemo(
    () => ({
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      subject: validateField('subject', form.subject),
      message: validateField('message', form.message),
    }),
    [form],
  );

  const isFormValid = !errors.name && !errors.email && !errors.subject && !errors.message;
  const canSubmit = isFormValid && turnstileToken !== null && status !== 'submitting';
  const hasInteracted = touched.name || touched.email || touched.subject || touched.message;

  const missingFields = (Object.keys(errors) as FieldName[]).filter((k) => errors[k]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid || turnstileToken === null) return;

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
      setTouched({ name: false, email: false, subject: false, message: false });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setTurnstileToken(null);
      turnstileRef.current?.reset();
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

  const showError = (field: FieldName) => touched[field] && errors[field];

  const RequiredMark = () => (
    <span className="text-red-500" aria-hidden="true">
      *
    </span>
  );

  const FieldError = ({ field }: { field: FieldName }) =>
    showError(field) ? (
      <p
        id={`${field}-error`}
        className="flex items-center gap-1.5 text-xs text-red-600 mt-0.5"
        role="alert"
      >
        <AlertCircle size={12} className="shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  const messageRemaining = LIMITS.message - form.message.length;
  const messageWarn = messageRemaining < 100;
  const messageOver = messageRemaining < 0;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot - visually hidden, never filled by real users */}
      <div
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none -z-10 h-0 overflow-hidden"
      >
        <label htmlFor="_website">Leave this blank</label>
        <input
          id="_website"
          name="_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <p className="text-xs text-gray-500">
        Fields marked <RequiredMark /> are required.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-bold text-gray-700">
            Full name <RequiredMark />
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={LIMITS.name}
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your name"
            aria-invalid={!!showError('name')}
            aria-describedby={showError('name') ? 'name-error' : undefined}
            className={fieldClass(!!showError('name'))}
          />
          <FieldError field="name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-bold text-gray-700">
            Email address <RequiredMark />
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            maxLength={LIMITS.email}
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            aria-invalid={!!showError('email')}
            aria-describedby={showError('email') ? 'email-error' : undefined}
            className={fieldClass(!!showError('email'))}
          />
          <FieldError field="email" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-bold text-gray-700">
          Subject <RequiredMark />
          <span className="sr-only">(required)</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!showError('subject')}
          aria-describedby={showError('subject') ? 'subject-error' : undefined}
          className={`${fieldClass(!!showError('subject'))} bg-white`}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <FieldError field="subject" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-bold text-gray-700">
          Message <RequiredMark />
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={LIMITS.message}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us how we can help..."
          aria-invalid={!!showError('message')}
          aria-describedby={showError('message') ? 'message-error message-count' : 'message-count'}
          className={`${fieldClass(!!showError('message'))} resize-none`}
        />
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1">
            <FieldError field="message" />
          </div>
          <p
            id="message-count"
            className={`text-xs tabular-nums ${
              messageOver ? 'text-red-600 font-bold' : messageWarn ? 'text-amber-600' : 'text-gray-400'
            }`}
            aria-live="polite"
          >
            {messageWarn || messageOver
              ? `${messageRemaining} characters left`
              : `${form.message.length}/${LIMITS.message}`}
          </p>
        </div>
      </div>

      {/* Turnstile widget */}
      <div>
        <TurnstileWidget
          ref={turnstileRef}
          onVerify={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
        />
      </div>

      {status === 'error' && (
        <div
          className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          <AlertCircle size={16} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      {hasInteracted && !canSubmit && status !== 'submitting' && (
        <div
          className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 text-xs text-amber-800"
          role="status"
          aria-live="polite"
        >
          <AlertCircle size={14} className="shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Still needed before you can send: </span>
            {missingFields.length > 0
              ? missingFields.map((f) => LABELS[f]).join(', ')
              : turnstileToken === null
                ? 'Complete the captcha above'
                : ''}
            {missingFields.length > 0 && turnstileToken === null && ', plus the captcha above'}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        aria-disabled={!canSubmit}
        className="flex items-center justify-center gap-2 bg-primary hover:bg-[#5a4000] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-sm"
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
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        . We will only use your information to respond to your enquiry.
      </p>
    </form>
  );
}
