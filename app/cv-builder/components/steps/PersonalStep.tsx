'use client';
import { useRef } from 'react';
import { PersonalInfo } from '../../types';

interface Props {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelCls = 'block text-xs font-medium text-gray-600 mb-1';

export default function PersonalStep({ data, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  function set(field: keyof PersonalInfo, value: string) {
    onChange({ ...data, [field]: value });
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => set('photo', ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-4">
      {/* Photo */}
      <div>
        <p className={labelCls}>Profile Photo</p>
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer shrink-0"
            onClick={() => fileRef.current?.click()}
          >
            {data.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Upload photo
            </button>
            {data.photo && (
              <button
                type="button"
                onClick={() => set('photo', '')}
                className="ml-3 text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            )}
            <p className="text-xs text-gray-400 mt-1">JPG or PNG, max 2 MB</p>
          </div>
        </div>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={handlePhoto} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className={labelCls}>Full Name *</label>
          <input className={inputCls} placeholder="e.g. Sipho Dlamini" value={data.fullName} onChange={e => set('fullName', e.target.value)} />
        </div>
        <div className="col-span-2">
          <label className={labelCls}>Job Title / Role</label>
          <input className={inputCls} placeholder="e.g. Junior Software Developer" value={data.jobTitle} onChange={e => set('jobTitle', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Email Address</label>
          <input className={inputCls} type="email" placeholder="you@example.com" value={data.email} onChange={e => set('email', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Phone Number</label>
          <input className={inputCls} placeholder="072 123 4567" value={data.phone} onChange={e => set('phone', e.target.value)} />
        </div>
        <div className="col-span-2">
          <label className={labelCls}>City / Location</label>
          <input className={inputCls} placeholder="e.g. Johannesburg, South Africa" value={data.location} onChange={e => set('location', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>LinkedIn URL</label>
          <input className={inputCls} placeholder="linkedin.com/in/yourname" value={data.linkedin} onChange={e => set('linkedin', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Website / Portfolio</label>
          <input className={inputCls} placeholder="yourportfolio.com" value={data.website} onChange={e => set('website', e.target.value)} />
        </div>
      </div>
    </div>
  );
}
