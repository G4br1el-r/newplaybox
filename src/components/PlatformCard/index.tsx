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
  const findPlatformIcon = platformsIconList.find(
    (p) => p.id === platform.id,
  )?.reactIcon;

  if (!findPlatformIcon) return null;

  const PlatformIcon = findPlatformIcon;

  return (
    <div
      className={`${TailwindHeight} ${TailwindWidth} flex items-center justify-center rounded-lg bg-white/8 p-2.5 backdrop-blur-xl`}
    >
      <PlatformIcon className="h-full w-full text-white" />
    </div>
  );
}
