import type { Metadata } from "next";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site";

export const SITE_NAME = "UCAS Calculator";

/** Default 1200×630 social share image (served by app/opengraph-image.tsx). */
export const DEFAULT_OG_IMAGE = {
  url: absoluteUrl("/opengraph-image"),
  secureUrl: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: "UCAS Calculator — free UCAS Tariff points calculator and grade guides",
  type: "image/png",
} as const;

export const DEFAULT_OG_IMAGES = [DEFAULT_OG_IMAGE];

type SocialInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** Complete Open Graph + Twitter card metadata — always includes image. */
export function socialMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: SocialInput): Pick<Metadata, "openGraph" | "twitter"> {
  const url = absoluteUrl(path);

  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: DEFAULT_OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export { SITE_ORIGIN };
