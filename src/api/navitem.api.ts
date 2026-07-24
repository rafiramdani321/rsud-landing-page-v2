import { http } from "../libs/http"
import type { ApiEnvelope } from "../types"
import type { NavList } from "../types/navitem.types"

export const navitemApi = {
  async list(){
    const res = await http.get<ApiEnvelope<NavList[]>>("/public/nav-items")
    return res.data.data
  },
}