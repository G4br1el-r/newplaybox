export default function ScreenshotsGameSkeleton() {
  return (
    <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 2xl:grid-cols-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="h-[108px] w-full animate-pulse rounded-xl bg-gray-700/50 backdrop-blur-xl sm:h-[168px] md:h-[132px] lg:h-[180px] 2xl:h-[238px]"
        />
      ))}
    </div>
  );
}
