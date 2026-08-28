import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { IconScottish, IconCalculator, IconTable, IconALevel, IconIB } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "Scottish Highers UCAS Points 2025/2026 | Advanced Higher & Higher — Band 1 / Band 2 Split",
  description:
    "Scottish Higher and Advanced Higher UCAS points with the full Band-1 and Band-2 sub-grade split. Exact SQA grade-to-Tariff table for A through D grades, A-Level equivalence visual and counting rules for 2025 and 2026 entry.",
  keywords: [
    "scottish highers ucas points",
    "scottish higher ucas points",
    "advanced higher ucas points",
    "scottish band 1 vs band 2 ucas points",
    "sqa ucas points",
    "higher a band 1 ucas points",
    "advanced higher a band 1 ucas points",
    "scottish 5 highers ucas points total",
    "sqa ucas tariff 2025",
    "advanced higher ucas points b band 1",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/scottish-highers-ucas-points" },
  openGraph: {
    title: "Scottish Highers & Advanced Higher UCAS Points — Band-1 / Band-2 Tables",
    description:
      "Full SQA A to D grade tables with Band-1 / Band-2 granular split, UCAS points values and A-Level equivalence charts.",
    url: "https://ucascalculator.com/scottish-highers-ucas-points",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scottish Highers UCAS Points Tables",
    description: "Higher and Advanced Higher Band-1 / Band-2 split tables.",
  },
  robots: { index: false, follow: false, "max-image-preview": "large", "max-snippet": -1 },
};

const DATE_PUBLISHED = "2026-06-01";
const DATE_MODIFIED = "2026-08-20";

const FAQ = [
  {
    q: "Why do Scottish Highers have Band-1 and Band-2 UCAS points?",
    a: "Scottish SQA publishes raw mark bands A1, A2, B1, B2, C1, C2, D for every Higher and Advanced Higher. UCAS mirrors this granular split by awarding different Tariff values for Band-1 and Band-2 of the same letter grade, unlike A-Levels which have one value per letter. A Higher A Band-1 = 36 points, A Band-2 = 33 points.",
  },
  {
    q: "How many UCAS points is an Advanced Higher A Band-1?",
    a: "An SQA Advanced Higher A Band-1 is worth exactly 56 UCAS Tariff points on the 2017 reform scale. This is the maximum value per single subject on the whole UCAS Tariff and equals an A-Level A*, IB HL 7 and BTEC Subsidiary D* on a 1:1 basis.",
  },
  {
    q: "Is a Scottish Higher equivalent to an AS-Level or to an A-Level?",
    a: "In UCAS Tariff size, a single Scottish Higher sits between AS and full A-Level. Higher A Band-1 = 36 points, which sits between AS-Level A = 24 points and A-Level B = 40 points. The standard Scottish progression for university is five Highers in S5, followed by Advanced Highers in S6 — an Advanced Higher is the direct A-Level size equivalent.",
  },
  {
    q: "How does a typical five-Higher S5 profile convert to UCAS points?",
    a: "A strong S5 five-Higher profile of AAAAA at Band-1 (for example) = 5 × 36 points = 180 points total; a mid-strong AABBB Band-1 profile ≈ 162 points; a common BBC/B profile ≈ 135–140 points. Add two Advanced Highers in S6 on top to reach competitive Russell Group point ranges around 240–280 points total.",
  },
];

const higherRows = [
  { grade: "A (Band 1)", a: "A1", points: 36, eq: "Sits between A-Level B (40) and A-Level C (32) — roughly A-Level B/C boundary." },
  { grade: "A (Band 2)", a: "A2", points: 33, eq: "≈ A-Level C plus a 1-point uplift over a standard C at A-Level." },
  { grade: "B (Band 1)", a: "B1", points: 30, eq: "A-Level C (32) minus two points." },
  { grade: "B (Band 2)", a: "B2", points: 27, eq: "≈ AS-Level A (24) plus three points." },
  { grade: "C (Band 1)", a: "C1", points: 24, eq: "AS-Level A exactly; EPQ A exactly; IB SL 6 exactly." },
  { grade: "C (Band 2)", a: "C2", points: 21, eq: "Between AS-Level A (24) and AS-Level B (20)." },
  { grade: "D", a: "D", points: 18, eq: "Approximately A-Level E (16) plus a two-point uplift." },
];

const advancedRows = [
  { grade: "A (Band 1)", a: "A1", points: 56, eq: "A-Level A* exactly; BTEC Subsidiary D* exactly; IB HL 7 exactly." },
  { grade: "A (Band 2)", a: "A2", points: 52, eq: "Between A-Level A* (56) and A-Level A (48)." },
  { grade: "B (Band 1)", a: "B1", points: 48, eq: "A-Level A exactly; BTEC Subsidiary D exactly; IB HL 6 exactly." },
  { grade: "B (Band 2)", a: "B2", points: 44, eq: "Between A-Level A (48) and A-Level B (40)." },
  { grade: "C (Band 1)", a: "C1", points: 40, eq: "A-Level B exactly; BTEC Subsidiary M exactly; IB HL 5 exactly." },
  { grade: "C (Band 2)", a: "C2", points: 36, eq: "Higher A Band-1 exactly; mid-way A-Level B / C." },
  { grade: "D", a: "D", points: 32, eq: "A-Level C exactly; BTEC Subsidiary P exactly; IB HL 4 exactly." },
];

export default function ScottishHighersPage() {
  return (
    <>
      <Script id="webpage-schema-sc" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Scottish Highers UCAS Points 2025/2026",
          description:
            "Scottish SQA Higher and Advanced Higher Tariff points values with Band-1 / Band-2 granularity for grades A through D.",
          url: "https://ucascalculator.com/scottish-highers-ucas-points",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          about: [
            { "@type": "Thing", "name": "Scottish Qualifications Authority (SQA)" },
            { "@type": "Thing", "name": "Scottish Higher" },
            { "@type": "Thing", "name": "Scottish Advanced Higher" },
            { "@type": "Thing", "name": "SQA Band-1 and Band-2 sub-grades" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-sc" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 2, name: "UCAS Tariff Points Calculator", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 3, name: "Scottish Highers UCAS Points", item: "https://ucascalculator.com/scottish-highers-ucas-points" },
          ],
        })}
      </Script>
      <Script id="faq-schema-sc" type="application/ld+json" strategy="afterInteractive">
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
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400" aria-hidden>
            <IconScottish size={32} />
            <p className="text-xs font-semibold uppercase tracking-wider">SQA / Scotland Guide</p>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Scottish Highers UCAS Points
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Full UCAS Tariff tables for SQA Scottish Highers and Advanced Highers, including the
            Band-1 and Band-2 sub-grade split that generic UK-wide UCAS calculators usually omit.
            Exact grade-by-grade values for A through D with A-Level equivalence, S5 five-Higher
            profile totals and S6 Advanced Higher stacking guidance for 2025 and 2026 entry.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <strong>Short answer:</strong> A Scottish Advanced Higher A Band-1 = 56 points (the
            maximum single-subject value, equal to A-Level A*); Higher A Band-1 = 36 points,
            Higher B Band-1 = 30, Higher C Band-1 = 24. A typical S5 five-Higher profile of five
            A Band-1 results = 180 Tariff points; adding two Advanced Highers A Band-1 = +112
            points for a typical S5/S6 combined max of ~292 points.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              <IconCalculator size={18} /> Calculate Scottish total now
            </Link>
            <Link
              href="/ucas-tariff-points-table"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              <IconTable size={18} /> Full Tariff table
            </Link>
          </div>
        </header>

        <div className="space-y-12">
          {/* Band split definition H2 */}
          <section id="band-split" aria-labelledby="band-heading">
            <h2 id="band-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Why Scottish Highers Have a Band-1 / Band-2 UCAS Tariff Split
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Most UK Level 3 qualifications (A-Levels, BTEC, IB, T-Levels) publish one grade
              letter per subject, so UCAS assigns one Tariff value per letter. Scottish SQA
              instead publishes a raw band sub-structure within each letter grade: A1, A2, B1,
              B2, C1, C2 and D. Because these bands represent real mark differences, UCAS maps
              each one individually rather than merging them like most calculators do.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-7 text-zinc-800 dark:border-amber-500/30 dark:bg-amber-500/5 dark:text-zinc-200">
              <strong className="text-amber-800 dark:text-amber-300">Important caveat:</strong> If a
              generic UCAS calculator shows Higher A = 36 points with no Band-1 / Band-2
              distinction, it is using the top (Band-1) value as a shortcut and will
              overestimate your Tariff by up to three points per Higher, or four points per
              Advanced Higher, if your actual grade falls in Band-2.
            </div>
          </section>

          {/* Higher Table */}
          <section id="higher-table" aria-labelledby="higher-heading">
            <h2 id="higher-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Scottish Higher UCAS Points (Grade-by-Grade)
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Highers are typically sat in Year S5 in Scotland. Most Scottish-domiciled
              applicants present five Highers for first-round entry.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">Scottish Higher to UCAS points, Band-1 and Band-2</caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Higher grade</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Raw band</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">UCAS points</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">A-Level / AS / EPQ equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {higherRows.map((r) => (
                      <tr key={r.grade + r.points} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold tabular-nums">{r.grade}</td>
                        <td className="px-5 py-3 tabular-nums text-zinc-600 dark:text-zinc-400">{r.a}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-amber-50 px-2 py-1 font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                            {r.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs leading-6 text-zinc-600 dark:text-zinc-400">{r.eq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Advanced Higher Table */}
          <section id="adv-higher-table" aria-labelledby="adv-heading">
            <h2 id="adv-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Scottish Advanced Higher UCAS Points (Grade-by-Grade)
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Advanced Highers are typically sat in S6 and are treated by UCAS as the direct
              Scottish equivalent of a full A-Level sized Level 3 unit.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">Scottish Advanced Higher to UCAS points</caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Advanced Higher grade</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Raw band</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">UCAS points</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Direct equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {advancedRows.map((r) => (
                      <tr key={r.grade + r.points} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold tabular-nums">{r.grade}</td>
                        <td className="px-5 py-3 tabular-nums text-zinc-600 dark:text-zinc-400">{r.a}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-orange-50 px-2 py-1 font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                            {r.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs leading-6 text-zinc-600 dark:text-zinc-400">{r.eq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* A-Level Equivalence Chart */}
          <section id="equiv-chart" aria-labelledby="equiv-heading">
            <h2 id="equiv-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Advanced Higher vs A-Level vs Higher Equivalence Chart
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              The bar chart below shows the single-subject 32–56 point range for Advanced Higher
              Band-1 grades plotted next to the corresponding A-Level, IB HL and Higher A grades
              so you can visualise the Scottish progression from Higher to Advanced Higher in the
              context of rUK A-Levels.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <ul role="list" className="space-y-5">
                {[
                  { label: "Adv Higher A Band-1 / A-Level A* / IB HL 7", bar: 100, points: 56, color: "from-orange-500 via-amber-500 to-yellow-500" },
                  { label: "Adv Higher A Band-2", bar: 92, points: 52, color: "from-amber-500 via-yellow-500 to-emerald-500" },
                  { label: "Adv Higher B Band-1 / A-Level A / IB HL 6", bar: 85, points: 48, color: "from-amber-500 via-orange-500 to-rose-500" },
                  { label: "Adv Higher B Band-2", bar: 78, points: 44, color: "from-amber-500 via-orange-500 to-indigo-500" },
                  { label: "Adv Higher C Band-1 / A-Level B / IB HL 5", bar: 71, points: 40, color: "from-amber-500 to-indigo-500" },
                  { label: "Adv Higher C Band-2 / Higher A Band-1", bar: 64, points: 36, color: "from-indigo-500 to-violet-500" },
                  { label: "Adv Higher D / A-Level C / Higher A Band-2", bar: 57, points: 32, color: "from-indigo-500 to-fuchsia-500" },
                  { label: "Higher B Band-1", bar: 53, points: 30, color: "from-indigo-500 to-sky-500" },
                ].map((row) => (
                  <li key={row.label}>
                    <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-zinc-700 dark:text-zinc-200">
                      <span>{row.label}</span>
                      <span className="tabular-nums">{row.points} pts</span>
                    </div>
                    <div aria-hidden className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                      <div className={`h-full rounded-full bg-gradient-to-r ${row.color}`} style={{ width: `${row.bar}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5 Highers Profile Examples */}
          <section id="profiles" aria-labelledby="profile-heading">
            <h2 id="profile-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Five-Higher S5 Profile Examples and Total Tariff Points
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              The most common first-round Scottish application to a Scottish university is built
              on five Highers from S5, sometimes topped up by two Advanced Highers in S6 for
              rUK Russell Group or competitive degrees. Below are representative point totals for
              realistic S5 combinations (all figures assume Band-1 results where applicable;
              Band-2 results reduce each subject by the values in the grade table above).
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { profile: "5 × Higher A Band-1 (AAAAA)", total: 180, note: "Competitive for Medicine, Law, Oxbridge after Adv Highers", accent: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300" },
                { profile: "5 × Higher AABB/B Band-1 (AABBB)", total: 162, note: "Very strong St Andrews / Edinburgh first-round profile", accent: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300" },
                { profile: "5 × Higher BBC/B Band-1 (BBBBC)", total: 138, note: "Common clearing / mid-tariff Glasgow / Strathclyde baseline", accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" },
              ].map((p) => (
                <div key={p.profile} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <div className={`p-4 text-sm font-semibold ${p.accent}`}>{p.profile}</div>
                  <div className="p-5">
                    <p className="text-xs leading-6 text-zinc-600 dark:text-zinc-400">Total S5 Tariff points (Band-1 only):</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight tabular-nums text-zinc-900 dark:text-zinc-50">{p.total}</p>
                    <p className="mt-3 text-xs leading-6 text-zinc-600 dark:text-zinc-400">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Scottish Highers UCAS Points — Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
              {FAQ.map((f, i) => (
                <details key={f.q} className="group px-5 py-4" open={i === 1}>
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

          {/* Cross links */}
          <section id="crosslinks" aria-labelledby="xl-heading" className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h2 id="xl-heading" className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
              Compare Scottish Highers to other Level 3 pathways
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Link
                href="/a-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconALevel size={24} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-400">A-Level UCAS Points Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">A* to E exact A-Level and AS half-scale values, direct 1:1 Advanced Higher equivalence.</p>
              </Link>
              <Link
                href="/ib-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconIB size={24} className="text-emerald-600 dark:text-emerald-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-50 dark:group-hover:text-emerald-400">IB UCAS Points Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">Higher Level, Standard Level and EE+TOK core bonus IB Diploma Tariff values for rUK study.</p>
              </Link>
              <Link
                href="/access-epq-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTable size={24} className="text-violet-600 dark:text-violet-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400">Access to HE &amp; EPQ Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">Mature Access Diploma D/M/P combinations plus EPQ and Welsh Bacc Advanced Skills Challenge Certificate.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
