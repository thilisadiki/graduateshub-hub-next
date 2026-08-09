import Link from 'next/link';
import { MapPin, BookOpen, Award, FileText, MessageSquareQuote, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choose your career',
    href: '/career-roadmaps',
    actionLabel: 'Explore Roadmaps',
    description: 'Step-by-step role blueprints for high-demand entry-level tech, business, and digital careers.',
    icon: <MapPin className="text-primary" size={26} />,
  },
  {
    id: 2,
    title: 'Learn the right skills',
    href: '/guides',
    actionLabel: 'View Study Guides',
    description: 'Stage-by-stage learning paths with verified free courses from Google, IBM, Microsoft, and Alison.',
    icon: <BookOpen className="text-primary" size={26} />,
  },
  {
    id: 3,
    title: 'Prove what you can do',
    href: '/portfolio-tasks',
    actionLabel: 'View Portfolio Tasks',
    description: 'Real-world task briefs with rubric evaluations to earn your verified Badge of Competence.',
    icon: <Award className="text-primary" size={26} />,
  },
  {
    id: 4,
    title: 'Build your CV',
    href: '/cv-builder',
    actionLabel: 'Build Free CV',
    description: 'Create a clean, ATS-friendly PDF resume designed specifically for graduate recruiters.',
    icon: <FileText className="text-primary" size={26} />,
  },
  {
    id: 5,
    title: 'Prepare for interviews',
    href: '/interview-prep',
    actionLabel: 'Practice Questions',
    description: 'Master role-specific technical and behavioral interview questions before your first interview.',
    icon: <MessageSquareQuote className="text-primary" size={26} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 overflow-hidden relative border-b border-[#D1C5B4]" style={{ background: 'linear-gradient(135deg, #FBF3EB 0%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#7A5900] uppercase tracking-wider bg-[#FFDF9C]/60 px-3 py-1 rounded-full border border-[#D1C5B4]">
            End-to-End Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1B13] tracking-tight mt-3">
            Your 5-Step Path to Getting Hired
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4F4639] font-medium">
            Everything you need to go from beginner to employed without paying thousands for a bootcamp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
          {steps.map((step) => (
            <Link
              key={step.id}
              href={step.href}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-[#D1C5B4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#FFDF9C]/50 rounded-xl flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                  <span className="w-7 h-7 rounded-full bg-primary text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                    0{step.id}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#1F1B13] mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#4F4639] leading-relaxed text-xs font-medium mb-6">
                  {step.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                <span>{step.actionLabel}</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
