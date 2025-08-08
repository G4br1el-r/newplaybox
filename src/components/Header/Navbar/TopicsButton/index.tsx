import Link from "next/link";

interface TopicsButtonProps {
  content: string;
  href: string;
  icon: string;
  disabled?: boolean;
}
export default function TopicsButton({
  content,
  href,
  icon,
  disabled,
}: TopicsButtonProps) {
  return (
    <Link
      href={href}
      className={`${disabled ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`}
    >
      <div className="group relative flex h-10 w-full items-center pl-6 text-[0.8rem]">
        <div className="bg-blue-neon absolute top-0 left-0 h-full w-0.5 origin-left scale-x-0 transform transition-transform duration-600 ease-in-out group-hover:scale-x-100" />
        <div className="from-blue-neon/10 to-blue-neon/20 absolute top-0 left-0 h-full w-full origin-left scale-x-0 transform bg-gradient-to-l blur-[1px] transition-transform duration-150 ease-in-out group-hover:scale-x-100" />
        <div className="flex">
          <span className="mr-2">{icon}</span>
          <span>{content}</span>
        </div>
      </div>
    </Link>
  );
}
