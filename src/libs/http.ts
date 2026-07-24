import axios from "axios";
import { API_URL } from "../config/env";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 10_000,
})

export function getApiErrorMessage(error: unknown): string {
  if(axios.isAxiosError(error)) {
    return (
      (error.response?.data as { message?: string })?.message ?? "Terjadi kesalahan"
    )
  }

  return "Terjadi kesalahan"
}