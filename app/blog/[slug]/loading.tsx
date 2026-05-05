import Skeleton from '@/components/ui/Skeleton';

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero image */}
      <Skeleton className="w-full h-72 md:h-96 rounded-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Category tag */}
        <Skeleton className="h-5 w-24 mb-4" />

        {/* Title */}
        <Skeleton className="h-9 w-full mb-3" />
        <Skeleton className="h-9 w-4/5 mb-6" />

        {/* Meta row */}
        <div className="flex items-center gap-4 mb-10">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Body paragraphs */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="mb-6 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            {i % 2 === 0 && <Skeleton className="h-4 w-3/4" />}
          </div>
        ))}

        {/* Sub-heading */}
        <Skeleton className="h-7 w-2/3 mt-10 mb-4" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="mb-6 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
          </div>
        ))}
      </div>
    </div>
  );
}
