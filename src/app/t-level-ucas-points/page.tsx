import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { IconTLevel, IconCalculator, IconTable, IconBTEC, IconALevel } from "@/components/icons";

const DATE_PUBLISHED = "2026-08-19";
const DATE_MODIFIED = "2026-08-21";

export const metadata: Metadata = {
  title: "T-Level UCAS Points | 2025/26 Distinction* to Near Pass Tariff Guide",
  description:
    "T-Level UCAS points 2025/26 official tariff table: Distinction*=168, Distinction=144, Merit=120, Pass=96, Near Pass=72. A-Level equivalence, university acceptance rules and ten real-user FAQs.",
  keywords: [
    "t level ucas points",
    "t-level distinction ucas points",
    "t level merit ucas points",
    "t level pass ucas points",
    "t level near pass ucas points",
    "t level 168 points",
    "t level vs btec ucas tariff",
    "do universities accept t levels",
    "t level to a level equivalence",
    "how many ucas points is a t level",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/t-level-ucas-points" },
  openGraph: {
    title: "T-Level UCAS Points | 2025/26 Distinction* – Near Pass Official Tariff",
    description:
      "T-Level Distinction* = 168 UCAS points (A*A*A* eq). Full five-grade table, A-Level bar chart equivalence and university acceptance FAQ.",
    url: "https://ucascalculator.com/t-level-ucas-points",
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Level UCAS Points | D*=168, D=144, M=120, P=96, NearP=72",
    description:
      "Official 2025/26 UCAS Tariff values for T-Levels with three-A-Level-size equivalence chart and real university acceptance FAQ.",
  },
  robots: { index: false, follow: false, "max-image-preview": "large", "max-snippet": -1 },
};

const TLEVEL_ROWS = [
  { grade: "Distinction*", gradeShort: "D*", pts: 168, eq: "A*A*A* (maximum 3 A-Levels)" },
  { grade: "Distinction", gradeShort: "D", pts: 144, eq: "AAA (Russell Group baseline)" },
  { grade: "Merit", gradeShort: "M", pts: 120, eq: "BBB (mid-tariff baseline)" },
  { grade: "Pass (C or above)", gradeShort: "P C+", pts: 96, eq: "CCC (lower-tariff / foundation-year entry)" },
  { grade: "Pass (below C) / Near Pass", gradeShort: "Near P", pts: 72, eq: "Below 3-subject A-Level standard; foundation / extended degrees only" },
];

const TLEVEL_CORE_ROWS = [
  { grade: "Distinction*", gradeShort: "D*", pts: 84, eq: "1.5 × A-Level size" },
  { grade: "Distinction", gradeShort: "D", pts: 72, eq: "AS + AS equivalent" },
  { grade: "Merit", gradeShort: "M", pts: 60, eq: "Mid AS-level combined value" },
  { grade: "Pass (C or above)", gradeShort: "P C+", pts: 48, eq: "Exactly one A-Level grade A" },
  { grade: "Pass (below C)", gradeShort: "Near P", pts: 36, eq: "Scottish Higher A Band-1 equivalent" },
  { grade: "Unclassified", gradeShort: "U", pts: 0, eq: "No Tariff value awarded" },
];

const FAQ = [
  {
    q: "How many UCAS points is a T-Level Distinction?",
    a: "A full T-Level at overall Distinction is worth exactly 144 UCAS Tariff points. Because T-Levels are sized on the UCAS Tariff as three full A-Level equivalent units, 144 points equals the same Tariff total as AAA at A-Level — the typical Russell Group three-subject baseline offer.",
  },
  {
    q: "How many UCAS points is a T-Level Distinction* (Distinction Star)?",
    a: "A T-Level at overall Distinction* (the highest T-Level grade) is worth exactly 168 UCAS Tariff points. This is the maximum three-A-Level Tariff value — A*A*A* at A-Level — and is the joint-highest single Level 3 vocational qualification value on the whole 2017 reform UCAS Tariff alongside a BTEC Extended Diploma at D*D*D*.",
  },
  {
    q: "How many UCAS points is a T-Level Merit?",
    a: "A full T-Level at Merit is worth 120 UCAS Tariff points. On the three-A-Level equivalence scale used by the UCAS Tariff for T-Levels, 120 points equals BBB at A-Level — the standard mid-tariff university baseline offer at most post-1992 UK institutions.",
  },
  {
    q: "How many UCAS points is a T-Level Pass?",
    a: "A T-Level at Pass (grade C or above) is worth exactly 96 UCAS Tariff points — approximately CCC at A-Level, common for foundation year entry, extended degree programmes and lower-tariff undergraduate courses. A T-Level at Pass (below C, formerly widely called Near Pass) is worth 72 UCAS points.",
  },
  {
    q: "Do universities accept T-Levels the same as A-Levels?",
    a: "T-Levels are formally recognised on the UCAS Tariff at three-A-Level-equivalent value, so the points always count towards your overall Tariff total. In practice university acceptance varies significantly: applied and vocational courses (nursing, engineering, construction, digital, business) widely accept T-Levels directly; high-tariff academic Russell Group courses rarely list T-Levels as meeting a formal headline grade offer even though the Tariff value itself is recognised. Always check the specific course entry page on the university website.",
  },
  {
    q: "What is a T-Level worth compared to BTEC Extended Diploma?",
    a: "A T-Level and a BTEC National Extended Diploma are both sized as three A-Level units on the UCAS Tariff, so the grade-to-grade mapping is identical: T-Level Distinction* = BTEC D*D*D* = 168 points; T-Level Distinction = BTEC DDD = 144 points; T-Level Merit = BTEC MMM = 120 points; T-Level Pass C+ = BTEC PPP = 96 points. The main structural difference: T-Levels award one single overall grade, while a BTEC Extended Diploma combines three per-unit grades.",
  },
  {
    q: "How do T-Levels compare to A-Levels in size and Tariff value?",
    a: "T-Levels are exactly three-A-Level-sized on the 2017 reform UCAS Tariff, which is why each single overall T-Level grade covers the combined range of three A-Levels: top T-Level D* covers A*A*A* (168), down to T-Level Merit covering BBB (120). In guided learning hours a T-Level at 1920 GLH is actually larger than three A-Levels (approximately 1080 GLH combined), so the Tariff value per classroom hour is slightly lower.",
  },
  {
    q: "Does a T-Level include an industry placement?",
    a: "Yes — every T-Level programme includes a mandatory minimum 315-hour industry placement with an employer, and UCAS only tariffs the full T-Level once both the Core exam component and the Occupational Specialism component plus placement have been formally achieved. A partial T-Level (Core + placement only, Occupational Specialism not yet passed) carries a separate smaller Tariff scale worth 84 points maximum at Distinction*.",
  },
  {
    q: "What is the difference between a full T-Level and a T-Level Core only Tariff?",
    a: "A full T-Level (Core exam + Occupational Specialism + mandatory industry placement all achieved) is tariffed at three-A-Level size: 168 / 144 / 120 / 96 / 72 points. A partial T-Level (Core component + placement achieved but Occupational Specialism not yet completed or passed) is tariffed separately at roughly 1.5 A-Level size: Distinction* = 84, Distinction = 72, Merit = 60, Pass = 48, Pass below C = 36, Unclassified = 0. Universities treat partial T-Levels as supplementary qualifications rather than a standalone three-A-Level equivalent profile.",
  },
  {
    q: "Is 120 UCAS points from a T-Level Merit the same as 120 from three A-Levels BBB?",
    a: "For raw UCAS Tariff arithmetic, yes — 120 points is 120 points on the official 2017 reform scale regardless of the qualification source. For meeting a specific university course's formal grade offer, no: many courses explicitly require three separate A-Level (or BTEC Extended Diploma unit) grades and will not accept a single T-Level overall grade as meeting a three-grade A-Level style headline offer even when the Tariff numbers are identical. Always verify with the university or on the UCAS course search entry.",
  },
];

export default function TLevelUcasPointsPage() {
  return (
    <>
      <Script id="webpage-schema-tlevel" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "T-Level UCAS Points | 2025/26 Distinction* to Near Pass Official Tariff",
          description:
            "Full T-Level grade-by-grade UCAS Tariff values for 2025/26 with three-A-Level equivalence and university acceptance rules.",
          url: "https://ucascalculator.com/t-level-ucas-points",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          about: [
            { "@type": "Thing", "name": "T-Levels (Technical Levels)" },
            { "@type": "Thing", "name": "T-Level Core Component" },
            { "@type": "Thing", "name": "UCAS Tariff points" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-tlevel" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 2, name: "UCAS Tariff Points Calculator", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 3, name: "T-Level UCAS Points", item: "https://ucascalculator.com/t-level-ucas-points" },
          ],
        })}
      </Script>
      <Script id="faq-schema-tlevel" type="application/ld+json" strategy="afterInteractive">
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

      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white via-rose-50/30 to-zinc-50 pb-14 pt-12 sm:pt-16 dark:border-zinc-800 dark:from-zinc-950 dark:via-rose-950/10 dark:to-zinc-950">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="relative mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/10 ring-4 ring-white/60 dark:ring-zinc-900/60 sm:h-16 sm:w-16">
              <IconTLevel size={26} />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              Dedicated Guide · 2025/26 Tariff
            </div>
            <h1 className="mt-3 max-w-[850px] text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
              T-Level UCAS Points
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
              Official UCAS Tariff values for every full T-Level overall grade from Distinction* (168 pts) down to Near Pass (72 pts), with A-Level equivalence, partial Core-only tariff and real university acceptance notes.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              T-Levels are tariffed at three A-Level-equivalent size: Distinction = 144 = AAA.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/" className="inline-flex h-11 items-center gap-2 rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-white">
                <IconCalculator size={18} /> Calculate Tariff total
              </Link>
              <Link href="/ucas-tariff-points-table" className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800">
                <IconTable size={18} /> Open full Tariff table
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
            <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-200">
              <strong className="text-zinc-900 dark:text-zinc-50">T-Levels</strong> (Technical Levels, England) are two-year Level 3 technical qualifications combining classroom study with a mandatory 315-hour minimum industry placement. Each full T-Level is tariffed by UCAS as a single <em>overall</em> grade, sized equivalent to three A-Levels — so top grade Distinction* equals exactly A*A*A* at 168 points. Most modern vocational, nursing, engineering, construction, digital and business UK university courses formally accept T-Level grades in their published entry requirements alongside A-Levels and BTEC Nationals.
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
              The 2025/26 UCAS Tariff table also publishes a smaller Core-only scale for applicants who complete the T-Level Core written exam + industry placement but have not yet passed the full Occupational Specialism component. Core-only T-Level max Distinction* = 84 points.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1000px] space-y-14 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Full T-Level table */}
        <section aria-labelledby="tlevel-full-heading">
          <h2 id="tlevel-full-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            Full T-Level UCAS Tariff Points Grade Table (Overall)
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            How do T-Level overall grades convert to UCAS points? Every full T-Level (Core + Occupational Specialism + mandatory industry placement achieved) uses the five-grade scale below. All figures are taken directly from the published 2025/26 UCAS Tariff table.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">Full T-Level overall grades and UCAS Tariff points 2025/26</caption>
                <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-left font-semibold">Overall T-Level grade</th>
                    <th scope="col" className="px-5 py-3 text-left font-semibold">Code</th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold">UCAS points</th>
                    <th scope="col" className="px-5 py-3 text-left font-semibold">3 × A-Level equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {TLEVEL_ROWS.map((r) => (
                    <tr key={r.gradeShort} className="text-zinc-800 dark:text-zinc-100">
                      <td className="px-5 py-3 font-semibold">{r.grade}</td>
                      <td className="px-5 py-3">
                        <span className="inline-flex h-7 min-w-[44px] items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-orange-500 px-2 text-xs font-black text-white shadow-sm">{r.gradeShort}</span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="inline-flex rounded-md bg-rose-50 px-2 py-1 font-bold tabular-nums text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">{r.pts}</span>
                      </td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-300">{r.eq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Core-only table */}
        <section aria-labelledby="tlevel-core-heading">
          <h2 id="tlevel-core-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            T-Level Core-Only &amp; Placement UCAS Tariff (Partial)
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            What if you only pass the T-Level Core exams plus mandatory industry placement, and have not yet completed or passed the full Occupational Specialism? UCAS tariffs this partial outcome on a separate smaller six-grade scale.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <caption className="sr-only">T-Level Core component only + placement UCAS Tariff points 2025/26</caption>
                <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-left font-semibold">Core grade</th>
                    <th scope="col" className="px-5 py-3 text-left font-semibold">Abbrev.</th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold">UCAS points</th>
                    <th scope="col" className="px-5 py-3 text-left font-semibold">Approx. equivalence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {TLEVEL_CORE_ROWS.map((r) => (
                    <tr key={r.gradeShort} className="text-zinc-800 dark:text-zinc-100">
                      <td className="px-5 py-3 font-semibold">{r.grade}</td>
                      <td className="px-5 py-3">
                        <span className="inline-flex h-7 min-w-[44px] items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-yellow-500 px-2 text-xs font-black text-white shadow-sm">{r.gradeShort}</span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="inline-flex rounded-md bg-amber-50 px-2 py-1 font-bold tabular-nums text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">{r.pts}</span>
                      </td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-300">{r.eq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Equivalence visual */}
        <section aria-labelledby="tlevel-eq-heading">
          <h2 id="tlevel-eq-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            T-Level vs A-Level, BTEC &amp; IB Equivalence Chart
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Because full T-Levels are three-A-Level-sized, each T-Level grade maps cleanly to familiar three-A-Level Tariff totals used by every UK university admissions team.
          </p>
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Three-A-Level-equivalent visual comparison</h3>
            <div role="img" aria-label="T-Level grade vs A-Level total equivalence bar chart" className="mt-5 space-y-5">
              {[
                { name: "T-Level D* · A*A*A* · BTEC D*D*D*", pts: 168, color: "from-rose-500 to-orange-500" },
                { name: "T-Level D · AAA · BTEC DDD · IB HL 7,7,6", pts: 144, color: "from-indigo-500 to-violet-500" },
                { name: "T-Level M · BBB · BTEC MMM", pts: 120, color: "from-emerald-500 to-teal-500" },
                { name: "T-Level Pass (C+) · CCC · BTEC PPP", pts: 96, color: "from-sky-500 to-blue-500" },
                { name: "T-Level Pass (below C) · Near Pass", pts: 72, color: "from-zinc-500 to-zinc-400" },
              ].map((row) => {
                const pct = Math.round((row.pts / 168) * 100);
                return (
                  <div key={row.name}>
                    <div className="mb-1 flex items-center justify-between text-xs font-medium text-zinc-700 dark:text-zinc-200">
                      <span>{row.name}</span>
                      <span className="tabular-nums">{row.pts} pts</span>
                    </div>
                    <div className="h-6 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                      <div aria-hidden className={`h-full rounded-lg bg-gradient-to-r ${row.color}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rules / gotchas */}
        <section aria-labelledby="tlevel-rules-heading">
          <h2 id="tlevel-rules-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            T-Level-Specific Tariff Rules &amp; Gotchas
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                <IconTLevel size={20} />
              </div>
              <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-50">Single overall grade (not combined units)</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                Unlike BTEC Nationals, where an Extended Diploma combines three separate per-unit grades (e.g. D*DD = 152 points by summing D* + D + D individually), a T-Level is always awarded one single five-band overall grade by the awarding body. You cannot combine partial T-Level unit grades independently in your Tariff sum; UCAS only tariffs the confirmed overall grade or the Core-only outcome.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-sm dark:border-amber-900/40 dark:bg-amber-500/5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm dark:bg-zinc-900 dark:text-amber-300">
                <IconALevel size={20} />
              </div>
              <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-50">University acceptance rules differ from raw Tariff</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                The 144-point raw Tariff value of a T-Level Distinction is arithmetically identical to AAA at A-Level. For vocational/applied degree programmes the two are treated equivalently; for traditional academic Russell Group courses universities frequently list three separate A-Level (or IB HL) grades in their formal requirements and will not accept a single T-Level overall grade as substituting that three-grade profile, even when the Tariff number matches. Always confirm on the individual course page.
              </p>
            </div>
          </div>
        </section>

        {/* Cross links */}
        <section aria-labelledby="tlevel-cross-heading">
          <h2 id="tlevel-cross-heading" className="text-lg font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Related Tariff guides
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link href="/btec-ucas-points" className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-fuchsia-200 hover:shadow-lg hover:shadow-fuchsia-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-fuchsia-900/60">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white shadow-sm">
                <IconBTEC size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 group-hover:text-fuchsia-600 dark:text-zinc-50 dark:group-hover:text-fuchsia-300">BTEC UCAS Points Guide →</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Direct three-A-Level-size grade-for-grade comparison: T-Level vs BTEC Extended Diploma, plus QCF and RQF variants.</p>
              </div>
            </Link>
            <Link href="/a-level-ucas-points" className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900/60">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 text-white shadow-sm">
                <IconALevel size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-300">A-Level UCAS Points Guide →</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Benchmark individual A-Level grades against T-Level totals, including full AS-Level half-scale and reform-2017 rules.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ (10 questions) */}
        <section aria-labelledby="tlevel-faq-heading">
          <h2 id="tlevel-faq-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            T-Level UCAS Points — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Ten of the most common real-user search questions about T-Level UCAS Tariff values, answered using figures from the official published 2025/26 UCAS Tariff table and standard UK university admissions guidance.
          </p>
          <div className="mt-6 space-y-3">
            {FAQ.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all open:border-indigo-200 open:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:open:border-indigo-900/60">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>{f.q}</span>
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-zinc-100 text-lg text-zinc-500 transition-transform group-open:rotate-45 dark:bg-zinc-800 dark:text-zinc-300">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
