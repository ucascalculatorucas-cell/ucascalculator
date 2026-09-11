import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { IconBTEC, IconCalculator, IconTable, IconALevel, IconScottish } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "BTEC UCAS Points 2025/2026 | Extended, Diploma, Subsidiary, Certificate Tariff Tables",
  description:
    "BTEC National UCAS points tariff tables for Extended Diploma, Diploma, Subsidiary Diploma and 90-credit Certificate sizes. QCF vs RQF differences, grade-by-grade D*D*D* to PPP values, A-Level equivalence and BTEC counting rules for 2025/26 entry.",
  keywords: [
    "btec ucas points",
    "btec extended diploma ucas points",
    "btec diploma ucas points",
    "btec subsidiary diploma ucas points",
    "btec 90 credit certificate ucas points",
    "btec ddd ucas points",
    "btec dmd ucas points",
    "btec qcf vs rqf ucas tariff",
    "btec to a level ucas equivalence",
    "what is a btec distinction worth in ucas points",
    "btec national ucas points 2025",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/btec-ucas-points" },
  openGraph: {
    title: "BTEC UCAS Points — 2025/2026 Tariff Tables for All Four BTEC Sizes",
    description:
      "BTEC Extended, Diploma, Subsidiary, Certificate grade-by-grade UCAS Tariff, QCF vs RQF distinction, GLH size scaling and A-Level equivalence visual.",
    url: "https://ucascalculator.com/btec-ucas-points",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "BTEC UCAS Points — 2025/2026 Tariff Tables",
    description: "Extended Diploma / Diploma / Subsidiary / Certificate BTEC sizes and A-Level equivalence.",
  },
  robots: { index: false, follow: false, "max-image-preview": "large", "max-snippet": -1 },
};

const DATE_PUBLISHED = "2026-06-01";
const DATE_MODIFIED = "2026-08-20";

const FAQ = [
  {
    q: "How many UCAS points is a BTEC Distinction (D) vs Distinction* (D*)?",
    a: "Per A-Level-sized BTEC unit, a Distinction* grade equals 56 UCAS points (identical to an A-Level A*) and a Distinction equals 48 points (identical to an A-Level A). The per-unit values scale across all BTEC package sizes: Subsidiary Diploma (one unit), Diploma (two) and Extended Diploma (three).",
  },
  {
    q: "Is BTEC DDD equal to A-Level AAA in UCAS points?",
    a: "Yes — a BTEC National Extended Diploma at DDD is worth 144 UCAS points, exactly the same Tariff total as three linear A-Levels at AAA. Likewise D*D*D* Extended Diploma = 168 points = A*A*A*, MMM Extended Diploma = 120 points = BBB and PPP Extended Diploma = 96 points = CCC.",
  },
  {
    q: "Are BTEC QCF and BTEC RQF qualifications tariffed differently by UCAS?",
    a: "For the four standard National-level BTEC sizes (Certificate, Subsidiary, Diploma, Extended) UCAS uses the same grade-to-point mapping for both the older QCF specification and the current RQF specification at identical sizes. Differences between QCF and RQF matter at unit count and GLH boundaries, not for the headline grade Tariff values listed on this page.",
  },
  {
    q: "Do universities accept BTEC Tariff points the same way they accept A-Levels?",
    a: "Most post-1992, mid-tariff and vocational-focused universities accept BTEC Tariff points on a 1:1 basis with A-Levels for vocational, applied-science, health, social care, art, design, media, sport, business and engineering courses. Russell Group and high-tariff STEM courses may set specific A-Level requirements alongside, or instead of, a BTEC — always check the individual course page.",
  },
];

const btecExtended = [
  { grade: "D*D*D*", points: 168, eq: "A*A*A* (max three A-Levels)" },
  { grade: "D*D*D", points: 160, eq: "A*A*A" },
  { grade: "D*DD", points: 152, eq: "A*AA" },
  { grade: "DDD", points: 144, eq: "AAA" },
  { grade: "DDM", points: 136, eq: "AAB" },
  { grade: "DMM", points: 128, eq: "ABB" },
  { grade: "MMM", points: 120, eq: "BBB" },
  { grade: "MMP", points: 112, eq: "BBC (common clearing baseline)" },
  { grade: "MPP", points: 104, eq: "BCC" },
  { grade: "PPP", points: 96, eq: "CCC (foundation year standard)" },
];

const btecDiploma = [
  { grade: "D*D*", points: 112, eq: "≈ BBC / Subsidiary D* + Subsidiary D*" },
  { grade: "D*D", points: 104, eq: "≈ BCC" },
  { grade: "DD", points: 96, eq: "≈ two A-Levels AA" },
  { grade: "DM", points: 88, eq: "≈ AB two A-Levels" },
  { grade: "MM", points: 80, eq: "≈ two A-Levels BB" },
  { grade: "MP", points: 72, eq: "≈ two A-Levels BC" },
  { grade: "PP", points: 64, eq: "≈ two A-Levels CC" },
];

const btecSubsidiary = [
  { grade: "D*", points: 56, eq: "A-Level A*" },
  { grade: "D", points: 48, eq: "A-Level A / Scottish Adv Higher B Band-1" },
  { grade: "M", points: 40, eq: "A-Level B / IB HL 5" },
  { grade: "P", points: 32, eq: "A-Level C / IB HL 4" },
];

const btecCert = [
  { grade: "D*", points: 28, eq: "≈ AS-Level A / EPQ A* / IB SL 7" },
  { grade: "D", points: 24, eq: "≈ AS-Level A / EPQ A" },
  { grade: "M", points: 20, eq: "≈ AS-Level B / EPQ B" },
  { grade: "P", points: 16, eq: "≈ AS-Level C / A-Level E" },
];

function SizeTable({
  title,
  rows,
  id,
  heading,
  units,
  credits,
  glh,
}: {
  title: string;
  rows: { grade: string; points: number; eq: string }[];
  id: string;
  heading: string;
  units: string;
  credits: string;
  glh: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <h3
        id={`${id}-heading`}
        className="mt-6 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
      >
        {title}
      </h3>
      <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">
        {heading} · {units} · {credits} · {glh}
      </p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <caption className="sr-only">{title} UCAS Tariff points lookup</caption>
            <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
              <tr>
                <th scope="col" className="px-5 py-3 text-left font-semibold">BTEC grade</th>
                <th scope="col" className="px-5 py-3 text-left font-semibold">UCAS points</th>
                <th scope="col" className="px-5 py-3 text-left font-semibold">A-Level / other equivalence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {rows.map((r) => (
                <tr key={r.grade} className="text-zinc-800 dark:text-zinc-100">
                  <td className="px-5 py-3 font-semibold tabular-nums">{r.grade}</td>
                  <td className="px-5 py-3 tabular-nums">
                    <span className="inline-flex rounded-md bg-fuchsia-50 px-2 py-1 font-semibold text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-300">
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
  );
}

export default function BtecUcasPointsPage() {
  return (
    <>
      <Script id="webpage-schema-bt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "BTEC UCAS Points 2025/2026 Tariff Tables",
          description:
            "BTEC National Extended Diploma, Diploma, Subsidiary Diploma and Certificate grade-by-grade UCAS Tariff values with QCF/RQF notes and A-Level equivalence.",
          url: "https://ucascalculator.com/btec-ucas-points",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          about: [
            { "@type": "Thing", "name": "BTEC Nationals" },
            { "@type": "Thing", "name": "BTEC QCF" },
            { "@type": "Thing", "name": "BTEC RQF" },
          ],
        })}
      </Script>
      <Script id="breadcrumb-schema-bt" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 2, name: "UCAS Tariff Points Calculator", item: "https://ucascalculator.com/" },
            { "@type": "ListItem", position: 3, name: "BTEC UCAS Points", item: "https://ucascalculator.com/btec-ucas-points" },
          ],
        })}
      </Script>
      <Script id="faq-schema-bt" type="application/ld+json" strategy="afterInteractive">
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

      <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-3 text-fuchsia-600 dark:text-fuchsia-400" aria-hidden>
            <IconBTEC size={32} />
            <p className="text-xs font-semibold uppercase tracking-wider">BTEC National Guide</p>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            BTEC UCAS Points
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Full BTEC National UCAS Tariff tables for the four most common BTEC Level 3
            package sizes — Extended Diploma, Diploma, Subsidiary Diploma and Certificate. All
            values follow the official 2017 reform UCAS scale used for 2025 and 2026 entry, with
            A-Level grade equivalences listed on every row and detailed notes on QCF vs RQF,
            guided learning hours and common counting mistakes.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <strong>Short answer:</strong> A BTEC Subsidiary Diploma (one A-Level sized unit) at
            Distinction* is worth exactly the same 56 UCAS points as an A-Level A*. A BTEC
            Extended Diploma (three units) at D*D*D* equals 168 points, identical to A*A*A*, DDD
            equals 144 = AAA, MMM equals 120 = BBB, PPP equals 96 = CCC. The BTEC Diploma (two
            A-Level sized units) uses the same per-grade unit scale doubled.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#calculator"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              <IconCalculator size={18} /> Calculate BTEC total now
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
          <section id="sizes" aria-labelledby="sizes-heading">
            <h2
              id="sizes-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              BTEC Package Sizes Explained — Why the Size Matters More Than the Grade Letter
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              BTEC Nationals are offered in four standard sizes and the Tariff value scales
              proportionally with the number of A-Level sized units in each package. The unit
              letter grade (D*, D, M, P) always means the same per unit — D* = 56 points, D = 48,
              M = 40, P = 32 — then multiply by the number of units in the package.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Extended Diploma", size: "3 A-Level units", credits: "120", glh: "1080", accent: "from-fuchsia-600 to-pink-600", example: "D*D*D* = 168" },
                { name: "Diploma", size: "2 A-Level units", credits: "80", glh: "720", accent: "from-violet-600 to-fuchsia-600", example: "D*D* = 112" },
                { name: "Subsidiary Diploma", size: "1 A-Level unit", credits: "40", glh: "360", accent: "from-indigo-600 to-violet-600", example: "D* = 56" },
                { name: "Certificate", size: "½ A-Level unit", credits: "20", glh: "180", accent: "from-sky-600 to-indigo-600", example: "D* = 28" },
              ].map((s) => (
                <div key={s.name} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <div aria-hidden className={`h-1 w-full bg-gradient-to-r ${s.accent}`} />
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{s.name}</h3>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{s.size} · {s.credits} credits · {s.glh} GLH</p>
                    <p className="mt-3 font-semibold tabular-nums text-fuchsia-700 dark:text-fuchsia-400">{s.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Four tables */}
          <SizeTable
            id="btec-extended"
            title="BTEC Extended Diploma UCAS Points (3 A-Level sized units)"
            heading="Most common BTEC size for a full two-year Level 3 programme — used directly as a three-A-Level substitute offer."
            units="3 A-Level units"
            credits="120 credits"
            glh="~1080 guided learning hours"
            rows={btecExtended}
          />
          <SizeTable
            id="btec-diploma"
            title="BTEC Diploma UCAS Points (2 A-Level sized units)"
            heading="Often combined with one A-Level subject at Sixth Form to make a standard three-unit academic profile."
            units="2 A-Level units"
            credits="80 credits"
            glh="~720 GLH"
            rows={btecDiploma}
          />
          <SizeTable
            id="btec-subsidiary"
            title="BTEC Subsidiary Diploma UCAS Points (1 A-Level sized unit)"
            heading="Single BTEC unit — frequently paired with two A-Levels for a mixed applied/academic offer."
            units="1 A-Level unit"
            credits="40 credits"
            glh="~360 GLH"
            rows={btecSubsidiary}
          />
          <SizeTable
            id="btec-cert"
            title="BTEC Certificate UCAS Points (½ A-Level sized unit)"
            heading="BTEC 90-credit Certificate / National Certificate at half an A-Level size."
            units="½ A-Level unit"
            credits="20 credits"
            glh="~180 GLH"
            rows={btecCert}
          />

          {/* A-Level Equivalence Bars */}
          <section id="a-level-equiv" aria-labelledby="equiv-heading">
            <h2
              id="equiv-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              BTEC Subsidiary to A-Level Per-Unit Equivalence Chart
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              The Subsidiary Diploma is BTEC&apos;s direct one-to-one A-Level sized package, so
              the chart below shows how BTEC letter grades, A-Level letter grades and Scottish
              Advanced Higher grades compare on the same 32–56 points scale.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <ul role="list" className="space-y-5">
                {[
                  { label: "BTEC D* / A-Level A* / Adv Higher A Band-1", bar: 100, points: 56, color: "from-fuchsia-600 via-pink-600 to-rose-600" },
                  { label: "BTEC D / A-Level A / Adv Higher B Band-1", bar: 85, points: 48, color: "from-indigo-600 via-violet-600 to-fuchsia-600" },
                  { label: "BTEC M / A-Level B / Adv Higher C Band-1", bar: 71, points: 40, color: "from-sky-600 via-blue-600 to-indigo-600" },
                  { label: "BTEC P / A-Level C / Adv Higher D", bar: 57, points: 32, color: "from-emerald-600 via-teal-600 to-sky-600" },
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

          {/* QCF vs RQF */}
          <section id="qcf-vs-rqf" aria-labelledby="qcf-heading">
            <h2
              id="qcf-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
            >
              BTEC QCF vs BTEC RQF — Does the Specification Change the UCAS Tariff Points?
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              BTEC Nationals were redeveloped from the older Qualifications and Credit Framework
              (QCF) into the Regulated Qualifications Framework (RQF) starting in 2016. Because
              the four standard package sizes (Certificate, Subsidiary, Diploma, Extended)
              retained the same GLH and credit counts at the headline level, UCAS maps the
              corresponding D* / D / M / P grades to identical Tariff values across both QCF and
              RQF for those four sizes.
            </p>
            <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              QCF-specific variants such as the QCF 90-Credit Certificate, QCF National Award,
              QCF National Extended Certificate and the 540-credit Diploma do have different
              Tariff values from the four standard RQF sizes. Always check the exact qualification
              title (not just the acronym BTEC) when applying.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              BTEC UCAS Points — Frequently Asked Questions
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
              Compare BTEC to other UCAS Tariff pathways
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Link
                href="/a-level-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconALevel size={24} className="text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-50 dark:group-hover:text-indigo-400">A-Level UCAS Points Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">A* through E exact A-Level and AS half-scale values with grade-combination totals.</p>
              </Link>
              <Link
                href="/scottish-highers-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconScottish size={24} className="text-amber-600 dark:text-amber-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-amber-600 dark:text-zinc-50 dark:group-hover:text-amber-400">Scottish Highers &amp; Adv Higher Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">Full Band-1 and Band-2 split for Higher and Advanced Higher grades A through D.</p>
              </Link>
              <Link
                href="/access-epq-ucas-points"
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <IconTable size={24} className="text-violet-600 dark:text-violet-400" />
                <h3 className="mt-3 text-base font-bold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-50 dark:group-hover:text-violet-400">Access to HE &amp; EPQ UCAS Points Guide</h3>
                <p className="mt-1 text-xs leading-6 text-zinc-600 dark:text-zinc-400">Mature student Access Diploma D/M/P combinations plus EPQ and Welsh Bacc Tariff values.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
