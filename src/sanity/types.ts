import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = SanityImageSource & { alt?: string };

export type SanitySocial = {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  bluesky?: string;
  github?: string;
  website?: string;
};

export type SanityAuthor = {
  _id: string;
  name: string;
  slug?: string;
  role?: string;
  bio?: string;
  email?: string;
  image?: SanityImage;
  social?: SanitySocial;
};

export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImage;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: SanityImage;
};

export type SanityPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  tag?: string;
  readTime?: string;
  publishedAt: string;
  updatedAt?: string;
  mainImage?: SanityImage;
  authors?: Pick<SanityAuthor, "_id" | "name" | "role" | "image">[];
};

export type SanityPost = SanityPostListItem & {
  body?: PortableTextBlock[];
  seo?: SanitySeo;
  authors?: SanityAuthor[];
};
