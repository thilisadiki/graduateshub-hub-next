import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Cloud Computing Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Free Cloud Computing Courses', ['Cloud Infrastructure', 'DevOps & CI/CD Pipelines', 'Serverless & Databases']);
}
