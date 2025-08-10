interface TagsProps {
  content: string;
}
export default function TagsContent({ content }: TagsProps) {
  return (
    <div className="bg-purple-dark rounded-[3px] px-2 text-[0.8rem]">
      <span>{content}</span>
    </div>
  );
}
