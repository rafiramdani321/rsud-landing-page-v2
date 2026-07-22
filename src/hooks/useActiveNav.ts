import { useLocation } from "react-router-dom";

/**
 * True kalau `pathname` sama persis dengan `base`, ATAU sub-path dari `base`
 * (dipisah "/"). Mencegah false-positive seperti
 * "/informasi-terbaru".startsWith("/info").
 */
function matchesBase(pathname: string, base: string) {
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function useActiveNav() {
  const { pathname, search } = useLocation();

  function isLinkActive(href: string, exact = false) {
    const [hrefPath, hrefQuery] = href.split("?");
    if (!hrefPath) return false;

    if (hrefQuery) {
      return pathname === hrefPath && search === `?${hrefQuery}`;
    }

    return exact ? pathname === hrefPath : matchesBase(pathname, hrefPath);
  }

  return { pathname, search, isLinkActive };
}
