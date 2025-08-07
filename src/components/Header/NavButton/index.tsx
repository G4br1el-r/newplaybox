import Link from "next/link";

export default function ButtonNav({
  contentText,
  href = "",
}: {
  contentText: string;
  href?: string;
}) {
  return (
    <Link href={`/${href}`} className="group relative inline-block text-white">
      {contentText}
      <span className="bg-blue-neon-light absolute bottom-0 left-0 h-px w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
    </Link>
  );
}
