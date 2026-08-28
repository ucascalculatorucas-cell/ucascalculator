import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { IconIB, IconCalculator, IconTable, IconALevel, IconBTEC } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "IB UCAS Points 2025/2026 | Higher Level, Standard Level, Extended Essay + TOK Core Bonus",
  description:
    "IB UCAS Tariff points grade-by-grade for IB Diploma Higher Level (7-4) and Standard Level (7-3), plus the Extended Essay + Theory of Knowledge 0-3 core bonus. A-Level equivalence chart, subject rules and 2025/26 UCAS tariff scale.",
  keywords: [
    "ib ucas points",
    "ib higher level ucas points",
    "ib standard level ucas points",
    "ib diploma ucas points",
    "ib grade 7 ucas points",
    "extended essay tok ucas points bonus",
    "ib 40 diploma points ucas tariff",
    "ib hl 6 ucas points",
    "ib sl 6 ucas points",
    "ib 42 points ucas equivalent",
    "ib to a level ucas equivalence",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/ib-ucas-points" },
  openGraph: {
    title: "IB UCAS Points 2025/2026 — HL, SL, EE + TOK Core Bonus",
    description:
      "Higher Level 7 (56 pts = A-Level A*) down to SL 3 (12 pts). IB Core bonus, A-Level equivalence visual and 0–3 Theory of Knowledge + EE bonus.",
    url: "https://ucascalculator.com/ib-ucas-points",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "IB UCAS Points — HL, SL, Core Bonus Tables",
    description: "Higher Level, Standard Level and EE+TOK core bonus Tariff values for IB Diploma 2025/26.",
  },
  robots: { index: false, follow: false, "max-image-preview": "large", "max-snippet": -1 },
};

const DATE_PUBLISHED = "2026-06-01";
const DATE_MODIFIED = "2026-08-20";

const FAQ = [
  {
    q: "How many UCAS points is an IB Higher Level Grade 7?",
    a: "An IB Higher Level Grade 7 is worth exactly 56 UCAS Tariff points — the maximum value per single subject on the whole 2017 reform UCAS scale, identical to an A-Level A*, a BTEC Subsidiary D* and a Scottish Advanced Higher A Band-1.",
  },
  {
    q: "Are IB Standard Level subjects worth half of HL?",
    a: "Roughly, but the mapping is not an exact 50% division. IB HL 7 = 56, SL 7 = 28 (exactly half); HL 6 = 48, SL 6 = 24 (exactly half); HL 5 = 40, SL 5 = 20 (exactly half); HL 4 = 32, SL 4 = 16 (exactly half); so for grades 7, 6, 5, 4 the half-scale mapping holds perfectly. HL 3 = 24 points (one grade higher than SL 3 = 12 points).",
  },
  {
    q: "How much is the IB Extended Essay + Theory of Knowledge core worth in UCAS points?",
    a: "The IB Diploma Core (Extended Essay + Theory of Knowledge) earns up to 3 bonus UCAS points, awarded based on the combined EE/TOK grade matrix: A on both = 3 bonus points; A/B or B/A combination = 2 bonus points; most passing combinations = 1 bonus point; fails = 0. These points are added directly to the six subject Tariff total.",
  },
  {
    q: "How many IB Diploma points are roughly equivalent to AAA at A-Level?",
    a: "A rough IB Diploma to A-Level benchmark: 42+ total IB points (subjects + core) is broadly competitive with A*A*A*–A*AA Russell Group profiles; 38–41 IB points ≈ A*AA–AAA; 34–37 ≈ AAB–ABB; 30–33 ≈ BBB–BBC. Use the subject-by-subject tables on this page and the main UCAS calculator for exact, point-by-point totals instead of a rough score-band conversion.",
  },
];

const ibHL = [
  { grade: "HL 7", points: 56, eq: "A-Level A* / BTEC Subsidiary D*" },
  { grade: "HL 6", points: 48, eq: "A-Level A / Scottish Adv Higher B Band-1" },
  { grade: "HL 5", points: 40, eq: "A-Level B / IB Core 40 diploma benchmark" },
  { grade: "HL 4", points: 32, eq: "A-Level C / IB Diploma minimum passing subject" },
  { grade: "HL 3", points: 24, eq: "A-Level D / AS-Level A / EPQ A" },
];

const ibSL = [
  { grade: "SL 7", points: 28, eq: "AS-Level A / EPQ A* / Welsh Bacc Advanced A*" },
  { grade: "SL 6", points: 24, eq: "AS-Level A / EPQ A / IB HL 3" },
  { grade: "SL 5", points: 20, eq: "AS-Level B / EPQ B" },
  { grade: "SL 4", points: 16, eq: "AS-Level C / EPQ C / A-Level E" },
  { grade: "SL 3", points: 12, eq: "AS-Level D / EPQ D" },
];

const ibCore = [
  { matrix: "EE A + TOK A", points: 3, note: "Maximum 3 bonus points achievable" },
  { matrix: "EE A + TOK B / EE B + TOK A", points: 2, note: "Strong 2-point core combinations" },
  { matrix: "EE B + TOK B / EE C + TOK A / EE A + TOK C", points: 1, note: "Common passing 1-point combinations" },
  { matrix: "Most C/C and below, non-submission or fail", points: 0, note: "No core bonus awarded" },
];

export default function IbUcasPointsPage() {
  return (
    <>
      <Script id="webpage-schema-ib" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "IB UCAS Points 2025/2026",
          description:
            "Higher Level, Standard Level and EE+TOK Core Bonus grade-by-grade IB UCAS Tariff values for IB Diploma applicants.",
          url: "https://ucascalculator.com/ib-ucas-points",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          about: [
            { "@type": "Thing", "name": "International Baccalaureate Diploma Programme" },
            { "@type": "Thing", "name": "IB Higher Level (IB HL)" },
            { "@type": "Thing", "name": "IB Standard Level (IB SL)" },
            { "@type": "Thing", "name": "Extended Essay" },
            { "@type": "Thing", "name": "Theory of Knowledge" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-ib" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 2, name: "UCAS Tariff Points Calculator", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 3, name: "IB UCAS Points", item: "https://ucascalculator.com/ib-ucas-points" },
          ],
        })}
      </Script>
      <Script id="faq-schema-ib" type="application/ld+json" strategy="afterInteractive">
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
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400" aria-hidden>
            <IconIB size={32} />
            <p className="text-xs font-semibold uppercase tracking-wider">IB Diploma Programme Guide</p>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            IB UCAS Points
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Official 2017 reform UCAS Tariff grade-by-grade values for IB Higher Level subjects
            (HL 7 down to HL 3), IB Standard Level subjects (SL 7 down to SL 3), plus the
            Extended Essay + Theory of Knowledge core bonus matrix of up to 3 extra points for
            the 2025 and 2026 application cycles.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <strong>Short answer:</strong> IB Higher Level Grade 7 = 56 UCAS points (identical to
            A-Level A*), HL 6 = 48 (A-Level A), HL 5 = 40 (B), HL 4 = 32 (C). IB Standard Level
            is approximately half-scale: SL 7 = 28 points, SL 6 = 24, SL 5 = 20, SL 4 = 16. The
            EE + TOK core contributes up to three additional bonus Tariff points on top of the
            six-subject sum.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              <IconCalculator size={18} /> Calculate IB total now
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
          {/* HL Table */}
          <section id="ib-hl" aria-labelledby="hl-heading">
            <h2 id="hl-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              IB Higher Level (HL) UCAS Points Grade Table
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              IB Diploma applicants typically take three Higher Level subjects from Groups 1–5
              plus the Arts/elective Group 6. Each HL subject maps 1:1 to an A-Level sized Tariff
              unit on the 2017 reform scale.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">IB Higher Level to UCAS points</caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">IB HL grade</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">UCAS points</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">A-Level / BTEC Subsidiary equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {ibHL.map((r) => (
                      <tr key={r.grade} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold tabular-nums">{r.grade}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-emerald-50 px-2 py-1 font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
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

          {/* SL Table */}
          <section id="ib-sl" aria-labelledby="sl-heading">
            <h2 id="sl-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              IB Standard Level (SL) UCAS Points Grade Table
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Standard Level subjects are tariffed at approximately half the corresponding HL
              value, equivalent in size to an AS-Level. Applicants take three SL subjects in a
              standard IB Diploma.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">IB Standard Level to UCAS points</caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">IB SL grade</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">UCAS points</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">AS-Level / EPQ / Welsh Bacc equivalent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {ibSL.map((r) => (
                      <tr key={r.grade} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold tabular-nums">{r.grade}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-teal-50 px-2 py-1 font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
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

          {/* EE+TOK Core Bonus */}
          <section id="ib-core" aria-labelledby="core-heading">
            <h2 id="core-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Extended Essay + Theory of Knowledge Core Bonus UCAS Points Matrix
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Every full IB Diploma includes three mandatory Core components: Theory of
              Knowledge (TOK), the Extended Essay (EE) 4000-word independent research paper, and
              CAS (Creativity Activity Service, not tariffed). The combined EE + TOK grade matrix
              awards up to three bonus Tariff points on top of the six-subject grade sum.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">IB EE + TOK core bonus UCAS points</caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">EE + TOK combination</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Bonus UCAS points</th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {ibCore.map((r) => (
                      <tr key={r.matrix} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-semibold text-sm leading-6">{r.matrix}</td>
                        <td className="px-5 py-3 tabular-nums">
                          <span className="inline-flex rounded-md bg-sky-50 px-2 py-1 font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                            +{r.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs leading-6 text-zinc-600 dark:text-zinc-400">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              CAS hours are a mandatory IB Diploma requirement but are never awarded UCAS Tariff
              points. A predicted A in both EE and TOK is worth about as much extra Tariff value as
              upgrading one SL subject from grade 6 (24 points) to grade 7 (28 points).
            </p>
          </section>

          {/* HL vs A-Level equivalance visual */}
          <section id="equiv" aria-labelledby="equiv-heading">
            <h2 id="equiv-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              IB Higher Level vs A-Level Grade Equivalence Chart
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              IB HL 1–7 grades map almost perfectly to A-Level A* to D. The horizontal bars below
              visualise HL, A-Level and Scottish Advanced Higher side-by-side so you can compare a
              56-point maximum single-subject result across pathways.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <ul role="list" className="space-y-5">
                {[
                  { label: "IB HL 7 / A-Level A* / Adv Higher A Band-1", bar: 100, points: 56, color: "from-emerald-500 via-teal-500 to-sky-600" },
                  { label: "IB HL 6 / A-Level A / Adv Higher B Band-1", bar: 85, points: 48, color: "from-emerald-500 via-sky-500 to-indigo-600" },
                  { label: "IB HL 5 / A-Level B / Adv Higher C Band-1", bar: 71, points: 40, color: "from-sky-500 via-indigo-500 to-violet-600" },
                  { label: "IB HL 4 / A-Level C / Adv Higher D", bar: 57, points: 32, color: "from-indigo-500 via-violet-500 to-fuchsia-600" },
                  { label: "IB HL 3 / A-Level D / AS-Level A", bar: 42, points: 24, color: "from-violet-500 via-fuchsia-500 to-pink-600" },
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

          {/* Rules */}
          <section id="ib-rules" aria-labelledby="rules-heading">
            <h2 id="rules-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              IB Tariff Counting Rules and Common Application Pitfalls
            </h2>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Do universities require the full IB Diploma, or can you tariff individual IB subjects?
            </h3>
            <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              UCAS individually tariffs every IB HL and SL grade, whether or not you complete the
              full IB Diploma. However, universities frequently list full-Diploma score bands (for
              example 34–36 points) as an offer condition rather than individual subject Tariff
              totals. Always read the course-specific offer: the same raw IB points may count
              differently at a Russell Group PPE degree versus a mid-tariff business course.
            </p>
            <h3 className="mt-8 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Which IB components do not count towards the UCAS Tariff?
            </h3>
            <ul role="list" className="mt-3 space-y-2.5 pl-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <strong>IB CAS hours:</strong> never tariffed.
              </li>
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <strong>IB HL / SL grade 2 and grade 1:</strong> scores below a pass are not awarded UCAS Tariff points.
              </li>
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <strong>Non-diploma IB certificates:</strong> individual certificates are tariffed identically to Diploma Programme subjects at the same HL/SL grade, but some high-tariff courses list Diploma as a prerequisite.
              </li>
              <li className="relative">
                <span aria-hidden className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <strong>Retakes / remark bonus points:</strong> UCAS uses the highest single awarded grade per subject, identical to A-Level resits. There is no penalty or weighting for an IB remark or resit.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              IB UCAS Points — Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
              {FAQ.map((f, i) => (
                <details key={f.q} className="group px-5 py-4" open={i === 0}>
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
              Compare IB to other Level 3 pathways
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Link
                href="/a-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconALevel size={24} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-400">A-Level UCAS Points Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">A* to E A-Level and AS half-scale exact Tariff values, resit rules and common offers.</p>
              </Link>
              <Link
                href="/btec-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconBTEC size={24} className="text-fuchsia-600 dark:text-fuchsia-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-fuchsia-600 dark:text-zinc-50 dark:group-hover:text-fuchsia-400">BTEC UCAS Points Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">BTEC Extended / Diploma / Subsidiary / Certificate grade-by-grade Tariff with A-Level equivalence.</p>
              </Link>
              <Link
                href="/scottish-highers-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTable size={24} className="text-amber-600 dark:text-amber-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-amber-600 dark:text-zinc-50 dark:group-hover:text-amber-400">Scottish Highers &amp; Adv Higher Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">Scottish SQA Band-1 / Band-2 granular Tariff split for Highers and Advanced Highers.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
