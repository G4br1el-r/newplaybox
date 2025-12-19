"use client";

export default function EmptyState() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <span className="text-6xl">🎮</span>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">No games found</h3>
        <p className="mb-6 text-lg text-slate-400">
          Try adjusting your search filters to see more results
        </p>
        <div className="flex flex-col gap-2 text-sm text-slate-500">
          <p>💡 Tip: Remove some filters</p>
          <p>💡 Tip: Try different search terms</p>
        </div>
      </div>
    </div>
  );
}
