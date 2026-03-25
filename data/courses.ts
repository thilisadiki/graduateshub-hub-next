import { Course } from '../types';
import { accountingCourses } from './categories/accountingCourses.js';
import { businessCourses } from './categories/businessCourses.js';
import { healthCourses } from './categories/healthCourses.js';
import { itCourses } from './categories/itCourses.js';
import { languageCourses } from './categories/languageCourses.js';
import { marketingCourses } from './categories/marketingCourses.js';
import { personalDevelopmentCourses } from './categories/personalDevelopmentCourses.js';

// Combine all category arrays into a single raw array
const allCoursesRaw: Course[] = [
    ...accountingCourses,
    ...businessCourses,
    ...healthCourses,
    ...itCourses,
    ...languageCourses,
    ...marketingCourses,
    ...personalDevelopmentCourses
];

// Remove any duplicates by ID (in case a course belongs to multiple category files)
const uniqueCoursesMap = new Map<string, Course>();
allCoursesRaw.forEach(course => {
    uniqueCoursesMap.set(course.id, course);
});

// Export the aggregated unique courses list
export const courses: Course[] = Array.from(uniqueCoursesMap.values());
