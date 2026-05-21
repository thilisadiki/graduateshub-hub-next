import Link from 'next/link';
import { ArrowRight, Sparkles, Award, Map, Code, BarChart, Megaphone, Calculator, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-10 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#F8FAFC] pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-indigo-500/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#0ea5e9]/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-[500px] mb-16 lg:mb-24">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={14} className="text-blue-500" />
              <span>Career Roadmaps, Guides & Interview Prep</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.15] tracking-tight mb-6">
              Your free career<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                resource hub.
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl font-medium leading-relaxed">
              Master your career journey. Explore step-by-step career roadmaps, in-depth guides, proof of work portfolios, and ace your next interview.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/career-roadmaps" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]">
                Explore Roadmaps <ArrowRight size={18} />
              </Link>
              <Link href="/guides" className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 font-bold px-8 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                Read Guides
              </Link>
            </div>

            <a
              href="https://facebook.com/Graduateshub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-6 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </span>
              <span><strong className="text-slate-700 group-hover:text-blue-600 transition-colors">189K+ followers</strong> on Facebook</span>
            </a>

          </div>

          {/* Right: Career Roadmap Card */}
          <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-3xl blur-2xl opacity-40 transform translate-y-4 max-md:hidden pointer-events-none"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 overflow-hidden transform transition-all hover:scale-[1.02] duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                    <Briefcase size={24} />
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
                    Stand Out
                  </div>
                </div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-tight mb-3">Proof of Work Portfolio</h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                  Don't just list your skills - show them. Learn how to build projects that grab recruiters' attention.
                </p>
                <div className="space-y-4 mb-8 relative">
                  <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-100"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white">1</div>
                    <span className="text-sm font-bold text-slate-700">Pick a Project</span>
                  </div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white">2</div>
                    <span className="text-sm font-bold text-slate-700">Build & Document</span>
                  </div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white">3</div>
                    <span className="text-sm font-bold text-slate-700">Showcase to Employers</span>
                  </div>
                </div>
                <Link href="/portfolio" className="group flex items-center justify-center w-full gap-2 bg-[#0f172a] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                  View Portfolios <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="absolute -bottom-6 -right-6 text-slate-200/50 pointer-events-none transform rotate-12">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m10 13-2 2 2 2" /><path d="m14 17 2-2-2-2" /></svg>
                </div>
              </div>

              <div className="absolute -left-6 top-12 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3 pr-5 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-pink-100 text-pink-600 p-2 rounded-xl"><Award size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800">Get Hired</span>
                  <span className="text-[10px] text-slate-500 font-medium">Proof beats CV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-20 xl:-mt-10">
          <Link href="/career-roadmaps/software-engineering" className="group relative bg-white border border-slate-200/60 p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-150 transition-transform duration-700"><Code size={100} /></div>
            <div className="relative flex items-center justify-between z-10">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Software Engineering</h3>
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-blue-100 group-hover:border-blue-600">
                <Code size={20} />
              </div>
            </div>
          </Link>

          <Link href="/career-roadmaps/data-analytics" className="group relative bg-white border border-slate-200/60 p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-150 transition-transform duration-700"><BarChart size={100} /></div>
            <div className="relative flex items-center justify-between z-10">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">Data & Analytics</h3>
              <div className="bg-purple-50 p-3 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-purple-100 group-hover:border-purple-600">
                <BarChart size={20} />
              </div>
            </div>
          </Link>

          <Link href="/career-roadmaps/marketing" className="group relative bg-white border border-slate-200/60 p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-150 transition-transform duration-700"><Megaphone size={100} /></div>
            <div className="relative flex items-center justify-between z-10">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">Digital Marketing</h3>
              <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-emerald-100 group-hover:border-emerald-600">
                <Megaphone size={20} />
              </div>
            </div>
          </Link>

          <Link href="/career-roadmaps/accounting" className="group relative bg-white border border-slate-200/60 p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-150 transition-transform duration-700"><Calculator size={100} /></div>
            <div className="relative flex items-center justify-between z-10">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors">Accounting & Finance</h3>
              <div className="bg-orange-50 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-orange-100 group-hover:border-orange-600">
                <Calculator size={20} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
