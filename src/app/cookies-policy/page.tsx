import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | UCASCalculator.com",
  description:
    "UCASCalculator.com cookies policy — explains GA4 analytics, essential vs optional cookies, duration, consent and how to disable cookies in your browser.",
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/cookies-policy/" },
  openGraph: {
    title: "Cookies Policy | UCASCalculator.com",
    description:
      "UCASCalculator.com cookies policy — explains GA4 analytics, essential vs optional cookies, duration, consent and how to disable cookies.",
    url: "https://ucascalculator.com/cookies-policy/",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | UCASCalculator.com",
    description:
      "UCASCalculator.com cookies policy — explains GA4 analytics, essential vs optional cookies, duration, consent and how to disable cookies.",
  },
};

const LAST_UPDATED = "21 August 2026";

export default function CookiesPolicyPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Legal · Cookies
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Cookies Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-8 space-y-8 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <section id="intro">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. What Are Cookies
            </h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you visit a website.
              They help the website remember your preferences, understand how you use the
              site and improve performance. This policy explains which cookies
              UCASCalculator.com (the &ldquo;Website&rdquo;) uses and why.
            </p>
          </section>

          <section id="types">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Types of Cookies We Use
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
                  <thead className="bg-zinc-50 dark:bg-zinc-900">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">_ga, _ga_*</td>
                      <td className="px-4 py-3">Analytics (GA4)</td>
                      <td className="px-4 py-3">
                        Count visits &amp; traffic sources anonymously.
                      </td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">theme / next-theme</td>
                      <td className="px-4 py-3">Essential / Preference</td>
                      <td className="px-4 py-3">
                        Remember light/dark theme preference across pages.
                      </td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="essential">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. Essential Cookies Cannot Be Opted-Out Of
            </h2>
            <p className="mt-3">
              Strictly necessary cookies (such as theme preference) are required for the
              Website to function and cannot be disabled. You can block or delete them via
              your browser settings but parts of the site may not work correctly afterwards.
            </p>
          </section>

          <section id="ga4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. Google Analytics 4 (GA4)
            </h2>
            <p className="mt-3">
              We use Google Analytics 4 with IP anonymisation enabled to understand how
              visitors use the Website. GA4 stores first-party cookies on your device. No
              personally identifiable information is stored inside the cookies themselves.
              You can opt-out of GA4 site-wide using the official{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section id="manage">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              5. How to Manage or Delete Cookies
            </h2>
            <p className="mt-3">
              Most browsers let you control cookies through their settings. Instructions for
              popular browsers are available here:{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Chrome
              </a>
              ,{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Firefox
              </a>
              ,{" "}
              <a
                href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Safari
              </a>
              ,{" "}
              <a
                href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Edge
              </a>
              .
            </p>
          </section>

          <section id="third-party">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              6. Third-Party Cookies
            </h2>
            <p className="mt-3">
              At this time the Website does not intentionally set third-party advertising
              cookies (AdSense, Meta Pixel, etc.). Only Google Analytics 4 cookies as listed
              above are set. Any future third-party cookie additions will be reflected here
              with a new &ldquo;Last updated&rdquo; date at the top of this page.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              7. Questions About Cookies
            </h2>
            <p className="mt-3">
              Email any cookie-related questions to{" "}
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
              </Link>
              . We typically respond within two business days.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row dark:border-zinc-800">
          <Link
            href="/privacy-policy/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            ← Read Privacy Policy
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
