import { Star, Clock } from 'lucide-react';
import { formatCategoryName } from '@/utils/formatters';
import type { Course } from '@/types';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:border-primary/40 transition-all flex flex-col justify-between h-full">
      <div>
        <span className="text-[11px] font-bold tracking-wider text-primary uppercase">{formatCategoryName(course.category)}</span>
        <h3 className="text-base font-bold text-gray-900 mt-1 line-clamp-2">{course.title}</h3>
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
          <span className="flex items-center"><Clock size={14} className="mr-1 text-gray-400" /> {course.duration}</span>
          <span className="flex items-center font-medium text-gray-700"><Star size={14} className="mr-1 fill-current text-yellow-500" /> {course.rating}</span>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center justify-center gap-1.5 w-full bg-emerald-50 border border-emerald-100 text-emerald-800 py-2 px-4 rounded-lg text-xs font-bold">
        Free Curriculum
      </div>
    </div>
  );
}
