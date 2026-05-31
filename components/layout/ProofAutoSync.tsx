'use client';

import { useEffect } from 'react';

const PROOF_KEY_PREFIX = 'portfolio-proof-';

/**
 * Self-healing sync for offline-stashed Badges.
 *
 * When the database is down at submission time, the graded proof is stashed in
 * localStorage and the user is shown a temporary, browser-only link. Rather than
 * relying on them returning and clicking "Sync to Cloud", this runs on every page
 * load: it finds any stashed proofs and silently pushes them to the database as
 * soon as it's reachable again. On success the local stash is cleared and (if an
 * email was provided) the permanent link is emailed by the sync route.
 *
 * Fully best-effort and silent — failures leave the stash untouched for next time.
 */
export default function ProofAutoSync() {
  useEffect(() => {
    let cancelled = false;

    async function syncStashedProofs() {
      let keys: string[];
      try {
        keys = Object.keys(localStorage).filter((k) => k.startsWith(PROOF_KEY_PREFIX));
      } catch {
        return; // localStorage unavailable (private mode / blocked)
      }
      if (keys.length === 0) return;

      for (const key of keys) {
        if (cancelled) return;

        let stash: any;
        try {
          const raw = localStorage.getItem(key);
          if (!raw) continue;
          stash = JSON.parse(raw);
        } catch {
          continue;
        }

        if (!stash?.rawProofId || !stash?.signature) continue;

        try {
          const res = await fetch('/api/portfolio/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              proofId: stash.rawProofId,
              taskId: stash.taskId,
              taskTitle: stash.taskTitle,
              taskField: stash.taskField,
              graduateName: stash.graduateName,
              graduateEmail: stash.graduateEmail || '',
              submission: stash.submission,
              submissionLinks: stash.submissionLinks,
              evaluation: stash.evaluation,
              signature: stash.signature,
            }),
          });

          // 2xx = synced. 400 = unrecoverable (bad signature / missing params) so
          // stop retrying it. Everything else (429 rate-limit, 5xx DB-down) is
          // transient — keep the stash and try again on the next visit.
          if (res.ok || res.status === 400) {
            try {
              localStorage.removeItem(key);
            } catch {
              /* ignore */
            }
          }
        } catch {
          // Network error — leave the stash in place and try again next load.
        }
      }
    }

    // Defer slightly so it never competes with first paint.
    const t = setTimeout(syncStashedProofs, 1500);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  return null;
}
