import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Screenshot } from "../entities/Screenshot";

const useScreenshot = (gamePk: string) => {
  const apiClient = new APIClient<Screenshot>(`games/${gamePk}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gamePk],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
