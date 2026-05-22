import Link from 'next/link';
import { Award, Briefcase, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Briefcase,
    title: 'Pick a real task',
    body: 'Short, practical briefs in Marketing, Tech, Data, Finance, and Design. 1 to 3 hours each.',
  },
  {
    icon: FileText,
    title: 'Submit your work',
    body: 'Every task has a public rubric. No account required. Get graded in under a minute.',
  },
  {
    icon: ShieldCheck,
    title: 'Earn a public Badge',
    body: 'Share a verifiable Badge of Competence straight from your LinkedIn profile.',
  },
];

export default function PortfolioBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl p-8 md:p-12" style={{ background: '#1F1B13' }}>
      {/* Citrus atmospheric glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 30%, #4B6649 0%, transparent 45%), radial-gradient(circle at 15% 80%, #7A5900 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4B6649]/20 border border-[#CCECC8]/30 text-[#CCECC8] font-bold text-xs uppercase tracking-wider mb-4">
            <Award size={13} className="text-[#CCECC8]" />
            Proof of Work Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Most graduates have a CV. Very few have a portfolio.
          </h2>
          <p className="text-[#D1C5B4] mt-3 max-w-2xl mx-auto text-lg">
            Complete a practical, graded task and earn a shareable Badge of Competence. Prove your skills, not just your certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="bg-[#4B6649]/30 p-2.5 rounded-xl inline-flex mb-4">
                <Icon size={22} className="text-[#CCECC8]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-[#D1C5B4] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/portfolio"
            className="bg-primary hover:bg-[#5a4000] text-white px-6 py-3 rounded-xl font-bold transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#7A5900]/30"
          >
            Browse Categories <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio#how-it-works"
            className="text-[#D1C5B4] hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm font-medium px-4 py-3"
          >
            How it works <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
