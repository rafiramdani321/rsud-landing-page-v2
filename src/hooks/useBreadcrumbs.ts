// hooks/useBreadcrumbs.ts
import { useLocation } from "react-router-dom";

const nonClickable = new Set(["pelayanan", "tentang-kami"]);

const formatLabel = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  return [
    { label: "Beranda", href: "/", clickable: true },
    ...segments.map((segment, i) => ({
      label: formatLabel(segment),
      href: "/" + segments.slice(0, i + 1).join("/"),
      clickable: !nonClickable.has(segment),
    })),
  ];
};