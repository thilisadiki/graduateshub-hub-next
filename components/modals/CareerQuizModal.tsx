'use client';
import { useState, useEffect } from 'react';
import { X, Brain, ArrowRight, ArrowLeft, RotateCcw, Briefcase, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import CourseCard from '@/components/course/CourseCard';
import { quizQuestions, careerResults } from '@/data/careerQuiz';
import type { CareerCategory, QuizOption } from '@/data/careerQuiz';
import { courses } from '@/data/courses';

function scoreAnswers(answers: QuizOption[]): CareerCategory {
  const scores: Record<CareerCategory, number> = {
    it: 0, data: 0, business: 0, marketing: 0, accounting: 0, languages: 0,
  };
  for (const answer of answers) {
    for (const [cat, pts] of Object.entries(answer.weights)) {
      scores[cat as CareerCategory] += pts;
    }
  }
  return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as CareerCategory;
}

// ── Screens ──────────────────────────────────────────────────────────────────

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 gap-6 flex-1">
      <div className="w-20 h-20 rounded-2xl bg-rose-100 flex items-center justify-center">
        <Brain size={40} className="text-rose-600" />
      </div>
      <div>
        <h3 className="text-2xl font-black text-gray-900 mb-3">Discover Your Career Match</h3>
        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
          Answer 6 quick questions about your interests and strengths. We'll match you to a career path and show you exactly which free courses to start with.
        </p>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-left max-w-xs w-full">
        {['Takes under 2 minutes', 'No signup required', 'Personalised course recommendations'].map(item => (
          <li key={item} className="flex items-center gap-2 text-gray-600">
            <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={onStart}
        className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-md text-lg"
      >
        Start the Quiz <ArrowRight size={20} />
      </button>
    </div>
  );
}

function QuestionScreen({
  question,
  questionIndex,
  total,
  onAnswer,
  onBack,
  selected,
}: {
  question: typeof quizQuestions[0];
  questionIndex: number;
  total: number;
  onAnswer: (option: QuizOption) => void;
  onBack: () => void;
  selected: QuizOption | null;
}) {
  const progress = ((questionIndex) / total) * 100;

  return (
    <div className="flex flex-col flex-1 gap-6 px-6 py-8">
      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Question {questionIndex + 1} of {total}</span>
          <span className="text-xs font-bold text-rose-600">{Math.round(progress)}% done</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div>
        <h3 className="text-xl font-black text-gray-900 mb-1">{question.question}</h3>
        <p className="text-sm text-gray-500">{question.subtitle}</p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2 flex-1">
        {question.options.map((option) => {
          const isSelected = selected?.label === option.label;
          return (
            <button
              key={option.label}
              onClick={() => onAnswer(option)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left font-semibold text-sm transition-all duration-150
                ${isSelected
                  ? 'border-rose-500 bg-rose-50 text-rose-900 scale-[1.01] shadow-sm'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-rose-300 hover:bg-rose-50/50'
                }`}
            >
              <span className="text-xl shrink-0">{option.emoji}</span>
              {option.label}
              {isSelected && <span className="ml-auto text-rose-500 font-black">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Back */}
      {questionIndex > 0 && (
        <button
          onClick={onBack}
          className="self-start flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium"
        >
          <ArrowLeft size={14} /> Back
        </button>
      )}
    </div>
  );
}

function CalculatingScreen() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center px-6">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-rose-100" />
        <div className="absolute inset-0 rounded-full border-4 border-t-rose-500 animate-spin" />
        <Brain size={32} className="absolute inset-0 m-auto text-rose-500" />
      </div>
      <p className="text-lg font-bold text-gray-700 animate-pulse">Matching your profile...</p>
      <p className="text-sm text-gray-400">Analysing your answers</p>
    </div>
  );
}

function ResultScreen({
  category,
  onRetake,
  onClose,
}: {
  category: CareerCategory;
  onRetake: () => void;
  onClose: () => void;
}) {
  const result = careerResults[category];
  const starterCourses = result.courseIds
    .map(id => courses.find(c => c.id === id))
    .filter(Boolean) as typeof courses;

  return (
    <div className="flex flex-col gap-6 flex-1 overflow-y-auto px-6 py-8">

      {/* Match card */}
      <div className={`bg-gradient-to-br ${result.gradient} rounded-2xl p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-10"><Briefcase size={120} /></div>
        <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">
            Your Career Match
          </span>
          <h3 className="text-2xl font-black mb-1">{result.title}</h3>
          <p className="text-white/80 font-medium italic mb-4">{result.tagline}</p>
          <p className="text-sm text-white/90 leading-relaxed">{result.description}</p>
        </div>
      </div>

      {/* Job titles */}
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">You could work as</h4>
        <div className="flex flex-wrap gap-2">
          {result.jobTitles.map(title => (
            <span key={title} className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${result.badgeColor}`}>
              {title}
            </span>
          ))}
        </div>
      </div>

      {/* Starter courses */}
      {starterCourses.length > 0 && (
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Start with these free courses</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {starterCourses.map(course => (
              <div key={course.id} onClick={onClose}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          href={result.categoryHref}
          onClick={onClose}
          className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${result.gradient} text-white px-5 py-3 rounded-xl font-bold transition-opacity hover:opacity-90 shadow-md text-sm`}
        >
          Browse All {result.title.split(' ')[0]} Courses <ExternalLink size={14} />
        </Link>
        <button
          onClick={onRetake}
          className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800 px-5 py-3 rounded-xl font-bold transition-colors text-sm"
        >
          <RotateCcw size={14} /> Retake Quiz
        </button>
      </div>
    </div>
  );
}

// ── Main modal ────────────────────────────────────────────────────────────────

type Screen = 'intro' | 'question' | 'calculating' | 'result';

export default function CareerQuizModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);
  const [result, setResult] = useState<CareerCategory | null>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset when closed
      setScreen('intro');
      setQuestionIndex(0);
      setAnswers([]);
      setSelectedOption(null);
      setResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStart = () => {
    setScreen('question');
    setQuestionIndex(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  const handleAnswer = (option: QuizOption) => {
    setSelectedOption(option);

    setTimeout(() => {
      const newAnswers = [...answers.slice(0, questionIndex), option];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (questionIndex < quizQuestions.length - 1) {
        setQuestionIndex(i => i + 1);
      } else {
        // Last question — calculate
        setScreen('calculating');
        setTimeout(() => {
          const category = scoreAnswers(newAnswers);
          setResult(category);
          setScreen('result');
        }, 900);
      }
    }, 300);
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(i => i - 1);
      setSelectedOption(answers[questionIndex - 1] ?? null);
    }
  };

  const handleRetake = () => {
    setScreen('intro');
    setQuestionIndex(0);
    setAnswers([]);
    setSelectedOption(null);
    setResult(null);
  };

  const showHeader = screen !== 'result';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div
        className="bg-white w-full max-w-lg max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-5 flex justify-between items-start text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 p-3 opacity-10"><Brain size={80} /></div>
          <div className="relative z-10">
            <h2 className="text-xl font-black flex items-center gap-2">
              <Brain size={20} className="text-yellow-300" />
              {screen === 'result' ? 'Your Career Match' : 'Career Quiz'}
            </h2>
            {showHeader && (
              <p className="text-rose-100 text-sm mt-0.5">6 questions · free · instant results</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="relative z-10 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Screen content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {screen === 'intro' && <IntroScreen onStart={handleStart} />}
          {screen === 'question' && (
            <QuestionScreen
              question={quizQuestions[questionIndex]}
              questionIndex={questionIndex}
              total={quizQuestions.length}
              onAnswer={handleAnswer}
              onBack={handleBack}
              selected={selectedOption ?? (answers[questionIndex] ?? null)}
            />
          )}
          {screen === 'calculating' && <CalculatingScreen />}
          {screen === 'result' && result && (
            <ResultScreen category={result} onRetake={handleRetake} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
