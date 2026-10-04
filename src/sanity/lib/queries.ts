import { groq } from "next-sanity";

const authorCardProjection = groq`{
  _id,
  name,
  "slug": slug.current,
  role,
  image
}`;

const authorFullProjection = groq`{
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  email,
  image,
  social
}`;

const seoProjection = groq`{
  metaTitle,
  metaDescription,
  focusKeyword,
  keywords,
  canonicalUrl,
  noIndex,
  noFollow,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage
}`;

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    updatedAt,
    mainImage,
    authors[]->${authorCardProjection}
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    updatedAt,
    mainImage,
    body,
    seo${seoProjection},
    authors[]->${authorFullProjection}
  }
`;

export const RELATED_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    tag,
    readTime,
    publishedAt,
    authors[]->${authorCardProjection}
  }
`;
