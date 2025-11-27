import Link from "next/link";

interface OutlineButtonProps {
  content: string;
  ButtonType: "link" | "button";
  extraClass?: string;
  href?: string;
  onClick?: () => void;
}

export default function OutlineButton({
  content,
  ButtonType,
  extraClass = "",
  href,
  onClick,
}: OutlineButtonProps) {
  const className = `border-purple-500/50 ${extraClass} h-full w-full cursor-pointer rounded-lg border-2 text-white flex backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300`;

  if (ButtonType === "link") {
    return (
      <Link href={href || "#"} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
