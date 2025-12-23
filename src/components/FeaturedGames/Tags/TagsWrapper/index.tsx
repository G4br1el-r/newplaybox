import { Tag } from "@/@types/SingleGameTypes";
import TagsContent from "../TagsContent";

interface TagsWrapperProps {
  isOpen: boolean;
  tags: Tag[];
  gameTitle: string;
}

export default function TagsWrapper({
  isOpen,
  tags,
  gameTitle,
}: TagsWrapperProps) {
  return (
    <div
      id={`tags-${gameTitle.toLowerCase().replace(/\s+/g, "-")}`}
      className={`absolute bottom-0 z-30 flex w-full justify-center overflow-hidden rounded-b-[8px] transition-all duration-500 ${
        isOpen ? "h-[125px]" : "h-0"
      }`}
      role="region"
      aria-label={`Tags for ${gameTitle}`}
      aria-hidden={!isOpen}
    >
      <ul
        className="custom-scrollbar from-blue-darkest via-blue-darkest/70 to-blue-darkest/5 flex h-[125px] w-full flex-wrap items-center justify-center gap-2 overflow-y-auto bg-gradient-to-t px-3 py-5"
        role="list"
      >
        {tags.map((tag) => (
          <li key={tag.id} role="listitem">
            <TagsContent content={tag.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
