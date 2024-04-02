import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data);
    },
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
