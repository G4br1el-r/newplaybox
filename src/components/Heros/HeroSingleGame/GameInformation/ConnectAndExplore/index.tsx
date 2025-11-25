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
    <div className="flex w-full flex-wrap items-center gap-2 md:flex-nowrap md:gap-3 lg:gap-4">
      <div className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:h-16 md:rounded-2xl md:p-5 lg:h-20 lg:p-6">
        <div className="flex items-center gap-3 md:gap-4">
          <Globe className="text-blue-neon-bright h-5 w-5 transition-all duration-300 group-hover:rotate-180 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          <span className="group-hover:text-blue-neon-bright text-[0.8rem] transition-colors duration-300 md:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem]">
            <a
              href={singleGameWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
            </a>
          </span>
        </div>
        <span className="text-[0.6rem] text-white/50 md:text-[0.7rem] lg:text-[0.8rem]">
          →
        </span>
      </div>
      <div className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-white/8 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-lg hover:shadow-blue-500/10 md:h-16 md:rounded-2xl md:p-5 lg:h-20 lg:p-6">
        <div className="flex items-center gap-3 md:gap-4">
          <MessageCircle className="text-blue-neon-bright h-5 w-5 transition-all duration-300 group-hover:rotate-180 md:h-6 md:w-6 lg:h-7 lg:w-7" />
          <div className="flex flex-col">
            <span className="group-hover:text-blue-neon-bright text-[0.8rem] transition-colors duration-300 md:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.2rem]">
              <a
                href={singleGameRedditUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit Community
              </a>
            </span>
            <span className="text-[0.6rem] text-white/20 md:text-[0.7rem] lg:text-[0.8rem]">
              {singleGameRedditCount.toLocaleString()} members
            </span>
          </div>
        </div>
        <span className="text-[0.6rem] text-white/50 md:text-[0.7rem] lg:text-[0.8rem]">
          →
        </span>
      </div>
    </div>
  );
}
