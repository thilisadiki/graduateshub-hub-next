'use client';
import { Reference } from '../../types';

interface Props {
  items: Reference[];
  onChange: (items: Reference[]) => void;
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelCls = 'block text-xs font-medium text-gray-600 mb-1';

function newRef(): Reference {
  return { id: crypto.randomUUID(), name: '', position: '', company: '', email: '', phone: '' };
}

export default function ReferencesStep({ items, onChange }: Props) {
  function add() { onChange([...items, newRef()]); }
  function remove(id: string) { onChange(items.filter(i => i.id !== id)); }
  function update(id: string, field: keyof Reference, value: string) {
    onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  }

  return (
    <div className="space-y-4">
      {items.length === 0 && (
        <div className="text-center py-4 space-y-2">
          <p className="text-sm text-gray-400">No references added yet.</p>
          <p className="text-xs text-gray-400">You can add up to 3 references, or leave this section empty to use "Available on request."</p>
        </div>
      )}

      {items.map((item, idx) => (
        <div key={item.id} className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Reference {idx + 1}</span>
            <button type="button" onClick={() => remove(item.id)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Full Name</label>
              <input className={inputCls} placeholder="Dr. Jane Smith" value={item.name} onChange={e => update(item.id, 'name', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Job Title</label>
              <input className={inputCls} placeholder="Senior Manager" value={item.position} onChange={e => update(item.id, 'position', e.target.value)} />
            </div>
            <div className="col-span-2">
              <label className={labelCls}>Company / Organisation</label>
              <input className={inputCls} placeholder="Company Name" value={item.company} onChange={e => update(item.id, 'company', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Email Address</label>
              <input className={inputCls} type="email" placeholder="jane@company.co.za" value={item.email} onChange={e => update(item.id, 'email', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Phone Number</label>
              <input className={inputCls} placeholder="011 123 4567" value={item.phone} onChange={e => update(item.id, 'phone', e.target.value)} />
            </div>
          </div>
        </div>
      ))}

      {items.length < 3 && (
        <button
          type="button"
          onClick={add}
          className="w-full border-2 border-dashed border-blue-200 text-blue-600 hover:border-blue-400 hover:bg-blue-50 rounded-xl py-3 text-sm font-medium transition"
        >
          + Add Reference
        </button>
      )}
    </div>
  );
}
