'use client';
import { Education } from '../../types';

interface Props {
  items: Education[];
  onChange: (items: Education[]) => void;
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelCls = 'block text-xs font-medium text-gray-600 mb-1';

function newEntry(): Education {
  return { id: crypto.randomUUID(), institution: '', degree: '', field: '', startDate: '', endDate: '', current: false, grade: '' };
}

export default function EducationStep({ items, onChange }: Props) {
  function add() { onChange([...items, newEntry()]); }
  function remove(id: string) { onChange(items.filter(i => i.id !== id)); }
  function update(id: string, field: keyof Education, value: string | boolean) {
    onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  }

  return (
    <div className="space-y-4">
      {items.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">No education added yet. Click below to add your first qualification.</p>
      )}

      {items.map((item, idx) => (
        <div key={item.id} className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Qualification {idx + 1}</span>
            <button type="button" onClick={() => remove(item.id)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className={labelCls}>School / University / Institution</label>
              <input className={inputCls} placeholder="University of Cape Town" value={item.institution} onChange={e => update(item.id, 'institution', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Qualification Type</label>
              <input className={inputCls} placeholder="BCom, Diploma, Certificate..." value={item.degree} onChange={e => update(item.id, 'degree', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Field of Study</label>
              <input className={inputCls} placeholder="Accounting, IT, Marketing..." value={item.field} onChange={e => update(item.id, 'field', e.target.value)} />
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
                <span className="text-xs text-gray-500">Currently studying</span>
              </label>
            </div>
            <div>
              <label className={labelCls}>Grade / Result (optional)</label>
              <input className={inputCls} placeholder="Distinction, 75%, Cum Laude..." value={item.grade} onChange={e => update(item.id, 'grade', e.target.value)} />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="w-full border-2 border-dashed border-blue-200 text-blue-600 hover:border-blue-400 hover:bg-blue-50 rounded-xl py-3 text-sm font-medium transition"
      >
        + Add Education
      </button>
    </div>
  );
}
