import { CommumitySayingType } from "@/@types/CommunitySayingType";
import { FeaturedGamesType } from "@/@types/FeaturedGamesType";
import { ListNameForSameSeries } from "@/@types/ListNameForSameSeries";
import { SingleGameScreenshotsType } from "@/@types/SingleGameScreenshotsType";
import { SingleGameType } from "@/@types/SingleGameTypes";
import axios, { AxiosError, AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEFAULT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  params: {
    key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function handleApiError(error: unknown, endpoint: string): never {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const status = axiosError.response.status;

      switch (status) {
        case 404:
          throw new ApiError(
            `Recurso não encontrado: ${endpoint}`,
            404,
            endpoint,
          );
        case 429:
          throw new ApiError(
            "Muitas requisições. Aguarde alguns instantes e tente novamente.",
            429,
            endpoint,
          );
        case 500:
        case 502:
        case 503:
          throw new ApiError(
            "Erro no servidor da API. Tente novamente mais tarde.",
            status,
            endpoint,
          );
        default:
          throw new ApiError(
            `Erro na requisição: ${axiosError.message}`,
            status,
            endpoint,
          );
      }
    } else if (axiosError.request) {
      throw new ApiError(
        "Sem resposta do servidor. Verifique sua conexão com a internet.",
        undefined,
        endpoint,
      );
    }
  }

  throw new ApiError(
    `Erro inesperado ao buscar dados de ${endpoint}`,
    undefined,
    endpoint,
  );
}

export async function getDataForFeaturedGames(): Promise<FeaturedGamesType[]> {
  const randomNumberForPage = Math.floor(Math.random() * 20) + 1;

  try {
    const response = await api.get<{ results: FeaturedGamesType[] }>("/games", {
      params: {
        page: randomNumberForPage,
        page_size: 5,
      },
    });

    return response.data.results;
  } catch (error) {
    handleApiError(error, "/games");
  }
}

export async function getCommunitySaying(
  idsFeaturedGame: number[],
): Promise<CommumitySayingType[]> {
  try {
    const allPromisesFeaturedGames = idsFeaturedGame.map((idGame) =>
      api.get<{ results: CommumitySayingType[] }>(`/games/${idGame}/reddit`),
    );

    const allResponse = await Promise.all(allPromisesFeaturedGames);

    const allData = allResponse
      .map((response) => response.data.results[0])
      .filter(
        (comment): comment is CommumitySayingType => comment !== undefined,
      );

    return allData;
  } catch (error) {
    handleApiError(error, "/games/*/reddit");
  }
}

export async function getSingleGame(slug: string): Promise<SingleGameType> {
  try {
    const response = await api.get<SingleGameType>(`/games/${slug}`);
    return response.data;
  } catch (error) {
    handleApiError(error, `/games/${slug}`);
  }
}

export async function getSingleGameScreenshots(
  slug: string,
): Promise<SingleGameScreenshotsType> {
  try {
    const response = await api.get<SingleGameScreenshotsType>(
      `/games/${slug}/screenshots`,
    );
    return response.data;
  } catch (error) {
    handleApiError(error, `/games/${slug}/screenshots`);
  }
}

export async function getlistGameForSameSeries(
  slug: string,
): Promise<ListNameForSameSeries> {
  // 🔥 TESTE: Delay de 10 segundos
  await new Promise((resolve) => setTimeout(resolve, 10000));

  try {
    const response = await api.get<ListNameForSameSeries>(
      `/games/${slug}/game-series`,
    );

    return response.data;
  } catch (error) {
    handleApiError(error, `/games/${slug}/game-series`);
  }
}
