import Link from "next/link";

interface FilledButtonProps {
  content: string;
  ButtonType: "link" | "button";
  extraClass?: string;
  href: string;
  onClick?: () => void;
}

export default function FilledButton({
  content,
  ButtonType,
  extraClass = "",
  href,
  onClick,
}: FilledButtonProps) {
  const className = `from-purple-dark ${extraClass} to-purple-black-hole h-full w-full cursor-pointer rounded-[3px] bg-gradient-to-br flex`;

  if (ButtonType === "link") {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}
