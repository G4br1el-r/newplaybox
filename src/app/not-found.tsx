import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4 py-8 sm:px-6 sm:pt-12 sm:pb-0 lg:px-8">
      <div className="w-full max-w-4xl text-center">
        <div className="relative mb-6 sm:mb-8 md:mb-12">
          <div className="absolute inset-0 opacity-20 blur-3xl sm:opacity-30">
            <div className="h-full w-full bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600"></div>
          </div>

          <h1 className="relative animate-pulse bg-gradient-to-r from-purple-400 via-violet-500 to-purple-500 bg-clip-text text-[8rem] leading-none font-black text-transparent sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
            404
          </h1>
        </div>

        <div className="mb-8 space-y-3 px-4 sm:mb-10 sm:space-y-4 md:mb-12 lg:mb-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Game Not Found
          </h2>
          <p className="mx-auto max-w-xs px-2 text-sm leading-relaxed text-gray-400 sm:max-w-md sm:text-base md:max-w-lg md:text-lg lg:text-xl">
            Looks like this level doesn't exist. The page you're looking for has
            been moved or deleted.
          </p>
        </div>

        <div className="mb-10 flex justify-center gap-4 text-4xl sm:mb-12 sm:gap-5 sm:text-5xl md:mb-14 md:gap-6 md:text-6xl lg:mb-16 lg:text-7xl">
          <span
            className="animate-bounce cursor-default opacity-40 transition-opacity hover:opacity-100"
            style={{ animationDelay: "0s", animationDuration: "1.5s" }}
          >
            🎮
          </span>
          <span
            className="animate-bounce cursor-default opacity-40 transition-opacity hover:opacity-100"
            style={{ animationDelay: "0.2s", animationDuration: "1.5s" }}
          >
            🕹️
          </span>
          <span
            className="animate-bounce cursor-default opacity-40 transition-opacity hover:opacity-100"
            style={{ animationDelay: "0.4s", animationDuration: "1.5s" }}
          >
            👾
          </span>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-3 px-4 sm:flex-row sm:items-center sm:gap-4 sm:px-0">
          <Link
            href="/"
            className="group flex w-full transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:via-violet-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-purple-500/50 sm:w-auto sm:gap-2.5 sm:rounded-xl sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg lg:px-10"
          >
            <Home className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/explore"
            className="group flex w-full transform items-center justify-center gap-2 rounded-lg border border-gray-800 bg-gray-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:border-purple-600/50 hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-700/50 sm:w-auto sm:gap-2.5 sm:rounded-xl sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg lg:px-10"
          >
            <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span>Explore Games</span>
          </Link>
        </div>

        <div className="mt-12 border-t border-gray-900 pt-6 sm:mt-14 sm:pt-8 md:mt-16 lg:mt-20">
          <p className="font-mono text-xs text-gray-600 sm:text-sm md:text-base">
            Error Code: 404 • Page Not Found
          </p>
        </div>
      </div>
    </main>
  );
}
