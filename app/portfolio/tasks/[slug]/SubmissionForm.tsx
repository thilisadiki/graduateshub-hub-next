'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Send, AlertCircle } from 'lucide-react';

const MIN_CHARS = 200;
const MAX_CHARS = 20000;

export default function SubmissionForm({ taskId }: { taskId: string }) {
  const router = useRouter();
  const [graduateName, setGraduateName] = useState('');
  const [submission, setSubmission] = useState('');
  const [linksRaw, setLinksRaw] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submissionLength = submission.length;
  const belowMin = submissionLength < MIN_CHARS;
  const aboveMax = submissionLength > MAX_CHARS;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError(null);

    if (!graduateName.trim()) {
      setError('Please enter the name you want on your badge.');
      return;
    }
    if (belowMin) {
      setError(`Your submission needs to be at least ${MIN_CHARS} characters.`);
      return;
    }
    if (aboveMax) {
      setError(`Your submission exceeds the ${MAX_CHARS} character limit.`);
      return;
    }

    const submissionLinks = linksRaw
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);

    setSubmitting(true);
    try {
      const res = await fetch('/api/portfolio/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId,
          graduateName: graduateName.trim(),
          submission: submission.trim(),
          submissionLinks,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      if (data.proofUrl) {
        router.push(data.proofUrl);
        return;
      }
      setError('Unexpected response. Please try again.');
      setSubmitting(false);
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8" id="submit">
      <h2 className="text-xl font-extrabold text-gray-900 mb-2">Submit Your Work</h2>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Your submission is graded against the rubric on the right. If you pass, you get a public Badge URL you can share on LinkedIn. There is no draft save, so work offline first and paste your finished response here.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="graduate-name" className="block text-sm font-bold text-gray-900 mb-1.5">
            Name on Badge
          </label>
          <input
            id="graduate-name"
            type="text"
            value={graduateName}
            onChange={(e) => setGraduateName(e.target.value)}
            maxLength={80}
            placeholder="e.g. Thando Nkosi"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            disabled={submitting}
            required
          />
          <p className="text-xs text-gray-500 mt-1">This appears on your public Badge.</p>
        </div>

        <div>
          <label htmlFor="submission" className="block text-sm font-bold text-gray-900 mb-1.5">
            Your Submission
          </label>
          <textarea
            id="submission"
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            rows={14}
            placeholder="Paste your finished response here. Markdown is supported."
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[15px] font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            disabled={submitting}
            required
          />
          <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
            <span>
              {submissionLength}/{MAX_CHARS} characters
              {belowMin && submissionLength > 0 && (
                <span className="text-amber-600"> (at least {MIN_CHARS} needed)</span>
              )}
            </span>
            <span>Markdown supported</span>
          </div>
        </div>

        <div>
          <label htmlFor="links" className="block text-sm font-bold text-gray-900 mb-1.5">
            Reference Links <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="links"
            value={linksRaw}
            onChange={(e) => setLinksRaw(e.target.value)}
            rows={2}
            placeholder="https://github.com/you/repo, https://figma.com/..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            disabled={submitting}
          />
          <p className="text-xs text-gray-500 mt-1">One per line or comma separated. Up to 5 links.</p>
        </div>

        {error && (
          <div className="flex items-start gap-2 bg-rose-50 border border-rose-100 rounded-lg p-3 text-sm text-rose-700">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting, you agree your submission text, name, and evaluation will appear on a public Badge URL.
          </p>
          <button
            type="submit"
            disabled={submitting || belowMin || aboveMax}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Grading your work
              </>
            ) : (
              <>
                <Send size={16} /> Submit for Grading
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
