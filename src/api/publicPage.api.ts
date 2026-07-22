import { http } from "../libs/http";
import type { PublicPageDetail } from "../types/publicPage.types";

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

export const publicPageApi = {
  async getBySlug(slug: string) {
    const res = await http.get<ApiEnvelope<PublicPageDetail>>(`/public/pages/${slug}`);
    return res.data.data;
  },
};