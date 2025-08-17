import { CommumitySayingType } from "@/@types/CommunitySayingType";
import { FeaturedGamesType } from "@/@types/FeaturedGamesType";
import { SingleGameType } from "@/@types/SingleGameTypes";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEFAULT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getDataForFeaturedGames(): Promise<FeaturedGamesType[]> {
  const randomNumberForPage = Math.floor(Math.random() * 10) + 1;

  try {
    const response = await api.get<{ results: FeaturedGamesType[] }>("/games", {
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
        page: randomNumberForPage,
        page_size: 5,
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return response.data.results;
  } catch (err: any) {
    throw new Error(`Failed to fetch games from API: ${err.message}`);
  }
}

//prettier-ignore
export async function getCommunitySaying(idsFeaturedGame: number[]): Promise<CommumitySayingType[]> {
  try {
    const allPromisesFeaturedGames = idsFeaturedGame.map((idGame) =>
      api.get<{ results: CommumitySayingType[] }>(`/games/${idGame}/reddit`, {
        params: {
          key: process.env.NEXT_PUBLIC_API_KEY,
        },
      }),
    );

    const allResponse = await Promise.all(allPromisesFeaturedGames);
    const allData = allResponse
      .map((response) => response.data.results[0])
      .filter((comment): comment is CommumitySayingType => comment !== undefined);
    const results = allData.flat();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return results;
  } catch (err: any) {
    throw new Error(
      `Failed to fetch community saying from API: ${err.message}`,
    );
  }
}

export async function getSingleGame(id: string) {
  try {
    const response = await api.get<SingleGameType>(`/games/${id}`, {
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
      },
    });

    return response.data;
  } catch (err: any) {
    throw new Error(`Failed to fetch single game from API: ${err.message}`);
  }
}
