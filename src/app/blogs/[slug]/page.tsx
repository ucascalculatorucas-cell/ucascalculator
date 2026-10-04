import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { BlogAuthorCard } from "@/components/BlogAuthorCard";
import { buildArticleJsonLd, buildPostMetadata } from "@/lib/blogSeo";
import { formatBlogDate } from "@/lib/formatDate";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";
import type { SanityPost, SanityPostListItem } from "@/sanity/types";

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  const posts = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: BlogSlugPageProps
): Promise<Metadata> {
  const params = await props.params;
  if (!isSanityConfigured) {
    return {
      title: "Blog Post Not Found | UCASCalculator.com",
      description: "Requested UCAS blog post could not be found.",
    };
  }
  const post = await client.fetch<SanityPost | null>(
    POST_BY_SLUG_QUERY,
    { slug: params.slug },
    { stega: false }
  );

  if (!post) {
    return {
      title: "Blog Post Not Found | UCASCalculator.com",
      description: "Requested UCAS blog post could not be found.",
    };
  }

  return buildPostMetadata(post, params.slug);
}

export default async function BlogSlugPage(props: BlogSlugPageProps) {
  const params = await props.params;
  if (!isSanityConfigured) notFound();

  const [post, related] = await Promise.all([
    client.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, {
      slug: params.slug,
    }),
    client.fetch<SanityPostListItem[]>(RELATED_POSTS_QUERY, {
      slug: params.slug,
    }),
  ]);

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : null;

  const authorNames = post.authors?.map((a) => a.name).filter(Boolean) ?? [];
  const jsonLd = buildArticleJsonLd(post, params.slug);

  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Script
        id={`article-jsonld-${params.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>

      <article className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          {post.tag ? (
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
              {post.tag}
            </span>
          ) : null}
          <span>{formatBlogDate(post.publishedAt)}</span>
          {post.readTime ? (
            <>
              <span>·</span>
              <span>{post.readTime}</span>
            </>
          ) : null}
          {authorNames.length > 0 ? (
            <>
              <span>·</span>
              <span>By {authorNames.join(", ")}</span>
            </>
          ) : null}
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {post.excerpt}
        </p>

        {imageUrl ? (
          <div className="relative mt-8 aspect-[1200/630] overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        ) : null}

        <div className="mt-10 prose prose-zinc max-w-none dark:prose-invert">
          {Array.isArray(post.body) && post.body.length > 0 ? (
            <PortableText value={post.body} />
          ) : (
            <p>This article has no body content yet.</p>
          )}
        </div>

        <BlogAuthorCard authors={post.authors} />

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:justify-between dark:border-zinc-800">
          <Link
            href="/blogs"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            ← Back to Blog index
          </Link>
          <Link
            href="/#calculator"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Open UCAS Calculator
          </Link>
        </div>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="more-posts-heading" className="mx-auto mt-12 max-w-3xl">
          <h2
            id="more-posts-heading"
            className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50"
          >
            More UCAS blog posts
          </h2>
          <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-2">
            {related.map((p) => (
              <li key={p._id}>
                <Link
                  href={`/blogs/${p.slug}`}
                  className="group flex h-full flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/30 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-900/50 dark:hover:bg-indigo-950/20"
                >
                  {p.tag ? (
                    <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                      {p.tag}
                    </span>
                  ) : null}
                  <span className="text-sm font-semibold leading-snug text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-400">
                    {p.title}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {formatBlogDate(p.publishedAt)}
                    {p.readTime ? ` · ${p.readTime}` : ""}
                    {p.authors?.[0]?.name ? ` · ${p.authors[0].name}` : ""} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="related-tools-heading" className="mx-auto mt-10 max-w-3xl">
        <h2
          id="related-tools-heading"
          className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50"
        >
          Related UCAS tools and guides
        </h2>
        <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/", label: "UCAS Tariff Points Calculator" },
            { href: "/ucas-tariff-points-table", label: "Full UCAS Tariff Table" },
            { href: "/a-level-ucas-points", label: "A-Level Tariff Guide" },
            { href: "/btec-ucas-points", label: "BTEC Tariff Guide" },
            { href: "/ib-ucas-points", label: "IB Tariff Guide" },
            { href: "/t-level-ucas-points", label: "T-Level Tariff Guide" },
            { href: "/scottish-highers-ucas-points", label: "Scottish Highers Guide" },
            { href: "/access-epq-ucas-points", label: "Access & EPQ Guide" },
            { href: "/about-us", label: "About UCASCalculator.com" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-200 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-indigo-900/50 dark:hover:text-indigo-400"
              >
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
