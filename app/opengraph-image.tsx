import { ImageResponse } from 'next/og';

export const alt = 'Graduates Hub - Free online courses with certificates';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 45%, #bfdbfe 100%)',
          fontFamily: 'sans-serif',
          color: '#0f172a',
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
            background: 'rgba(37, 99, 235, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: '9999px',
            background: 'rgba(59, 130, 246, 0.12)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '56px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 72,
                height: 72,
                borderRadius: 20,
                background: '#2563eb',
                color: '#ffffff',
                fontSize: 34,
                fontWeight: 800,
              }}
            >
              G
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: '#2563eb' }}>Graduates Hub</div>
              <div style={{ fontSize: 18, color: '#475569' }}>100% free online learning</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 860,
              gap: 18,
            }}
          >
            <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>
              Free Online Courses with Certificates
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: '#334155' }}>
              Discover flexible courses in IT, business, health, languages, marketing, and more.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            {['Self-paced', 'Certificates', 'Career-focused'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 18px',
                  borderRadius: 9999,
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(37, 99, 235, 0.14)',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#1e3a8a',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
