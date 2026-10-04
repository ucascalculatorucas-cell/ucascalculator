/** Production origin — no trailing slash */
export const SITE_ORIGIN = "https://ucascalculator.com";

/**
 * Build an absolute canonical URL that returns HTTP 200 on this site.
 * Next.js default is trailingSlash:false, so paths must NOT end with "/".
 * Homepage remains "https://ucascalculator.com/".
 */
export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const normalized = path.startsWith("http")
    ? path
    : `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
  // Strip trailing slash except for origin root
  return normalized.replace(/^(https?:\/\/[^/]+)\/$/, "$1/").replace(/([^:/])\/+$/, "$1");
}

/** Path-only form for Next metadata alternates.canonical */
export function canonicalPath(path: string = "/"): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.replace(/\/+$/, "") || "/";
}
