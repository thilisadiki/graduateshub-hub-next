'use client';

import { useState } from 'react';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import { categories } from '@/data/categories';
import {
  FORMAT_LABELS,
  LENGTH_LABELS,
  SORT_LABELS,
  type FilterState,
  type FormatFilter,
  type LengthBand,
  type SortKey,
  countActiveFilters,
} from '@/utils/courseFilters';

interface Props {
  state: FilterState;
  onChange: (next: Partial<FilterState>) => void;
  onClear: () => void;
  totalCount: number;
  resultCount: number;
}

const SUBJECT_OPTIONS: Array<{ id: string; label: string }> = [
  { id: '', label: 'All subjects' },
  ...categories.map((c) => ({ id: c.id, label: c.name.replace(/ Courses$/, '') })),
];

const FORMAT_OPTIONS: FormatFilter[] = ['any', 'certificate', 'diploma'];
const LENGTH_OPTIONS: LengthBand[] = ['any', 'short', 'medium', 'long'];

function ChipGroup<T extends string>({
  options,
  value,
  onSelect,
  getLabel,
}: {
  options: ReadonlyArray<T>;
  value: T;
  onSelect: (next: T) => void;
  getLabel: (opt: T) => string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt || 'all'}
            type="button"
            onClick={() => onSelect(opt)}
            aria-pressed={active}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${
              active
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            {getLabel(opt)}
          </button>
        );
      })}
    </div>
  );
}

export default function CourseFilters({ state, onChange, onClear, totalCount, resultCount }: Props) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const activeCount = countActiveFilters(state);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      {/* Subject row - always visible */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Subject</p>
        <div className="overflow-x-auto -mx-1 px-1">
          <ChipGroup
            options={SUBJECT_OPTIONS.map((s) => s.id)}
            value={state.category}
            onSelect={(id) => onChange({ category: id })}
            getLabel={(id) => SUBJECT_OPTIONS.find((s) => s.id === id)?.label ?? id}
          />
        </div>
      </div>

      {/* Advanced filters toggle (mobile) + always-on (desktop) */}
      <div className="sm:hidden px-4 py-3 border-b border-gray-100">
        <button
          type="button"
          onClick={() => setAdvancedOpen((v) => !v)}
          className="flex items-center justify-between w-full text-sm font-bold text-gray-700"
          aria-expanded={advancedOpen}
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal size={14} />
            More filters
            {activeCount > 0 && (
              <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                {activeCount}
              </span>
            )}
          </span>
          <ChevronDown size={16} className={`transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`${advancedOpen ? 'block' : 'hidden'} sm:block px-4 sm:px-6 py-4 border-b border-gray-100`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Format</p>
            <ChipGroup
              options={FORMAT_OPTIONS}
              value={state.format}
              onSelect={(f) => onChange({ format: f })}
              getLabel={(f) => FORMAT_LABELS[f]}
            />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Length</p>
            <ChipGroup
              options={LENGTH_OPTIONS}
              value={state.length}
              onSelect={(l) => onChange({ length: l })}
              getLabel={(l) => LENGTH_LABELS[l]}
            />
          </div>
        </div>
      </div>

      {/* Result count + sort + clear */}
      <div className="px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-gray-50/60">
        <p className="text-sm text-gray-600">
          Showing <span className="font-bold text-gray-900">{resultCount}</span> of {totalCount} courses
          {activeCount > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="ml-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
            >
              <X size={11} /> Clear filters
            </button>
          )}
        </p>
        <label className="flex items-center gap-2 text-xs text-gray-500">
          <span className="font-bold uppercase tracking-wider">Sort</span>
          <select
            value={state.sort}
            onChange={(e) => onChange({ sort: e.target.value as SortKey })}
            className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {(Object.keys(SORT_LABELS) as SortKey[])
              .filter((k) => state.q.trim() || k !== 'relevance')
              .map((k) => (
                <option key={k} value={k}>
                  {SORT_LABELS[k]}
                </option>
              ))}
          </select>
        </label>
      </div>
    </div>
  );
}
