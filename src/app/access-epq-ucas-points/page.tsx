import type { Metadata } from "next";
import Link from "next/link";

const DATE_PUBLISHED = "2026-08-19";
const DATE_MODIFIED = "2026-08-20";

export const metadata: Metadata = {
  title: "Access to HE & EPQ UCAS Points | 2025/26 Tariff Guide",
  description:
    "Access to HE Diploma D/M/P 45-credit combinations aur EPQ A*-E grade ki official UCAS Tariff points 2025/26. A-Level equivalence, Russell Group EPQ rules, aur mini-FAQ.",
  alternates: {
    canonical: "https://ucascalculator.com/access-epq-ucas-points",
  },
  openGraph: {
    title: "Access to HE & EPQ UCAS Points | 2025/26 Tariff Guide",
    description:
      "Access to HE Diploma 45-unit D/M/P combinations aur EPQ A*-E grade ki official UCAS Tariff points. A-Level equivalence aur Russell Group EPQ exclusion rules.",
    url: "https://ucascalculator.com/access-epq-ucas-points",
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
  },
  twitter: {
    card: "summary_large_image",
    title: "Access to HE & EPQ UCAS Points | 2025/26 Tariff Guide",
    description:
      "Access to HE 45D = 144 points (AAA eq). EPQ A* = 28 points. Full 2025/26 official Tariff lookup tables.",
  },
};

const accessRows = [
  { combo: "45 Credits at Distinction", short: "45D", points: 144, alevel: "AAA (144)" },
  { combo: "30 Distinction + 15 Merit", short: "30D 15M", points: 136, alevel: "AAB (136)" },
  { combo: "24 Distinction + 21 Merit", short: "24D 21M", points: 130, alevel: "ABB- (130)" },
  { combo: "15 Distinction + 30 Merit", short: "15D 30M", points: 122, alevel: "BBB+ (122)" },
  { combo: "45 Credits at Merit", short: "45M", points: 108, alevel: "BCC- (108)" },
  { combo: "30 Merit + 15 Pass", short: "30M 15P", points: 100, alevel: "CCC+ (100)" },
  { combo: "15 Merit + 30 Pass", short: "15M 30P", points: 88, alevel: "CCD (88)" },
  { combo: "45 Credits at Pass", short: "45P", points: 72, alevel: "DDD (72)" },
];

const epqRows = [
  { grade: "A*", points: 28, alevel: "AS Level A (24) + bonus" },
  { grade: "A", points: 24, alevel: "AS Level A (24)" },
  { grade: "B", points: 20, alevel: "AS Level B (20)" },
  { grade: "C", points: 16, alevel: "AS Level C (16) / A-Level E (16)" },
  { grade: "D", points: 12, alevel: "AS Level D (12)" },
  { grade: "E", points: 8, alevel: "AS Level E (8)" },
];

const faqs = [
  {
    q: "What is Access to HE 45 Distinctions worth in UCAS points?",
    a: "45 Distinctions on the Access to HE Diploma = 144 UCAS Tariff points, exactly equivalent to AAA at A-Level (the most common three-A-Level Russell Group baseline offer).",
  },
  {
    q: "Is EPQ counted by Russell Group universities?",
    a: "EPQ is officially tariffed by UCAS (A* = 28 points), but most Russell Group and high-tariff STEM courses explicitly exclude the EPQ from formally meeting a course's headline offer grade — even though the points appear in your total Tariff score. Humanities courses are more likely to accept EPQ points towards an offer.",
  },
  {
    q: "How many UCAS points is an EPQ A grade?",
    a: "An EPQ grade A = 24 UCAS Tariff points, exactly the same value as an AS Level A. An EPQ A* is worth 28 points, making it the highest-value single AS-sized Level 3 qualification outside A-Level/IB HL.",
  },
  {
    q: "Does a 30D 15M Access Diploma beat a BBC at A-Level?",
    a: "Yes — 30 Distinctions + 15 Merits on Access to HE = 136 Tariff points, while BBC at A-Level = 112 points. Access 30D15M is actually equivalent to AAB (136 points), a full grade band higher than BBC.",
  },
];

export default function AccessEpqGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://ucascalculator.com/access-epq-ucas-points#webpage",
                url: "https://ucascalculator.com/access-epq-ucas-points",
                name: "Access to HE & EPQ UCAS Points | 2025/26 Tariff Guide",
                isPartOf: {
                  "@id": "https://ucascalculator.com/#website",
                },
                datePublished: DATE_PUBLISHED,
                dateModified: DATE_MODIFIED,
                inLanguage: "en-GB",
                about: [
                  {
                    "@type": "Thing",
                    name: "Access to Higher Education Diploma",
                  },
                  {
                    "@type": "Thing",
                    name: "EPQ (Extended Project Qualification)",
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://ucascalculator.com/access-epq-ucas-points#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ucascalculator.com",
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
                    name: "Access to HE & EPQ UCAS Points",
                    item: "https://ucascalculator.com/access-epq-ucas-points",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://ucascalculator.com/access-epq-ucas-points#faq",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
            ],
          }),
        }}
      />
      <section className="pt-10 pb-6 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-[1000px] px-5">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Combined Guide
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Access to HE &amp; EPQ UCAS Points
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Official 2025/26 UCAS Tariff values for Access to HE Diploma
              D/M/P credit combinations and EPQ A*–E grades with A-Level
              equivalence and university counting rules.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Calculate your total now
              </Link>
              <Link
                href="/ucas-tariff-points-table"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Open full Tariff table
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 mb-10 shadow-sm">
            <p className="text-base leading-relaxed text-slate-700">
              <strong>Access to HE Diploma</strong> UCAS Tariff points are
              calculated from the 45 graded Level 3 credit units at
              Distinction, Merit, or Pass — 45 Distinctions earns 144 points
              (AAA equivalent), making Access a fully recognised pathway into
              UK undergraduate degrees for mature and non-A-Level students.
            </p>
            <p className="text-base leading-relaxed text-slate-700 mt-3">
              The <strong>Extended Project Qualification (EPQ)</strong> is a
              standalone Level 3 research project worth up to 28 Tariff points
              at A*. Most universities award EPQ points, but many Russell
              Group STEM courses exclude them from formally meeting a
              headline offer grade even though they appear in your total.
            </p>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            Access to HE Diploma UCAS Tariff Points Table
          </h2>
          <p className="text-slate-600 mb-4 text-base leading-relaxed">
            How Do Access to HE Credit Combinations Convert to UCAS Points?
            Every Access Diploma uses exactly 45 graded credit units; the
            table below covers all eight recognised D/M/P combinations
            published in the 2025/26 UCAS Tariff.
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Access to HE Diploma 45-unit D/M/P combinations and UCAS
                  Tariff points 2025/26
                </caption>
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200">
                      Credit Combination
                    </th>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200">
                      Shorthand
                    </th>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200 text-right">
                      UCAS Points
                    </th>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200">
                      A-Level Equivalent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {accessRows.map((row, i) => (
                    <tr
                      key={row.short}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }
                    >
                      <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-900 whitespace-nowrap">
                        {row.combo}
                      </td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-600 font-mono text-xs">
                        {row.short}
                      </td>
                      <td className="px-4 py-3 border-b border-slate-100 text-right">
                        <span className="inline-block min-w-[3ch] font-bold text-slate-900 text-base tabular-nums">
                          {row.points}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-700 whitespace-nowrap">
                        {row.alevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            EPQ UCAS Tariff Points Table (A* to E)
          </h2>
          <p className="text-slate-600 mb-4 text-base leading-relaxed">
            What Is a Distinction or A* Worth in EPQ UCAS Points? The EPQ
            uses a six-grade A* to E scale identical in size to an AS Level,
            with A* EPQ actually worth 4 points more than an AS A (28 vs 24).
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  EPQ A* to E grades and UCAS Tariff points 2025/26
                </caption>
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200">
                      EPQ Grade
                    </th>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200 text-right">
                      UCAS Points
                    </th>
                    <th className="px-4 py-3 font-semibold border-b border-slate-200">
                      A-Level / AS Equivalent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {epqRows.map((row, i) => (
                    <tr
                      key={row.grade}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }
                    >
                      <td className="px-4 py-3 border-b border-slate-100">
                        <span className="inline-flex h-8 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-black text-white shadow-sm">
                          {row.grade}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-slate-100 text-right">
                        <span className="inline-block min-w-[3ch] font-bold text-slate-900 text-base tabular-nums">
                          {row.points}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-slate-100 text-slate-700 whitespace-nowrap">
                        {row.alevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            Access to HE &amp; EPQ vs A-Level Equivalence
          </h2>
          <p className="text-slate-600 mb-6 text-base leading-relaxed">
            How Do Access to HE and EPQ Points Compare to A-Level Grades?
            Access 45D matches AAA at the top, while EPQ sits between AS and
            full A-Level in per-grade size.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 mb-10 shadow-sm space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900">
                  Access 45D — 144 pts
                </span>
                <span className="text-xs font-medium text-slate-500">
                  = A-Level AAA
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                  style={{ width: `${(144 / 168) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900">
                  Access 30D15M — 136 pts
                </span>
                <span className="text-xs font-medium text-slate-500">
                  = A-Level AAB
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500/70"
                  style={{ width: `${(136 / 168) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900">
                  Access 45M — 108 pts
                </span>
                <span className="text-xs font-medium text-slate-500">
                  = BBC-
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                  style={{ width: `${(108 / 168) * 100}%` }}
                />
              </div>
            </div>
            <div className="border-t border-slate-100 pt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900">
                  EPQ A* — 28 pts
                </span>
                <span className="text-xs font-medium text-slate-500">
                  AS A+ bonus
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                  style={{ width: `${(28 / 168) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900">
                  EPQ A — 24 pts
                </span>
                <span className="text-xs font-medium text-slate-500">
                  = AS A
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                  style={{ width: `${(24 / 168) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-500">
                  A-Level A*A*A* (max 3 A-Levels) — 168 pts reference
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-300"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            Qualification-Specific Rules &amp; Gotchas
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Access to HE: Only the 45 graded units count
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Access Diplomas are typically 60 credits total, but UCAS
                only tariffs the 45 Level 3 graded units (Distinction /
                Merit / Pass). The remaining 15 credits are ungraded Skills
                for Learning or project units — these never add Tariff
                points, even if completed at high standard. Northern
                Ireland Access Diplomas use a separate scale not listed
                here.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                EPQ: Russell Group / high-tariff STEM exclusion
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                EPQ and Welsh Baccalaureate Advanced Skills Challenge
                Certificate both appear on your UCAS Tariff total, but the
                majority of Russell Group and high-tariff STEM courses
                explicitly write them out of a formal offer — meaning your
                three A-Levels (or IB / BTEC equivalent) must hit the
                grade on their own. Humanities, social science, and arts
                courses are far more likely to accept EPQ points towards
                meeting an offer.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 mb-12">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md open:border-slate-300"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-slate-900 text-base">
                  <span>{f.q}</span>
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-500 text-lg group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            More UCAS Tariff Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Link
              href="/a-level-ucas-points"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 mb-4 flex items-center justify-center text-xs font-black text-white">
                AL
              </div>
              <h3 className="font-bold text-slate-900 mb-1">
                A-Level UCAS Points
              </h3>
              <p className="text-sm text-slate-600">
                A*–E + AS A–E official tariff with reform rules.
              </p>
            </Link>
            <Link
              href="/scottish-highers-ucas-points"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 flex items-center justify-center text-xs font-black text-white">
                SC
              </div>
              <h3 className="font-bold text-slate-900 mb-1">
                Scottish Highers UCAS Points
              </h3>
              <p className="text-sm text-slate-600">
                Band-1 / Band-2 split for Higher and Advanced Higher.
              </p>
            </Link>
            <Link
              href="/btec-ucas-points"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-4 flex items-center justify-center text-xs font-black text-white">
                BT
              </div>
              <h3 className="font-bold text-slate-900 mb-1">
                BTEC UCAS Points
              </h3>
              <p className="text-sm text-slate-600">
                Extended, Diploma, Subsidiary &amp; Certificate 2025/26
                tariff.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
