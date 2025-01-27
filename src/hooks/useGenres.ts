import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import genre from "../data/genre";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
