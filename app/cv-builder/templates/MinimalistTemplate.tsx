import { CVData } from '../types';

interface Props { data: CVData }

function formatDate(val: string) {
  if (!val) return '';
  const [y, m] = val.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m) - 1]} ${y}`;
}

function formatRange(start: string, end: string, current: boolean) {
  const s = formatDate(start);
  const e = current ? 'Present' : formatDate(end);
  return [s, e].filter(Boolean).join(' – ');
}

export default function MinimalistTemplate({ data }: Props) {
  const { personal, summary, experience, education, skills, references } = data;
  const hasName = personal.fullName.trim();

  return (
    <div
      style={{ width: '210mm', minHeight: '297mm', padding: '36px 36px', fontSize: '10.5px', lineHeight: 1.55, color: '#374151', background: 'white', fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 24 }}>
        {personal.photo && (
          <div style={{ width: 68, height: 68, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={personal.photo} alt={personal.fullName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 300, letterSpacing: 2, color: '#111827', textTransform: 'uppercase', margin: 0 }}>
            {hasName || 'YOUR NAME'}
          </h1>
          {personal.jobTitle && (
            <p style={{ fontSize: 11, color: '#6b7280', letterSpacing: 1, fontWeight: 400, margin: '4px 0 0' }}>
              {personal.jobTitle}
            </p>
          )}
          {/* Contact row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', marginTop: 6 }}>
            {[personal.email, personal.phone, personal.location].filter(Boolean).map((v, i) => (
              <span key={i} style={{ fontSize: 9, color: '#9ca3af' }}>{v}</span>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 14px', marginTop: 2 }}>
            {[personal.linkedin, personal.website].filter(Boolean).map((v, i) => (
              <span key={i} style={{ fontSize: 9, color: '#9ca3af' }}>{v}</span>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* Summary */}
      {summary && (
        <>
          <Section title="About">
            <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{summary}</p>
          </Section>
          <Divider />
        </>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <>
          <Section title="Experience">
            {experience.map((exp, idx) => (
              <div key={exp.id} style={{ display: 'grid', gridTemplateColumns: '22mm 1fr', gap: '0 16px', marginBottom: idx < experience.length - 1 ? 12 : 0 }}>
                <p style={{ fontSize: 8.5, color: '#9ca3af', paddingTop: 1, lineHeight: 1.4 }}>
                  {formatRange(exp.startDate, exp.endDate, exp.current)}
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111827' }}>{exp.position}</p>
                  <p style={{ fontSize: 9.5, color: '#6b7280' }}>
                    {exp.company}
                    {exp.employmentType ? ` · ${exp.employmentType}` : ''}
                  </p>
                  {(exp.location || exp.locationType) && (
                    <p style={{ fontSize: 9, color: '#9ca3af', marginBottom: 3 }}>
                      {[exp.location, exp.locationType].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  {exp.description && (
                    <p style={{ color: '#4b5563', whiteSpace: 'pre-line', lineHeight: 1.55, marginTop: 2 }}>{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </Section>
          <Divider />
        </>
      )}

      {/* Education */}
      {education.length > 0 && (
        <>
          <Section title="Education">
            {education.map((edu, idx) => (
              <div key={edu.id} style={{ display: 'grid', gridTemplateColumns: '22mm 1fr', gap: '0 16px', marginBottom: idx < education.length - 1 ? 10 : 0 }}>
                <p style={{ fontSize: 8.5, color: '#9ca3af', paddingTop: 1 }}>
                  {formatRange(edu.startDate, edu.endDate, edu.current)}
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 10.5, color: '#111827' }}>
                    {edu.degree}{edu.field ? ` · ${edu.field}` : ''}
                  </p>
                  <p style={{ fontSize: 9.5, color: '#6b7280' }}>
                    {edu.institution}{edu.grade ? ` · ${edu.grade}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </Section>
          <Divider />
        </>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <>
          <Section title="Skills">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {skills.map(skill => (
                <span key={skill.id} style={{
                  fontSize: 9,
                  padding: '2px 10px',
                  border: '1px solid #d1d5db',
                  borderRadius: 2,
                  color: '#374151',
                  letterSpacing: 0.3,
                }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </Section>
          <Divider />
        </>
      )}

      {/* References */}
      <Section title="References">
        {references.length === 0 ? (
          <p style={{ color: '#9ca3af', fontStyle: 'italic', fontSize: 9.5 }}>Available on request.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
            {references.map(ref => (
              <div key={ref.id}>
                <p style={{ fontWeight: 700, fontSize: 10 }}>{ref.name}</p>
                <p style={{ color: '#6b7280', fontSize: 9 }}>{ref.position}{ref.company ? ` · ${ref.company}` : ''}</p>
                {ref.email && <p style={{ color: '#9ca3af', fontSize: 9 }}>{ref.email}</p>}
                {ref.phone && <p style={{ color: '#9ca3af', fontSize: 9 }}>{ref.phone}</p>}
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '0 20px', marginBottom: 16 }}>
      <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#9ca3af', paddingTop: 2 }}>
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: '#f3f4f6', margin: '4px 0 16px' }} />;
}
