import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import genre from "../data/genre";

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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genre,
  });

export default useGenres;
