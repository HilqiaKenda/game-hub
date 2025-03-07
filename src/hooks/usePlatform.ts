import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platform from "../data/platform";
import APIClient from "../services/apiClient";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatforms;
