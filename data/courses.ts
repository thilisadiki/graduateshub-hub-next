import { Course } from '../types';
import { accountingCourses } from './categories/accountingCourses';
import { businessCourses } from './categories/businessCourses';
import { dataAnalyticsCourses } from './categories/dataAnalyticsCourses';
import { itCourses } from './categories/itCourses';
import { marketingCourses } from './categories/marketingCourses';

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
