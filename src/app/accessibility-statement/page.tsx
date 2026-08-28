import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement | UCASCalculator.com",
  description:
    "UCASCalculator.com accessibility statement — WCAG 2.2 AA commitment, known limitations, reporting accessibility issues and contact details.",
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/accessibility-statement/" },
  openGraph: {
    title: "Accessibility Statement | UCASCalculator.com",
    description:
      "UCASCalculator.com WCAG 2.2 AA accessibility statement, known limitations and issue reporting contact details.",
    url: "https://ucascalculator.com/accessibility-statement/",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | UCASCalculator.com",
    description:
      "UCASCalculator.com WCAG 2.2 AA accessibility statement, known limitations and issue reporting contact details.",
  },
};

const LAST_UPDATED = "21 August 2026";

export default function AccessibilityPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Legal · Accessibility
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Accessibility Statement
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-8 space-y-8 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. Our Commitment
            </h2>
            <p className="mt-3">
              UCASCalculator.com is committed to making its website accessible to the
              widest possible audience. We aim for a minimum standard of Level AA
              conformance with the{" "}
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Web Content Accessibility Guidelines (WCAG) 2.2
              </a>{" "}
              published by the World Wide Web Consortium.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Measures We Have Taken
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Semantic HTML structure (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;,
                &lt;article&gt;, &lt;footer&gt;) across every page.
              </li>
              <li>
                All interactive elements (links, buttons, inputs, selects) support keyboard
                navigation with a visible focus indicator.
              </li>
              <li>
                Body copy uses a contrast ratio of at least 4.5:1 against its background,
                with large text meeting 3:1 AA contrast.
              </li>
              <li>
                Responsive layout works down to 360&nbsp;px viewports and allows text to be
                zoomed up to 200&nbsp;% without horizontal scrolling on desktop.
              </li>
              <li>
                Light/dark system theme is honoured automatically with an optional manual
                switch provided on the homepage and calculator.
              </li>
              <li>
                All data tables include proper &lt;thead&gt; &lt;th&gt; scope associations
                and mobile horizontal scroll wrappers.
              </li>
              <li>
                All decorative icons use aria-hidden. Forms have visible labels and are
                associated with inputs using the htmlFor attribute.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. Known Limitations (August 2026)
            </h2>
            <p className="mt-3">
              Despite our best efforts, a small number of limitations remain:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                A handful of small gradient badges and status chips use 3.5:1 body-text
                contrast — above the 3:1 threshold for large text but slightly below 4.5:1
                for tiny text. We are auditing these progressively.
              </li>
              <li>
                Visual comparison bar charts (found on guide pages) rely on width/colour to
                convey equivalence; the same data is also available in tabular form on the
                same page for screen-reader users.
              </li>
              <li>
                External links to Google Analytics opt-out and WCAG documents open in new
                tabs without a preceding warning.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. Report an Accessibility Problem
            </h2>
            <p className="mt-3">
              If you experience any accessibility barrier using UCASCalculator.com, please
              tell us. We want every user to be able to calculate their UCAS points with
              confidence. Email{" "}
              <a
                href="mailto:hello@ucascalculator.com"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                hello@ucascalculator.com
              </a>{" "}
              with &ldquo;Accessibility Issue&rdquo; in the subject line, or use our{" "}
              <Link
                href="/contact/"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Contact form
              </Link>
              . Please include the page URL, the assistive technology you are using and a
              brief description of what you expected to happen. We aim to reply within two
              working days and resolve accessibility defects within twenty working days
              where feasible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              5. Compatibility with Assistive Technology
            </h2>
            <p className="mt-3">
              The site is regularly tested using (a) NVDA + Firefox on Windows, (b) VoiceOver
              + Safari on macOS and iOS and (c) the built-in Android TalkBack screen reader
              on Chrome mobile. We also run automated scans with axe-core as part of our
              build pipeline.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              6. Enforcement Procedure (UK EAA / PSA)
            </h2>
            <p className="mt-3">
              As a UK-based website offering information to UK consumers, this accessibility
              statement follows the format suggested by the Public Sector Bodies (Websites
              and Mobile Applications) (No. 2) Accessibility Regulations 2018 even though
              the site is operated by a non-public-sector body. If you are not satisfied
              with our response to an accessibility complaint, you may escalate the matter
              to the Equality Advisory and Support Service (EASS) at{" "}
              <a
                href="https://www.equalityadvisoryservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                equalityadvisoryservice.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row dark:border-zinc-800">
          <Link
            href="/cookies-policy/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            ← Cookies Policy
          </Link>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Open UCAS Calculator
          </Link>
        </div>
      </article>
    </main>
  );
}
