import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { POST_SLUGS_QUERY } from "@/sanity/lib/queries";

const BASE = "https://ucascalculator.com";

const LASTMOD = new Date("2026-08-21T12:00:00.000Z").toISOString();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/ucas-tariff-points-table/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/a-level-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/btec-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/ib-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/t-level-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/scottish-highers-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/access-epq-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blogs/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/about-us/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE}/contact-us/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE}/privacy-policy/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms-and-conditions/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/cookies-policy/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/accessibility-statement/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/disclaimer/`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
    blogEntries = posts.map((post) => ({
      url: `${BASE}/blogs/${post.slug}/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // Sanity unavailable during build — skip blog URLs
  }

  return [...staticEntries, ...blogEntries];
}
