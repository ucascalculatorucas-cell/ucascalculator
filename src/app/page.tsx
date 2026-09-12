import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import UcasCalculator from "@/components/UcasCalculator";
import { REFERENCE_BENCHMARKS } from "@/lib/ucasTariff";
import {
  IconCalculator,
  IconTable,
  IconALevel,
  IconBTEC,
  IconIB,
  IconScottish,
  IconTLevel,
  IconAccess,
  IconClipboard,
  IconTarget,
  IconSearch,
  IconPlus,
  IconCheck,
  IconShieldCheck,
  IconBolt,
  IconPuzzle,
  IconGift,
} from "@/components/icons";

export const metadata: Metadata = {
  title:
    "UCAS Tariff Points Calculator 2025/2026 | A-Level, BTEC, IB, Scottish, T-Level & EPQ",
  description:
    "UCAS Tariff Points Calculator 2025/2026. Convert A-Levels, BTEC Nationals, IB HL/SL, Scottish Highers & Advanced Highers, T-Levels, Access to HE Diplomas and EPQ grades into UCAS points instantly. Complete Tariff table, grade equivalence charts and official 2017-reform values cross-checked against UCAS.",
  keywords: [
    "ucas tariff points calculator",
    "ucas points calculator",
    "ucas calculator",
    "ucas tariff points 2025",
    "ucas tariff points 2026",
    "ucas points converter",
    "how to calculate ucas points",
    "a level ucas points",
    "btec ucas points",
    "ib ucas points",
    "scottish higher ucas points",
    "t level ucas points",
    "access to he ucas points",
    "epq ucas points",
    "what is 144 ucas points",
    "aaa ucas points",
    "ucas tariff table",
    "ucas clearing points 2025",
    "120 ucas points a level equivalent",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UCAS Tariff Points Calculator 2025/2026 — A-Level, BTEC, IB & More",
    description:
      "Instant UCAS points converter for A-Level, BTEC, IB, Scottish Highers, T-Levels, Access to HE and EPQ. Complete 2025/26 Tariff table, grade charts and official values.",
    url: "https://ucascalculator.com/",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "UCAS Tariff Points Calculator 2025/2026",
    description:
      "Official UCAS 2017-reform points calculator for A-Level, BTEC, IB, Scotland, T-Level, Access & EPQ.",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const DATE_PUBLISHED = "2026-01-15";
const DATE_MODIFIED = "2026-08-19";

const FAQ = [
  {
    q: "What are UCAS Tariff points and how does the Tariff system work?",
    a: "UCAS Tariff points are a uniform numerical system used by UK universities to compare Level 3 qualifications from different awarding bodies. Every tariffed qualification grade is assigned a points value — for example an A-Level A* is worth 56 points and a BTEC National D* grade is also worth 56 points per A-Level-sized unit — so applicants with A-Levels, BTEC, IB, Scottish Highers, T-Levels, Access to HE, EPQ or Cambridge Technicals can all be compared on the same scale. Most UK undergraduate courses list either a grade offer (e.g. AAA) or a Tariff threshold (e.g. 128 points) as their entry requirement, and clearing vacancies are almost always advertised in Tariff points.",
  },
  {
    q: "How many UCAS points is AAA, A*A*A*, AAB, BBB, BBC or BCC at A-Level?",
    a: "Under the current 2017 reform UCAS Tariff scale (the only active scale for 2025 and 2026 entry): A*A*A* = 168 points, A*A*A = 160, A*AA = 152, AAA = 144 points, AAB = 136, ABB = 128, BBB = 120, BBC = 112 and BCC = 104 points. 144 (AAA) is the typical baseline Russell Group minimum for non-vocational courses; 128 (ABB) is the mid-tariff benchmark; 112 (BBC) is the common lower-tariff and clearing threshold. Russell Group and STEM courses may also list subject-specific grade minima alongside the points total, so a Tariff score alone is not always sufficient.",
  },
  {
    q: "Do BTEC Nationals count the same as A-Levels in the UCAS Tariff?",
    a: "Yes, for direct grade-for-grade equivalence the scaling is identical where the qualification size matches. A BTEC National Extended Diploma (1080 GLH) counts as three A-Level sized units, so a D*D*D* Extended Diploma = 168 points — exactly the same as A*A*A* at A-Level. A BTEC National Diploma = two A-Level sized units, Subsidiary Diploma = one A-Level sized unit and the 90-credit Certificate = a half unit. Individual BTEC grade letters map 1:1 per unit: D* = 56, D = 48, M = 40, P = 32 per A-Level-sized unit. This 1:1 mapping was confirmed by the 2017 UCAS Tariff reform and still holds for the 2025 and 2026 application cycles.",
  },
  {
    q: "What is the difference between the old UCAS Tariff (pre-2017) and the new one?",
    a: "The difference is substantial and calculators still showing the old scale are incorrect. Before 2017 entry UCAS used a much larger numeric scale where an A-Level A* was worth 140 points and AAA equalled 360 points. In September 2017 UCAS introduced the compressed reform scale still used today: the same A-Level A* is now 56 points and AAA is 144 points. Every qualification value was rescaled proportionally. If another calculator shows an A* as 140 points or AAA as 360 points, it is using the retired pre-2017 table and will massively overstate your Tariff total. UCASCalculator.com always uses the 2017 reform values, cross-checked against the official 2025/2026 published table.",
  },
  {
    q: "What is 120 UCAS points, 112, 128 and 144 in A-Level grades?",
    a: "Common Tariff thresholds and their closest three-A-Level equivalents in the 2017 reform scale are: 96 points = CCC; 104 points = BCC; 112 UCAS points = BBC (the widely quoted clearing baseline); 120 UCAS points = BBB; 128 UCAS points = ABB (typical mid-tariff course); 136 = AAB; 144 UCAS points = AAA (Russell Group baseline); 152 = A*AA; 160 = A*A*A; 168 UCAS points = A*A*A* (A-Level theoretical ceiling for three subjects). Equivalent BTEC Extended Diploma values are DDD = 112, DMM = 96, MMM = 80, D*D*D = 152, D*D*D* = 168.",
  },
  {
    q: "Do Scottish Highers count differently — what does Band-1 vs Band-2 mean?",
    a: "Yes, unlike A-Levels the UCAS Tariff splits every Scottish Higher and Advanced Higher grade into Band-1 and Band-2 sub-grades because SQA publishes raw mark bands. A Higher A Band-1 = 36 points, Higher A Band-2 = 33 points; Higher B Band-1 = 30 points, B Band-2 = 28 points. An Advanced Higher A Band-1 = 56 points (A-Level A* equivalent), Advanced Higher A Band-2 = 54 points; Advanced Higher B Band-1 = 48 points (A-Level A equivalent), B Band-2 = 45 points. Because almost every other UK qualification uses whole grades only, many generic UCAS calculators omit the Band-1 / Band-2 split entirely — UCASCalculator.com includes the full granular split for all four Higher plus Advanced Higher grade letters.",
  },
  {
    q: "Does an EPQ or Welsh Baccalaureate count towards my UCAS Tariff offer?",
    a: "An Extended Project Qualification (EPQ) is fully tariffed by UCAS: EPQ A* = 28, A = 24, B = 20, C = 16, D = 12, E = 8 points. The Welsh Baccalaureate Advanced Skills Challenge Certificate is also tariffed at A* = 28 down to E = 8 on the same per-grade scale as the EPQ. However, whether a university will accept an EPQ or Welsh Bacc towards a specific course offer is entirely at that university's discretion. Russell Group and high-tariff STEM courses frequently exclude EPQ points from their formal requirement, while mid-tariff, post-1992, humanities and clearing courses commonly accept it. Always check the individual course page on the university website before relying on EPQ contribution.",
  },
  {
    q: "What are the typical UCAS Tariff points for clearing 2025 entry?",
    a: "For UK undergraduate clearing 2025 and 2026 entry, the most commonly advertised lower-tariff thresholds cluster in the 96 to 112 UCAS points band. 112 points (BBC at A-Level or DMM / BTEC Extended Diploma MMM+ context dependant) is the headline clearing baseline widely cited across mid-tariff post-1992 universities. Competitive clearing courses or unfilled Russell Group vacancies may list 120 (BBB), 128 (ABB) or higher; foundation year and extended degree programmes frequently advertise 80 or 64 point entry thresholds. Clearing Tariff cut-offs vary day-by-day in August and are published directly by each university, not centrally by UCAS, so figures here are indicative only.",
  },
  {
    q: "Is there a maximum number of UCAS Tariff points universities accept?",
    a: "UCAS itself does not publish a global maximum Tariff score, because the theoretical combination of multiple extra qualifications (EPQ, Core Maths, graded music exams, LAMDA, MOOCs etc.) is unbounded. In practice, however, almost every UK undergraduate course caps what they will count towards an offer. The typical rule accepts the equivalent of three full A-Level sized qualifications (for example three A-Levels, or one BTEC Extended Diploma = 3 units), plus optionally an EPQ, Welsh Bacc or Core Maths as an additional contribution. The realistic ceiling for a standard three-A-Level-plus-EPQ applicant is approximately 196 Tariff points (A*A*A* 168 + EPQ A* 28). Very few university offers require or reward scores above the 200 point band.",
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "UCASCalculator.com",
          url: "https://ucascalculator.com/",
          inLanguage: "en-GB",
          publisher: {
            "@type": "Organization",
            name: "Calc Digital Ltd",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Suite 221, 123 New Oxford Street",
              addressLocality: "London",
              postalCode: "WC1A 1HH",
              addressCountry: "GB",
            },
          },
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://ucascalculator.com/#table?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      <Script id="webpage-schema-hp" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "UCAS Tariff Points Calculator 2025/2026",
          description:
            "Interactive UCAS Tariff points calculator and complete 2025/2026 Tariff table for A-Level, BTEC Nationals, IB, Scottish Highers & Advanced Highers, T-Levels, Access to HE Diplomas and EPQ grades. All figures use the official 2017 UCAS reform scale cross-checked against the UCAS published table.",
          url: "https://ucascalculator.com/",
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          inLanguage: "en-GB",
          isPartOf: {
            "@type": "WebSite",
            name: "UCASCalculator.com",
            url: "https://ucascalculator.com/",
          },
          reviewedBy: {
            "@type": "Organization",
            name: "UCASCalculator.com editorial",
          },
          about: [
            { "@type": "Thing", "name": "UCAS Tariff points" },
            { "@type": "Thing", "name": "GCE Advanced Level (A-Level)" },
            { "@type": "Thing", "name": "BTEC Nationals" },
            { "@type": "Thing", "name": "International Baccalaureate Diploma Programme" },
            { "@type": "Thing", "name": "Scottish Highers" },
            { "@type": "Thing", "name": "T-Levels" },
            { "@type": "Thing", "name": "Access to Higher Education Diploma" },
            { "@type": "Thing", "name": "Extended Project Qualification (EPQ)" },
          ],
          keywords:
            "ucas tariff points calculator, ucas points, a level ucas points, btec ucas points, ib ucas points, scottish higher ucas points, t level ucas points, access to he ucas points, epq ucas points, 144 ucas points, aaa ucas points, 120 ucas points, 112 ucas points, ucas clearing points 2025",
        })}
      </Script>

      <Script id="faq-schema-hp" type="application/ld+json" strategy="afterInteractive">
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

      <div className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        {/* ============ HERO / ABOVE THE FOLD ============ */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white via-indigo-50/40 to-zinc-50 dark:border-zinc-800 dark:from-zinc-950 dark:via-indigo-950/20 dark:to-zinc-950">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.14),transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-8 hidden h-40 w-40 opacity-[0.08] sm:right-8 sm:h-56 sm:w-56 lg:h-64 lg:w-64 dark:opacity-[0.12]"
          >
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradA" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#4F46E5" />
                  <stop offset="0.5" stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#D946EF" />
                </linearGradient>
              </defs>
              <rect x="20" y="28" width="160" height="144" rx="18" fill="url(#gradA)" />
              <rect x="30" y="42" width="140" height="20" rx="6" fill="white" fillOpacity="0.18" />
              <rect x="30" y="74" width="90" height="12" rx="6" fill="white" fillOpacity="0.28" />
              <rect x="30" y="94" width="120" height="12" rx="6" fill="white" fillOpacity="0.22" />
              <rect x="30" y="122" width="140" height="38" rx="10" fill="white" fillOpacity="0.14" />
              <circle cx="160" cy="141" r="16" fill="white" fillOpacity="0.22" />
              <path d="M154 141 L159 146 L167 137" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <text x="40" y="146" fill="white" fillOpacity="0.95" fontFamily="ui-sans-serif,system-ui" fontSize="22" fontWeight="800">144</text>
              <text x="40" y="120" fill="white" fillOpacity="0.75" fontFamily="ui-sans-serif,system-ui" fontSize="9" fontWeight="600">AAA = 144 PTS</text>
            </svg>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-10 left-4 hidden h-28 w-28 rotate-[-8deg] opacity-[0.07] sm:bottom-16 sm:left-8 sm:h-40 sm:w-40 dark:opacity-[0.11]"
          >
            <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradB" x1="0" y1="160" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#D946EF" />
                  <stop offset="1" stopColor="#4F46E5" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="140" height="140" rx="22" stroke="url(#gradB)" strokeWidth="10" strokeDasharray="2 6" fill="none" />
              <path d="M40 78 L60 98 L120 56" stroke="url(#gradB)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
            <div className="flex flex-col items-center text-center">
              <h1 className="mt-1.5 max-w-[1000px] text-3xl font-bold leading-[1.1] tracking-tight sm:mt-2 sm:text-4xl md:text-5xl lg:text-6xl dark:text-zinc-50">
                UCAS Tariff Points Calculator
              </h1>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:mt-3 sm:text-base md:text-lg dark:text-zinc-300">
                Instant UCAS points converter for A-Levels, BTEC, IB, Scottish Highers, T-Levels, Access &amp; EPQ — official 2017 reform Tariff values for 2025/26.
              </p>
            </div>

            <div className="mx-auto mt-6 w-full sm:mt-8">
            <div id="calculator" aria-label="UCAS Tariff Points Calculator widget">
              <UcasCalculator />
            </div>
          </div>
          </div>
        </section>

        {/* ============ ARTICLE / CONTENT CONTAINER ============ */}
        <article className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="space-y-12 sm:space-y-16">
            {/* A. WHAT IS UCAS TARIFF */}
            <section id="about-tool" aria-labelledby="about-heading">
              <h2
                id="about-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                What Are UCAS Tariff Points?
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                UCAS Tariff points are the standardised numerical scale used by every UK
                university admissions team to compare Level 3 and Level 4 qualifications from
                different awarding bodies on a single, consistent score. Because applicants
                enter UK higher education with every combination of A-Levels, BTEC Nationals,
                International Baccalaureate, Scottish Highers, Cambridge Technicals, T-Levels,
                Access to HE Diplomas, Extended Project Qualifications and dozens of smaller
                vocational, creative and graded qualifications, the Tariff converts each grade
                into one common unit so 56 points means the same thing regardless of whether it
                came from an A-Level A*, a BTEC D*, an IB HL grade 7 or a Scottish Advanced
                Higher A Band-1.
              </p>
              <p className="mt-2.5 text-sm leading-7 text-zinc-700 sm:mt-3 sm:text-base dark:text-zinc-300">
                The live calculator above computes your running Tariff total by summing each
                individual grade&apos;s value from the official UCAS 2025/2026 lookup table. The
                dedicated
                <Link
                  href="/"
                  className="mx-1 font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  UCAS Tariff points calculator page
                </Link>
                adds grade-by-grade lookup tables, A-Level equivalence charts, visual band
                comparisons and a fully searchable, sortable, filterable
                <Link
                  href="/ucas-tariff-points-table"
                  className="mx-1 font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  UCAS Tariff table
                </Link>
                in HTML (not a static image) so every individual value is discoverable,
                indexable, and directly ctrl-F searchable inside your browser.
              </p>
              <h3
                id="tariff-scale-2017-reform"
                className="mt-6 text-lg font-bold tracking-tight text-zinc-900 sm:mt-8 sm:text-xl dark:text-zinc-50"
              >
                The 2017 UCAS Tariff Reform Scale
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-zinc-700 sm:mt-3 sm:text-base dark:text-zinc-300">
                Every figure on UCASCalculator.com follows the 2017 compressed reform Tariff
                scale introduced by UCAS for 2017 entry onwards. In that reform the previous
                scale (where an A-Level A* was worth 140 points and AAA equalled 360 points)
                was retired and every qualification was proportionally compressed down to a
                smaller numeric range with the A-Level A* fixed at exactly 56 points. Confusion
                between the retired 140-point A* scale and the current 56-point A* scale is the
                single largest source of calculator errors on other UCAS calculator sites. All
                values in our calculator, our tables, our guides and our reference benchmarks
                below have been triple-checked against the official UCAS 2025/2026 published
                Tariff table.
              </p>
              <h3
                id="what-qualifications-count-towards-tariff"
                className="mt-6 text-lg font-bold tracking-tight text-zinc-900 sm:mt-8 sm:text-xl dark:text-zinc-50"
              >
                Which Qualifications Count Towards the UCAS Tariff?
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-zinc-700 sm:mt-3 sm:text-base dark:text-zinc-300">
                Any UK or international qualification that UCAS has formally tariffed can
                contribute points, provided the applicant holds it before enrolment. For the
                vast majority of Year 12, Year 13, Scottish S5/S6 and mature Access applicants
                the relevant qualifications are A-Levels and AS-Levels, BTEC National Extended
                Diplomas / Diplomas / Subsidiary Diplomas / 90-credit Certificates (both QCF and
                RQF versions), International Baccalaureate Diploma subjects at Higher Level and
                Standard Level plus the EE and TOK core bonus points, Scottish Highers and
                Advanced Highers (full Band-1 and Band-2 split), T-Levels overall grades, Access
                to HE Diplomas counted by the number of Distinction, Merit and Pass units across
                the mandatory 45 graded credits, the Extended Project Qualification (EPQ), the
                Welsh Baccalaureate Advanced Skills Challenge Certificate, Core Maths, Cambridge
                Technicals, and a long tail of graded performing arts, music, LAMDA, sports
                coaching and language certificates. GCSEs and all Level 2 or below qualifications
                never count towards the UCAS Tariff.
              </p>
            </section>

            {/* B. HOW TO CALCULATE UCAS POINTS — 5 STEPS */}
            <section id="how-to-calculate" aria-labelledby="calc-heading" className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl -z-10 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] dark:[mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_40%,transparent_75%)]"
              />
              <h2
                id="calc-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                How to Calculate UCAS Tariff Points Step by Step
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                Calculating UCAS points manually is straightforward once you work through the
                five steps systematically. The interactive calculator above executes all five
                steps automatically on every click, but understanding the underlying logic is
                essential for verifying predicted grade estimates, cross-checking university
                offers, and making decisions on Results Day, Clearing and Adjustment.
              </p>
              <ol
                role="list"
                className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5"
              >
                {[
                  {
                    Icon: IconClipboard,
                    title: "List Level 3 quals",
                    body: "List every A-Level, BTEC, IB, Higher, T-Level, Access unit and EPQ.",
                  },
                  {
                    Icon: IconTarget,
                    title: "Note exact grades",
                    body: "Predicted or achieved — include Band split (Scotland) and D/M/P count (Access).",
                  },
                  {
                    Icon: IconSearch,
                    title: "Lookup Tariff values",
                    body: "Find each grade in the official 2025/26 UCAS Tariff table.",
                  },
                  {
                    Icon: IconPlus,
                    title: "Add the points",
                    body: "Sum every value — the calculator live total bar tracks this automatically.",
                  },
                  {
                    Icon: IconCheck,
                    title: "Check course rules",
                    body: "Cross-check against university rules (EPQ exclusions, AS restrictions).",
                  },
                ].map((s, i) => (
                  <li
                    key={s.title}
                    className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div className="absolute -top-3 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-[12px] font-bold text-white shadow-md ring-2 ring-white dark:ring-zinc-950">
                      {i + 1}
                    </div>
                    <div className="text-indigo-600 dark:text-indigo-400" aria-hidden>
                      <s.Icon size={28} />
                    </div>
                    <h3 className="mt-2.5 text-sm font-semibold text-zinc-900 sm:mt-3 dark:text-zinc-50">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
              <h3
                id="common-tariff-counting-rules"
                className="mt-8 text-lg font-bold tracking-tight text-zinc-900 sm:mt-10 sm:text-xl dark:text-zinc-50"
              >
                Important UCAS Tariff Counting Rules Applicants Often Miss
              </h3>
              <ul role="list" className="mt-3 space-y-2.5 pl-5 text-sm leading-7 text-zinc-700 sm:mt-4 sm:space-y-3 sm:pl-6 sm:text-base dark:text-zinc-300">
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                  />
                  <strong className="text-zinc-900 dark:text-zinc-50">Same-subject AS + A-Level double-count rule.</strong> UCAS only allows the larger of the two grades to contribute. If you sat Maths AS in Year 12 scoring B (20 points) and then continued Maths to full A-Level scoring B (40 points), only the 40-point A-Level B counts — you cannot stack both.
                </li>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                  />
                  <strong className="text-zinc-900 dark:text-zinc-50">Qualification size matters.</strong> A BTEC National Extended Diploma at 1080 guided learning hours is a three-A-Level-sized award; the 720 GLH Diploma is two units, the 360 GLH Subsidiary is one unit and the 90-credit Certificate counts as a half unit. Tariff values scale proportionally with size, not just letter grade.
                </li>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                  />
                  <strong className="text-zinc-900 dark:text-zinc-50">University capping and offer rules are separate from UCAS.</strong> UCAS publishes the points values, but each university decides which qualifications and what maximum combined score it will accept towards a specific course offer. A Tariff total alone is never a formal guarantee of an offer.
                </li>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                  />
                  <strong className="text-zinc-900 dark:text-zinc-50">Scottish Band-1 and Band-2 are not the same.</strong> Unlike A-Level A grades which all share one value, Scottish Higher A and Advanced Higher A are split into Band-1 and Band-2 sub-grades with different Tariff values. The calculator on this page includes the full granular split.
                </li>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                  />
                  <strong className="text-zinc-900 dark:text-zinc-50">Access to HE Diplomas use a 45-graded-unit lookup, not a single letter.</strong> An Access Tariff value comes from counting how many of the 45 graded credits are Distinction, Merit or Pass — 45 D = 144 points max, 45 P = 72 points minimum. The calculator includes the full 91 possible D/M/P combinations.
                </li>
              </ul>
            </section>

            {/* C. SUPPORTED QUALIFICATIONS — TOPICAL CLUSTER 2 (long tail KWs) */}
            <section id="qualifications" aria-labelledby="quals-heading">
              <h2
                id="quals-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                UCAS Tariff Points by Qualification Pathway
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                Below is an at-a-glance breakdown of the six most common UK Level 3 qualification
                pathways our calculator supports, with A-Level equivalence context, key grade
                landmarks and links to the dedicated qualification-level guide. Between them
                these pathways account for more than 95% of all UK-domiciled undergraduate
                applicants each cycle.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    Key: "a-level",
                    Icon: IconALevel,
                    title: "A-Level & AS-Level UCAS Points",
                    tint: "text-indigo-600 dark:text-indigo-400",
                    lines: [
                      "A* = 56 pts, A = 48, B = 40, C = 32, D = 24, E = 16",
                      "AS counts at exactly half scale (A* 28, A 24, B 20, C 16, D 12, E 8)",
                      "Same subject AS + full A-Level uses the larger value only",
                    ],
                    linkHref: "/a-level-ucas-points",
                    linkLabel: "Open full A-Level guide →",
                  },
                  {
                    Key: "btec-diploma",
                    Icon: IconBTEC,
                    title: "BTEC National UCAS Points",
                    tint: "text-fuchsia-600 dark:text-fuchsia-400",
                    lines: [
                      "D* per A-Level-sized unit = 56 pts (1:1 with A-Level A*)",
                      "Extended Diploma D*D*D* = 168 points (same as A*A*A*)",
                      "Covers Extended, Diploma, Subsidiary, Certificate (QCF & RQF)",
                    ],
                    linkHref: "/btec-ucas-points",
                    linkLabel: "Open full BTEC guide →",
                  },
                  {
                    Key: "ib",
                    Icon: IconIB,
                    title: "IB HL & SL UCAS Points",
                    tint: "text-emerald-600 dark:text-emerald-400",
                    lines: [
                      "HL grade 7 = 56 pts, HL 6 = 48, HL 5 = 40, HL 4 = 32",
                      "SL grade 7 = 28 pts, SL 6 = 24, SL 5 = 20, SL 4 = 16",
                      "Core EE + TOK bonus points (0 to 3) are fully tariffed",
                    ],
                    linkHref: "/ib-ucas-points",
                    linkLabel: "Open full IB guide →",
                  },
                  {
                    Key: "scottish-higher",
                    Icon: IconScottish,
                    title: "Scottish Higher & Adv Higher UCAS Points",
                    tint: "text-amber-600 dark:text-amber-400",
                    lines: [
                      "Advanced Higher A Band-1 = 56 pts (A-Level A* equivalent)",
                      "Higher A Band-1 = 36 pts, Higher A Band-2 = 33 pts",
                      "Full Band-1 / Band-2 granular split across A to D grades",
                    ],
                    linkHref: "/scottish-highers-ucas-points",
                    linkLabel: "Open full Scottish guide →",
                  },
                  {
                    Key: "t-level",
                    Icon: IconTLevel,
                    title: "T-Level UCAS Points",
                    tint: "text-rose-600 dark:text-rose-400",
                    lines: [
                      "T-Level Distinction* = 168 points overall (A*A*A* eq.)",
                      "Distinction = 144, Merit = 120, Pass = 96, Near Pass = 72",
                      "Direct three-A-Level size equivalence for all four bands",
                    ],
                    linkHref: "/t-level-ucas-points",
                    linkLabel: "Open full T-Level guide →",
                  },
                  {
                    Key: "access-to-he",
                    Icon: IconAccess,
                    title: "Access to HE & EPQ UCAS Points",
                    tint: "text-violet-600 dark:text-violet-400",
                    lines: [
                      "Access 45 graded units ranges from 45D = 144 to 45P = 72 points",
                      "EPQ A* = 28, A = 24, B = 20, C = 16, D = 12, E = 8 points",
                      "EPQ / Welsh Bacc are excluded from some Russell Group offers",
                    ],
                    linkHref: "/access-epq-ucas-points",
                    linkLabel: "Open Access + EPQ guide →",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 lg:p-6 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div
                      aria-hidden
                      className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${
                        c.Key === "a-level"
                          ? "from-indigo-500 via-violet-500 to-indigo-500"
                          : c.Key === "btec-diploma"
                          ? "from-fuchsia-500 via-pink-500 to-fuchsia-500"
                          : c.Key === "ib"
                          ? "from-emerald-500 via-teal-500 to-emerald-500"
                          : c.Key === "scottish-higher"
                          ? "from-amber-500 via-orange-500 to-amber-500"
                          : c.Key === "t-level"
                          ? "from-rose-500 via-red-500 to-rose-500"
                          : "from-violet-500 via-indigo-500 to-violet-500"
                      }`}
                    />
                    <div className={`${c.tint} mt-1`} aria-hidden>
                      <c.Icon size={24} className="sm:hidden" />
                      <c.Icon size={28} className="hidden sm:block" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-zinc-900 sm:text-base dark:text-zinc-50">
                      {c.title}
                    </h3>
                    <ul
                      role="list"
                      className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-zinc-600 sm:mt-3 sm:text-xs dark:text-zinc-400"
                    >
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
                    <Link
                      href={c.linkHref}
                      className="mt-4 inline-flex text-xs font-semibold text-indigo-600 sm:text-sm dark:text-indigo-400"
                    >
                      {c.linkLabel}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* D. WHY USE OUR CALCULATOR — E-E-A-T SIGNALS */}
            <section id="why-use" aria-labelledby="why-heading">
              <h2
                id="why-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                Why UCASCalculator.com Is The Most Trusted Tariff Tool
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                Hundreds of UCAS calculators exist across university sites, school intranets,
                college prospectuses and third-party blogs. Most were built between 2015 and
                2019 and were never systematically updated after the 2017 Tariff reform. Many
                still mix old and new scale values, omit the Scottish Band-1 / Band-2 split,
                treat all BTEC variants as the same size, restrict access behind email walls or
                CAPTCHAs, or silently round Tariff values to the nearest 10. We built
                UCASCalculator.com from scratch for the 2025 cycle with four editorial and
                technical guarantees.
              </p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    Icon: IconShieldCheck,
                    title: "Official scale, always",
                    body: "Every figure cross-checked against the UCAS 2025/26 published Tariff table.",
                    accent: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
                  },
                  {
                    Icon: IconBolt,
                    title: "Local, instant results",
                    body: "All computation runs client-side in the browser using static lookup tables. No server round-trip, no page reload, no spinner, no personal data leaves your device.",
                    accent: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
                  },
                  {
                    Icon: IconPuzzle,
                    title: "Every major qualification",
                    body: "A-Level, AS-Level, all four BTEC National variants, IB HL + SL + Core, Scottish Higher & Adv Higher (Band split), T-Levels, Access to HE D/M/P combos, EPQ.",
                    accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
                  },
                  {
                    Icon: IconGift,
                    title: "Open to every user",
                    body: "No account creation, no CAPTCHA, no email signup wall, no subscription. The calculator and full Tariff table are open to every student, parent, tutor and advisor.",
                    accent: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-transparent blur-2xl group-hover:from-indigo-500/20 group-hover:via-fuchsia-500/15"
                    />
                    <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${c.accent}`} aria-hidden>
                      <c.Icon size={20} className="sm:hidden" />
                      <c.Icon size={22} className="hidden sm:block" />
                    </div>
                    <h3 className="mt-3 text-xs font-bold text-zinc-900 sm:text-sm dark:text-zinc-50">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 sm:text-xs dark:text-zinc-400">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* E. REFERENCE BENCHMARKS */}
            <section id="benchmarks" aria-labelledby="bench-heading">
              <h2
                id="bench-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                UCAS Tariff Points Reference Benchmarks 2025/2026
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                Use these common Tariff bands as a quick reality-check on your total. Figures in
                the table are A-Level three-subject equivalents plus typical real-world course
                context for 2025 and 2026 entry. Remember that every university and course sets
                its own rules — these benchmarks are indicative, not formal offer thresholds.
              </p>

              <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:mt-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-xs sm:text-sm">
                    <caption className="sr-only">
                      UCAS Tariff points reference benchmarks for 2025 and 2026 UK university entry
                    </caption>
                    <thead className="bg-zinc-100 dark:bg-zinc-800">
                      <tr>
                        <th scope="col" className="px-3 py-2.5 text-left font-semibold text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50">
                          UCAS points
                        </th>
                        <th scope="col" className="px-3 py-2.5 text-left font-semibold text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50">
                          A-Level (3) eq.
                        </th>
                        <th scope="col" className="px-3 py-2.5 text-left font-semibold text-zinc-900 sm:px-4 sm:py-3 dark:text-zinc-50">
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

            {/* F. POPULAR GUIDES CTA GRID (deep links) */}
            <section id="tools" aria-labelledby="tools-heading">
              <h2
                id="tools-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                Popular UCAS Tariff Guides and Reference Pages
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                Jump straight into the detailed, grade-by-grade UCAS guide for your
                qualification, or open the complete 2025/2026 Tariff table to search, filter and
                sort every published value by qualification, grade or points band.
              </p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    href: "/a-level-ucas-points",
                    Icon: IconALevel,
                    badge: "Guide",
                    title: "A-Level Tariff Points Lookup",
                    desc: "Full A* through E grade table, AS half-scale, subject stacking rules and equivalence bars comparing A-Level grades directly to BTEC, IB, T-Level and Scottish.",
                    cta: "View A-Level guide →",
                    accent: "from-blue-600 to-sky-600",
                  },
                  {
                    href: "/btec-ucas-points",
                    Icon: IconBTEC,
                    badge: "Guide",
                    title: "BTEC National Tariff Points Lookup",
                    desc: "Grade lookup for Extended Diploma, Diploma, Subsidiary Diploma and 90-credit Certificate. QCF and RQF variants covered. Visual A-Level equivalence chart included.",
                    cta: "View BTEC guide →",
                    accent: "from-fuchsia-600 to-pink-600",
                  },
                  {
                    href: "/ib-ucas-points",
                    Icon: IconIB,
                    badge: "Guide",
                    title: "IB HL & SL Tariff Points Lookup",
                    desc: "HL and SL seven-grade lookup, Extended Essay and TOK core bonus point Tariff values, plus deep-dive IB profile-to-Tariff band mapping.",
                    cta: "View IB guide →",
                    accent: "from-emerald-600 to-teal-600",
                  },
                  {
                    href: "/t-level-ucas-points",
                    Icon: IconTLevel,
                    badge: "Guide",
                    title: "T-Level Tariff Points Lookup",
                    desc: "Full Distinction* through Near Pass grade table with three-A-Level-size equivalence explained. Includes course-acceptance notes, T-Level Core-only partial Tariff, and a visual comparison against A-Level, BTEC and IB bands.",
                    cta: "View T-Level guide →",
                    accent: "from-rose-600 to-orange-600",
                  },
                  {
                    href: "/scottish-highers-ucas-points",
                    Icon: IconScottish,
                    badge: "Guide",
                    title: "Scottish Higher & Adv Higher Tariff",
                    desc: "Full Band-1 and Band-2 granular lookup for Highers and Advanced Highers at grades A through D, with A-Level equivalence ranges listed on every row.",
                    cta: "View Scottish guide →",
                    accent: "from-amber-600 to-orange-600",
                  },
                  {
                    href: "/access-epq-ucas-points",
                    Icon: IconCalculator,
                    badge: "Guide",
                    title: "Access to HE & EPQ Tariff Points",
                    desc: "Full 45-credit Access D/M/P eight-combination lookup plus EPQ A* to E grade Tariff. Russell Group EPQ counting rules and A-Level equivalence on every row.",
                    cta: "View Access+EPQ guide →",
                    accent: "from-orange-600 to-red-600",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-5 lg:p-6 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900/60"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-sm sm:h-11 sm:w-11`}
                        aria-hidden
                      >
                        <card.Icon size={20} className="sm:hidden" />
                        <card.Icon size={22} className="hidden sm:block" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-700 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-indigo-600 sm:mt-5 sm:text-lg dark:text-zinc-50 dark:group-hover:text-indigo-400">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-zinc-600 sm:text-sm dark:text-zinc-400">
                      {card.desc}
                    </p>
                    <div className="mt-4 inline-flex text-xs font-semibold text-indigo-600 sm:mt-5 sm:text-sm dark:text-indigo-400">
                      {card.cta}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* F2. LATEST BLOG POSTS (internal deep-links to individual blog slugs — resolve orphan pages) */}
            <section id="blog" aria-labelledby="blog-heading">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2
                    id="blog-heading"
                    className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
                  >
                    Latest from the UCAS Advice Blog
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base dark:text-zinc-300">
                    Long-form, fact-checked UCAS guides and Results-Day checklists rooted in the official
                    2017-reform Tariff table, real UK university offer data and 2025/26 cycle updates.
                  </p>
                </div>
                <Link
                  href="/blogs/"
                  className="inline-flex h-10 items-center gap-1 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
                >
                  View all posts →
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:gap-5 lg:grid-cols-3">
                {[
                  {
                    slug: "ucas-tariff-2025-26-what-changed",
                    tag: "Tariff News",
                    date: "14 Aug 2026",
                    readTime: "6 min",
                    title: "UCAS Tariff 2025/26: What Actually Changed vs Last Cycle",
                    excerpt:
                      "New T-Level Core scale, Scottish banding granularity, BTEC RQF crosswalk and what A-Level resit rule changes mean for your 2025/26 points total.",
                    accent: "from-indigo-500 to-violet-500",
                  },
                  {
                    slug: "clearing-checklist-2026",
                    tag: "Results Day",
                    date: "10 Aug 2026",
                    readTime: "5 min",
                    title: "Results Day & Clearing 2026: 10-Step Survival Checklist",
                    excerpt:
                      "UCAS Hub prep, Tariff sum before 08:00, grade boundary screenshots, university call scripts and the exact moment to dial Clearing hotlines.",
                    accent: "from-emerald-500 to-teal-500",
                  },
                  {
                    slug: "btec-vs-t-level-ucas-points",
                    tag: "Qualification Guides",
                    date: "2 Aug 2026",
                    readTime: "8 min",
                    title: "BTEC Extended Diploma vs T-Level: UCAS Points Side-by-Side",
                    excerpt:
                      "BTEC D*D*D* vs T-Level Distinction* — both 168 UCAS points on paper, but which pathway do Russell Group unis actually prefer in 2025/26?",
                    accent: "from-fuchsia-500 to-pink-500",
                  },
                  {
                    slug: "ib-tariff-40-42-43-how-many-points",
                    tag: "IB Deep-Dive",
                    date: "25 Jul 2026",
                    readTime: "7 min",
                    title: "IB 38 / 40 / 42 / 43+ — How Many UCAS Tariff Points Each Profile Actually Gives You",
                    excerpt:
                      "HL/SL split matters more than the raw total. Most common IB predicted profiles mapped to exact 2017-reform Tariff values + UK university offer comparisons.",
                    accent: "from-sky-500 to-blue-500",
                  },
                  {
                    slug: "epq-ucas-points-russell-group",
                    tag: "Subject Tips",
                    date: "15 Jul 2026",
                    readTime: "6 min",
                    title: "EPQ A* = 28 Points, but Does Your Russell Group Course Actually Count It?",
                    excerpt:
                      "Which RG medical schools explicitly exclude EPQ, which LSE + Oxbridge colleges use EPQ for reduced offers and when resitting EPQ is worth it.",
                    accent: "from-amber-500 to-orange-500",
                  },
                  {
                    slug: "scottish-highers-band1-band2-tariff",
                    tag: "Scottish",
                    date: "8 Jul 2026",
                    readTime: "5 min",
                    title: "Scottish Highers: Band-1 vs Band-2 — the 3-Point Tariff Gap That Changes Offers",
                    excerpt:
                      "The Band-1 / Band-2 Tariff split inside grades A, B, C is easily missed. Which unis see the band detail on your UCAS form and how to maximise borderline Band-1 predictions.",
                    accent: "from-rose-500 to-red-500",
                  },
                ].map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}/`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900/60"
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${post.accent}`}
                    />
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                        {post.tag}
                      </span>
                      <span>
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-zinc-900 group-hover:text-indigo-600 sm:mt-4 sm:text-base dark:text-zinc-50 dark:group-hover:text-indigo-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-6 text-zinc-600 sm:text-sm dark:text-zinc-400">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex text-xs font-semibold text-indigo-600 sm:text-sm dark:text-indigo-400">
                      Read article →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* F3. COMPANY & REFERENCE PAGES — About Us, Contact, Full Tariff Table */}
            <section id="company" aria-labelledby="company-heading">
              <h2
                id="company-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                More UCAS Resources &amp; Company
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700 sm:mt-3 sm:text-base dark:text-zinc-300">
                Complete HTML Tariff table (searchable, filterable, sortable), company information
                and contact channels for students, parents and advisors.
              </p>
              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="/ucas-tariff-points-table/"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900/60"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"
                  />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm sm:h-11 sm:w-11" aria-hidden>
                    <IconTable size={20} className="sm:hidden" />
                    <IconTable size={22} className="hidden sm:block" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-indigo-600 sm:mt-5 sm:text-lg dark:text-zinc-50 dark:group-hover:text-indigo-400">
                    Full UCAS Tariff Points Table (2025/26)
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-600 sm:text-sm dark:text-zinc-400">
                    Complete 2017-reform Tariff table in HTML — search, filter and sort every published
                    grade-by-grade value for A-Level, BTEC, IB, Scotland, T-Level, Access &amp; EPQ.
                  </p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-indigo-600 sm:text-sm dark:text-indigo-400">
                    Open Tariff table →
                  </span>
                </Link>

                <Link
                  href="/about-us/"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900/60"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"
                  />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-sm sm:h-11 sm:w-11" aria-hidden>
                    <IconShieldCheck size={20} className="sm:hidden" />
                    <IconShieldCheck size={22} className="hidden sm:block" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-indigo-600 sm:mt-5 sm:text-lg dark:text-zinc-50 dark:group-hover:text-indigo-400">
                    About UCASCalculator.com
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-600 sm:text-sm dark:text-zinc-400">
                    Who builds UCASCalculator.com, how we source, cross-check and validate every
                    Tariff value we publish, editorial standards and our independence guarantees.
                  </p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-indigo-600 sm:text-sm dark:text-indigo-400">
                    About the team →
                  </span>
                </Link>

                <Link
                  href="/contact-us/"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-900/60"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"
                  />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 text-white shadow-sm sm:h-11 sm:w-11" aria-hidden>
                    <IconBolt size={20} className="sm:hidden" />
                    <IconBolt size={22} className="hidden sm:block" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-indigo-600 sm:mt-5 sm:text-lg dark:text-zinc-50 dark:group-hover:text-indigo-400">
                    Contact Us
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-600 sm:text-sm dark:text-zinc-400">
                    Email support, response-time SLAs, Tariff-value correction process and how to
                    report errors, broken links or suggest a new qualification guide for the site.
                  </p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-indigo-600 sm:text-sm dark:text-indigo-400">
                    Get in touch →
                  </span>
                </Link>
              </div>
            </section>

            {/* G. FAQs (People Also Ask / SXO intent) */}
            <section id="faq" aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50"
              >
                UCAS Tariff Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700 sm:mt-4 sm:text-base dark:text-zinc-300">
                These are the nine most commonly searched questions about UCAS Tariff points,
                covering A-Level conversions, BTEC equivalence, old versus new scale differences,
                EPQ counting, Scottish sub-grades and typical clearing thresholds for the current
                2025 and 2026 application cycles. Each question and answer is also published as
                structured FAQPage data so the content is fully readable by search engines and
                answer-focused interfaces.
              </p>
              <div className="mt-6 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white sm:mt-8 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
                {FAQ.map((f, i) => (
                  <details key={i} className="group px-4 py-4 sm:px-6 sm:py-5" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-left sm:gap-4">
                      <span className="text-sm font-semibold text-zinc-900 sm:text-base dark:text-zinc-50">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-transform group-open:rotate-45 sm:h-6 sm:w-6 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        <IconPlus size={13} className="sm:hidden" />
                        <IconPlus size={14} className="hidden sm:block" />
                      </span>
                    </summary>
                    <p className="mt-3 text-xs leading-7 text-zinc-700 sm:text-sm dark:text-zinc-300">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* H. FINAL CTA */}
            <section
              id="cta"
              aria-labelledby="cta-heading"
              className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-5 text-white shadow-xl shadow-indigo-500/20 sm:p-8 lg:p-12 dark:border-indigo-900/60"
            >
              <h2
                id="cta-heading"
                className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
              >
                Start Calculating Your Full UCAS Tariff Total Now
              </h2>
              <p className="mt-2.5 max-w-2xl text-xs leading-7 text-white/90 sm:mt-3 sm:text-sm">
                Jump back to the live calculator at the top of the page and start adding your
                qualifications. For grade-by-grade lookup tables, visual equivalence charts, the
                full HTML Tariff table, Access D/M/P combinations and the complete Scottish Band
                split, open the dedicated UCAS Tariff guide or the full sortable Tariff table.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-900/20 transition-colors hover:bg-zinc-100 sm:h-12 sm:px-6 sm:text-base"
                >
                  <IconCalculator size={18} className="sm:hidden" />
                  <IconCalculator size={20} className="hidden sm:block" /> Open Full Tariff Guide
                </Link>
                <Link
                  href="/ucas-tariff-points-table"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-medium text-white transition-colors hover:bg-white/20 sm:h-12 sm:px-6 sm:text-base"
                >
                  <IconTable size={18} className="sm:hidden" />
                  <IconTable size={20} className="hidden sm:block" /> Open Complete Tariff Table
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
