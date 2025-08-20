import { GenresType, ParentPlatformsType } from "@/@types/SingleGameTypes";
import PlatformCard from "@/components/PlatformCard";

interface ShortGameCardProps {
  metacritic: number;
  metacritic_url: string;
  genres: GenresType[];
  parent_platforms: ParentPlatformsType[];
}
export default function ShortGameCard({
  genres,
  metacritic,
  metacritic_url,
  parent_platforms,
}: ShortGameCardProps) {
  return (
    <div className="flex w-full justify-between p-2 text-[0.8rem]">
      <div className="flex w-full items-center justify-between">
        <p className="">Platforms:</p>
        <div className="flex w-1/2 items-center justify-between">
          {parent_platforms.map((platform) => (
            <PlatformCard
              key={platform.platform.id}
              TailwindHeight="h-6"
              TailwindWidth="w-6"
              platform={platform.platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
