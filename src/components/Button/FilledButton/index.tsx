import Link from "next/link";

interface FilledButtonProps {
  content: string;
  ButtonType: "link" | "button";
  extraClass?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export default function FilledButton({
  content,
  ButtonType,
  extraClass = "",
  href,
  onClick,
  ariaLabel,
  ariaExpanded,
  ariaControls,
}: FilledButtonProps) {
  const className = `from-purple-600 via-purple-700 to-purple-900 ${extraClass} h-full w-full cursor-pointer rounded-lg bg-gradient-to-br flex hover:from-purple-500 hover:via-purple-600 hover:to-purple-800 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50`;

  if (ButtonType === "link") {
    return (
      <Link href={href || "#"} className={className} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      type="button"
    >
      {content}
    </button>
  );
}
