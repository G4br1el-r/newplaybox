import { FeaturedGamesType } from "@/@types/FeaturedGamesType";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
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
