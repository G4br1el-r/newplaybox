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
    <div className="relative mb-13 w-full">
      <div
        className="absolute -left-3 flex w-screen flex-col gap-3 lg:-left-8"
        role="region"
        aria-label="Game tags"
      >
        <div role="list" aria-label="Game tags row 1">
          <InfiniteScroll direction="left" duration={20}>
            {firstRow.map((tag, index) => (
              <div
                key={`row1-${tag.id}-${index}`}
                className="group border-blue-neon/20 bg-blue-neon/10 text-blue-neon-bright hover:bg-blue-neon/25 hover:border-blue-neon/40 cursor-pointer rounded-full border px-2 py-0.5 text-xs whitespace-nowrap backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-1.5 lg:text-base"
                role="listitem"
              >
                {tag.name}
              </div>
            ))}
          </InfiniteScroll>
        </div>

        <div role="list" aria-label="Game tags row 2">
          <InfiniteScroll direction="right" duration={20}>
            {secondRow.map((tag, index) => (
              <div
                key={`row2-${tag.id}-${index}`}
                className="group border-blue-neon/20 bg-blue-neon/10 text-blue-neon-bright hover:bg-blue-neon/25 hover:border-blue-neon/40 cursor-pointer rounded-full border px-2 py-0.5 text-xs whitespace-nowrap backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-1.5 lg:text-base"
                role="listitem"
              >
                {tag.name}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
