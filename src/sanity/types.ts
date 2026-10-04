import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

export type SanityPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  tag?: string;
  readTime?: string;
  publishedAt: string;
  mainImage?: SanityImageSource & { alt?: string };
};

export type SanityPost = SanityPostListItem & {
  body?: PortableTextBlock[];
};
