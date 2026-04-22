import { ImageResponse } from 'next/og';
import { getSupabase } from '@/utils/supabase';

export const alt = 'Badge of Competence. Graduates Hub.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function fetchProof(id: string) {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('portfolio_proofs')
      .select('id, task_title, task_field, graduate_name, evaluation')
      .eq('id', id)
      .maybeSingle();
    if (error || !data) return null;
    return data as {
      id: string;
      task_title: string;
      task_field: string;
      graduate_name: string;
      evaluation: { overallScore: number; verdict: string };
    };
  } catch {
    return null;
  }
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const proof = await fetchProof(id);

  if (!proof) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0f172a',
            color: '#ffffff',
            fontSize: 42,
            fontFamily: 'sans-serif',
          }}
        >
          Badge not found
        </div>
      ),
      size,
    );
  }

  const score = proof.evaluation.overallScore;
  const verdict = proof.evaluation.verdict;
  const verdictBg =
    verdict === 'Pass with Distinction'
      ? '#10b981'
      : verdict === 'Pass'
        ? '#3b82f6'
        : '#f59e0b';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 64px',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            left: -120,
            width: 440,
            height: 440,
            borderRadius: '9999px',
            background: 'rgba(59, 130, 246, 0.14)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#6366f1',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#c7d2fe' }}>Graduates Hub</div>
            <div style={{ fontSize: 16, color: '#94a3b8' }}>Badge of Competence</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, zIndex: 1, marginTop: 40 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              padding: '6px 14px',
              borderRadius: 9999,
              background: 'rgba(99, 102, 241, 0.25)',
              border: '1px solid rgba(165, 180, 252, 0.4)',
              fontSize: 18,
              fontWeight: 700,
              color: '#c7d2fe',
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}
          >
            {proof.task_field}
          </div>
          <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, maxWidth: 1000 }}>
            {proof.task_title}
          </div>
          <div style={{ fontSize: 28, color: '#cbd5e1', fontWeight: 500 }}>
            Awarded to <span style={{ color: '#ffffff', fontWeight: 800 }}>{proof.graduate_name}</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                padding: '10px 18px',
                borderRadius: 9999,
                background: verdictBg,
                fontSize: 22,
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              {verdict}
            </div>
            <div style={{ fontSize: 20, color: '#94a3b8' }}>
              Verifiable at graduateshub.co.za
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <div style={{ fontSize: 140, fontWeight: 900, lineHeight: 1, color: '#ffffff' }}>
              {score}
            </div>
            <div style={{ fontSize: 44, fontWeight: 700, color: '#94a3b8' }}>/100</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
