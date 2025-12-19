"use client";

interface ErrorStateProps {
  error: Error | unknown;
}

export default function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-md rounded-xl border-2 border-red-500/30 bg-red-500/10 p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-bold text-red-500">Loading Error</h3>
        </div>
        <p className="mb-4 text-red-400">
          {error instanceof Error
            ? error.message
            : "Unknown error while fetching games"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
