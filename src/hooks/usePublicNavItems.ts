import { useQuery } from "@tanstack/react-query";
import { publicNavApi } from "../api/publicNav.api";

export function usePublicNavItems() {
  return useQuery({
    queryKey: ["public-nav-items"],
    queryFn: async () => await publicNavApi.tree(),
    staleTime: 5 * 60 * 1000, // menu jarang berubah
  });
}
