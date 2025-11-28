import BaseImage from "@/components/BaseImage";
import { handleViewsCommentsLikes } from "@/utils/HandleViewsCommentsLikes";

interface CommentsProps {
  name: string;
  text: string;
  url: string;
  username: string;
  created: string;
  photo: string;
}

export default function Comments({
  name,
  text,
  url,
  username,
  created,
  photo,
}: CommentsProps) {
  const formattedUsername = username.slice(3);
  const formattedText = text.replace("<p>", "").replace("</p>", "");
  const title = name;
  const isPostActive = text.length > 0;
  const formattedDate = new Date(created).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const { formattedViews, formattedComments, formattedLikes } =
    handleViewsCommentsLikes();

  if (!isPostActive) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-auto min-h-[240px] w-full rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-purple-900/40 p-4 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] md:min-h-[260px] md:p-5"
    >
      <div className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

      <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/20 px-2.5 py-1">
        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
        <span className="text-[0.65rem] font-semibold text-green-400 md:text-[0.7rem]">
          LIVE
        </span>
      </div>

      <div className="flex h-full w-full flex-col justify-between gap-4 md:gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3 pr-16">
            <h3 className="line-clamp-2 text-[0.95rem] leading-tight font-bold text-purple-300 transition-colors group-hover:text-purple-200 md:text-[1.05rem] lg:text-[1.15rem]">
              {title}
            </h3>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <BaseImage
                  src={photo}
                  alt={username}
                  extraClassImage="w-full h-full rounded-full object-cover"
                  extraClassWrapper="h-8 w-8 md:h-9 md:w-9 relative ring-2 ring-purple-500/50"
                />
                <div className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-blue-950 bg-green-500" />
              </div>
              <div className="flex flex-col">
                <p className="text-[0.75rem] font-semibold text-white/90 md:text-[0.8rem]">
                  {formattedUsername}
                </p>
                <p className="text-[0.65rem] text-white/50 md:text-[0.7rem]">
                  Active Player
                </p>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[0.7rem] text-white/50 md:text-[0.75rem]">
              <span>📅</span>
              {formattedDate}
            </p>
          </div>
        </div>

        <p className="line-clamp-3 text-[0.8rem] leading-relaxed text-white/80 transition-colors group-hover:text-white/90 md:line-clamp-4 md:text-[0.85rem] lg:text-[0.9rem]">
          {formattedText}
        </p>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1">
            <span className="text-[0.7rem] md:text-[0.75rem]">👁️</span>
            <span className="text-[0.7rem] font-semibold text-cyan-400 md:text-[0.75rem]">
              {formattedViews}
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1">
            <span className="text-[0.7rem] md:text-[0.75rem]">💬</span>
            <span className="text-[0.7rem] font-semibold text-purple-400 md:text-[0.75rem]">
              {formattedComments}
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1">
            <span className="text-[0.7rem] md:text-[0.75rem]">❤️</span>
            <span className="text-[0.7rem] font-semibold text-pink-400 md:text-[0.75rem]">
              {formattedLikes}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
