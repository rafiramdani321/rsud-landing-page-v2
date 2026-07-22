import { useQuery } from "@tanstack/react-query";
import { publicPageApi } from "../api/publicPage.api";

export function usePublicPage(slug?: string) {
  return useQuery({
    queryKey: ["public-page", slug],
    queryFn: () => publicPageApi.getBySlug(slug!),
    enabled: Boolean(slug),
    retry: false,
  });
}