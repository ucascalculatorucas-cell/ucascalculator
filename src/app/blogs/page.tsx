import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UCAS Blog | Tariff Tips, Results Day & Clearing Guides",
  description:
    "UCASCalculator.com blog — UCAS Tariff explainers, Clearing 2025/26 strategies, Results Day checklists, BTEC/T-Level/IB deep-dives and grade-equivalence articles.",
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/blogs/" },
  openGraph: {
    title: "UCAS Blog | Tariff Tips, Results Day & Clearing Guides",
    description:
      "UCASCalculator.com blog — Tariff explainers, Clearing 2025/26 strategies, Results Day checklists, BTEC/T-Level/IB deep-dives and grade-equivalence articles.",
    url: "https://ucascalculator.com/blogs/",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UCAS Blog | Tariff Tips, Results Day & Clearing Guides",
    description:
      "UCASCalculator.com blog — Tariff explainers, Clearing 2025/26 strategies, Results Day checklists, BTEC/T-Level/IB deep-dives and grade-equivalence articles.",
  },
};

const POSTS = [
  {
    slug: "ucas-tariff-2025-26-what-changed",
    date: "14 Aug 2026",
    title: "UCAS Tariff 2025/26: What Actually Changed vs Last Cycle",
    excerpt:
      "Complete UCAS Tariff roundup for 2025/26 entry — new T-Level Core scale, Scottish banding granularity, BTEC RQF crosswalk and what A-Level resit rules mean for your points.",
    tag: "Tariff News",
    readTime: "6 min",
  },
  {
    slug: "clearing-checklist-2026",
    date: "10 Aug 2026",
    title: "Results Day & Clearing 2026: 10-Step Survival Checklist",
    excerpt:
      "A proven 10-step plan for Results Day morning: UCAS Hub prep, Tariff sum before 08:00, grade boundary screenshots, university phone scripts and the exact moment to call Clearing hotlines.",
    tag: "Results Day",
    readTime: "5 min",
  },
  {
    slug: "btec-vs-t-level-ucas-points",
    date: "2 Aug 2026",
    title: "BTEC Extended Diploma vs T-Level: UCAS Points Side-by-Side",
    excerpt:
      "BTEC Extended Diploma D*D*D* vs T-Level Distinction* — both worth 168 UCAS points on paper, but which one do Russell Group unis actually prefer? Structural differences, industry placement rules and real offer data compared.",
    tag: "Qualification Guides",
    readTime: "8 min",
  },
  {
    slug: "ib-tariff-40-42-43-how-many-points",
    date: "25 Jul 2026",
    title: "IB 38 / 40 / 42 / 43+ — How Many UCAS Tariff Points Each Profile Actually Gives You",
    excerpt:
      "HL/SL split matters more than the raw total. Detailed breakdown mapping the most common IB predicted profiles to exact 2017-reform Tariff values plus real UK university offer comparisons.",
    tag: "IB Deep-Dive",
    readTime: "7 min",
  },
  {
    slug: "epq-ucas-points-russell-group",
    date: "15 Jul 2026",
    title: "EPQ A* = 28 Points, but Does Your Russell Group Course Actually Count It?",
    excerpt:
      "EPQ Tariff values A* through E, which RG medical schools explicitly exclude it, which LSE + Oxbridge colleges use EPQ for reduced offers and whether resitting EPQ is ever worth it.",
    tag: "Subject Tips",
    readTime: "6 min",
  },
  {
    slug: "scottish-highers-band1-band2-tariff",
    date: "8 Jul 2026",
    title: "Scottish Highers: Band-1 vs Band-2 — the 3-Point Tariff Gap That Changes Offers",
    excerpt:
      "Scottish Highers split into Band-1 and Band-2 Tariff values inside grades A, B, C is easily missed. Which unis can see the band detail on your UCAS form and how to maximise predicted points when you're borderline Band-1.",
    tag: "Scottish",
    readTime: "5 min",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          UCAS Blog
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Tariff explainers, Clearing strategies &amp; qualification guides
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
        {POSTS.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                {p.tag}
              </span>
              <span>
                {p.date} · {p.readTime}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              <Link
                href={`/blogs/${p.slug}/`}
                className="before:absolute before:inset-0 before:content-[''] hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {p.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {p.excerpt}
            </p>
            <div className="mt-5 border-t border-zinc-100 pt-4 text-sm font-medium text-indigo-600 dark:border-zinc-800 dark:text-indigo-400">
              <Link
                href={`/blogs/${p.slug}/`}
                className="inline-flex items-center gap-1"
                aria-label={`Read ${p.title}`}
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
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
