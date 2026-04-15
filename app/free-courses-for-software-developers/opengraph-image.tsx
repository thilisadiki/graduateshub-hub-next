import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Courses for Software Developers (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Best Free Courses for Software Developers', ['Web Dev & Databases', 'Coding Skills', 'Free Certificate']);
}
