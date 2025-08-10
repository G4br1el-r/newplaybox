import Image from "next/image";

interface BaseImageProps {
  src: string;
  alt: string;
  extraClassImage?: string;
  extraClassWrapper?: string;
}

export default function BaseImage({
  src,
  alt,
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
        unoptimized
        sizes="(max-width: 768px) 100vw, 800px"
        className={` ${extraClassImage}`}
      />
    </div>
  );
}
