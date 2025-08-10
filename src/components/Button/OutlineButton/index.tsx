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
  const className = `border-purple-black-hole ${extraClass} h-full w-full cursor-pointer rounded-[3px] border text-white flex`;

  if (ButtonType === "link") {
    return (
      <Link href={href || "#"} className={className}>
        {content}
      </Link>
    );
  }

  return <button className={className}>{content}</button>;
}
