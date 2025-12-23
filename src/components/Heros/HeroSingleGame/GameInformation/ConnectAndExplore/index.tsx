import { Globe, MessageCircle } from "lucide-react";

interface ConnectAndExploreProps {
  singleGameWebsite: string;
  singleGameRedditUrl: string;
  singleGameRedditCount: number;
}

export default function ConnectAndExplore({
  singleGameWebsite,
  singleGameRedditUrl,
  singleGameRedditCount,
}: ConnectAndExploreProps) {
  return (
    <nav
      className="flex w-full flex-wrap items-center gap-2 md:flex-nowrap md:gap-3 lg:gap-4"
      aria-label="External game links"
    >
      <a
        href={singleGameWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:h-16 md:rounded-2xl md:p-5 lg:h-20 lg:p-6"
        aria-label="Visit official website (opens in new tab)"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <Globe
            className="text-blue-neon-bright h-5 w-5 transition-all duration-300 group-hover:rotate-180 md:h-6 md:w-6 lg:h-7 lg:w-7"
            aria-hidden="true"
          />
          <span className="group-hover:text-blue-neon-bright text-sm transition-colors duration-300 md:text-base lg:text-lg xl:text-xl">
            Official Website
          </span>
        </div>
        <span
          className="text-xs text-white/50 md:text-sm lg:text-base"
          aria-hidden="true"
        >
          →
        </span>
      </a>

      <a
        href={singleGameRedditUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:h-16 md:rounded-2xl md:p-5 lg:h-20 lg:p-6"
        aria-label={`Visit Reddit community with ${singleGameRedditCount.toLocaleString()} members (opens in new tab)`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <MessageCircle
            className="text-blue-neon-bright h-5 w-5 transition-all duration-300 group-hover:rotate-180 md:h-6 md:w-6 lg:h-7 lg:w-7"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <span className="group-hover:text-blue-neon-bright text-sm transition-colors duration-300 md:text-base lg:text-lg xl:text-xl">
              Reddit Community
            </span>
            <span className="text-xs text-white/20 md:text-sm lg:text-base">
              {singleGameRedditCount.toLocaleString()} members
            </span>
          </div>
        </div>
        <span
          className="text-xs text-white/50 md:text-sm lg:text-base"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </nav>
  );
}
