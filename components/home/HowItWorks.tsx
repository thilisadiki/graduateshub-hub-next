import Link from 'next/link';
import { Map, BookOpen, BriefcaseBusiness } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Start with a roadmap',
    description: 'Use role-based career roadmaps to understand the skills, tools, and learning order behind a target career path.',
    icon: <Map className="text-primary scale-150 rotate-3" size={40} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: 'Read the supporting guides',
    description: 'Use our study guides and career articles to compare options, avoid dead ends, and make better learning decisions.',
    icon: <BookOpen className="text-primary scale-150 -rotate-3" size={40} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: 'Build proof of work',
    description: 'Turn learning into portfolio evidence with practical tasks, rubrics, and examples that show what you can do.',
    icon: <BriefcaseBusiness className="text-primary scale-150 rotate-3" size={40} strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #FBF3EB 0%, #FFFFFF 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1B13] tracking-tight">How to use Graduates Hub</h2>
          <p className="mt-4 text-lg text-[#4F4639]">A simple editorial path for choosing a direction, learning with context, and building evidence of your skills.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#D1C5B4] via-primary to-[#D1C5B4] -translate-y-1/2 opacity-30 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map(step => (
              <div key={step.id} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300 border border-[#D1C5B4] flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-[#FFDF9C]/50 rounded-full flex items-center justify-center mb-6 shadow-inner relative z-10">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-white">{step.id}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1B13] mb-3">{step.title}</h3>
                  <p className="text-[#4F4639] leading-relaxed text-sm">{step.description}</p>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#FFDF9C] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/career-roadmaps"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-[#5a4000] hover:shadow-lg hover:shadow-[#7A5900]/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Career Roadmaps
          </Link>
        </div>
      </div>

      {/* Atmospheric blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#FFDF9C] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#CCECC8] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
}
