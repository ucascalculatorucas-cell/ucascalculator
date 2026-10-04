import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    mainImage
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
    mainImage,
    body
  }
`;

export const RELATED_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    tag,
    readTime,
    publishedAt
  }
`;
