import Skeleton from '@/components/ui/Skeleton';

export default function ProofLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F1] via-white to-[#FBF3EB] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Badge card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
          {/* Award icon placeholder */}
          <div className="flex justify-center mb-6">
            <Skeleton className="w-20 h-20 rounded-full" />
          </div>

          {/* Verdict badge */}
          <div className="flex justify-center mb-4">
            <Skeleton className="h-7 w-32 rounded-full" />
          </div>

          {/* Name */}
          <Skeleton className="h-8 w-3/4 mx-auto mb-2" />

          {/* Task title */}
          <Skeleton className="h-5 w-2/3 mx-auto mb-6" />

          {/* Score bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-3 w-full rounded-full" />
          </div>

          {/* Category chips */}
          <div className="flex gap-3 justify-center flex-wrap mb-6">
            {[80, 64, 96].map((w) => (
              <Skeleton key={w} className={`h-8 w-${w === 80 ? '24' : w === 64 ? '20' : '28'} rounded-full`} />
            ))}
          </div>

          {/* CTA button */}
          <Skeleton className="h-12 w-full rounded-xl mt-4" />
        </div>

        {/* Share row */}
        <div className="flex justify-center gap-3">
          <Skeleton className="h-10 w-28 rounded-lg" />
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
