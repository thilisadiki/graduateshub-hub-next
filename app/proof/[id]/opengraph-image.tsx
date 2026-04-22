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

  const score = proof?.evaluation.overallScore ?? 0;
  const verdict = proof?.evaluation.verdict ?? 'Badge not found';
  const verdictBg =
    verdict === 'Pass with Distinction'
      ? '#10b981'
      : verdict === 'Pass'
        ? '#3b82f6'
        : verdict === 'Needs Revision'
          ? '#f59e0b'
          : '#64748b';

  const field = proof?.task_field ?? 'Portfolio';
  const title = proof?.task_title ?? 'Badge not available';
  const name = proof?.graduate_name ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 72px',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top row: brand */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
              marginRight: 16,
            }}
          >
            G
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, color: '#c7d2fe' }}>
              Graduates Hub
            </div>
            <div style={{ display: 'flex', fontSize: 16, color: '#94a3b8' }}>
              Badge of Competence
            </div>
          </div>
        </div>

        {/* Middle: field pill, title, name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 48,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '6px 16px',
              borderRadius: 9999,
              background: 'rgba(99, 102, 241, 0.25)',
              border: '1px solid rgba(165, 180, 252, 0.4)',
              fontSize: 18,
              fontWeight: 700,
              color: '#c7d2fe',
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              marginBottom: 24,
            }}
          >
            {field}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.05,
              maxWidth: 1000,
              marginBottom: 20,
            }}
          >
            {title}
          </div>
          {name && (
            <div style={{ display: 'flex', fontSize: 28, color: '#cbd5e1' }}>
              Awarded to {name}
            </div>
          )}
        </div>

        {/* Spacer */}
        <div style={{ display: 'flex', flex: 1 }} />

        {/* Bottom row: verdict and score */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '10px 20px',
                borderRadius: 9999,
                background: verdictBg,
                fontSize: 22,
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: 12,
              }}
            >
              {verdict}
            </div>
            <div style={{ display: 'flex', fontSize: 20, color: '#94a3b8' }}>
              Verifiable at graduateshub.co.za
            </div>
          </div>
          {proof && (
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 140,
                  fontWeight: 900,
                  lineHeight: 1,
                  color: '#ffffff',
                }}
              >
                {score}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 44,
                  fontWeight: 700,
                  color: '#94a3b8',
                  marginLeft: 6,
                }}
              >
                /100
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    size,
  );
}
