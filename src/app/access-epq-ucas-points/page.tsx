import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import {
  IconAccess,
  IconCalculator,
  IconTable,
  IconALevel,
  IconScottish,
  IconBTEC,
  IconIB,
  IconTLevel,
} from "@/components/icons";

const DATE_PUBLISHED = "2026-08-19";
const DATE_MODIFIED = "2026-08-20";

export const metadata: Metadata = {
  title:
    "Access to HE & EPQ UCAS Points | 2025/26 Tariff Guide — Access Diploma D/M/P Combinations + EPQ A* to E",
  description:
    "Access to HE Diploma 45-graded-credit D/M/P combinations (45D=144=AAA through 45P=72) and EPQ A* to E grade UCAS Tariff points 2025/26. A-Level equivalence visuals, Russell Group EPQ counting rules, Access to HE unit rules and common gotchas with full FAQ.",
  keywords: [
    "access to he ucas points",
    "access to he diploma ucas points",
    "access to he 45 distinctions ucas points",
    "epq ucas points",
    "epq a star ucas points",
    "epq a ucas points",
    "45d ucas points access",
    "30d 15m access ucas points",
    "access to he vs a level ucas tariff",
    "does russell group count epq",
    "access to he 45 merits ucas points",
    "epq btec access combined ucas points",
    "welsh bacc advanced skills challenge certificate ucas points",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/access-epq-ucas-points" },
  openGraph: {
    title: "Access to HE & EPQ UCAS Points | 2025/26 D/M/P + A*–E Tariff",
    description:
      "Access to HE Diploma 45D through 45P combinations, EPQ A* to E grades, Access to HE unit counting rules and Russell Group EPQ exclusion rules — 2025/26 UCAS Tariff.",
    url: "https://ucascalculator.com/access-epq-ucas-points",
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Access & EPQ UCAS Points 2025/26",
    description:
      "Access 45D = 144 pts, EPQ A* = 28 pts. Full Tariff lookup + counting rules FAQ.",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
      <Script id="webpage-schema-aepq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Access to HE & EPQ UCAS Points 2025/26",
          description:
            "Access to HE Diploma 45 graded credit D/M/P combinations (45D through 45P) Access Tariff values. Also covers EPQ A* through E grade UCAS Tariff values, Welsh Bacc Advanced Skills Challenge Certificate, Access counting rules and Russell Group EPQ exclusion rules for the 2025/26 and 2026 UK university entry cycles.",
          url: "https://ucascalculator.com/access-epq-ucas-points",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://ucascalculator.com/access-epq-ucas-points",
          },
          about: [
            { "@type": "Thing", "name": "Access to Higher Education Diploma" },
            { "@type": "Thing", "name": "Extended Project Qualification (EPQ)" },
            { "@type": "Thing", "name": "Welsh Baccalaureate Advanced Skills Challenge Certificate" },
            { "@type": "Thing", "name": "Access to HE Northern Ireland separate scale" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-aepq" type="application/ld+json" strategy="afterInteractive">
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
              name: "Access to HE & EPQ UCAS Points",
              item: "https://ucascalculator.com/access-epq-ucas-points",
            },
          ],
        })}
      </Script>
      <Script id="faq-schema-aepq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}
      </Script>

      <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400" aria-hidden>
            <IconAccess size={32} />
            <p className="text-xs font-semibold uppercase tracking-wider">
              Access &amp; EPQ Guide — 2025/26 Tariff
            </p>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Access to HE &amp; EPQ UCAS Points
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Official 2017-reform UCAS Tariff values for Access to HE Diploma 45-credit D/M/P
            combinations and the Extended Project Qualification A* to E grades used in the 2025 and 2026
            application cycles. Exact grade-by-grade lookup, visual A-Level equivalence chart across
            BTEC and IB, Access-only unit counting rules and the Russell Group EPQ exclusion
            rule most EPQ applicants get wrong.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <strong>Short answer:</strong> Access to HE 45 Distinctions = 144 UCAS points (exact AAA
            A-Level equivalent). Access 45 Merits = 108 points, Access 45 Passes = 72 points. EPQ A*
            = 28 points (the highest AS-sized Level 3 value on the scale); EPQ A = 24 points,
            same value as an AS-Level A. Northern Ireland Access diplomas use a separate scale not
            listed here. Welsh Bacc Advanced Skills Challenge Certificate shares the EPQ 6-grade scale
            (A* through E = 28 to 8 points exactly).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#calculator"
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

        <div className="space-y-12 sm:space-y-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              <strong>Access to HE Diploma</strong> UCAS Tariff points are calculated from the 45
              graded Level 3 credit units at Distinction, Merit, or Pass — 45 Distinctions
              earns 144 points (AAA equivalent), making Access a fully recognised pathway into
              UK undergraduate degrees for mature and non-A-Level students.
            </p>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              The <strong>Extended Project Qualification (EPQ)</strong> is a standalone Level 3
              research project worth up to 28 Tariff points at A*. Most universities award EPQ
              points, but many Russell Group STEM courses exclude them from formally meeting a
              headline offer grade even though they appear in your total.
            </p>
          </div>

          <section id="access-table" aria-labelledby="access-table-heading">
            <h2
              id="access-table-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              Access to HE Diploma UCAS Tariff Points Table
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              How Do Access to HE Credit Combinations Convert to UCAS Points? Every Access
              Diploma uses exactly 45 graded credit units; the table below covers all eight
              recognised D/M/P combinations published in the 2025/26 UCAS Tariff.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">
                    Access to HE Diploma 45-unit D/M/P combinations and UCAS Tariff points 2025/26
                  </caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">
                        Credit Combination
                      </th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">
                        Shorthand
                      </th>
                      <th scope="col" className="px-5 py-3 text-right font-semibold">
                        UCAS Points
                      </th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">
                        A-Level Equivalent
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {accessRows.map((row) => (
                      <tr key={row.short} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3 font-medium whitespace-nowrap text-zinc-900 dark:text-zinc-50">
                          {row.combo}
                        </td>
                        <td className="px-5 py-3">
                          <code className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                            {row.short}
                          </code>
                        </td>
                        <td className="px-5 py-3 text-right tabular-nums">
                          <span className="inline-flex rounded-md bg-violet-50 px-2 py-1 font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                            {row.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 whitespace-nowrap text-zinc-700 dark:text-zinc-200">
                          {row.alevel}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="epq-table" aria-labelledby="epq-table-heading">
            <h2
              id="epq-table-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              EPQ UCAS Tariff Points Table (A* to E)
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              What Is a Distinction or A* Worth in EPQ UCAS Points? The EPQ uses a six-grade
              A* to E scale identical in size to an AS Level, with A* EPQ actually worth 4 points
              more than an AS A (28 vs 24). Welsh Bacc Advanced Skills Challenge Certificate uses
              the exact same 28-to-8 point scale.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <caption className="sr-only">
                    EPQ A* to E grades and UCAS Tariff points 2025/26
                  </caption>
                  <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
                    <tr>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">
                        EPQ Grade
                      </th>
                      <th scope="col" className="px-5 py-3 text-right font-semibold">
                        UCAS Points
                      </th>
                      <th scope="col" className="px-5 py-3 text-left font-semibold">
                        A-Level / AS Equivalent
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {epqRows.map((row) => (
                      <tr key={row.grade} className="text-zinc-800 dark:text-zinc-100">
                        <td className="px-5 py-3">
                          <span className="inline-flex h-9 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-sm">
                            {row.grade}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-right tabular-nums">
                          <span className="inline-flex rounded-md bg-indigo-50 px-2 py-1 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                            {row.points}
                          </span>
                        </td>
                        <td className="px-5 py-3 whitespace-nowrap text-zinc-700 dark:text-zinc-200">
                          {row.alevel}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section id="equiv" aria-labelledby="equiv-heading">
            <h2
              id="equiv-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              Access to HE &amp; EPQ vs A-Level Equivalence
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              How Do Access to HE and EPQ Points Compare to A-Level Grades? Access 45D matches
              AAA at the top, while EPQ sits between AS and full A-Level in per-grade size.
              Reference max at right = A*A*A* at three A-Levels / BTEC Extended D*D*D* =
              168 points.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Access 45D — 144 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= A-Level AAA</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600"
                    style={{ width: `${(144 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Access 30D 15M — 136 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= A-Level AAB</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                    style={{ width: `${(136 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Access 24D 21M — 130 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= A-Level ABB–</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
                    style={{ width: `${(130 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Access 15D 30M — 122 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= BBB+</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                    style={{ width: `${(122 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Access 45M — 108 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= BCC–</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-400"
                    style={{ width: `${(108 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div className="border-t border-zinc-100 pt-5 dark:border-zinc-800">
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>Access 45P — 72 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= DDD (foundation)</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300"
                    style={{ width: `${(72 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>EPQ A* — 28 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">AS A + bonus</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    style={{ width: `${(28 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  <span>EPQ A — 24 pts</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">= AS A exactly</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
                    style={{ width: `${(24 / 168) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  <span>A*A*A* (3×A-Level reference) — 168 pts</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-full w-full rounded-full bg-zinc-400 opacity-50" />
                </div>
              </div>
            </div>
          </section>
          <section id="rules" aria-labelledby="rules-heading">
            <h2
              id="rules-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              Qualification-Specific Rules &amp; Gotchas
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-lg font-bold tracking-tight text-zinc-900 mb-3 dark:text-zinc-50">
                  Access to HE: Only the 45 graded units count
                </h3>
                <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  Access Diplomas are typically 60 credits total, but UCAS only tariffs the 45
                  Level 3 graded units (Distinction / Merit / Pass). The remaining 15 credits
                  are ungraded Skills for Learning or project units — these never add Tariff
                  points, even if completed at high standard. Northern Ireland Access Diplomas
                  use a completely separate scale published by UCAS and are not listed here.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/40">
                <h3 className="text-lg font-bold tracking-tight text-zinc-900 mb-3 dark:text-zinc-50">
                  EPQ: Russell Group / high-tariff STEM exclusion
                </h3>
                <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-200">
                  EPQ and Welsh Baccalaureate Advanced Skills Challenge Certificate both appear
                  on your UCAS Tariff total, but the majority of Russell Group and high-tariff
                  STEM courses explicitly write them out of a formal offer — meaning your three
                  A-Levels (or IB / BTEC equivalent) must hit the grade on their own. Humanities,
                  social science, and arts courses are far more likely to accept EPQ points
                  towards meeting an offer.
                </p>
              </div>
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
              {faqs.map((f, i) => (
                <details key={i} className="group px-5 py-4" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{f.q}</span>
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-transform group-open:rotate-45 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{f.a}</p>
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
              More UCAS Tariff Guides
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Link
                href="/a-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconALevel size={24} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-400">
                  A-Level UCAS Points
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  A*–E + AS A–E official tariff with reform rules.
                </p>
              </Link>
              <Link
                href="/scottish-highers-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconScottish size={24} className="text-amber-600 dark:text-amber-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-amber-600 dark:text-zinc-50 dark:group-hover:text-amber-400">
                  Scottish Highers UCAS Points
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  Band-1 / Band-2 split for Higher and Advanced Higher.
                </p>
              </Link>
              <Link
                href="/btec-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconBTEC size={24} className="text-fuchsia-600 dark:text-fuchsia-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-fuchsia-600 dark:text-zinc-50 dark:group-hover:text-fuchsia-400">
                  BTEC UCAS Points
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  Extended, Diploma, Subsidiary &amp; Certificate 2025/26 tariff.
                </p>
              </Link>
              <Link
                href="/ib-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconIB size={24} className="text-emerald-600 dark:text-emerald-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-50 dark:group-hover:text-emerald-400">
                  IB UCAS Points
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  HL / SL grade-by-grade + EE-TOK core bonus matrix.
                </p>
              </Link>
              <Link
                href="/t-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTLevel size={24} className="text-rose-600 dark:text-rose-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-rose-600 dark:text-zinc-50 dark:group-hover:text-rose-400">
                  T-Level UCAS Points
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  D* → Near Pass full table + Core component partial scale.
                </p>
              </Link>
              <Link
                href="/ucas-tariff-points-table"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTable size={24} className="text-violet-600 dark:text-violet-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400">
                  Full Tariff Table
                </h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                  Search, filter, sort 47 qualifications in one unified table.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
