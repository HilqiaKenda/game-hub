import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import apiClient, { FetchResponse } from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
