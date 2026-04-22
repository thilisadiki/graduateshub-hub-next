'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.36 4.25 5.44v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

interface ShareButtonsProps {
  shareUrl: string;
  graduateName: string;
  taskTitle: string;
}

export default function ShareButtons({ shareUrl, graduateName, taskTitle }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const snippet = `I just earned a Badge of Competence for completing the "${taskTitle}" task on Graduates Hub. It is a practical, graded piece of work you can review: ${shareUrl}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API unavailable. Fall back to selecting a textarea.
      const textarea = document.createElement('textarea');
      textarea.value = snippet;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 shrink-0" aria-label={`Share ${graduateName}'s badge`}>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0A66C2] hover:bg-[#0850a0] text-white px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
      >
        <LinkedInIcon size={16} /> Share on LinkedIn
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="bg-white border border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 px-4 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} className="text-emerald-600" /> Copied
          </>
        ) : (
          <>
            <Copy size={16} /> Copy LinkedIn Snippet
          </>
        )}
      </button>
    </div>
  );
}
