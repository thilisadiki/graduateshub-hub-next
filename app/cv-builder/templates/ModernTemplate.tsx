import { CVData } from '../types';

interface Props { data: CVData }

const LEVEL_WIDTH: Record<string, string> = {
  Beginner: '25%',
  Intermediate: '50%',
  Advanced: '75%',
  Expert: '100%',
};

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

export default function ModernTemplate({ data }: Props) {
  const { personal, summary, experience, education, skills, references } = data;
  const hasName = personal.fullName.trim();

  return (
    <div
      style={{ width: '210mm', minHeight: '297mm', display: 'flex', flexDirection: 'row', background: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, lineHeight: 1.4 }}
    >
      {/* Sidebar */}
      <div
        style={{ width: '72mm', background: '#1e3a5f', padding: '32px 20px', color: 'white', display: 'flex', flexDirection: 'column', gap: 20 }}
      >
        {/* Photo */}
        {personal.photo && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.3)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={personal.photo} alt={personal.fullName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {/* Name + title */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.2 }}>{hasName || 'Your Name'}</p>
          {personal.jobTitle && <p style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>{personal.jobTitle}</p>}
        </div>

        {/* Contact */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 12 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.6, marginBottom: 8 }}>Contact</p>
          {personal.email && <ContactRow icon="✉" text={personal.email} />}
          {personal.phone && <ContactRow icon="📞" text={personal.phone} />}
          {personal.location && <ContactRow icon="📍" text={personal.location} />}
          {personal.linkedin && <ContactRow icon="in" text={personal.linkedin} />}
          {personal.website && <ContactRow icon="🌐" text={personal.website} />}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.6, marginBottom: 10 }}>Skills</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {skills.map(skill => (
                <div key={skill.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <span style={{ fontSize: 12 }}>{skill.name}</span>
                    <span style={{ fontSize: 11, opacity: 0.6 }}>{skill.level}</span>
                  </div>
                  <div style={{ height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                    <div style={{ height: '100%', width: LEVEL_WIDTH[skill.level], background: '#60a5fa', borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 12 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.6, marginBottom: 10 }}>References</p>
          {references.length === 0 ? (
            <p style={{ fontSize: 11, opacity: 0.75, fontStyle: 'italic' }}>Available on request.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {references.map(ref => (
                <div key={ref.id}>
                  <p style={{ fontSize: 12, fontWeight: 700 }}>{ref.name}</p>
                  <p style={{ fontSize: 11, opacity: 0.75 }}>{ref.position}{ref.company ? ` · ${ref.company}` : ''}</p>
                  {ref.email && <p style={{ fontSize: 11, opacity: 0.65, wordBreak: 'break-all' }}>{ref.email}</p>}
                  {ref.phone && <p style={{ fontSize: 11, opacity: 0.65 }}>{ref.phone}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {/* Summary */}
        {summary && (
          <Section title="Profile Summary">
            <p style={{ color: '#374151', lineHeight: 1.6 }}>{summary}</p>
          </Section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <Section title="Work Experience">
            {experience.map(exp => (
              <div key={exp.id} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11, color: '#1e3a5f' }}>{exp.position}</p>
                    <p style={{ color: '#6b7280', fontSize: 10 }}>
                      {exp.company}
                      {exp.employmentType ? ` · ${exp.employmentType}` : ''}
                    </p>
                    {(exp.location || exp.locationType) && (
                      <p style={{ color: '#9ca3af', fontSize: 9 }}>
                        {[exp.location, exp.locationType].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                  <p style={{ fontSize: 9, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>
                    {formatRange(exp.startDate, exp.endDate, exp.current)}
                  </p>
                </div>
                {exp.description && (
                  <p style={{ color: '#4b5563', marginTop: 4, whiteSpace: 'pre-line', lineHeight: 1.55 }}>{exp.description}</p>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 11, color: '#1e3a5f' }}>
                      {edu.degree}{edu.field ? ` in ${edu.field}` : ''}
                    </p>
                    <p style={{ color: '#6b7280', fontSize: 10 }}>{edu.institution}</p>
                    {edu.grade && <p style={{ color: '#9ca3af', fontSize: 9 }}>Grade: {edu.grade}</p>}
                  </div>
                  <p style={{ fontSize: 9, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 8 }}>
                    {formatRange(edu.startDate, edu.endDate, edu.current)}
                  </p>
                </div>
              </div>
            ))}
          </Section>
        )}

      </div>
    </div>
  );
}

function ContactRow({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6 }}>
      <span style={{ fontSize: 12, opacity: 0.7, minWidth: 16 }}>{icon}</span>
      <span style={{ fontSize: 11, opacity: 0.85, wordBreak: 'break-all' }}>{text}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <p style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.2, color: '#1e3a5f' }}>{title}</p>
        <div style={{ flex: 1, height: 2, background: '#dbeafe', borderRadius: 1 }} />
      </div>
      {children}
    </div>
  );
}
