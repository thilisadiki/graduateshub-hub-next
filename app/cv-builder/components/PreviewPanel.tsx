'use client';
import { useRef, useEffect, useState } from 'react';
import { CVData, TemplateType } from '../types';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalistTemplate from '../templates/MinimalistTemplate';

interface Props {
  data: CVData;
  template: TemplateType;
  onTemplateChange: (t: TemplateType) => void;
}

const TEMPLATES: { id: TemplateType; label: string; description: string; accent: string }[] = [
  { id: 'modern', label: 'Modern', description: 'Coloured sidebar', accent: 'bg-blue-600' },
  { id: 'professional', label: 'Professional', description: 'Classic ATS', accent: 'bg-slate-700' },
  { id: 'minimalist', label: 'Minimalist', description: 'Elegant & clean', accent: 'bg-gray-400' },
];

const A4_WIDTH = 794; // px at 96dpi

export default function PreviewPanel({ data, template, onTemplateChange }: Props) {
  const printRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Recalculate scale whenever the wrapper resizes
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width;
      setScale(Math.min(available / A4_WIDTH, 1.2)); // cap at 1.2× so it doesn't balloon on large screens
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleDownload() {
    const target = document.getElementById('cv-print-target');
    if (!target) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CV</title>
  <style>
    @page { size: A4 portrait; margin: 0; }
    * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; }
  </style>
</head>
<body>${target.innerHTML}</body>
</html>`);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        {/* Template switcher */}
        <div className="flex items-center gap-2">
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => onTemplateChange(t.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                template === t.id
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${t.accent} shrink-0`} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Download */}
        <button
          type="button"
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition shadow-sm"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Scaled preview area */}
      <div className="flex-1 overflow-auto p-6">
        {/* Measurement wrapper — fills the available width */}
        <div ref={wrapperRef} style={{ width: '100%' }}>
          {/* Outer box sized to the scaled height so scroll works correctly */}
          <div style={{ width: A4_WIDTH * scale, margin: '0 auto' }}>
            <div
              style={{
                width: A4_WIDTH,
                transformOrigin: 'top left',
                transform: `scale(${scale})`,
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
                borderRadius: 2,
              }}
            >
              <div ref={printRef} id="cv-print-target">
                {template === 'modern' && <ModernTemplate data={data} />}
                {template === 'professional' && <ProfessionalTemplate data={data} />}
                {template === 'minimalist' && <MinimalistTemplate data={data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
