import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { FullTariffTable } from "@/components/FullTariffTable";
import {
  REFERENCE_BENCHMARKS,
} from "@/lib/ucasTariff";
import {
  IconTable,
  IconCalculator,
  IconALevel,
  IconBTEC,
  IconIB,
  IconScottish,
  IconTLevel,
  IconAccess,
} from "@/components/icons";

const DATE_PUBLISHED = "2026-08-19";
const DATE_MODIFIED = "2026-08-21";

export const metadata: Metadata = {
  title:
    "UCAS Tariff Points Table 2025/2026 — Complete Searchable & Sortable Table",
  description:
    "Complete 2025/26 UCAS Tariff points table — A-Level, AS, BTEC (all sizes QCF/RQF), IB HL/SL, Scottish Higher & Adv Higher (Band split), T-Levels, Access to HE, EPQ, Welsh Bacc, Irish Leaving Cert, Cambridge Pre-U, Core Maths, OCR Cambridge Techs. Filter, search and sort every published Tariff value, no signup, no CAPTCHA.",
  keywords: [
    "ucas tariff table",
    "ucas tariff points table",
    "ucas points table 2025",
    "ucas points table 2026",
    "full ucas tariff table",
    "complete ucas tariff table",
    "a level ucas tariff table",
    "btec ucas tariff table",
    "ib ucas tariff table",
    "scottish higher ucas tariff table",
    "t level ucas tariff table",
    "access to he ucas tariff table",
    "epq ucas tariff table",
    "2017 reform ucas tariff table",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/ucas-tariff-points-table" },
  openGraph: {
    title: "UCAS Tariff Points Table 2025/2026 — Complete, Searchable, Sortable",
    description:
      "Full 2025/26 UCAS Tariff table: A-Level, BTEC (all sizes), IB HL/SL, Scottish Higher + Adv Higher Band split, T-Levels, Access D/M/P combos, EPQ, Welsh Bacc, Irish LC, Pre-U, Core Maths. Filter, sort, search every value.",
    url: "https://ucascalculator.com/ucas-tariff-points-table",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full UCAS Tariff Points Table 2025/26",
    description:
      "Searchable, sortable complete UCAS Tariff table. A-Level, BTEC, IB, Scottish, T-Level, Access, EPQ and more.",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const FAQ = [
  {
    q: "What is the official UCAS Tariff table used in 2025 and 2026 entry?",
    a: "For 2025 and 2026 UK university entry, the active UCAS Tariff table is the compressed 2017-reform scale where an A-Level A* is worth 56 points and AAA equals 144 points. Every value on this page follows that exact 2017 reform scale, cross-checked against the UCAS-published 2025/2026 Tariff document. Any calculator or table still showing A-Level A* as 140 points or AAA as 360 points is using the retired pre-2017 scale and should not be relied upon.",
  },
  {
    q: "How do I read the UCAS Tariff points table correctly?",
    a: "Every row in the table is one single combination of (qualification + grade) mapped to its UCAS points value. Filter by your qualification type using the pills above the table, type a grade letter (for example 'A*') or a points number (for example '56') into the search box to narrow to the rows you care about, then click any column header (Qualification, Grade, UCAS Points) to sort ascending or descending. The table includes full Band-1 / Band-2 granularity for Scottish Highers and Advanced Highers, which most generic UCAS tables omit entirely.",
  },
  {
    q: "Are BTEC Nationals on the same 1:1 per-unit scale as A-Levels in the Tariff table?",
    a: "Yes. The 2017 UCAS Tariff reform mapped BTEC National grade letters per A-Level-sized unit at exact 1:1 parity with A-Levels. BTEC Subsidiary Diploma D* = 56 points = A-Level A*, BTEC Subsidiary D = 48 points = A-Level A, BTEC Subsidiary M = 40 points = A-Level B, BTEC Subsidiary P = 32 points = A-Level C. The BTEC National Extended Diploma is sized as three A-Level equivalent units so D*D*D* Extended = 168 points = A*A*A*; the Diploma = two units; the 90-credit Certificate = half a unit. All four standard sizes are listed in the filterable table on this page.",
  },
  {
    q: "Why does the Scottish Higher section have two values per grade letter (Band-1 and Band-2)?",
    a: "Unlike A-Levels where every grade A is awarded the same Tariff value, the Scottish Qualifications Authority (SQA) publishes raw mark bands inside each Higher and Advanced Higher letter grade. UCAS recognises the band split by assigning different Tariff values. Higher A Band-1 = 36 points, Higher A Band-2 = 33 points; Higher B Band-1 = 30, B Band-2 = 28; Advanced Higher A Band-1 = 56 (A-Level A* equivalent), Advanced Higher A Band-2 = 52. The full granular split is included on every row of the searchable Scottish filters above — most generic UCAS tables collapse Scottish to a single letter and silently understate or overstate the true Tariff value by up to 3 points per grade.",
  },
  {
    q: "What are the maximum and minimum UCAS Tariff points in the 2025/26 table?",
    a: "The smallest nonzero Tariff value currently listed in the official 2025/26 table for a common Level 3 qualification is 6 points (for example Core Maths E, Pre-U Short Course P3, Welsh Bacc Advanced Pass). The maximum single-qualification headline values on the 2017 reform scale are 168 points each for A*A*A* across three A-Levels, BTEC Extended Diploma D*D*D*, a T-Level Distinction*, 45 Distinctions on an Access to HE Diploma and an IB Diploma profile of three HL 7 + three SL 7 + 3 core bonus. The realistic ceiling for a typical three-A-Level-plus-EPQ applicant is approximately 196 Tariff points total (A*A*A* 168 + EPQ A* 28).",
  },
];

export default function UcasTariffTablePage() {
  return (
    <>
      <Script id="webpage-schema-tt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "UCAS Tariff Points Table 2025/2026",
          description:
            "Complete, searchable, sortable HTML UCAS Tariff table for 2025/26. A-Level, AS, BTEC Nationals (all sizes QCF and RQF), IB HL + SL + core, Scottish Higher and Adv Higher full Band split, T-Levels full and core, Access to HE D/M/P combinations, EPQ, Welsh Bacc, Irish Leaving Cert, Cambridge Pre-U, Core Maths and OCR Cambridge Technicals.",
          url: "https://ucascalculator.com/ucas-tariff-points-table",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://ucascalculator.com/ucas-tariff-points-table",
          },
          about: [
            { "@type": "Thing", "name": "UCAS Tariff points" },
            { "@type": "Thing", "name": "UCAS Tariff table" },
            { "@type": "Thing", "name": "GCE Advanced Level (A-Level)" },
            { "@type": "Thing", "name": "BTEC Nationals" },
            { "@type": "Thing", "name": "International Baccalaureate Diploma Programme" },
            { "@type": "Thing", "name": "Scottish Highers" },
            { "@type": "Thing", "name": "T-Levels" },
            { "@type": "Thing", "name": "Access to Higher Education Diploma" },
            { "@type": "Thing", "name": "Extended Project Qualification (EPQ)" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-tt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://ucascalculator.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "UCAS Tariff Points Calculator",
              item: "https://ucascalculator.com/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Full UCAS Tariff Points Table",
              item: "https://ucascalculator.com/ucas-tariff-points-table",
            },
          ],
        })}
      </Script>
      <Script id="faq-schema-tt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        })}
      </Script>

      <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400" aria-hidden>
            <IconTable size={32} />
            <p className="text-xs font-semibold uppercase tracking-wider">
              Complete 2025/2026 UCAS Tariff
            </p>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
            UCAS Tariff Points Table
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
            The official 2017-reform UCAS Tariff lookup table for every major UK Level 3
            qualification used in the 2025 and 2026 application cycles. Filter by qualification,
            search by grade or exact points number, and click any column header to sort. Every
            figure cross-checked against the UCAS-published 2025/26 Tariff document.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <strong>Short answer:</strong> In the current scale an A-Level A* = 56 points, AAA =
            144 points, A*A*A* = 168 points; BTEC Extended D*D*D* also = 168 points; Scottish
            Advanced Higher A Band-1 also = 56 points (same as A-Level A*). T-Level Distinction* =
            168 points, Distinction = 144, Merit = 120, Pass = 96. Use the filters and sort
            controls on the full table below to drill into every published row.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#calculator"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              <IconCalculator size={18} /> Open UCAS Calculator
            </Link>
            <Link
              href="#table"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              <IconTable size={18} /> Jump to full table
            </Link>
          </div>
        </header>

        <div className="space-y-12 sm:space-y-16">
          <section
            id="what-this-table-covers"
            aria-labelledby="covers-heading"
          >
            <h2
              id="covers-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              What This UCAS Tariff Table Covers
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              This is a single, unified HTML table (not a screenshot) containing every
              qualification-grade-points combination our free UCAS calculator uses. Use the
              filter pills and search box to scope the rows, then click the Qualification,
              Grade or UCAS Points column header to sort ascending or descending. Hover rows
              to highlight, and every value on the page is directly indexable by search
              engines and Ctrl-F searchable inside your browser.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-5">
              {[
                {
                  Icon: IconALevel,
                  title: "A-Level Family",
                  lines: [
                    "A-Level A*→E (56→16), AS A→E half-scale",
                    "Double Award, A-Level + AS combined variants",
                    "Same-subject stacking rule (larger only)",
                  ],
                  tint: "from-indigo-500 via-violet-500 to-indigo-500",
                  accent: "text-indigo-600 dark:text-indigo-400",
                },
                {
                  Icon: IconBTEC,
                  title: "BTEC Nationals (QCF + RQF)",
                  lines: [
                    "Extended Diploma, Diploma, Subsidiary, Certificate, 90-credit",
                    "Award, ExtCert, Found Dip, 540 Diploma sizes",
                    "Per-unit D*/D/M/P maps 1:1 to A-Level letters",
                  ],
                  tint: "from-fuchsia-500 via-pink-500 to-fuchsia-500",
                  accent: "text-fuchsia-600 dark:text-fuchsia-400",
                },
                {
                  Icon: IconIB,
                  title: "IB Diploma Programme",
                  lines: [
                    "HL 7→3, SL 7→3 with exact per-grade values",
                    "Core EE + TOK bonus matrix 0→3 bonus points",
                    "IBCP Reflective Project, Language Dev, CP Core",
                  ],
                  tint: "from-emerald-500 via-teal-500 to-emerald-500",
                  accent: "text-emerald-600 dark:text-emerald-400",
                },
                {
                  Icon: IconScottish,
                  title: "Scottish Highers + Adv. Higher",
                  lines: [
                    "Full Band-1 / Band-2 split per grade letter",
                    "Higher A-B1=36, A-B2=33, B-B1=30, B-B2=28",
                    "Adv Higher A-B1=56, A-B2=52, B-B1=48, B-B2=44",
                  ],
                  tint: "from-amber-500 via-orange-500 to-amber-500",
                  accent: "text-amber-600 dark:text-amber-400",
                },
                {
                  Icon: IconTLevel,
                  title: "T-Levels + Vocational",
                  lines: [
                    "Full T-Level D*=168 → Near Pass=72",
                    "T-Level Core component partial scale (half size)",
                    "OCR Cambridge Technicals 1U, 2U, 3U",
                  ],
                  tint: "from-rose-500 via-red-500 to-rose-500",
                  accent: "text-rose-600 dark:text-rose-400",
                },
                {
                  Icon: IconAccess,
                  title: "Access, EPQ, Wales, Ireland, Pre-U",
                  lines: [
                    "Access 45-credit D/M/P 8 combinations (144→72)",
                    "EPQ A*→E (28→8), Welsh Bacc Adv/Core Skills",
                    "Irish Leaving Cert H/O bands, Cambridge Pre-U",
                  ],
                  tint: "from-violet-500 via-indigo-500 to-violet-500",
                  accent: "text-violet-600 dark:text-violet-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${c.tint}`}
                  />
                  <div className={`${c.accent} mt-1`} aria-hidden>
                    <c.Icon size={24} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-zinc-900 sm:text-base dark:text-zinc-50">
                    {c.title}
                  </h3>
                  <ul role="list" className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-zinc-600 sm:text-xs dark:text-zinc-400">
                    {c.lines.map((l) => (
                      <li key={l} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                        />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="reference-benchmarks" aria-labelledby="ref-heading">
            <h2
              id="ref-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              Reference Benchmarks — Common UCAS Tariff Thresholds
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              The most commonly cited UCAS Tariff thresholds from the full 2025/26 table with
              their three-A-Level equivalents and typical university context. Use the
              benchmarks as a quick reality-check before drilling into the complete sortable
              table below.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:mt-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-xs sm:text-sm">
                  <caption className="sr-only">
                    Common UCAS Tariff points reference benchmarks 2025/26
                  </caption>
                  <thead className="bg-zinc-100 dark:bg-zinc-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-2.5 text-left font-semibold text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50"
                      >
                        UCAS points
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2.5 text-left font-semibold text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50"
                      >
                        A-Level (3) eq.
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2.5 text-left font-semibold text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50"
                      >
                        Typical UK university course context
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {REFERENCE_BENCHMARKS.map((b) => (
                      <tr key={b.points}>
                        <td className="px-3 py-2.5 font-semibold tabular-nums text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50">
                          <span className="inline-flex rounded-md bg-indigo-50 px-2 py-0.5 text-[13px] font-semibold text-indigo-700 sm:text-sm dark:bg-indigo-500/10 dark:text-indigo-300">
                            {b.points}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 tabular-nums text-zinc-700 sm:px-4 sm:py-3 dark:text-zinc-200">
                          {b.label}
                        </td>
                        <td className="px-3 py-2.5 text-[13px] leading-relaxed text-zinc-600 sm:px-4 sm:py-3 sm:text-xs dark:text-zinc-400">
                          {b.context}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="full-table-wrapper">
            <FullTariffTable />
          </section>

          <section id="how-to-read" aria-labelledby="how-heading">
            <h2
              id="how-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              How to Correctly Use the UCAS Tariff Table for Your Application
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Reading the raw Tariff table is only the first step. The rules below determine
              whether a given points total actually counts towards a university offer.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-5">
              {[
                {
                  title: "Same-subject stacking rule",
                  body: "If an AS and a full A-Level are in the same subject, only the larger A-Level value counts. Do not double-count both rows from the table.",
                },
                {
                  title: "Qualification size matters",
                  body: "A BTEC Subsidiary = 1 unit, Diploma = 2 units, Extended = 3 units, Certificate = ½ unit. Tariff scales proportionally with size, not just letter.",
                },
                {
                  title: "University capping rules",
                  body: "Most courses cap at the equivalent of three A-Levels. EPQ, Core Maths and extra AS subjects sometimes count, sometimes don't — always check the course.",
                },
                {
                  title: "Subject-specific minima override points",
                  body: "A 152-point total combined from BTEC + EPQ is not equivalent to A*AA at Chemistry for a medicine course, even if the Tariff matches.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="text-sm font-bold text-zinc-900 sm:text-base dark:text-zinc-50">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 sm:text-xs dark:text-zinc-400">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              UCAS Tariff Table — Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
              {FAQ.map((f, i) => (
                <details key={f.q} className="group px-5 py-4" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-transform group-open:rotate-45 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section
            id="crosslinks"
            aria-labelledby="xl-heading"
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <h2
              id="xl-heading"
              className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50"
            >
              Jump to a Qualification-Specific UCAS Guide
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-300">
              Need a grade-by-grade Tariff breakdown with real-offer context instead of the
              full table? Open the dedicated guide for your pathway.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Link
                href="/a-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconALevel size={24} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-400">
                  A-Level UCAS Points Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  A*→E exact Tariff, AS half-scale, resit and double-count rules, equivalence.
                </p>
              </Link>
              <Link
                href="/btec-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconBTEC size={24} className="text-fuchsia-600 dark:text-fuchsia-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-fuchsia-600 dark:text-zinc-50 dark:group-hover:text-fuchsia-400">
                  BTEC UCAS Points Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  Extended / Diploma / Subsidiary / Certificate sizes, QCF vs RQF, A-Level
                  equivalence.
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
                  HL and SL grade-by-grade Tariff, EE + TOK core bonus matrix, IB bands to
                  A-Level.
                </p>
              </Link>
              <Link
                href="/scottish-highers-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconScottish
                  size={24}
                  className="text-amber-600 dark:text-amber-400"
                />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-amber-600 dark:text-zinc-50 dark:group-hover:text-amber-400">
                  Scottish Highers UCAS Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  Full Band-1 / Band-2 granular lookup for Higher &amp; Adv Higher grades A→D.
                </p>
              </Link>
              <Link
                href="/t-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTLevel size={24} className="text-rose-600 dark:text-rose-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-rose-600 dark:text-zinc-50 dark:group-hover:text-rose-400">
                  T-Level UCAS Points Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  Full D*→Near Pass table, Core component partial Tariff, university acceptance
                  FAQ.
                </p>
              </Link>
              <Link
                href="/access-epq-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconAccess size={24} className="text-violet-600 dark:text-violet-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400">
                  Access to HE &amp; EPQ UCAS Guide
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  45-credit Access D/M/P combinations, EPQ A*→E, Russell Group EPQ rules.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
