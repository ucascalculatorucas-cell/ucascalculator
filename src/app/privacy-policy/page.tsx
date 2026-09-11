import type { Metadata } from "next";
import Link from "next/link";
import {
  IconMail,
  IconUsers,
  IconClock,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for UCASCalculator.com. Learn what personal data we collect, how we use cookies (including Google Analytics 4), your rights under GDPR, UK GDPR and CCPA/CPRA, and how to contact our Data Protection Officer.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | UCASCalculator.com",
    description:
      "GDPR, UK GDPR and CCPA/CPRA compliant privacy notice for UCASCalculator.com. Covers data collection, GA4 cookies, data retention and user rights.",
    url: "https://ucascalculator.com/privacy-policy",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | UCASCalculator.com",
    description:
      "Full privacy notice: data we collect, cookies (GA4), GDPR/CCPA rights and how to contact our DPO.",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

type SectionHeadingProps = {
  children: React.ReactNode;
  id?: string;
};

function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
    >
      {children}
    </h2>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-zinc-50 text-zinc-800 antialiased dark:bg-zinc-950 dark:text-zinc-200">
      <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-medium text-zinc-700 dark:text-zinc-200">
                Privacy Policy
              </li>
            </ol>
          </nav>
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300">
              Legal
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              Privacy Policy
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              This privacy policy explains how UCASCalculator.com (&quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) collects, uses and protects personal data
              when you visit our website. It complies with the UK General Data Protection
              Regulation (UK GDPR), the retained EU GDPR as applied in the UK by virtue of
              the European Union (Withdrawal) Act 2018, the Data Protection Act 2018, the
              Privacy and Electronic Communications Regulations 2003 (PECR) implementing the
              EU ePrivacy Directive, and the California Consumer Privacy Act (CCPA) as
              amended by the California Privacy Rights Act (CPRA).
            </p>
            <dl className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <dt>Last updated:</dt>
                <dd className="font-medium text-zinc-700 dark:text-zinc-200">18 August 2026</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt>Effective:</dt>
                <dd className="font-medium text-zinc-700 dark:text-zinc-200">18 August 2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-12">
          <section className="space-y-4">
            <SectionHeading id="controller">
              1. Who We Are &amp; Data Controller
            </SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              The website UCASCalculator.com is operated by Calc Digital Ltd, a company
              registered in England and Wales. For the purposes of the UK GDPR, EU GDPR,
              Data Protection Act 2018 and CCPA/CPRA, Calc Digital Ltd is the data
              controller and is responsible for determining the purposes and means of the
              processing of your personal data.
            </p>
            <address className="not-italic rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                UCASCalculator.com c/o Calc Digital Ltd
              </p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-300">Suite 221, 123 New Oxford Street</p>
              <p className="text-zinc-600 dark:text-zinc-300">London WC1A 1HH</p>
              <p className="text-zinc-600 dark:text-zinc-300">United Kingdom</p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Data Controller contact:&nbsp;
                <a
                  href="mailto:dpo@ucascalculator.com"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  dpo@ucascalculator.com
                </a>
              </p>
            </address>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              If you have any questions about this privacy policy, about how we process
              your personal data, or you wish to exercise any of your statutory data
              protection rights, please contact our Data Protection Officer (DPO) using
              the email or postal address above. You may also use our{" "}
              <Link
                href="/contact"
                className="font-medium text-indigo-600 underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:text-indigo-500 hover:decoration-indigo-300 dark:text-indigo-400 dark:decoration-zinc-700 dark:hover:text-indigo-300 dark:hover:decoration-indigo-900"
              >
                contact page
              </Link>{" "}
              to submit a general enquiry. We aim to respond to all data protection
              related correspondence within one calendar month of receipt.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading id="information-collect">
              2. Information We Collect
            </SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              We collect two broad categories of information: usage data that is generated
              automatically when you browse the website, and any content that you
              voluntarily submit to us via email or our contact form. We do not operate a
              user account system, we do not require any form of registration or login to
              use our calculator tools, and we do not ask for personal data as a condition
              of accessing the core UCAS Tariff calculator functionality.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  a) Usage data collected automatically
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <li className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>
                      <strong className="font-medium text-zinc-800 dark:text-zinc-100">
                        Google Analytics 4 (GA4):
                      </strong>{" "}
                      anonymised or pseudonymised usage events including page views,
                      scroll depth, outbound clicks, calculator interactions and session
                      duration.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>
                      <strong className="font-medium text-zinc-800 dark:text-zinc-100">
                        Device and browser information:
                      </strong>{" "}
                      approximate geographic region derived from IP address (city level or
                      coarser), operating system, browser user-agent string, screen
                      resolution, preferred language and referring/exit pages.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>
                      <strong className="font-medium text-zinc-800 dark:text-zinc-100">
                        IP address handling:
                      </strong>{" "}
                      GA4 IP anonymisation is enabled, meaning the last octet of your IPv4
                      address (or the equivalent suffix of an IPv6 address) is zeroed out
                      by Google before any storage or processing takes place.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  b) Information you submit voluntarily
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <li className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>
                      <strong className="font-medium text-zinc-800 dark:text-zinc-100">
                        Email correspondence:
                      </strong>{" "}
                      if you send us an email at dpo@ucascalculator.com or any other
                      published address, we will store your email address, display name,
                      any attachments and the full content of the message.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>
                      <strong className="font-medium text-zinc-800 dark:text-zinc-100">
                        Contact form submissions:
                      </strong>{" "}
                      any data entered into the contact form on the /contact page, which
                      may include your name, email address, subject line and message body.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>
                      <strong className="font-medium text-zinc-800 dark:text-zinc-100">
                        Lawful basis:
                      </strong>{" "}
                      where you submit a query or request, we process that information on
                      the basis of legitimate interests (responding to your enquiry) and,
                      where the request relates to a data protection right, for the
                      performance of a legal obligation to which we are subject.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              We do not knowingly collect or solicit personal data from children under the
              age of 13 or equivalent age of digital consent in your jurisdiction. If you
              believe that we have received personal data from a person under the relevant
              age threshold, please contact our DPO immediately at dpo@ucascalculator.com
              and we will take reasonable steps to irretrievably delete that information
              from our systems.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading id="cookies">3. Cookies We Use</SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              A cookie is a small text file that a website stores on your device when you
              visit. Under PECR (which implements the ePrivacy Directive in the UK) and
              the equivalent GDPR cookie rules across the EEA, we are required to obtain
              your informed consent before setting any cookies that are not strictly
              necessary for the operation of the website. Our consent management banner
              lets you accept or reject non-essential cookies individually.
            </p>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/80">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Cookie name(s)
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Party
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 align-top dark:divide-zinc-800">
                    <tr>
                      <td className="px-4 py-4 font-medium text-zinc-900 dark:text-zinc-50">
                        Strictly Necessary
                      </td>
                      <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                          consent
                        </code>
                        <br />
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          (consent banner state)
                        </span>
                      </td>
                      <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                        1st party
                      </td>
                      <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                        12 months
                      </td>
                      <td className="px-4 py-4 leading-6 text-zinc-600 dark:text-zinc-300">
                        Stores your cookie consent preferences so that we do not show the
                        consent banner on every page load. Set without consent because it
                        is necessary to honour the choice you have made.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-zinc-900 dark:text-zinc-50">
                        Analytics
                      </td>
                      <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                          _ga
                        </code>
                        <br />
                        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                          _ga_*
                        </code>
                        <br />
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          (Google Analytics 4)
                        </span>
                      </td>
                      <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                        3rd party (Google)
                      </td>
                      <td className="px-4 py-4 text-zinc-600 dark:text-zinc-300">
                        _ga: 2 years
                        <br />
                        _ga_*: 2 years
                      </td>
                      <td className="px-4 py-4 leading-6 text-zinc-600 dark:text-zinc-300">
                        Used by Google Analytics 4 to distinguish unique visitors,
                        persist session state and send anonymised usage events. Subject to
                        explicit consent.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              You can manage cookies at any time via your browser settings. Most modern
              browsers allow you to block third-party cookies entirely, clear existing
              cookies on exit, or send a Global Privacy Control (GPC) or Do Not Track
              (DNT) signal. Note that blocking strictly necessary cookies may prevent the
              consent banner from remembering your preferences, but will not impair the
              core UCAS Tariff calculator functionality.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading id="gdpr-rights">
              4. Your Rights Under GDPR &amp; UK GDPR
            </SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              Where the processing of your personal data is subject to the UK GDPR or the
              EU GDPR, you have the following rights in relation to that data. These
              rights are not absolute and some are subject to conditions and exemptions
              set out in the legislation. We will respond to any valid request without
              undue delay and in any event within one month of receipt, extendable by a
              further two months only for complex or voluminous requests, in which case
              we will notify you of the extension and the reason within the first month.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Right of access",
                  body: "You may request a copy of all personal data we hold about you, together with details of the processing purposes, categories of data, recipients and retention periods, free of charge.",
                },
                {
                  title: "Right of rectification",
                  body: "You may ask us to correct any personal data that is inaccurate or incomplete. If we have disclosed the data to third parties, we will notify them of the rectification where this is possible.",
                },
                {
                  title: "Right of erasure",
                  body: "You may request deletion of your personal data where it is no longer necessary for the purpose for which it was collected, where you withdraw consent, or where the processing is otherwise unlawful.",
                },
                {
                  title: "Right of restriction",
                  body: "You may ask us to suspend processing of your data where you contest its accuracy, where the processing is unlawful, where we no longer need the data, or while a rights objection is being determined.",
                },
                {
                  title: "Right to data portability",
                  body: "Where processing is based on consent or on a contract and is carried out by automated means, you may receive your personal data in a structured, commonly used and machine-readable format.",
                },
                {
                  title: "Right to object",
                  body: "You may object at any time to processing based on our legitimate interests, including profiling for those purposes, and to processing for direct marketing.",
                },
                {
                  title: "Right to withdraw consent",
                  body: "Where processing is based on your explicit consent (for example GA4 analytics cookies), you may withdraw that consent at any time via our consent banner or by contacting us. Withdrawal does not affect the lawfulness of any processing carried out before withdrawal.",
                },
                {
                  title: "Right to lodge a complaint",
                  body: "If you consider that our processing of your personal data infringes the UK GDPR, you have the right to lodge a complaint with the UK supervisory authority, the Information Commissioner's Office (ICO), at ico.org.uk. EU-based data subjects may complain with their local national data protection authority.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading id="ccpa-rights">
              5. CCPA / CPRA Rights (California Residents)
            </SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              This section applies if you are a resident of the State of California,
              United States of America, for the purposes of the California Consumer
              Privacy Act of 2018 (CCPA) as amended by the California Privacy Rights Act
              of 2020 (CPRA), collectively &quot;CCPA&quot;. Under the CCPA, California
              consumers have specific rights regarding the personal information that a
              business collects, discloses for a business purpose, or sells or shares for
              cross-context behavioural advertising. The 12-month lookback period for
              these rights commences from the date of your verified request.
            </p>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Categories of personal information we collect
              </h3>
              <p className="mt-2 leading-7 text-zinc-700 dark:text-zinc-300">
                In the preceding 12 months, we have collected the following categories of
                personal information as enumerated in Cal. Civ. Code Section 1798.140:
                identifiers (pseudonymous cookie IDs, approximate geolocation, user
                agent), commercial information (no transaction data is collected),
                internet or other electronic network activity information (browsing
                history on our site, interaction events, referring URLs). We do not
                collect sensitive personal information as defined in Section
                1798.140(ae) such as social security numbers, driver licence numbers,
                precise geolocation, racial or ethnic origin, religious or philosophical
                beliefs, union membership, the contents of private communications, or
                genetic or biometric data.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Right to know",
                  body: "You may request, up to twice in any 12-month period, that we disclose: the categories and specific pieces of personal information we collected about you, the categories of sources from which the information was collected, the business or commercial purpose for collecting it, and the categories of third parties with whom we shared or disclosed it.",
                },
                {
                  title: "Right to delete",
                  body: "You may request deletion of any personal information that we collected from you, subject to certain statutory exceptions (for example, where the information is necessary to complete a transaction, to detect fraud or security incidents, to exercise a legal right, or to comply with a legal obligation).",
                },
                {
                  title: "Right to opt out of sale or sharing",
                  body: "Under CCPA Section 1798.120, you have the right to opt out of the sale of your personal information and out of the sharing of personal information for cross-context behavioural advertising. To opt out, you may use the cookie banner on our website (click 'Manage Options' and decline Analytics/Marketing purposes) or submit a request via our DPO contact details.",
                },
                {
                  title: "Right to non-discrimination",
                  body: "We will not discriminate against you for exercising any of your CCPA rights. Specifically, we will not deny you goods or services, charge you different prices or rates, provide a different level or quality of goods or services, or suggest that you will receive a different price or quality, solely because you exercised your CCPA rights.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 dark:border-indigo-900/60 dark:bg-indigo-950/20">
              <p className="leading-7 text-indigo-950 dark:text-indigo-100">
                <strong>Do Not Sell My Personal Information:</strong> In addition to the
                opt-out mechanisms described above, we respect Global Privacy Control
                (GPC) signals sent by your browser. When a GPC signal is detected, we
                will automatically treat your request as an opt-out of the sale or
                sharing of personal information for cross-context behavioural advertising
                on that browser and device, without requiring you to submit a separate
                request. To make a verified consumer request under the CCPA, please email
                our DPO at dpo@ucascalculator.com or write to us at the postal address in
                section 1. We may require reasonable verification of your identity (for
                example, confirmation of your email address) before responding to a
                request for specific pieces of personal information or for deletion, as
                required by Section 1798.130. An authorised agent may submit a request on
                your behalf provided they have written permission that we can verify.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading id="retention">6. Data Retention</SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              We retain personal data only for as long as is necessary for the purposes
              for which it was collected, including for the purposes of satisfying any
              legal, accounting, tax or reporting obligations. Where retention periods
              are mandated or permitted by statute (for example, the six-year limitation
              period under the UK Limitation Act 1980 for contractual claims, or the
              seven-year retention for VAT records under UK tax law), we apply those
              mandatory periods and delete or irreversibly anonymise the data promptly
              upon expiry. Where no mandatory retention period applies, we apply the
              following internal retention schedule:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Google Analytics 4 raw event data",
                  period: "14 months",
                  body: "User-level GA4 data retained for 14 months from date of collection, after which individual events are automatically aggregated and the pseudonymous user identifiers are permanently deleted by Google. Aggregate, non-personal reports (visits per month, top pages etc.) may be retained indefinitely for internal trend analysis.",
                },
                {
                  title: "Email enquiries and contact form submissions",
                  period: "24 months",
                  body: "All correspondence received via email or contact form, including attachments, held for 24 months from the date of the final reply in the thread, after which it is permanently deleted from our email provider and CRM. Where a thread results in an ongoing relationship (for example an ongoing data subject access request) the clock resets to the date of closure of that matter.",
                },
                {
                  title: "Cookie consent records",
                  period: "12 months",
                  body: "A log of consent banner interactions (accept/reject/manage options, timestamp, consent string) retained for 12 months to demonstrate compliance with PECR and UK GDPR Article 7 requirements, on the lawful basis of our legitimate interest in being able to evidence consent if challenged.",
                },
                {
                  title: "Server and CDN access logs",
                  period: "30 days",
                  body: "Web server, edge CDN and WAF access logs, which may contain IP addresses and user-agent strings, retained for 30 days exclusively for the purposes of security incident detection, DDoS mitigation, abuse prevention and technical troubleshooting.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-900/60">
                      <IconClock size={12} className="mr-1" /> {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading id="contact-dpo">
              7. How To Contact Our Data Protection Officer
            </SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              If you have any question about this privacy policy, wish to exercise any of
              the rights described above, or have a concern about how we handle your
              personal data, please contact our Data Protection Officer (DPO) using any
              of the channels listed below. We do not charge a fee for responding to a
              legitimate data subject access request, unless the request is manifestly
              unfounded, excessive or repetitive, in which case we may either charge a
              reasonable administrative fee or refuse to act on the request.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                  <IconMail size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Email (preferred)
                </h3>
                <p className="mt-3">
                  <a
                    href="mailto:dpo@ucascalculator.com"
                    className="text-lg font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    dpo@ucascalculator.com
                  </a>
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  We aim to acknowledge all data protection enquiries within 2 working
                  days and provide a substantive response within one calendar month.
                  Please include the phrase &quot;Data Protection Request&quot; in your
                  subject line to help us triage your enquiry correctly.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                  <IconUsers size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Postal address
                </h3>
                <address className="mt-3 not-italic text-zinc-700 dark:text-zinc-200">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Data Protection Officer
                  </p>
                  <p>Calc Digital Ltd</p>
                  <p>UCASCalculator.com, Suite 221</p>
                  <p>123 New Oxford Street</p>
                  <p>London WC1A 1HH</p>
                  <p>United Kingdom</p>
                </address>
              </div>
            </div>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              For non-data-protection matters, feedback, bug reports or general
              questions, you may also use the{" "}
              <Link
                href="/contact"
                className="font-medium text-indigo-600 underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:text-indigo-500 hover:decoration-indigo-300 dark:text-indigo-400 dark:decoration-zinc-700 dark:hover:text-indigo-300 dark:hover:decoration-indigo-900"
              >
                general contact form
              </Link>{" "}
              on this website.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading id="last-updated">8. Last Updated</SectionHeading>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">
              This privacy policy was last reviewed and updated on{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                18 August 2026
              </span>
              . We may amend this policy from time to time to reflect changes in our
              processing activities, new features on the website, or changes in
              applicable law. Where we make material changes that affect your rights or
              the way in which we process your personal data, we will post a clear notice
              on the home page of the website for a reasonable period prior to the
              changes taking effect, and we will update the &quot;Last updated&quot; date
              at the top of and at the end of this document. Your continued use of
              UCASCalculator.com after the effective date of a revised privacy policy
              constitutes your acceptance of those revised terms to the extent permitted
              by applicable law. Where consent-based processing is affected by a material
              change, we will obtain fresh consent where required.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
