import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  queryParam?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  queryParam = 'page',
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    // If the base URL already has query parameters (e.g. ?search=abc), append correctly
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${queryParam}=${page}`;
  };

  // Generate page numbers to display with smart ellipsis (...) if there are many pages
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show page 1
      pages.push(1);

      // Calculate start and end indices around the current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust range to show at least 3 numbers in the middle if near the edges
      if (currentPage <= 2) {
        end = 3;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 2;
      }

      // Add ellipsis before middle range if needed
      if (start > 2) {
        pages.push('...');
      }

      // Add middle range
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis after middle range if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav 
      className="flex justify-center items-center gap-1.5 mt-10" 
      aria-label="Pagination Navigation"
    >
      {/* Previous Page Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="p-2.5 rounded-xl border border-[#D1C5B4] text-[#4F4639] bg-white hover:bg-[#FFDF9C]/15 hover:border-primary hover:text-primary transition-all flex items-center justify-center shrink-0 shadow-sm"
          aria-label="Go to previous page"
        >
          <ChevronLeft size={16} />
        </Link>
      ) : (
        <span
          className="p-2.5 rounded-xl border border-gray-200 text-gray-300 bg-gray-50 flex items-center justify-center shrink-0 cursor-not-allowed select-none"
          aria-hidden="true"
        >
          <ChevronLeft size={16} />
        </span>
      )}

      {/* Page Numbers & Ellipses */}
      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center text-gray-400 select-none font-medium"
              aria-hidden="true"
            >
              &hellip;
            </span>
          );
        }

        const pageNum = page as number;
        const isCurrent = pageNum === currentPage;

        return isCurrent ? (
          <span
            key={pageNum}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-extrabold text-sm select-none shadow-md shadow-primary/10"
            aria-current="page"
          >
            {pageNum}
          </span>
        ) : (
          <Link
            key={pageNum}
            href={getPageUrl(pageNum)}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#D1C5B4] text-[#4F4639] bg-white hover:bg-[#FFDF9C]/15 hover:border-primary hover:text-primary font-bold text-sm transition-all shadow-sm"
            aria-label={`Go to page ${pageNum}`}
          >
            {pageNum}
          </Link>
        );
      })}

      {/* Next Page Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="p-2.5 rounded-xl border border-[#D1C5B4] text-[#4F4639] bg-white hover:bg-[#FFDF9C]/15 hover:border-primary hover:text-primary transition-all flex items-center justify-center shrink-0 shadow-sm"
          aria-label="Go to next page"
        >
          <ChevronRight size={16} />
        </Link>
      ) : (
        <span
          className="p-2.5 rounded-xl border border-gray-200 text-gray-300 bg-gray-50 flex items-center justify-center shrink-0 cursor-not-allowed select-none"
          aria-hidden="true"
        >
          <ChevronRight size={16} />
        </span>
      )}
    </nav>
  );
}
