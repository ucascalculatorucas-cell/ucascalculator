import type { MetadataRoute } from "next";

const BASE = "https://ucascalculator.com";

const LASTMOD = new Date("2026-08-21T12:00:00.000Z").toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
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
      url: `${BASE}/ucas-tariff-points-table/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/blogs/`,
      lastModified: LASTMOD,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blogs/ucas-tariff-2025-26-what-changed/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blogs/clearing-checklist-2026/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blogs/btec-vs-t-level-ucas-points/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blogs/ib-tariff-40-42-43-how-many-points/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blogs/epq-ucas-points-russell-group/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blogs/scottish-highers-band1-band2-tariff/`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
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
  return staticEntries;
}
