import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependes?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    dependes ? [...dependes] : []
  );
  return { data, error, isLoading };
};

export default useData;
