// components/BaseImage.tsx
import Image from "next/image";

interface BaseImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  extraClassImage?: string;
  extraClassWrapper?: string;
}

export default function BaseImage({
  src,
  alt,
  priority = false,
  quality = 80,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 420px",
  extraClassImage,
  extraClassWrapper,
}: BaseImageProps) {
  const blurDataURL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWUxYjRiO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGYxNzJhO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+";

  return (
    <div className={extraClassWrapper}>
      <Image
        src={src}
        alt={alt}
        quality={quality}
        fill
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL}
        className={extraClassImage}
      />
    </div>
  );
}
