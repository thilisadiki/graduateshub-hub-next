import { guideOgImage, ogSize, ogContentType } from '@/utils/og-guide-image';

export const alt = 'Best Free Cybersecurity Courses with Certificates (2026) | Graduates Hub';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return guideOgImage('Free Cybersecurity Courses', ['Security Governance', 'Secure Coding', 'Network Security']);
}
