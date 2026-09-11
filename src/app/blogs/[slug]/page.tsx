import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

const POSTS: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    tag: string;
    description: string;
  }
> = {
  "ucas-tariff-2025-26-what-changed": {
    title: "UCAS Tariff 2025/26: What Actually Changed vs Last Cycle",
    date: "14 Aug 2026",
    readTime: "6 min read",
    tag: "Tariff News",
    description:
      "UCAS Tariff 2025/26 complete roundup: new T-Level Core scale, Scottish banding granularity, BTEC RQF crosswalk and A-Level resit rule impact on UCAS points.",
  },
  "clearing-checklist-2026": {
    title: "Results Day & Clearing 2026: 10-Step Survival Checklist",
    date: "10 Aug 2026",
    readTime: "5 min read",
    tag: "Results Day",
    description:
      "Proven 10-step Results Day & Clearing 2026 checklist: UCAS Hub prep, Tariff sum before 08:00, grade boundaries, university call scripts and Clearing hotline timing.",
  },
  "btec-vs-t-level-ucas-points": {
    title: "BTEC Extended Diploma vs T-Level: UCAS Points Side-by-Side",
    date: "2 Aug 2026",
    readTime: "8 min read",
    tag: "Qualification Guides",
    description:
      "BTEC D*D*D* vs T-Level Distinction* — both 168 UCAS points on paper. Russell Group acceptance, structural differences, industry placement and real offer data compared.",
  },
  "ib-tariff-40-42-43-how-many-points": {
    title: "IB 38 / 40 / 42 / 43+ — UCAS Points per Profile",
    date: "25 Jul 2026",
    readTime: "7 min read",
    tag: "IB Deep-Dive",
    description:
      "Most common IB predicted profiles (38, 40, 42, 43+) mapped to exact 2017-reform UCAS Tariff values. HL/SL split impact, EE+TOK bonus and real UK university offers.",
  },
  "epq-ucas-points-russell-group": {
    title: "EPQ A* = 28 Points, but Does Russell Group Count It?",
    date: "15 Jul 2026",
    readTime: "6 min read",
    tag: "Subject Tips",
    description:
      "EPQ A* to E grade UCAS Tariff values, which Russell Group medical schools and Oxbridge colleges exclude EPQ, and when a reduced offer actually applies.",
  },
  "scottish-highers-band1-band2-tariff": {
    title: "Scottish Highers: Band-1 vs Band-2 Tariff Gap",
    date: "8 Jul 2026",
    readTime: "5 min read",
    tag: "Scottish",
    description:
      "Scottish Highers Band-1 vs Band-2 3-point Tariff difference inside every grade. Which unis see band detail on UCAS form and how to maximise borderline Band-1 predictions.",
  },
};

const VALID = Object.keys(POSTS);

export function generateStaticParams() {
  return VALID.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: BlogSlugPageProps
): Promise<Metadata> {
  const params = await props.params;
  const post = POSTS[params.slug];
  if (!post) {
    return {
      title: "Blog Post Not Found | UCASCalculator.com",
      description: "Requested UCAS blog post could not be found.",
    };
  }
  return {
    title: `${post.title} | UCASCalculator Blog`,
    description: post.description,
    metadataBase: new URL("https://ucascalculator.com"),
    alternates: { canonical: `/blogs/${params.slug}/` },
    openGraph: {
      title: `${post.title} | UCASCalculator Blog`,
      description: post.description,
      url: `https://ucascalculator.com/blogs/${params.slug}/`,
      siteName: "UCASCalculator.com",
      locale: "en_GB",
      type: "article",
      publishedTime: "2026-08-01",
      authors: ["UCASCalculator.com"],
      tags: [post.tag],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | UCASCalculator Blog`,
      description: post.description,
    },
  };
}

export default async function BlogSlugPage(props: BlogSlugPageProps) {
  const params = await props.params;
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
            {post.tag}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {post.description}
        </p>

        <div className="mt-10 prose prose-zinc max-w-none dark:prose-invert">
          <h2>Placeholder article body</h2>
          <p>
            This is a skeleton template for the <code>/{params.slug}</code> blog post. A
            full draft with structured headings, fact-checked Tariff tables and outbound
            references will be added here before publication.
          </p>
          <p>
            In the meantime, use the free UCAS Tariff calculator to get an exact total for
            your qualification mix or read other published articles from the blog index.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:justify-between dark:border-zinc-800">
          <Link
            href="/blogs/"
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
    </main>
  );
}
