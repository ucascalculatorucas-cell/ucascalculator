import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site";
import type { SanityImage, SanityPost } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

function imageUrl(image: SanityImage | undefined, width = 1200, height = 630) {
  if (!image) return undefined;
  try {
    return urlFor(image).width(width).height(height).fit("crop").url();
  } catch {
    return undefined;
  }
}

export function buildPostMetadata(post: SanityPost, slug: string): Metadata {
  const seo = post.seo;
  const metaTitle = seo?.metaTitle?.trim() || post.title;
  const metaDescription =
    seo?.metaDescription?.trim() ||
    post.excerpt ||
    "UCAS advice and Tariff guidance for students, parents and advisers.";
  const canonical = seo?.canonicalUrl?.trim()
    ? absoluteUrl(seo.canonicalUrl.trim())
    : absoluteUrl(`/blogs/${slug}`);

  const ogTitle = seo?.ogTitle?.trim() || metaTitle;
  const ogDescription =
    seo?.ogDescription?.trim() || metaDescription;
  const customOgImage = imageUrl(seo?.ogImage) || imageUrl(post.mainImage);
  const ogImages = customOgImage
    ? [
        {
          url: customOgImage,
          width: 1200,
          height: 630,
          alt: seo?.ogImage?.alt || post.mainImage?.alt || post.title,
        },
      ]
    : [DEFAULT_OG_IMAGE];

  const twitterTitle =
    seo?.twitterTitle?.trim() || ogTitle || metaTitle;
  const twitterDescription =
    seo?.twitterDescription?.trim() || ogDescription || metaDescription;
  const twitterImage =
    imageUrl(seo?.twitterImage) || customOgImage || DEFAULT_OG_IMAGE.url;

  const authorNames =
    post.authors?.map((a) => a.name).filter(Boolean) ?? [];

  const robotsIndex = seo?.noIndex ? false : true;
  const robotsFollow = seo?.noFollow ? false : true;

  const keywords = [
    seo?.focusKeyword,
    ...(seo?.keywords ?? []),
    post.tag,
  ].filter((k): k is string => Boolean(k && k.trim()));

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.length ? keywords : undefined,
    authors: authorNames.length
      ? authorNames.map((name) => ({ name }))
      : [{ name: SITE_NAME }],
    creator: authorNames[0] || SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_ORIGIN),
    alternates: { canonical },
    robots: {
      index: robotsIndex,
      follow: robotsFollow,
      googleBot: {
        index: robotsIndex,
        follow: robotsFollow,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: authorNames.length ? authorNames : [SITE_NAME],
      tags: post.tag ? [post.tag] : undefined,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
    },
  };
}

export function buildArticleJsonLd(post: SanityPost, slug: string) {
  const seo = post.seo;
  const canonical = seo?.canonicalUrl?.trim()
    ? absoluteUrl(seo.canonicalUrl.trim())
    : absoluteUrl(`/blogs/${slug}`);
  const image =
    imageUrl(seo?.ogImage) ||
    imageUrl(post.mainImage) ||
    DEFAULT_OG_IMAGE.url;

  const authors =
    post.authors && post.authors.length > 0
      ? post.authors.map((author) => {
          const sameAs = Object.values(author.social || {}).filter(
            (url): url is string => Boolean(url)
          );
          return {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role || undefined,
            description: author.bio || undefined,
            email: author.email || undefined,
            image: author.image
              ? imageUrl(author.image, 400, 400)
              : undefined,
            sameAs: sameAs.length ? sameAs : undefined,
            url: author.social?.website || undefined,
          };
        })
      : [
          {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_ORIGIN,
          },
        ];

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seo?.metaTitle || post.title,
    description: seo?.metaDescription || post.excerpt,
    image: image ? [image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: authors,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    keywords: [
      seo?.focusKeyword,
      ...(seo?.keywords ?? []),
      post.tag,
    ]
      .filter(Boolean)
      .join(", "),
    articleSection: post.tag || undefined,
    inLanguage: "en-GB",
    url: canonical,
  };
}
