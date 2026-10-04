import type { Metadata } from "next";
import { socialMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | How This UCAS Tariff Site Uses Them",
  description:
    "Learn how this UCAS Tariff site uses essential, analytics and advertising cookies, what choices you have, and how to manage or delete cookies in your browser.",
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: { canonical: "/cookies-policy" },
  ...socialMetadata({
    title: "Cookies Policy | How This UCAS Tariff Site Uses Them",
    description:
      "Learn how this UCAS Tariff site uses essential, analytics and advertising cookies, what choices you have, and how to manage or delete cookies in your browser.",
    path: "/cookies-policy",
  }),
};

const LAST_UPDATED = "4 October 2026";

const COOKIE_ROWS = [
  {
    name: "Essential / session cookies",
    type: "Strictly necessary",
    purpose:
      "Help the site load securely, remember basic session state, and support core features such as navigation and form security where used.",
    duration: "Session or short-term",
  },
  {
    name: "Preference cookies (for example theme)",
    type: "Preference",
    purpose:
      "Remember display choices such as light or dark appearance so pages feel consistent when you return.",
    duration: "Up to 1 year",
  },
  {
    name: "_ga, _ga_* (if Analytics is enabled)",
    type: "Analytics",
    purpose:
      "Help us understand aggregated traffic, popular pages and technical issues so we can improve the calculator and guides. These cookies do not replace reading our content.",
    duration: "Up to 2 years",
  },
  {
    name: "Google advertising cookies (when ads are shown)",
    type: "Advertising",
    purpose:
      "Used by Google and authorised partners to deliver, measure and, where allowed, personalise ads. See the advertising section below for AdSense-related disclosures.",
    duration: "Varies by Google / partner",
  },
];

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
        <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          This Cookies Policy explains how UCASCalculator.com (the &ldquo;Website&rdquo;)
          uses cookies and similar technologies. It is written so visitors can understand
          what is stored on their device, why it is used, and how to control it. It should
          be read together with our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-8 space-y-8 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <section id="intro">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. What are cookies?
            </h2>
            <p className="mt-3">
              Cookies are small text files placed on your computer, phone or tablet when you
              visit a website. They are widely used to make sites work, remember settings,
              understand how pages perform, and — where advertising is enabled — support the
              delivery of ads. Similar technologies can include local storage, pixels and
              device identifiers. In this policy, we use &ldquo;cookies&rdquo; to cover these
              related technologies unless we say otherwise.
            </p>
            <p className="mt-3">
              UCASCalculator.com provides free UCAS Tariff calculators and educational
              guides. Cookies are not required to read most of our public content, but some
              features and measurement tools may rely on them. We aim to use only what is
              needed to run and improve the Website and, where Google advertising is active,
              to show ads in line with Google&apos;s policies and applicable law.
            </p>
          </section>

          <section id="why">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Why we use cookies
            </h2>
            <p className="mt-3">We may use cookies to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Keep the Website secure and working as expected.</li>
              <li>Remember preference settings such as colour theme.</li>
              <li>
                Measure aggregated traffic and page usefulness so we can fix broken links,
                improve guides, and prioritise content that helps applicants.
              </li>
              <li>
                Support Google advertising services when ads are displayed on the Website,
                including measurement and personalisation options that Google offers and that
                you can control.
              </li>
            </ul>
            <p className="mt-3">
              We do not use cookies to change your UCAS application, access university
              systems, or collect passwords. The calculator itself is designed to run from
              published Tariff lookup values in your browser.
            </p>
          </section>

          <section id="types">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. Types of cookies we use
            </h2>
            <p className="mt-3">
              The table below summarises the main categories. Exact cookie names can change
              when providers update their technology. When advertising or analytics tools are
              enabled on a page, those providers may set additional cookies described in
              their own documentation.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
                  <caption className="sr-only">
                    Cookie categories used on UCASCalculator.com
                  </caption>
                  <thead className="bg-zinc-50 dark:bg-zinc-900">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Name / category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Purpose
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Typical duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {COOKIE_ROWS.map((row) => (
                      <tr key={row.name}>
                        <td className="px-4 py-3 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                          {row.name}
                        </td>
                        <td className="px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">{row.purpose}</td>
                        <td className="px-4 py-3">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="essential">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. Essential cookies
            </h2>
            <p className="mt-3">
              Strictly necessary cookies support basic operation and security. Without them,
              parts of the Website may not load correctly. Preference cookies that remember
              display settings are not always legally classed the same way as analytics or
              advertising cookies, but we treat them as low-impact tools that improve
              usability. You can still delete them in your browser if you prefer to reset the
              experience on each visit.
            </p>
          </section>

          <section id="analytics">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              5. Analytics cookies
            </h2>
            <p className="mt-3">
              When analytics tools such as Google Analytics are enabled, they help us see
              which guides are useful, whether pages fail to load, and how visitors move
              between the calculator and Tariff tables. We use this information in aggregate
              to improve content quality. Analytics cookies are not used to sell your name or
              create a student profile for universities.
            </p>
            <p className="mt-3">
              If Google Analytics is active, you can also use Google&apos;s{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section id="advertising">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              6. Advertising cookies and Google AdSense
            </h2>
            <p className="mt-3">
              UCASCalculator.com may display advertisements served by Google AdSense or other
              Google advertising products. When ads are shown, Google and authorised third
              parties may place and read cookies on your browser, or use similar technologies,
              to serve and measure ads.
            </p>
            <p className="mt-3">
              In line with Google&apos;s publisher requirements, we disclose the following:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a
                user&apos;s prior visits to your website or other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve
                ads to users based on their visit to this site and/or other sites on the
                internet.
              </li>
              <li>
                Users may opt out of personalised advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  Google Ads Settings
                </a>
                . You can also visit{" "}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  aboutads.info
                </a>{" "}
                for broader industry opt-out tools where available.
              </li>
            </ul>
            <p className="mt-3">
              For more detail on how Google uses information from sites that use its
              services, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                How Google uses data when you use our partners&apos; sites or apps
              </a>
              .
            </p>
            <p className="mt-3">
              We aim to keep ads clearly separated from educational content. Ads should not
              be mistaken for Tariff guidance, official UCAS notices, or university offers.
              If you believe an ad implementation on this site is unclear or broken, please
              contact us so we can review it.
            </p>
          </section>

          <section id="manage">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              7. How to manage or delete cookies
            </h2>
            <p className="mt-3">
              Most browsers let you block, delete or limit cookies. Controls vary by browser
              and device. Useful starting points:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="mt-3">
              If you block all cookies, some preference features may reset each visit. Core
              educational pages should still remain readable. Blocking advertising cookies
              may mean you still see ads, but they may be less relevant.
            </p>
          </section>

          <section id="legal">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              8. Legal basis and updates
            </h2>
            <p className="mt-3">
              Where UK law requires consent for non-essential cookies, we will only use those
              cookies in ways that match the choices available to you and the disclosures on
              this page and in our Privacy Policy. Essential cookies may be used because they
              are necessary to provide the Website you requested.
            </p>
            <p className="mt-3">
              We may update this Cookies Policy when our tools change — for example when a new
              analytics provider is added, when Google advertising is enabled or configured
              differently, or when the law requires clearer wording. The &ldquo;Last
              updated&rdquo; date at the top of this page will change when we publish a
              material revision.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              9. Questions about cookies
            </h2>
            <p className="mt-3">
              If you have a question about cookies on UCASCalculator.com, email{" "}
              <a
                href="mailto:ucascalculatorucas@gmail.com"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                ucascalculatorucas@gmail.com
              </a>{" "}
              or use our{" "}
              <Link
                href="/contact-us"
                className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                Contact page
              </Link>
              . Please describe the browser and page involved if you are reporting a cookie
              or consent issue. We typically respond within a few working days.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row dark:border-zinc-800">
          <Link
            href="/privacy-policy"
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
