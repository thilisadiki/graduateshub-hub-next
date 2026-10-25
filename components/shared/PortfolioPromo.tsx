import Link from 'next/link';

export default function PortfolioPromo() {
  return (
    <section className="bg-gradient-to-br from-[#1F1B13] to-[#2E281F] text-white p-7 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md border border-[#D1C5B4]">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#FFDF9C] mb-2 block">
          Interactive Career Accelerators
        </span>
        <h3 className="text-2xl font-black mb-2 text-white">
          Build Your Proof of Work Portfolio
        </h3>
        <p className="text-sm text-[#D1C5B4] max-w-xl leading-relaxed">
          Put reading into practice: complete graded portfolio tasks across IT, Web Dev, Data Analysis, Marketing, and Finance.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <Link
          href="/portfolio-tasks"
          className="bg-primary hover:bg-[#5a4000] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap shadow-sm border border-primary text-center flex-1 md:flex-initial"
        >
          Explore Portfolio Briefs →
        </Link>
        <Link
          href="/cv-builder"
          className="bg-[#3D3325] hover:bg-[#4E4231] text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap border border-[#5E503C] text-center flex-1 md:flex-initial"
        >
          Free AI CV Reviewer →
        </Link>
      </div>
    </section>
  );
}
