interface CardSkeletonProps {
  fullWidth?: boolean;
}

export default function CardFeaturedGamesSkeleton({
  fullWidth = false,
}: CardSkeletonProps) {
  return (
    <div
      className={`border-purple-black-hole ${fullWidth && "md:col-span-2"} relative h-[400px] w-full animate-pulse rounded-[10px] border-2`}
    >
      <div className="from-blue-darkest absolute left-1/2 z-10 h-full w-full -translate-x-1/2 rounded-[10px] bg-gradient-to-b via-transparent md:px-2">
        <div className="bg-blue-dark z-10 mx-auto mt-4 h-6 w-3/4 animate-pulse rounded"></div>
      </div>

      <div className="bg-purple-dark h-full w-full animate-pulse rounded-[8px]"></div>

      <div className="absolute bottom-4 left-1/2 z-31 h-7 w-[150px] -translate-x-1/2">
        <div className="bg-blue-dark h-7 w-full animate-pulse rounded"></div>
      </div>
    </div>
  );
}
