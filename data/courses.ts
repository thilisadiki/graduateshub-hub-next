import { Course } from '../types';
import { accountingCourses } from './categories/accountingCourses.js';
import { businessCourses } from './categories/businessCourses.js';
import { dataAnalyticsCourses } from './categories/dataAnalyticsCourses.js';
import { itCourses } from './categories/itCourses.js';
import { marketingCourses } from './categories/marketingCourses.js';

// Combine all category arrays into a single raw array
const allCoursesRaw: Course[] = [
    ...accountingCourses,
    ...businessCourses,
    ...dataAnalyticsCourses,
    ...itCourses,
    ...marketingCourses,
];

// Remove any duplicates by ID (in case a course belongs to multiple category files)
const uniqueCoursesMap = new Map<string, Course>();
allCoursesRaw.forEach(course => {
    uniqueCoursesMap.set(course.id, course);
});

// Export the aggregated unique courses list
export const courses: Course[] = Array.from(uniqueCoursesMap.values());
