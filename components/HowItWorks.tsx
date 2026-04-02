import Link from 'next/link';
import { UserPlus, BookOpen, Award } from 'lucide-react';

const steps = [
  { id: 1, title: 'Sign Up for Free', description: 'Create your free account in seconds and unlock access to thousands of courses.', icon: <UserPlus className="text-primary scale-150 rotate-3" size={40} strokeWidth={1.5} /> },
  { id: 2, title: 'Choose & Learn', description: 'Browse categories, select a course, and start learning at your own pace.', icon: <BookOpen className="text-primary scale-150 -rotate-3" size={40} strokeWidth={1.5} /> },
  { id: 3, title: 'Earn Your Certificate', description: 'Complete the assessments and instantly download your globally recognized certificate.', icon: <Award className="text-primary scale-150 rotate-3" size={40} strokeWidth={1.5} /> },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Your Journey to Success</h2>
          <p className="mt-4 text-lg text-gray-500">Achieving your goals has never been simpler. Follow these three steps to upgrade your skills.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-primary to-blue-100 -translate-y-1/2 opacity-30 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map(step => (
              <div key={step.id} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-300 border border-blue-100 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-inner relative z-10">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-white">{step.id}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-300 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/search"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1">
            Start Your First Step Now
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </section>
  );
}
