import { platformsIconList } from "@/utils/PlatformsIcon";

interface PlatformType {
  id: number;
  name: string;
  slug: string;
}

interface PlatformCardProps {
  TailwindHeight: string;
  TailwindWidth: string;
  colorIconTailwind?: string;
  platform: PlatformType;
  hasBackground?: boolean;
}

export default function PlatformCard({
  TailwindHeight,
  TailwindWidth,
  colorIconTailwind,
  platform,
  hasBackground = true,
}: PlatformCardProps) {
  const findPlatformIcon = platformsIconList.find(
    (p) => p.id === platform.id,
  )?.reactIcon;

  if (!findPlatformIcon) return null;

  const PlatformIcon = findPlatformIcon;
  return (
    <div
      className={`${TailwindHeight} ${TailwindWidth} ${hasBackground ? "bg-white/8 p-1.5 backdrop-blur-xl" : ""} flex items-center justify-center rounded-lg`}
      role="img"
      aria-label={`Available on ${platform.name}`}
    >
      <PlatformIcon
        className={`${colorIconTailwind ? colorIconTailwind : "text-white"} h-full w-full`}
        aria-hidden="true"
      />
    </div>
  );
}
