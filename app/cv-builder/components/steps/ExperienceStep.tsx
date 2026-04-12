'use client';
import { WorkExperience } from '../../types';

interface Props {
  items: WorkExperience[];
  onChange: (items: WorkExperience[]) => void;
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 bg-gray-50 border-gray-300 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelCls = 'block text-xs font-medium text-gray-600 mb-1';

const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Contract', 'Self-employed', 'Freelance', 'Internship', 'Apprenticeship', 'Seasonal'];
const LOCATION_TYPES = ['On-site', 'Hybrid', 'Remote'];

function newEntry(): WorkExperience {
  return { id: crypto.randomUUID(), company: '', position: '', location: '', locationType: '', employmentType: '', startDate: '', endDate: '', current: false, description: '' };
}

export default function ExperienceStep({ items, onChange }: Props) {
  function add() { onChange([...items, newEntry()]); }
  function remove(id: string) { onChange(items.filter(i => i.id !== id)); }
  function update(id: string, field: keyof WorkExperience, value: string | boolean) {
    onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  }

  return (
    <div className="space-y-4">
      {items.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">No experience added yet. Click below to add your first role.</p>
      )}

      {items.map((item, idx) => (
        <div key={item.id} className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Job {idx + 1}</span>
            <button type="button" onClick={() => remove(item.id)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Company Name</label>
              <input className={inputCls} placeholder="Acme Corp" value={item.company} onChange={e => update(item.id, 'company', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Your Job Title</label>
              <input className={inputCls} placeholder="Software Developer" value={item.position} onChange={e => update(item.id, 'position', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Employment Type</label>
              <select className={inputCls} value={item.employmentType} onChange={e => update(item.id, 'employmentType', e.target.value)}>
                <option value="">Select type</option>
                {EMPLOYMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Location</label>
              <input className={inputCls} placeholder="Cape Town, South Africa" value={item.location} onChange={e => update(item.id, 'location', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Work Setting</label>
              <select className={inputCls} value={item.locationType} onChange={e => update(item.id, 'locationType', e.target.value)}>
                <option value="">Select setting</option>
                {LOCATION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Start Date</label>
              <input className={inputCls} type="month" value={item.startDate} onChange={e => update(item.id, 'startDate', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>End Date</label>
              <input
                className={inputCls}
                type="month"
                value={item.endDate}
                disabled={item.current}
                onChange={e => update(item.id, 'endDate', e.target.value)}
              />
              <label className="flex items-center gap-1.5 mt-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={item.current}
                  onChange={e => update(item.id, 'current', e.target.checked)}
                />
                <span className="text-xs text-gray-500">I currently work here</span>
              </label>
            </div>
            <div className="col-span-2">
              <label className={labelCls}>Key Responsibilities & Achievements</label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={4}
                placeholder="Describe your main duties and any notable achievements. Use bullet points by starting lines with • or -."
                value={item.description}
                onChange={e => update(item.id, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="w-full border-2 border-dashed border-blue-200 text-blue-600 hover:border-blue-400 hover:bg-blue-50 rounded-xl py-3 text-sm font-medium transition"
      >
        + Add Work Experience
      </button>
    </div>
  );
}
