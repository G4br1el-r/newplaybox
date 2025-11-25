import { getSingleGameScreenshots } from "@/services/api";
import Screenshots from "../Screenshots";

interface WrapperScreenshotsAsyncProps {
  slug: string;
}
export default async function WrapperScreenshotsAsync({
  slug,
}: WrapperScreenshotsAsyncProps) {
  const singleGameScreenshotsData = await getSingleGameScreenshots(slug);
  return <Screenshots singleGameScreenshotsData={singleGameScreenshotsData} />;
}
