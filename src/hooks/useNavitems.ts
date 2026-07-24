import { useQuery } from "@tanstack/react-query"
import { navitemApi } from "../api/navitem.api"

export function useNavItems(){
  return useQuery({
    queryKey: ["navitems"],
    queryFn: async () => await navitemApi.list(),
    staleTime: 5 * 60 * 1000,
  })
}