import Link from 'next/link';
import { ArrowRight, Sparkles, Award, Code, BarChart, Megaphone, Calculator, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-24 overflow-hidden border-b border-[#D1C5B4]"
      style={{
        background: [
          'radial-gradient(820px 520px at 85% -10%, color-mix(in oklab, #7A5900 14%, transparent) 0%, transparent 60%)',
          'radial-gradient(600px 420px at -8% 100%, color-mix(in oklab, #4B6649 10%, transparent) 0%, transparent 60%)',
          '#FFF8F1',
        ].join(', '),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-[500px] mb-16 lg:mb-24">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFDF9C] border border-[#D1C5B4] text-[#261A00] font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={13} className="text-[#7A5900]" />
              <span>Career Roadmaps, Guides &amp; Interview Prep</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F1B13] leading-[1.15] tracking-tight mb-6">
              Your free career<br className="hidden sm:block" />
              <span className="text-primary">resource hub.</span>
            </h1>

            <p className="text-lg text-[#4F4639] mb-8 max-w-xl font-medium leading-relaxed">
              Master your career journey. Explore step-by-step career roadmaps, in-depth guides, proof of work portfolios, and ace your next interview.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/career-roadmaps"
                className="inline-flex justify-center items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-[#5a4000] hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_0_rgba(122,89,0,0.35)] hover:shadow-[0_6px_20px_rgba(122,89,0,0.25)]"
              >
                Explore Roadmaps <ArrowRight size={18} />
              </Link>
              <Link
                href="/guides"
                className="inline-flex justify-center items-center gap-2 bg-[#FFFFFF] text-[#1F1B13] font-bold px-8 py-4 rounded-xl border border-[#D1C5B4] hover:bg-[#FBF3EB] hover:border-[#7C7061] transition-colors shadow-sm"
              >
                Read Guides
              </Link>
            </div>

            <a
              href="https://facebook.com/Graduateshub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-6 text-sm text-[#4F4639] hover:text-primary transition-colors group"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </span>
              <span><strong className="text-[#1F1B13] group-hover:text-primary transition-colors">189K+ followers</strong> on Facebook</span>
            </a>
          </div>

          {/* Right: Career Roadmap Card */}
          <div className="w-full lg:w-1/2 relative lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow halo */}
              <div className="absolute inset-0 bg-primary rounded-3xl blur-2xl opacity-20 transform translate-y-4 max-md:hidden pointer-events-none"></div>

              <div className="relative bg-white border border-[#D1C5B4] shadow-xl rounded-3xl p-8 overflow-hidden transform transition-all hover:scale-[1.01] duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFDF9C] rounded-bl-full -z-10"></div>

                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md">
                    <Briefcase size={22} />
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-[#FFDF9C] border border-[#D1C5B4] text-[#261A00] px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Stand Out
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#1F1B13] tracking-tight leading-tight mb-3">Proof of Work Portfolio</h2>
                <p className="text-[#4F4639] text-sm font-medium leading-relaxed mb-6">
                  Don&apos;t just list your skills — show them. Learn how to build projects that grab recruiters&apos; attention.
                </p>

                <div className="space-y-4 mb-8 relative">
                  <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-[#D1C5B4]"></div>
                  {[
                    { n: '1', t: 'Pick a Project' },
                    { n: '2', t: 'Build & Document' },
                    { n: '3', t: 'Showcase to Employers' },
                  ].map(s => (
                    <div key={s.n} className="flex items-center gap-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#FFDF9C] text-primary flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white">
                        {s.n}
                      </div>
                      <span className="text-sm font-bold text-[#1F1B13]">{s.t}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/portfolio"
                  className="group flex items-center justify-center w-full gap-2 bg-[#1F1B13] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#2a2520] transition-colors shadow-lg"
                >
                  View Portfolios <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="absolute -bottom-6 -right-6 text-[#D1C5B4]/50 pointer-events-none transform rotate-12">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m10 13-2 2 2 2" /><path d="m14 17 2-2-2-2" /></svg>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-6 top-12 bg-white p-3 rounded-2xl shadow-xl border border-[#D1C5B4] hidden md:flex items-center gap-3 pr-5 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-[#CCECC8] text-[#4B6649] p-2 rounded-xl"><Award size={20} /></div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1F1B13]">Get Hired</span>
                  <span className="text-[10px] text-[#4F4639] font-medium">Proof beats CV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 subject cards — unified Citrus primary treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-20 xl:-mt-10">
          {[
            { label: 'Software Engineering', Icon: Code, href: '/career-roadmaps/software-engineering' },
            { label: 'Data & Analytics',     Icon: BarChart, href: '/career-roadmaps/data-analytics' },
            { label: 'Digital Marketing',    Icon: Megaphone, href: '/career-roadmaps/marketing' },
            { label: 'Accounting & Finance', Icon: Calculator, href: '/career-roadmaps/accounting' },
          ].map(({ label, Icon, href }) => (
            <Link
              key={label}
              href={href}
              className="group relative bg-white border border-[#D1C5B4] p-6 lg:p-7 rounded-2xl shadow-sm hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:scale-150 transition-transform duration-700">
                <Icon size={100} />
              </div>
              <div className="relative flex items-center justify-between z-10">
                <h3 className="text-lg font-bold text-[#1F1B13] group-hover:text-primary transition-colors">{label}</h3>
                <div className="bg-[#FFDF9C] p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-[#D1C5B4] group-hover:border-primary">
                  <Icon size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
