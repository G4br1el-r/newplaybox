import { Tag } from "@/@types/SingleGameTypes";
import { InfiniteScroll } from "@/components/AnimationMotion/InfitiniScroll";

interface TagsGameProps {
  singleGameTags: Tag[];
}

export default function TagsGame({ singleGameTags }: TagsGameProps) {
  const duplicatedTags = [
    ...singleGameTags,
    ...singleGameTags,
    ...singleGameTags,
  ];

  const firstRow = duplicatedTags.slice(
    0,
    Math.ceil(duplicatedTags.length / 2),
  );
  const secondRow = duplicatedTags.slice(Math.ceil(duplicatedTags.length / 2));

  return (
    <div className="flex w-full flex-col gap-3">
      <InfiniteScroll direction="left" duration={20}>
        {firstRow.map((tag, index) => (
          <div
            key={`row1-${tag.id}-${index}`}
            className="group border-blue-neon/20 bg-blue-neon/10 text-blue-neon-bright hover:bg-blue-neon/25 hover:border-blue-neon/40 cursor-pointer rounded-full border px-2 py-0.5 text-xs whitespace-nowrap backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-1.5 lg:text-base"
          >
            {tag.name}
          </div>
        ))}
      </InfiniteScroll>

      <InfiniteScroll direction="right" duration={20}>
        {secondRow.map((tag, index) => (
          <div
            key={`row2-${tag.id}-${index}`}
            className="group border-blue-neon/20 bg-blue-neon/10 text-blue-neon-bright hover:bg-blue-neon/25 hover:border-blue-neon/40 cursor-pointer rounded-full border px-2 py-0.5 text-xs whitespace-nowrap backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-1.5 lg:text-base"
          >
            {tag.name}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
