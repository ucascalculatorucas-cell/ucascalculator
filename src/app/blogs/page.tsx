import type { Metadata } from "next";
import { socialMetadata } from "@/lib/seo";
import Link from "next/link";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { SanityPostListItem } from "@/sanity/types";
import { formatBlogDate } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "UCAS Advice Blog | Tariff, Results Day and Clearing",
  description:
    "Read UCAS Tariff explainers, Results Day checklists, Clearing strategies and guides on BTEC, T-Levels and IB for students, parents and school advisers.",
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/blogs" },
  ...socialMetadata({
    title: "UCAS Advice Blog | Tariff, Results Day and Clearing",
    description:
      "Read UCAS Tariff explainers, Results Day checklists, Clearing strategies and guides on BTEC, T-Levels and IB for students, parents and school advisers.",
    path: "/blogs",
  }),
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = isSanityConfigured
    ? await client.fetch<SanityPostListItem[]>(POSTS_QUERY)
    : [];

  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          UCAS Blog
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Tariff qualification guides
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          UCASCalculator.com writes long-form, fact-checked UCAS advice — always rooted in
          the official 2017-reform Tariff table, real offer data and Results Day experience.
          No hype, no affiliate links, nothing behind a signup wall.
        </p>
      </header>

      <section
        aria-labelledby="posts-heading"
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <h2 id="posts-heading" className="sr-only">
          Latest blog posts
        </h2>
        {posts.length === 0 ? (
          <p className="col-span-full rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            No blog posts published yet. Add posts in{" "}
            <Link href="/studio" className="font-medium text-indigo-600 underline dark:text-indigo-400">
              Sanity Studio
            </Link>
            .
          </p>
        ) : (
          posts.map((p) => (
            <article
              key={p._id}
              className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                {p.tag ? (
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                    {p.tag}
                  </span>
                ) : (
                  <span />
                )}
                <span>
                  {formatBlogDate(p.publishedAt)}
                  {p.readTime ? ` · ${p.readTime}` : ""}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                <Link
                  href={`/blogs/${p.slug}`}
                  className="before:absolute before:inset-0 before:content-[''] hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                {p.authors?.[0]?.name ? (
                  <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                    By {p.authors[0].name}
                  </span>
                ) : (
                  <span />
                )}
                <Link
                  href={`/blogs/${p.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400"
                  aria-label={`Read ${p.title}`}
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))
        )}
      </section>

      <section className="mt-16 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-8 sm:p-10 dark:border-indigo-900/40 dark:from-indigo-950/40 dark:to-violet-950/30">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Get an exact UCAS Tariff total for your grades in under 30 seconds
            </h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-200">
              Pop your A-Levels, BTEC, IB, Scottish Highers, T-Levels, Access units or EPQ
              into the free UCASCalculator tool — every grade uses the exact same 2017-reform
              Tariff values as the blog posts above.
            </p>
          </div>
          <Link
            href="/#calculator"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Open UCAS Calculator
          </Link>
        </div>
      </section>
    </main>
  );
}
