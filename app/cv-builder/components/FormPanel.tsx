'use client';
import { CVData, STEPS } from '../types';
import PersonalStep from './steps/PersonalStep';
import SummaryStep from './steps/SummaryStep';
import ExperienceStep from './steps/ExperienceStep';
import EducationStep from './steps/EducationStep';
import SkillsStep from './steps/SkillsStep';
import ReferencesStep from './steps/ReferencesStep';

interface Props {
  data: CVData;
  onChange: (data: CVData) => void;
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function FormPanel({ data, onChange, currentStep, onStepChange }: Props) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === STEPS.length - 1;

  return (
    <div className="flex flex-col h-full">
      {/* Step tabs */}
      <div className="border-b border-gray-100 bg-white">
        <div className="flex overflow-x-auto scrollbar-none px-4 pt-4 gap-1">
          {STEPS.map((step, idx) => (
            <button
              key={step.key}
              type="button"
              onClick={() => onStepChange(idx)}
              className={`shrink-0 px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition whitespace-nowrap ${
                idx === currentStep
                  ? 'border-blue-600 text-blue-700 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-xs mr-1.5 ${
                idx < currentStep ? 'bg-green-500 text-white' : idx === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {idx < currentStep ? '✓' : idx + 1}
              </span>
              {step.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 overflow-y-auto p-5">
        <h2 className="text-base font-bold text-gray-800 mb-4">{STEPS[currentStep].label}</h2>

        {currentStep === 0 && (
          <PersonalStep data={data.personal} onChange={personal => onChange({ ...data, personal })} />
        )}
        {currentStep === 1 && (
          <SummaryStep summary={data.summary} onChange={summary => onChange({ ...data, summary })} />
        )}
        {currentStep === 2 && (
          <ExperienceStep items={data.experience} onChange={experience => onChange({ ...data, experience })} />
        )}
        {currentStep === 3 && (
          <EducationStep items={data.education} onChange={education => onChange({ ...data, education })} />
        )}
        {currentStep === 4 && (
          <SkillsStep items={data.skills} onChange={skills => onChange({ ...data, skills })} />
        )}
        {currentStep === 5 && (
          <ReferencesStep items={data.references} onChange={references => onChange({ ...data, references })} />
        )}
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-100 bg-white px-5 py-4 flex items-center justify-between gap-3">
        <button
          type="button"
          disabled={isFirst}
          onClick={() => onStepChange(currentStep - 1)}
          className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          ← Back
        </button>

        <span className="text-xs text-gray-400">{currentStep + 1} / {STEPS.length}</span>

        {!isLast ? (
          <button
            type="button"
            onClick={() => onStepChange(currentStep + 1)}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Next →
          </button>
        ) : (
          <span className="px-4 py-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg">
            ✓ All done — download your CV →
          </span>
        )}
      </div>
    </div>
  );
}
