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

export default function ProfessionalTemplate({ data }: Props) {
  const { personal, summary, experience, education, skills, references } = data;
  const hasName = personal.fullName.trim();

  const contactParts = [personal.email, personal.phone, personal.location, personal.linkedin, personal.website].filter(Boolean);

  return (
    <div
      style={{ width: '210mm', minHeight: '297mm', padding: '28px 32px', fontSize: '10.5px', lineHeight: 1.5, color: '#1f2937', background: 'white', fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* Header */}
      <div style={{ borderBottom: '3px solid #1e3a5f', paddingBottom: 14, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {personal.photo && (
            <div style={{ width: 64, height: 64, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={personal.photo} alt={personal.fullName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 22, fontWeight: 900, color: '#1e3a5f', letterSpacing: -0.5, margin: 0 }}>
              {hasName || 'Your Name'}
            </h1>
            {personal.jobTitle && (
              <p style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, margin: '2px 0 0' }}>{personal.jobTitle}</p>
            )}
          </div>
        </div>
        {contactParts.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginTop: 10 }}>
            {contactParts.map((part, i) => (
              <span key={i} style={{ fontSize: 9, color: '#4b5563' }}>{part}</span>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <Section title="Professional Summary">
          <p style={{ color: '#374151', lineHeight: 1.65 }}>{summary}</p>
        </Section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <Section title="Work Experience">
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: 13 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111827' }}>{exp.position}</p>
                <p style={{ fontSize: 9, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>
                  {formatRange(exp.startDate, exp.endDate, exp.current)}
                </p>
              </div>
              <p style={{ color: '#6b7280', fontWeight: 600, fontSize: 10 }}>
                {exp.company}
                {exp.employmentType ? ` · ${exp.employmentType}` : ''}
              </p>
              {(exp.location || exp.locationType) && (
                <p style={{ color: '#9ca3af', fontSize: 9, marginBottom: 3 }}>
                  {[exp.location, exp.locationType].filter(Boolean).join(' · ')}
                </p>
              )}
              {exp.description && (
                <p style={{ color: '#4b5563', whiteSpace: 'pre-line', lineHeight: 1.55, marginTop: 3 }}>{exp.description}</p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <Section title="Education">
          {education.map(edu => (
            <div key={edu.id} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 800, fontSize: 11, color: '#111827' }}>
                  {edu.degree}{edu.field ? ` in ${edu.field}` : ''}
                </p>
                <p style={{ fontSize: 9, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>
                  {formatRange(edu.startDate, edu.endDate, edu.current)}
                </p>
              </div>
              <p style={{ color: '#6b7280', fontWeight: 600, fontSize: 10 }}>{edu.institution}</p>
              {edu.grade && <p style={{ color: '#9ca3af', fontSize: 9 }}>Result: {edu.grade}</p>}
            </div>
          ))}
        </Section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <Section title="Skills">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {skills.map(skill => (
              <span key={skill.id} style={{
                fontSize: 9,
                padding: '3px 10px',
                borderRadius: 20,
                background: '#eff6ff',
                color: '#1d4ed8',
                border: '1px solid #bfdbfe',
                fontWeight: 600,
              }}>
                {skill.name} · {skill.level}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* References */}
      <Section title="References">
        {references.length === 0 ? (
          <p style={{ color: '#6b7280', fontStyle: 'italic' }}>Available on request.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
            {references.map(ref => (
              <div key={ref.id}>
                <p style={{ fontWeight: 700, fontSize: 10, color: '#111827' }}>{ref.name}</p>
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
    <div style={{ marginBottom: 16 }}>
      <p style={{
        fontSize: 9,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: '#1e3a5f',
        borderBottom: '1.5px solid #e5e7eb',
        paddingBottom: 4,
        marginBottom: 8,
      }}>
        {title}
      </p>
      {children}
    </div>
  );
}
