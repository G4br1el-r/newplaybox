import { Store } from "@/@types/SingleGameTypes";
import { JSX } from "react";
import {
  FaApple,
  FaGooglePlay,
  FaPlaystation,
  FaSteam,
  FaStore,
  FaXbox,
} from "react-icons/fa";
import { SiEpicgames, SiGogdotcom, SiNintendoswitch } from "react-icons/si";

interface AvailableAtProps {
  singleGameStores: Store[];
}

export const getStoreIcon = (storeName: string) => {
  const name = storeName.toLowerCase();
  const className = "text-blue-neon-bright h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6";

  const storeIcons: Record<string, JSX.Element> = {
    steam: <FaSteam className={className} />,
    playstation: <FaPlaystation className={className} />,
    xbox: <FaXbox className={className} />,
    epic: <SiEpicgames className={className} />,
    nintendo: <SiNintendoswitch className={className} />,
    gog: <SiGogdotcom className={className} />,
    google: <FaGooglePlay className={className} />,
    play: <FaGooglePlay className={className} />,
    apple: <FaApple className={className} />,
    "app store": <FaApple className={className} />,
  };

  const matchedKey = Object.keys(storeIcons).find((key) => name.includes(key));
  return matchedKey ? (
    storeIcons[matchedKey]
  ) : (
    <FaStore className={className} />
  );
};

export default function AvailableAt({ singleGameStores }: AvailableAtProps) {
  return (
    <nav
      className="flex w-full flex-col gap-2 md:grid md:grid-cols-2 md:gap-3 lg:gap-4 xl:grid-cols-3"
      aria-label="Available stores"
    >
      {singleGameStores.map((store) => (
        <a
          key={store.id}
          href={store.url || `https://${store.store.domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:border-blue-neon/30 flex items-center gap-4 rounded-xl border border-transparent bg-white/8 p-3 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:shadow-blue-500/20 md:h-16 md:gap-5 md:rounded-2xl md:p-4 lg:h-20 lg:p-5 xl:p-6"
          aria-label={`Buy on ${store.store.name} (opens in new tab)`}
        >
          <div
            className="transition-all duration-300 group-hover:rotate-12"
            aria-hidden="true"
          >
            {getStoreIcon(store.store.name)}
          </div>
          <span className="group-hover:text-blue-neon-bright flex-1 text-xs text-white transition-colors duration-300 md:text-sm lg:text-base xl:text-lg">
            {store.store.name}
          </span>
          <span
            className="group-hover:text-blue-neon-bright text-xs text-white/50 transition-all duration-300 group-hover:translate-x-2 md:text-sm lg:text-base"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      ))}
    </nav>
  );
}
