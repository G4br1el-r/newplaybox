import BaseImage from "@/components/BaseImage";
import { handleViewsCommentsLikes } from "@/utils/HandleViewsCommentsLikes";
import Image from "next/image";

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
      className="from-purple-dark to-blue-darkest relative h-55 w-full rounded-r-[3px] bg-gradient-to-l p-3"
    >
      <div className="bg-purple-dark absolute top-0 left-0 h-full w-0.5 rounded-l-[3px]" />
      <div className="bg-purple-neon absolute top-2 right-2 h-2 w-2 animate-pulse rounded-full" />
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center justify-between gap-2">
            <p className="text-purple-neon line-clamp-1 w-full text-[0.8rem] md:text-[1rem]">
              {title}
            </p>
            <div className="flex w-full items-center justify-between gap-1 text-gray-500">
              <div className="flex items-center gap-1.5">
                <BaseImage
                  src={photo}
                  alt={username}
                  extraClassImage="w-full h-full rounded-full"
                  extraClassWrapper="h-4 relative w-4  md:h-5 md:w-5"
                />
                <p className="text-[0.6rem] md:text-[0.8rem]">
                  {formattedUsername}
                </p>
              </div>
              <p className="text-[0.6rem] md:text-[0.8rem]">
                📅 {formattedDate}
              </p>
            </div>
          </div>
          <p className="line-clamp-4 w-full text-[0.6rem] text-white md:text-[0.8rem]">
            {text}
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-3 text-[0.6rem] text-gray-500 md:text-[0.8rem]">
          <p>👁️ {formattedViews} Views</p>
          <p>💬 {formattedComments} Comments</p>
          <p>❤️ {formattedLikes} Likes</p>
        </div>
      </div>
    </a>
  );
}
