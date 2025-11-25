import { getlistGameForSameSeries } from "@/services/api";
import CarrouselSameSeriesGame from "../CarrouselSameSeriesGame";

interface WrapperGameSeriesAsyncProps {
  slug: string;
}
export default async function WrapperGameSeriesAsync({
  slug,
}: WrapperGameSeriesAsyncProps) {
  const listGameForSameSeries = await getlistGameForSameSeries(slug);
  return (
    <CarrouselSameSeriesGame listGameForSameSeries={listGameForSameSeries} />
  );
}
