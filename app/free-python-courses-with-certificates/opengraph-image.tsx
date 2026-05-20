import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Python Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Free Python Courses', ['Python Programming Syntax', 'Flask Backend Web Development', 'Docker Containerization']);
}
