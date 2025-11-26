import type { Metadata } from "next";
import { getSingleGame } from "@/services/api";

export async function buildGameMetadata(slug: string): Promise<Metadata> {
  try {
    const singleGameData = await getSingleGame(slug);

    return {
      title: `${singleGameData.name} | Playbox`,
      description:
        singleGameData.description_raw?.slice(0, 160) ||
        `Discover everything about ${singleGameData.name}`,

      keywords: [
        singleGameData.name,
        ...(singleGameData.tags?.map((tag) => tag.name) || []),
        ...(singleGameData.genres?.map((genre) => genre.name) || []),
      ],

      openGraph: {
        title: singleGameData.name,
        description: singleGameData.description_raw?.slice(0, 160),
        images: [
          {
            url: singleGameData.background_image,
            width: 1920,
            height: 1080,
            alt: singleGameData.name,
          },
        ],
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: singleGameData.name,
        description: singleGameData.description_raw?.slice(0, 160),
        images: [singleGameData.background_image],
      },
    };
  } catch (error) {
    return {
      title: "Game not found | Playbox",
      description: "This game is currently unavailable.",
    };
  }
}
