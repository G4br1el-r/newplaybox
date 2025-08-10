import TagsContent from "../TagsContent";

interface TagsWrapperProps {
  isOpen: boolean;
}

export default function TagsWrapper({ isOpen }: TagsWrapperProps) {
  return (
    <div
      className={`absolute bottom-0 z-30 flex w-full justify-center overflow-hidden rounded-b-[8px] transition-all duration-500 ${
        isOpen ? "h-[125px]" : "h-0"
      }`}
    >
      <div className="custom-scrollbar from-blue-darkest via-blue-darkest/70 to-blue-darkest/5 flex h-[125px] w-full flex-wrap items-center justify-center gap-2 overflow-y-auto bg-gradient-to-t px-3 py-5">
        <TagsContent content="adventure" />
        <TagsContent content="puzzle" />
        <TagsContent content="action" />
        <TagsContent content="multiplayer" />
        <TagsContent content="racing" />
        <TagsContent content="strategy" />
        <TagsContent content="simulation" />
        <TagsContent content="platform" />
        <TagsContent content="sports" />
        <TagsContent content="horror" />
        <TagsContent content="shooter" />
        <TagsContent content="open world" />
        <TagsContent content="rpg" />
        <TagsContent content="sandbox" />
        <TagsContent content="stealth" />
        <TagsContent content="survival" />
        <TagsContent content="fighting" />
      </div>
    </div>
  );
}
