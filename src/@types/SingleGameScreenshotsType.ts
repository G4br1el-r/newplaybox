export interface SingleGameScreenshotsType {
  results: Screenshot[];
}
interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}
