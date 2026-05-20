import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Excel Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Free Excel Courses', ['VLOOKUP & Formulas', 'Pivot Tables & Charts', 'Macros & Automation']);
}
