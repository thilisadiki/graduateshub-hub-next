'use client';
import { Skill, SKILL_LEVELS } from '../../types';

interface Props {
  items: Skill[];
  onChange: (items: Skill[]) => void;
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelCls = 'block text-xs font-medium text-gray-600 mb-1';

function newSkill(): Skill {
  return { id: crypto.randomUUID(), name: '', level: 'Intermediate' };
}

const LEVEL_COLORS: Record<Skill['level'], string> = {
  Beginner: 'bg-gray-200',
  Intermediate: 'bg-blue-400',
  Advanced: 'bg-blue-600',
  Expert: 'bg-blue-800',
};

export default function SkillsStep({ items, onChange }: Props) {
  function add() { onChange([...items, newSkill()]); }
  function remove(id: string) { onChange(items.filter(i => i.id !== id)); }
  function update(id: string, field: keyof Skill, value: string) {
    onChange(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  }

  return (
    <div className="space-y-4">
      {items.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">No skills added yet. Click below to add your first skill.</p>
      )}

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3">
            <div className="flex-1">
              <input
                className={inputCls}
                placeholder="e.g. Microsoft Excel, Python, Accounting..."
                value={item.name}
                onChange={e => update(item.id, 'name', e.target.value)}
              />
            </div>
            <div className="w-36 shrink-0">
              <label className={labelCls}>Level</label>
              <select
                className={inputCls}
                value={item.level}
                onChange={e => update(item.id, 'level', e.target.value)}
              >
                {SKILL_LEVELS.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {[1, 2, 3, 4].map(dot => {
                const levelIndex = SKILL_LEVELS.indexOf(item.level);
                return (
                  <span
                    key={dot}
                    className={`w-2.5 h-2.5 rounded-full ${dot <= levelIndex + 1 ? LEVEL_COLORS[item.level] : 'bg-gray-200'}`}
                  />
                );
              })}
            </div>
            <button type="button" onClick={() => remove(item.id)} className="text-red-400 hover:text-red-600 shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={add}
        className="w-full border-2 border-dashed border-blue-200 text-blue-600 hover:border-blue-400 hover:bg-blue-50 rounded-xl py-3 text-sm font-medium transition"
      >
        + Add Skill
      </button>

      <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
        <p className="text-xs text-amber-700">
          <strong>Tip:</strong> Include both technical skills (software, tools) and soft skills (communication, teamwork). Aim for 6–12 skills total.
        </p>
      </div>
    </div>
  );
}
