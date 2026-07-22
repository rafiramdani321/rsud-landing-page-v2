import { http } from "../libs/http";
import type { NavTreeNode } from "../types/publicNav.types";

interface ApiEnvelop<T> {
  success: boolean;
  message: string;
  data: T;
}

export const publicNavApi = {
  async tree() {
    const res = await http.get<ApiEnvelop<NavTreeNode[]>>("/public/nav-items");
    return res.data.data;
  },
};
