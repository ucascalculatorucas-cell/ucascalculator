import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer & UCAS Notice | UCASCalculator.com",
  description:
    "UCASCalculator.com disclaimer — not affiliated with UCAS. All Tariff figures are 2017-reform based for 2025/26 entry; always cross-check against UCAS.com and universities.",
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/disclaimer/" },
  openGraph: {
    title: "Disclaimer & UCAS Notice | UCASCalculator.com",
    description:
      "UCASCalculator.com is independent and not affiliated with UCAS. Tariff figures 2017-reform based for 2025/26 entry — verify with UCAS.com and universities.",
    url: "https://ucascalculator.com/disclaimer/",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer & UCAS Notice | UCASCalculator.com",
    description:
      "UCASCalculator.com is independent and not affiliated with UCAS. Tariff figures 2017-reform based for 2025/26 entry — verify with UCAS.com and universities.",
  },
};

const LAST_UPDATED = "21 August 2026";

export default function DisclaimerPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Legal · Disclaimer
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Disclaimer &amp; UCAS Notice
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-8 space-y-8 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <section id="affiliation">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. No Affiliation With UCAS
            </h2>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-950/30">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                ⚠️ Important notice
              </p>
              <p className="mt-2 text-amber-900 dark:text-amber-200">
                UCASCalculator.com is an independent, privately-run website. It is{" "}
                <strong>NOT</strong> owned, operated, endorsed or approved by{" "}
                <a
                  href="https://www.ucas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2"
                >
                  UCAS (Universities and Colleges Admissions Service)
                </a>
                . The name &ldquo;UCAS&rdquo; and the term &ldquo;UCAS Tariff&rdquo; are
                used strictly for factual reference purposes under fair use.
              </p>
            </div>
          </section>

          <section id="figures">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Tariff Figures Basis
            </h2>
            <p className="mt-3">
              All UCAS Tariff point values published on this Website are taken from the{" "}
              <em>UCAS Tariff Tables published for 2017 reform qualifications and in use for
              2025/2026 entry cycles</em>. We take great care to cross-check every number
              against the publicly-published UCAS table; however, figures can be changed by
              UCAS at any time without notice and we cannot guarantee that every value
              displayed here is the most recent.
            </p>
          </section>

          <section id="nogoal">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. This Tool Is Not a Substitute for Research
            </h2>
            <p className="mt-3">
              The calculator, grade lookup tables and guides on this Website are provided
              for <strong>informational and educational purposes only</strong>. They are
              intended to help students quickly estimate their UCAS Tariff total and
              understand band equivalences between qualifications. They must{" "}
              <strong>NOT</strong> be used as the sole basis for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Choosing which A-Level / BTEC / IB subjects to study.</li>
              <li>
                Deciding whether you meet a specific university course&rsquo;s entry
                requirements.
              </li>
              <li>Completing your UCAS application or Clearing choices.</li>
              <li>
                Any financial decision (student finance, accommodation, gap-year planning).
              </li>
            </ul>
          </section>

          <section id="university">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. University Course Rules Always Apply
            </h2>
            <p className="mt-3">
              Many universities and individual courses have their own rules about which
              qualifications and grades they count towards an offer, even when those
              qualifications appear on the official UCAS Tariff. Examples include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Russell Group courses that exclude EPQ, Welsh Baccalaureate or resits.
              </li>
              <li>
                Courses that only count the top three A-Level grades and ignore additional
                subjects.
              </li>
              <li>
                Subject-specific requirements (e.g. A-Level Chemistry for Medicine) that
                pure Tariff totals cannot capture.
              </li>
              <li>BTEC-only or T-Level-only restrictions on traditionally academic degrees.</li>
            </ul>
            <p className="mt-3">
              <strong>Always</strong> read the specific entry requirements on the
              university&rsquo;s own course page and on the corresponding UCAS course
              listing before applying.
            </p>
          </section>

          <section id="asno">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              5. No Guarantees, No Warranty
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by English law, the Website operator makes no
              warranties of any kind, express or implied, as to the accuracy, completeness,
              merchantability, fitness for a particular purpose or non-infringement of the
              information and services provided through the Website. In no event shall the
              operator be liable for any loss or damage arising out of, or in connection
              with, the use of (or inability to use) the Website.
            </p>
          </section>

          <section id="external">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              6. External Links
            </h2>
            <p className="mt-3">
              The Website contains hyperlinks to third-party websites including UCAS.com,
              university course pages, browser documentation and government advice services.
              We are not responsible for the content or privacy practices of those websites.
              You follow all external links at your own risk.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              7. Spot a Mistake?
            </h2>
            <p className="mt-3">
              We welcome corrections. If you spot any Tariff value, grade, rule,
              explanation or external link that looks wrong, please email{" "}
              <a
                href="mailto:hello@ucascalculator.com"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                hello@ucascalculator.com
              </a>{" "}
              or use the{" "}
              <Link
                href="/contact/"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Contact form
              </Link>{" "}
              and we will investigate and (where appropriate) publish a correction within
              five working days.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row dark:border-zinc-800">
          <Link
            href="/terms/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            ← Terms &amp; Conditions
          </Link>
          <Link
            href="/#calculator"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Open UCAS Calculator
          </Link>
        </div>
      </article>
    </main>
  );
}
