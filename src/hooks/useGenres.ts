import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genre from "../data/genre";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  image_background: string;
  name: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genre,
  });

export default useGenres;
