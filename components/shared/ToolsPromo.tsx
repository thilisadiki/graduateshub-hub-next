import Link from 'next/link';
import { Sparkles, FileText, MessageSquare, TrendingUp, Brain, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: FileText,     label: 'CV Reviewer',      color: 'bg-violet-100 text-violet-700' },
  { icon: MessageSquare,label: 'Interview Prep',    color: 'bg-orange-100 text-orange-700' },
  { icon: TrendingUp,   label: 'Skills Gap',        color: 'bg-emerald-100 text-emerald-700' },
  { icon: Brain,        label: 'Career Quiz',       color: 'bg-rose-100 text-rose-700' },
];

export default function ToolsPromo() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 60%, #6366f1 0%, transparent 50%), radial-gradient(circle at 85% 20%, #3b82f6 0%, transparent 40%)' }} />

      <div className="relative z-10 flex-1 min-w-0">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-3">
          <Sparkles size={11} className="text-yellow-400" />
          Free AI Tools
        </div>
        <h3 className="text-white font-extrabold text-lg md:text-xl mb-2 leading-snug">
          Not sure what to do with these courses?
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          Use our free AI career tools to review your CV, prep for interviews, identify skill gaps, and build a personalised learning roadmap.
        </p>
        <div className="flex flex-wrap gap-2">
          {highlights.map(({ icon: Icon, label, color }) => (
            <span key={label} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>
              <Icon size={12} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="/tools"
        className="relative z-10 shrink-0 bg-white text-indigo-700 hover:bg-indigo-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
      >
        View All 7 Free Tools <ArrowRight size={14} />
      </Link>
    </div>
  );
}
