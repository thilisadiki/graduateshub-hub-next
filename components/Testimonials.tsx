import { Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Sarah Jenkins', role: 'Marketing Manager', image: 'SJ', quote: 'The digital marketing diploma I completed on Graduates Hub completely transformed my career trajectory. I went from a junior role to leading a team within six months of getting my certificate.', rating: 5, color: 'bg-blue-100 text-blue-700' },
  { id: 2, name: 'David Chen', role: 'Software Developer', image: 'DC', quote: 'I had no coding experience before finding this platform. The Python and JavaScript courses were structured perfectly for a beginner, and now I\'m working full-time in tech!', rating: 5, color: 'bg-green-100 text-green-700' },
  { id: 3, name: 'Elena Rodriguez', role: 'Small Business Owner', image: 'ER', quote: 'Running a business is hard, but the accounting and business management courses gave me the foundational knowledge I desperately needed to balance my books and grow.', rating: 5, color: 'bg-purple-100 text-purple-700' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Success Stories</h2>
          <p className="text-lg text-gray-500">Join thousands of learners who have transformed their careers, businesses, and lives through completely free education.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-8 relative hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
              <div className="absolute top-6 right-6 text-gray-200/50"><Quote size={60} className="rotate-3" /></div>
              <div className="flex gap-1 mb-6 text-yellow-400">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}>{t.image}</div>
                <div><h3 className="font-bold text-gray-900">{t.name}</h3><p className="text-sm text-gray-500">{t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
