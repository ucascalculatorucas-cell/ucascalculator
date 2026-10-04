import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { POST_SLUGS_QUERY } from "@/sanity/lib/queries";

const LASTMOD = new Date("2026-08-21T12:00:00.000Z").toISOString();

/** Paths without trailing slash (except home) — matches live 200 URLs */
const STATIC_PATHS: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/ucas-tariff-points-table", changeFrequency: "weekly", priority: 0.9 },
  { path: "/a-level-ucas-points", changeFrequency: "weekly", priority: 0.9 },
  { path: "/btec-ucas-points", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ib-ucas-points", changeFrequency: "weekly", priority: 0.9 },
  { path: "/t-level-ucas-points", changeFrequency: "weekly", priority: 0.9 },
  { path: "/scottish-highers-ucas-points", changeFrequency: "weekly", priority: 0.85 },
  { path: "/access-epq-ucas-points", changeFrequency: "weekly", priority: 0.85 },
  { path: "/blogs", changeFrequency: "weekly", priority: 0.85 },
  { path: "/about-us", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contact-us", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility-statement", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: LASTMOD,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  if (isSanityConfigured) {
    try {
      const posts = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
      blogEntries = posts.map((post) => ({
        url: absoluteUrl(`/blogs/${post.slug}`),
        lastModified: LASTMOD,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    } catch {
      // Sanity unavailable during build — skip blog URLs
    }
  }

  return [...staticEntries, ...blogEntries];
}
