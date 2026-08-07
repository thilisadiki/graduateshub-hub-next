'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import CourseCard from './CourseCard';
import type { Course } from '@/types';

export default function CourseCarousel({
  courses,
  title,
  subtitle,
}: {
  courses?: Course[];
  title?: string;
  subtitle?: string;
}) {
  return null;
}
