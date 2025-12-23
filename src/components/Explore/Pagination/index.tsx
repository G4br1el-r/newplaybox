"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  totalCount: number;
}

export default function Pagination({
  currentPage,
  hasNext,
  hasPrevious,
  totalCount,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalCount / 20);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(newPage));
    }

    router.push(`/explore?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    const maxVisible = 7;
    const maxVisibleMobile = 3;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const currentMaxVisible = isMobile ? maxVisibleMobile : maxVisible;

    if (totalPages <= currentMaxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > (isMobile ? 2 : 3)) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - (isMobile ? 0 : 1));
      const end = Math.min(totalPages - 1, currentPage + (isMobile ? 0 : 1));

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - (isMobile ? 1 : 2)) {
        pages.push("...");
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <nav
      className="flex w-full flex-col items-center gap-3 py-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2"
      aria-label="Pagination navigation"
      role="navigation"
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrevious}
        className="h-full w-full cursor-pointer rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/10 sm:w-auto"
        aria-label={`Go to previous page${hasPrevious ? ` (page ${currentPage - 1})` : ""}`}
        type="button"
      >
        Previous
      </button>

      <div
        className="flex flex-wrap items-center justify-center gap-1 sm:gap-2"
        role="list"
        aria-label="Page numbers"
      >
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-sm text-white/50 sm:h-10 sm:w-10"
              aria-hidden="true"
              role="listitem"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`flex h-8 min-w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg px-2 text-xs font-medium transition-all sm:h-10 sm:min-w-10 sm:text-sm ${
                currentPage === page
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label={`${currentPage === page ? "Current page, " : ""}Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              type="button"
              role="listitem"
            >
              {page}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNext}
        className="h-full w-full cursor-pointer rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/10 sm:w-auto"
        aria-label={`Go to next page${hasNext ? ` (page ${currentPage + 1})` : ""}`}
        type="button"
      >
        Next
      </button>
    </nav>
  );
}
