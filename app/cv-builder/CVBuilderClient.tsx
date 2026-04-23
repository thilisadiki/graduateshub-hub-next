'use client';
import { useState } from 'react';
import { CVData, TemplateType, DEFAULT_CV_DATA } from './types';
import FormPanel from './components/FormPanel';
import PreviewPanel from './components/PreviewPanel';

export default function CVBuilderClient() {
  const [cvData, setCvData] = useState<CVData>(DEFAULT_CV_DATA);
  const [currentStep, setCurrentStep] = useState(0);
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');

  return (
    <>
      {/* Mobile tab switcher - only visible on small screens */}
      <div className="lg:hidden flex border-b border-gray-200 bg-white sticky top-0 z-10">
        <button
          type="button"
          onClick={() => setMobileTab('form')}
          className={`flex-1 py-3 text-sm font-semibold transition ${mobileTab === 'form' ? 'text-blue-700 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Edit CV
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('preview')}
          className={`flex-1 py-3 text-sm font-semibold transition ${mobileTab === 'preview' ? 'text-blue-700 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Preview
        </button>
      </div>

      {/* Desktop: side by side. Mobile: one tab at a time */}
      <div className="flex" style={{ height: 'calc(100vh - 130px)' }}>
        {/* Form panel */}
        <div className={`flex-1 lg:flex-none lg:w-[420px] xl:w-[460px] border-r border-gray-200 bg-white overflow-hidden flex-col ${mobileTab === 'form' ? 'flex' : 'hidden lg:flex'}`}>
          <FormPanel
            data={cvData}
            onChange={setCvData}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />
        </div>

        {/* Preview panel */}
        <div className={`flex-1 overflow-hidden flex-col ${mobileTab === 'preview' ? 'flex' : 'hidden lg:flex'}`}>
          <PreviewPanel
            data={cvData}
            template={template}
            onTemplateChange={setTemplate}
          />
        </div>
      </div>
    </>
  );
}
