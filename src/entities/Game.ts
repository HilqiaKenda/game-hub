import Genre from "./Genre";
import Publisher from "./Publishers";
import Platform from "./Platform";

export default interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
}
