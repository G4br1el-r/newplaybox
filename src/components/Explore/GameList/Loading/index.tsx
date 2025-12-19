"use client";

export default function LoadingState() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/30" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
        </div>
        <p className="text-xl font-semibold text-white">Loading games...</p>
        <p className="text-sm text-slate-400">Searching for the best results</p>
      </div>
    </div>
  );
}
