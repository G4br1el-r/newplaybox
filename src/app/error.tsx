"use client";

import { useEffect } from "react";
import FilledButton from "@/components/Button/FilledButton";
import OutlineButton from "@/components/Button/OutlineButton";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const handleReload = () => window.location.reload();
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-between px-3 pt-25 pb-5">
      <div className="relative mb-8 md:mb-12">
        <div className="bg-gradient-radial absolute inset-0 from-red-600/30 via-purple-600/20 to-transparent blur-3xl" />
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-red-500/30 bg-gradient-to-br from-red-900/40 to-purple-900/40 shadow-[0_0_50px_rgba(239,68,68,0.3)] backdrop-blur-xl md:h-40 md:w-40 lg:h-48 lg:w-48">
          <svg
            className="h-16 w-16 text-red-400 md:h-20 md:w-20 lg:h-24 lg:w-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      </div>

      <div className="flex max-w-2xl flex-col items-center gap-4 text-center md:gap-6">
        <h1 className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-[2rem] leading-tight font-extrabold text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.4)] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem]">
          Oops! Something Went Wrong
        </h1>

        <p className="max-w-[600px] text-[0.95rem] leading-relaxed text-white/70 md:text-[1.1rem] lg:text-[1.25rem]">
          We encountered an unexpected error while loading this page. Don't
          worry, our team has been notified and we're working on it!
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="w-full max-w-2xl rounded-xl border-2 border-red-500/20 bg-black/50 p-4 backdrop-blur-sm md:p-6">
            <p className="text-left font-mono text-[0.75rem] break-words text-red-300/80 md:text-[0.85rem]">
              {error.message}
            </p>
          </div>
        )}
      </div>

      <div className="flex w-full max-w-md flex-col items-center gap-3 md:flex-row">
        <div className="h-12 w-full md:h-14">
          <FilledButton
            content="Try Again"
            extraClass="text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] items-center justify-center font-bold shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)] transition-all duration-300"
            ButtonType="button"
            onClick={handleReload}
          />
        </div>
        <div className="h-12 w-full md:h-14">
          <OutlineButton
            content="Go Home"
            ButtonType="link"
            href="/"
            extraClass="text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] items-center justify-center font-bold hover:bg-white/5 hover:border-purple-400 transition-all duration-300"
          />
        </div>
      </div>

      <p className="mt-8 max-w-md text-center text-[0.8rem] text-white/50 md:mt-12 md:text-[0.9rem]">
        If this problem persists, please contact our support team or try
        refreshing the page
      </p>

      <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-red-500/5 blur-2xl" />
      <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-purple-500/5 blur-3xl" />
    </div>
  );
}
