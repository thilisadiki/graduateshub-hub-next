import type { AuthorKey } from '@/types';

export interface AuthorCredential {
  label: string;
  issuer: string;
  url?: string;
}

export interface AuthorOrganization {
  name: string;
  url?: string;
}

export interface Author {
  slug: string;
  key: AuthorKey;
  name: string;
  role: string;
  photo: string;
  bio: string[];
  expertise: string[];
  credentials: AuthorCredential[];
  worksFor: AuthorOrganization[];
  linkedinUrl: string;
  websiteUrl?: string;
  metaTitle: string;
  metaDescription: string;
}

export const authors: Author[] = [
  {
    slug: 'jason-sadiki',
    key: 'jason',
    name: 'Jason Sadiki',
    role: 'Founder & Technical SEO Specialist (Betway Africa)',
    photo: '/jason-sadiki.jpg',
    bio: [
      'Jason Sadiki is the founder of Graduates Hub and a Technical SEO Specialist at Betway Africa with over 7 years of hands-on industry experience in web architecture, search performance, and digital marketing.',
      'He created Graduates Hub to eliminate financial barriers for students and job seekers by surfacing high-quality, internationally accredited free courses and career roadmaps based on real industry experience.',
      'Every course and roadmap curated by Jason is evaluated for practical relevance, accreditation value, and real-world career application - ensuring candidates learn skills that employers actually test for.',
    ],
    expertise: [
      'Technical SEO',
      'Web Development',
      'Software Engineering',
      'Digital Marketing',
      'Career Roadmaps',
    ],
    credentials: [
      {
        label: 'Technical SEO Specialist',
        issuer: 'Betway Africa',
      },
      {
        label: 'SEO Certified',
        issuer: 'HubSpot Academy',
        url: 'https://app-eu1.hubspot.com/academy/achievements/6z3p70zn/en/1/jason-sadiki/seo',
      },
      {
        label: 'Google Analytics 4',
        issuer: 'Google Skillshop',
        url: 'https://skillshop.credential.net/c8c90dfb-fba6-4296-8e42-e451b00c2660#acc.tNqRO1Ex',
      },
      {
        label: 'Digital Marketing',
        issuer: 'Google',
        url: 'https://skillshop.exceedlms.com/student/award/rHfzphDrFqaZ7PNRdvdUnBMZ',
      },
      {
        label: 'Full Stack Engineer',
        issuer: 'Codecademy',
        url: 'https://www.codecademy.com/profiles/jasonsadiki/certificates/ffd0f42cce1a44e9a0108b365047a0a6',
      },
    ],
    worksFor: [
      { name: 'Betway Africa', url: 'https://www.betway.co.za' },
      { name: 'Graduates Hub', url: 'https://www.graduateshub.org' },
    ],
    linkedinUrl: 'https://www.linkedin.com/in/jasonsadiki/',
    websiteUrl: 'https://thilisadiki.com',
    metaTitle: 'Jason Sadiki - Founder & Technical SEO Specialist (Betway Africa)',
    metaDescription:
      'Jason Sadiki is the Founder of Graduates Hub and a Technical SEO Specialist at Betway Africa with 7+ years of experience. Explore career roadmaps and guides curated by Jason.',
  },
  {
    slug: 'ndulamiso-mamburu',
    key: 'ndulamiso',
    name: 'Ndulamiso Mamburu',
    role: 'Co-Founder & Tax Professional (SARS)',
    photo: '/ndulamiso-mamburu.jpg',
    bio: [
      'Ndulamiso Mamburu is a co-founder of Graduates Hub, holding a degree in Accounting Science and currently pursuing advanced studies in Taxation. She works at the South African Revenue Service (SARS), bringing direct practitioner insight into accounting and financial compliance.',
      'At Graduates Hub, Ndulamiso leads the accounting, finance, and business content verticals, ensuring every guide and course recommendation reflects real-world workplace requirements rather than theoretical concepts.',
    ],
    expertise: [
      'Accounting & Finance',
      'Taxation & Compliance',
      'Business Administration',
      'Financial Analysis',
    ],
    credentials: [
      {
        label: 'Accounting Science Graduate',
        issuer: 'University Degree',
      },
      {
        label: 'Tax Professional',
        issuer: 'South African Revenue Service (SARS)',
      },
    ],
    worksFor: [
      { name: 'South African Revenue Service (SARS)', url: 'https://www.sars.gov.za' },
      { name: 'Graduates Hub', url: 'https://www.graduateshub.org' },
    ],
    linkedinUrl: 'https://www.linkedin.com/in/ndulamiso-mamburu/',
    metaTitle: 'Ndulamiso Mamburu - Tax Professional & Co-Founder',
    metaDescription:
      'Ndulamiso Mamburu is an Accounting Science Graduate and SARS Tax Professional. Explore accounting and business career guides curated by Ndulamiso.',
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

