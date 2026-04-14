import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type Author = {
  name: string;
  title: string;
  photo: string;
  linkedin: string;
};

const AUTHORS = {
  jason: {
    name: 'Jason Sadiki',
    title: 'Technical SEO Specialist & Web Developer · 7+ yrs',
    photo: '/jason-sadiki.jpg',
    linkedin: 'https://www.linkedin.com/in/jasonsadiki/',
  },
  ndulamiso: {
    name: 'Ndulamiso Mamburu',
    title: 'Co-Founder · Accounting Science Graduate · SARS',
    photo: '/ndulamiso-mamburu.jpg',
    linkedin: 'https://www.linkedin.com/in/ndulamiso-mamburu/',
  },
} satisfies Record<string, Author>;

export type AuthorKey = keyof typeof AUTHORS;

function AuthorChip({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={author.photo}
        alt={author.name}
        className="w-8 h-8 rounded-full object-cover ring-2 ring-white shrink-0"
      />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-gray-800 text-sm">{author.name}</span>
        <span className="text-gray-500 text-xs">{author.title}</span>
      </div>
      <a
        href={author.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${author.name} on LinkedIn`}
        className="ml-1 text-gray-400 hover:text-blue-600 transition-colors shrink-0"
      >
        <ExternalLink size={13} />
      </a>
    </div>
  );
}

export default function AuthorByline({
  authors,
  lastUpdated,
}: {
  authors: AuthorKey[];
  lastUpdated: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-6 pt-5 border-t border-blue-100/60">
      <div className="flex flex-wrap gap-4">
        {authors.map((key) => (
          <AuthorChip key={key} author={AUTHORS[key]} />
        ))}
      </div>
      <div className="flex items-center gap-3 sm:ml-auto text-xs text-gray-400 shrink-0">
        <span>Last updated: <strong className="text-gray-500">{lastUpdated}</strong></span>
        <span className="text-gray-200">·</span>
        <Link href="/curation-policy" className="hover:text-primary transition-colors font-medium">
          How we curate
        </Link>
      </div>
    </div>
  );
}
