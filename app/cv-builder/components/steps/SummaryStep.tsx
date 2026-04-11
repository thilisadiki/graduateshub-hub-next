'use client';

interface Props {
  summary: string;
  onChange: (value: string) => void;
}

export default function SummaryStep({ summary, onChange }: Props) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Professional Summary
        </label>
        <textarea
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
          rows={7}
          placeholder="Write 2–4 sentences about your professional background, key skills, and career goals. Keep it concise and tailored to the role you are applying for."
          value={summary}
          onChange={e => onChange(e.target.value)}
        />
        <p className="text-xs text-gray-400 mt-1">{summary.length} / 600 characters</p>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
        <p className="text-xs font-semibold text-blue-700 mb-1">Tips for a strong summary</p>
        <ul className="text-xs text-blue-600 space-y-1 list-disc list-inside">
          <li>Mention your years of experience and your key area of expertise</li>
          <li>Include one or two of your biggest career achievements</li>
          <li>State what kind of role or company you are targeting</li>
        </ul>
      </div>
    </div>
  );
}
