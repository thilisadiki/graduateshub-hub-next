import { Resend } from 'resend';
import { escapeHtml } from '@/utils/security';
import { SITE_URL } from '@/lib/seo';

interface ProofEmailParams {
  to: string;
  graduateName: string;
  taskTitle: string;
  verdict: string;
  overallScore: number;
  /** Relative path to the live proof, e.g. "/proof/abc123". */
  proofPath: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

/**
 * Emails a graduate the permanent link to their public Badge of Competence.
 * Returns true if sent, false if skipped (no API key / invalid input) or errored.
 * Never throws — emailing is best-effort and must not break submission/sync.
 */
export async function sendProofEmail(params: ProofEmailParams): Promise<boolean> {
  const { to, graduateName, taskTitle, verdict, overallScore, proofPath } = params;

  if (!to || !isValidEmail(to)) return false;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[Proof Email] RESEND_API_KEY not configured — email not sent.');
    return false;
  }

  const proofUrl = `${SITE_URL}${proofPath}`;
  const safeName = escapeHtml(graduateName);
  const safeTitle = escapeHtml(taskTitle);
  const safeVerdict = escapeHtml(verdict);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Graduates Hub <noreply@graduateshub.org>',
      to: [to],
      subject: `Your Badge of Competence: ${taskTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1F1B13;">
          <h2 style="color: #7A5900;">Your badge is ready, ${safeName} 🎉</h2>
          <p style="color: #374151; line-height: 1.6;">
            Your submission for <strong>${safeTitle}</strong> was graded
            <strong>${safeVerdict}</strong> with an overall score of <strong>${overallScore}/100</strong>.
          </p>
          <p style="color: #374151; line-height: 1.6;">
            This is your permanent, shareable Badge URL — add it to your CV or LinkedIn,
            or send it to recruiters. It won't expire.
          </p>
          <p style="margin: 28px 0;">
            <a href="${proofUrl}" style="background: #7A5900; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; display: inline-block;">
              View your Badge
            </a>
          </p>
          <p style="color: #6b7280; font-size: 13px; line-height: 1.6;">
            Or copy this link: <a href="${proofUrl}" style="color: #7A5900;">${proofUrl}</a>
          </p>
          <p style="margin-top: 28px; color: #9ca3af; font-size: 12px;">
            Sent by Graduates Hub because you requested an email copy of your result.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Proof Email] Resend error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('[Proof Email] Unexpected error:', err);
    return false;
  }
}
