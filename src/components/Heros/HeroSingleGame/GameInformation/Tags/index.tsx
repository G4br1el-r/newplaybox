import { Tag } from "@/@types/SingleGameTypes";

interface TagsGameProps {
  singleGameTags: Tag[];
}
export default function TagsGame({ singleGameTags }: TagsGameProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4">
      {singleGameTags.map((tag) => (
        <div
          key={tag.id}
          className="group border-blue-neon/20 bg-blue-neon/10 text-blue-neon-bright hover:bg-blue-neon/25 hover:border-blue-neon/40 cursor-pointer rounded-full border px-2 py-0.5 text-xs backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 md:px-3 md:py-1 md:text-sm lg:px-4 lg:py-1.5 lg:text-base"
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
}
