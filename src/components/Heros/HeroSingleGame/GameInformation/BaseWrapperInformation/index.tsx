interface BaseWrapperInformationProps {
  children: React.ReactNode;
  informationTitle: string;
  informationTag: string;
  informationSubTitle?: string;
}

export default function BaseWrapperInformation({
  children,
  informationTitle,
  informationTag,
  informationSubTitle,
}: BaseWrapperInformationProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="group flex h-8 w-fit cursor-pointer items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl transition-all duration-300 hover:bg-white/12 hover:shadow-md md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
        <div className="bg-blue-neon-bright h-1 w-1 rounded-full transition-all duration-300 group-hover:animate-pulse md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
        <span className="text-xs text-white/70 transition-colors duration-300 group-hover:text-white/90 md:text-sm lg:text-base">
          {informationTag}
        </span>
      </div>
      <p className="hover:text-blue-neon-bright cursor-default text-xl font-bold text-white transition-colors duration-300 md:text-2xl lg:text-3xl xl:text-4xl">
        {informationTitle}
      </p>
      {informationSubTitle && (
        <p className="text-sm text-white/70 transition-colors duration-300 hover:text-white/90 md:text-base lg:text-lg">
          {informationSubTitle}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4">
        {children}
      </div>
    </div>
  );
}
