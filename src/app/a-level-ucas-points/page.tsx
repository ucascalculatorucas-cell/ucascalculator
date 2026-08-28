import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { IconALevel, IconCalculator, IconTable, IconBTEC, IconIB } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "A-Level UCAS Points 2025/2026 | Grade-by-Grade Tariff Table & Equivalences",
  description:
    "A-Level UCAS points grade-by-grade Tariff table for 2025 and 2026 entry. A* to E exact values, AS-Level half-scale, A-Level to BTEC and IB equivalence, 2017 reform scale rules and common counting gotchas.",
  keywords: [
    "a level ucas points",
    "a level ucas points 2025",
    "a level ucas tariff points",
    "ucas points a level grades",
    "aaa ucas points",
    "a star a level ucas points",
    "as level ucas points",
    "how many ucas points is a* a a b b c",
    "2017 ucas tariff a level",
    "old vs new ucas points a level",
    "ucas tariff a level equivalence chart",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/a-level-ucas-points" },
  openGraph: {
    title: "A-Level UCAS Points — Grade-by-Grade 2025/2026 Tariff Table",
    description:
      "Exact A* to E A-Level UCAS points values, AS half-scale, BTEC / IB grade equivalence visual, resit and double-count rules for the 2017 reform scale used in 2025/26.",
    url: "https://ucascalculator.com/a-level-ucas-points",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Level UCAS Points — 2025/2026 Tariff Table",
    description:
      "A-Level A* to E exact points, AS half-scale, BTEC and IB equivalence visual.",
  },
  robots: { index: false, follow: false, "max-image-preview": "large", "max-snippet": -1 },
};

const DATE_PUBLISHED = "2026-06-01";
const DATE_MODIFIED = "2026-08-20";

const FAQ = [
  {
    q: "How many UCAS points is an A-Level A* grade?",
    a: "An A-Level A* grade is worth exactly 56 UCAS Tariff points on the 2017 reform scale used for 2025 and 2026 entry. This replaces the old pre-2017 figure of 140 points per A* — any site showing 140 points for an A-Level A* is using the retired scale.",
  },
  {
    q: "Do AS-Levels count if I continue to full A-Level in the same subject?",
    a: "No. If you take the same subject from AS-Level to full A-Level, UCAS only counts the larger value (the A-Level grade). You cannot stack or double-count the AS and full A-Level Tariff values for the same subject. Different subjects at AS and full A-Level can both be counted normally.",
  },
  {
    q: "How many UCAS points is AAA at A-Level and what is the maximum with three subjects?",
    a: "AAA at A-Level equals 144 UCAS Tariff points (48 + 48 + 48). The maximum possible Tariff total with three linear A-Levels is A*A*A* = 168 points (56 + 56 + 56). Adding an EPQ A* (28) typically takes a strong three-A-Level profile up to 196 points total.",
  },
  {
    q: "Are A-Level resits and retakes counted differently in the UCAS Tariff?",
    a: "No. UCAS counts the highest awarded grade per subject regardless of whether it was a first sit or a retake, and the Tariff points value is identical. There is no weighting, penalty or 'retake badge' applied to A-Level resit results in the UCAS Tariff table itself — however a university can choose to set resit rules separately for an individual course offer.",
  },
];

const aLevelRows = [
  { grade: "A*", points: 56, aLabel: "A*A*A*", aPoints: 168 },
  { grade: "A", points: 48, aLabel: "AAA", aPoints: 144 },
  { grade: "B", points: 40, aLabel: "BBB", aPoints: 120 },
  { grade: "C", points: 32, aLabel: "CCC", aPoints: 96 },
  { grade: "D", points: 24, aLabel: "DDD", aPoints: 72 },
  { grade: "E", points: 16, aLabel: "EEE", aPoints: 48 },
];

const asLevelRows = [
  { grade: "A", points: 24 },
  { grade: "B", points: 20 },
  { grade: "C", points: 16 },
  { grade: "D", points: 12 },
  { grade: "E", points: 8 },
];

export default function ALevelUcasPointsPage() {
  return (
    <>
      <Script id="webpage-schema-al" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "A-Level UCAS Points 2025/2026",
          description:
            "Grade-by-grade Tariff table for A-Levels (A* to E) and AS-Levels, BTEC Subsidiary Diploma equivalence, and 2017 reform scale rules used for 2025 and 2026 UK university entry.",
          url: "https://ucascalculator.com/a-level-ucas-points",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://ucascalculator.com/a-level-ucas-points" },
          about: [
            { "@type": "Thing", "name": "GCE Advanced Level (A-Level)" },
            { "@type": "Thing", "name": "Advanced Subsidiary (AS-Level)" },
            { "@type": "Thing", "name": "2017 UCAS Tariff reform" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-al" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 2, name: "UCAS Tariff Points Calculator", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 3, name: "A-Level UCAS Points", item: "https://ucascalculator.com/a-level-ucas-points" },
          ],
        })}
      </Script>
      <Script id="faq-schema-al" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}
      </Script>

      <article className="mx-auto w-full max-w-[1000px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero + H1 */}
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400" aria-hidden>
            <IconALevel size={32} />
            <p className="text-xs font-semibold uppercase tracking-wider">
              A-Level Guide — 2025/2026 Tariff
            </p>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            A-Level UCAS Points
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            The official 2017-reform UCAS Tariff values for GCE A-Levels and AS-Levels for the
            2025 and 2026 application cycles. Exact grade-by-grade lookup table, half-scale
            AS-Level points, visual A-Level equivalence charts across BTEC and IB, and the
            counting rules most applicants get wrong.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <strong>Short answer:</strong> A-Level UCAS points range from 16 for a grade E up to
            56 for an A*, per subject. A typical three-A-Level offer of AAA equals 144 points on
            the current scale, A*A*A* equals 168 points, ABB equals 128 points and BBC equals
            112 points. AS-Levels are tariffed at exactly half the A-Level scale and can be
            stacked with full A-Levels only in different subjects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              <IconCalculator size={18} /> Calculate your total now
            </Link>
            <Link
              href="/ucas-tariff-points-table"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              <IconTable size={18} /> Open full Tariff table
            </Link>
          </div>
        </header>

        <div className="space-y-12">
          {/* A-Level Table */}
          <section id="a-level-table" aria-labelledby="a-level-table-heading">
            <h2
              id="a-level-table-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              A-Level UCAS Points Grade-by-Grade Table
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Every linear A-Level grade maps to a fixed UCAS Tariff value on the 2017 reform
              scale. The right column shows the total Tariff points when a grade is taken
              three-times as the standard three-A-Level offer.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">
                    A-Level grade to UCAS Tariff points lookup table — 2017 reform scale
                  </caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">A-Level grade</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Points per subject</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Three-subject total</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Typical course benchmark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {aLevelRows.map((r) => (
                      <tr key={r.grade} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold text-lg tabular-nums">{r.grade}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-indigo-50 px-2 py-1 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                            {r.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 tabular-nums">{r.aLabel} = <strong>{r.aPoints}</strong></td>
                        <td className="px-5 py-3 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                          {r.aPoints >= 160 && "Competitive for medicine, Oxbridge, law, top STEM"}
                          {r.aPoints === 144 && "Russell Group standard non-vocational baseline"}
                          {r.aPoints === 120 && "Mid-tariff post-1992 university standard"}
                          {r.aPoints === 96 && "Common foundation year and extended degree threshold"}
                          {r.aPoints < 96 && r.aPoints > 48 && "Clearing lower band and select FE to HE routes"}
                          {r.aPoints === 48 && "Minimum tariffed threshold for three passes"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* AS Level Table */}
          <section id="as-level-table" aria-labelledby="as-heading">
            <h2
              id="as-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              AS-Level UCAS Points (Half-Scale)
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              AS-Levels are tariffed at exactly 50% of the corresponding full A-Level value —
              compare grade A AS (24) against grade A A-Level (48) to confirm. AS results can be
              counted towards the Tariff alongside A-Levels only if the subjects are different.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">AS-Level to UCAS Tariff points</caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">AS grade</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Points per subject</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Full A-Level equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {asLevelRows.map((r, i) => (
                      <tr key={r.grade} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold tabular-nums">{r.grade}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-violet-50 px-2 py-1 font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                            {r.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">
                          Matches A-Level {aLevelRows[i + 1]?.grade} = {aLevelRows[i + 1]?.points}
                          &nbsp;(roughly one grade lower when converting AS to full)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* A-Level Equivalence Visual */}
          <section id="a-level-equivalence" aria-labelledby="equiv-heading">
            <h2
              id="equiv-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              How A-Levels Compare to BTEC and IB UCAS Points
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              The bar chart below visualises a single A-Level sized unit, so you can directly
              compare one A-Level grade, one BTEC Subsidiary Diploma grade letter and one IB
              Higher Level grade number on the same 16–56 points scale.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <ul role="list" className="space-y-5">
                {[
                  { label: "A-Level A*", bar: 100, points: 56, color: "from-indigo-500 to-violet-600" },
                  { label: "BTEC Subsidiary D* / IB HL 7", bar: 100, points: 56, color: "from-fuchsia-500 to-pink-600" },
                  { label: "A-Level A / BTEC D / Adv Higher A Band-1 / IB HL 6", bar: 85, points: 48, color: "from-indigo-500 to-blue-600" },
                  { label: "A-Level B / BTEC M / IB HL 5", bar: 71, points: 40, color: "from-sky-500 to-blue-600" },
                  { label: "A-Level C / BTEC P / IB HL 4", bar: 57, points: 32, color: "from-emerald-500 to-teal-600" },
                  { label: "A-Level D / Higher A Band-2", bar: 42, points: 24, color: "from-amber-500 to-orange-600" },
                  { label: "A-Level E / EPQ C", bar: 28, points: 16, color: "from-rose-500 to-red-600" },
                ].map((row) => (
                  <li key={row.label}>
                    <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-zinc-700 dark:text-zinc-200">
                      <span>{row.label}</span>
                      <span className="tabular-nums">{row.points} pts</span>
                    </div>
                    <div
                      aria-hidden
                      className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
                    >
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
                        style={{ width: `${row.bar}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Rules & Gotchas */}
          <section id="a-level-rules" aria-labelledby="rules-heading">
            <h2
              id="rules-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              A-Level Tariff Rules and Common Counting Gotchas
            </h2>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Why was the 2017 A-Level Tariff reform introduced?
            </h3>
            <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Before September 2017 UCAS used a much larger numeric scale where an A-Level A* was
              worth 140 points and AAA equalled 360 points. That old scale is now retired. In the
              2017 reform every qualification was rescaled proportionally down so A* became 56
              points, with all other grades following step-by-step 8-point intervals (56, 48, 40,
              32, 24, 16). All 2025 and 2026 entry uses the compressed 2017 reform scale, so
              never mix figures from the two scales — it will massively inflate your total.
            </p>
            <h3 className="mt-8 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Which A-Level combinations cannot be double-counted?
            </h3>
            <ul role="list" className="mt-3 space-y-2.5 pl-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <strong className="text-zinc-900 dark:text-zinc-50">Same subject AS + full A-Level:</strong> UCAS takes the larger value only. If AS Maths B (20) becomes full A-Level Maths B (40), only the 40-point result counts — not both added together.
              </li>
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <strong className="text-zinc-900 dark:text-zinc-50">Certificate of Financial Studies (CeFS) / similar Level 2/3 overlaps:</strong> A few legacy qualifications share units with Level 2 certificates — UCAS lists prohibited combinations in the full Tariff guide, and the university holds the final decision.
              </li>
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <strong className="text-zinc-900 dark:text-zinc-50">Creative / performing arts graded unit awards:</strong> Graded music and LAMDA certificates do have Tariff values, but Russell Group and high-tariff courses frequently exclude them from counting towards a formal offer even though they are tariffed by UCAS.
              </li>
            </ul>
            <h3 className="mt-8 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Do universities count every A-Level result or only the best three?
            </h3>
            <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Most UK universities count your best three A-Level results as the core academic
              baseline. A fourth A-Level, an EPQ, Core Maths, a fourth AS (in a different
              subject) or a graded music qualification may or may not be accepted as additional
              contribution. A high Tariff total alone never guarantees an offer — subject-specific
              requirements (for example A-Level Chemistry at grade A for medicine) usually
              override a raw points total.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              A-Level UCAS Points — Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
              {FAQ.map((f) => (
                <details key={f.q} className="group px-5 py-4" open={f.q.startsWith("How many UCAS points is an A-Level A*")}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{f.q}</span>
                    <span aria-hidden className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-transform group-open:rotate-45 dark:bg-zinc-800 dark:text-zinc-300">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Cross links + CTA */}
          <section
            id="crosslinks"
            aria-labelledby="xl-heading"
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <h2
              id="xl-heading"
              className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
            >
              Compare A-Levels to other Level 3 pathways
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Link
                href="/btec-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconBTEC size={24} className="text-fuchsia-600 dark:text-fuchsia-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-fuchsia-600 dark:text-zinc-50 dark:group-hover:text-fuchsia-400">
                  BTEC UCAS Points Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  BTEC Extended, Diploma, Subsidiary and Certificate sizes — grade-for-grade
                  comparisons against A-Levels.
                </p>
              </Link>
              <Link
                href="/ib-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconIB size={24} className="text-emerald-600 dark:text-emerald-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-50 dark:group-hover:text-emerald-400">
                  IB UCAS Points Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  IB Higher and Standard Level grade-by-grade Tariff values, plus the 0–3 core
                  bonus for EE and TOK.
                </p>
              </Link>
              <Link
                href="/access-epq-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTable size={24} className="text-violet-600 dark:text-violet-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400">
                  Access to HE &amp; EPQ UCAS Points Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  45-unit Access to HE Diploma combinations and EPQ / Welsh Bacc Advanced Skills
                  Challenge Certificate.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
