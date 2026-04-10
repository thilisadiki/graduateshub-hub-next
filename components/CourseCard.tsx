import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock } from 'lucide-react';
import { formatCategoryName } from '@/utils/formatters';
import type { Course } from '@/types';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
          {course.tag ? course.tag.toUpperCase() : 'CERTIFICATE'}
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-bold tracking-widest text-primary line-clamp-1">{formatCategoryName(course.category).toUpperCase()}</span>
        <h3 className="text-xl font-bold mt-2 text-gray-800 h-14 line-clamp-2">{course.title}</h3>
        <div className="flex items-center mt-4 text-sm space-x-4">
          <span className="flex items-center text-gray-700"><Clock size={16} className="mr-1 text-gray-500" /> {course.duration}</span>
          <span className="flex items-center text-gray-700 font-medium"><Star size={16} className="mr-1 fill-current text-yellow-500" /> {course.rating}</span>
        </div>
        {course.isExternal ? (
          <a
            href={course.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${course.title} on Alison`}
            className="mt-6 block w-full text-center border-2 border-primary text-primary py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            View on Alison →
          </a>
        ) : (
          <Link href={`/course/${course.id}`} aria-label={`View course details for ${course.title}`} className="mt-6 block w-full text-center border-2 border-primary text-primary py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            View Course Details →
          </Link>
        )}
      </div>
    </div>
  );
}
