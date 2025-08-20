import { platformsIconList } from "@/utils/PlatformsIcon";

interface PlatformType {
  id: number;
  name: string;
  slug: string;
}

interface PlatformCardProps {
  TailwindHeight: string;
  TailwindWidth: string;
  platform: PlatformType;
}

export default function PlatformCard({
  TailwindHeight,
  TailwindWidth,
  platform,
}: PlatformCardProps) {
  //prettier-ignore
  const findPlatformIcon = platformsIconList.find((p) => p.id === platform.id)?.reactIcon;

  if (!findPlatformIcon) return null;

  const PlatformIcon = findPlatformIcon;

  return (
    <div
      className={`${TailwindHeight} ${TailwindWidth} flex w-full items-center justify-center rounded-[3px]`}
    >
      <PlatformIcon className="h-full w-full p-1" />
    </div>
  );
}
