// components/BaseImage.tsx - MANTÉM IGUAL, só remove unoptimized
import Image from "next/image";

interface BaseImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  extraClassImage?: string;
  extraClassWrapper?: string;
}

export default function BaseImage({
  src,
  alt,
  priority = false,
  extraClassImage,
  extraClassWrapper,
}: BaseImageProps) {
  return (
    <div className={`${extraClassWrapper}`}>
      <Image
        src={src}
        alt={alt}
        quality={75}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 800px"
        className={`${extraClassImage}`}
      />
    </div>
  );
}
