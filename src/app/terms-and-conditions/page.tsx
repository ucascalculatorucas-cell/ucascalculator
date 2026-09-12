import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Terms and Conditions | UCASCalculator.com",
  description:
    "Terms and conditions governing the use of UCASCalculator.com. Includes our accuracy disclaimer for the UCAS Tariff calculator, intellectual property rights, user conduct rules, limitation of liability and governing law for England and Wales.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "ucascalculator terms",
    "accuracy disclaimer ucas",
    "ucas tariff calculator disclaimer",
    "website terms uk",
    "calc digital ltd",
  ],
  metadataBase: new URL("https://ucascalculator.com"),
  alternates: {
    canonical: "/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms and Conditions | UCASCalculator.com",
    description:
      "Full terms and conditions for using UCASCalculator.com, including the UCAS Tariff calculator accuracy disclaimer, intellectual property notice, user conduct, liability and governing law.",
    url: "https://ucascalculator.com/terms-and-conditions/",
    type: "website",
    locale: "en_GB",
    siteName: "UCASCalculator.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | UCASCalculator.com",
    description:
      "Terms of service, accuracy disclaimer and legal notice for UCASCalculator.com.",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const OPERATOR = "Calc Digital Ltd";
const ADDRESS = "Suite 221, 123 New Oxford Street, London WC1A 1HH, United Kingdom";
const COMPANY_STATUS = "Registered in England and Wales";
const LAST_UPDATED = "18 August 2026";

export default function TermsPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          These terms and conditions apply to your use of UCASCalculator.com (the
          &ldquo;Website&rdquo;). The Website is owned and operated by{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-50">{OPERATOR}</span>,
          {COMPANY_STATUS}, with its registered office at {ADDRESS}. By accessing or using
          the Website you agree to be bound by these terms in full. If you do not agree with
          any part of these terms, you must stop using the Website immediately.
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <dt className="font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Operator
            </dt>
            <dd className="mt-1 text-zinc-700 dark:text-zinc-200">{OPERATOR}</dd>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <dt className="font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Last updated
            </dt>
            <dd className="mt-1 text-zinc-700 dark:text-zinc-200">{LAST_UPDATED}</dd>
          </div>
        </dl>
      </header>

      <div className="space-y-12">
        {/* 1. ACCEPTANCE */}
        <section id="acceptance" aria-labelledby="acceptance-heading">
          <h2
            id="acceptance-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            1. Acceptance of Terms
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              By accessing, browsing or using any part of UCASCalculator.com, including the
              UCAS Tariff points calculator, the tariff tables, grade guides, blog posts and
              any other tools or information on the Website, you signify your acceptance of
              these terms and conditions and agree to comply with them. These terms apply to
              all visitors, registered or otherwise, and to all services made available on or
              through the Website.
            </p>
            <p>
              The Website is operated by {OPERATOR}, a company registered in England and
              Wales with its registered address at {ADDRESS}. Any reference in these terms
              to &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo; is a reference to
              {OPERATOR}. Any reference to &ldquo;you&rdquo; or &ldquo;your&rdquo; is a
              reference to the individual or legal entity accessing or using the Website.
            </p>
            <p>
              The Website is intended for use by adults aged 18 and over, and by students
              aged 16 or over who are preparing for or applying to UK universities with the
              supervision of a parent, guardian or teacher. If you are under 16 you must not
              use the Website without the consent and supervision of a parent or guardian.
            </p>
          </div>
        </section>

        {/* 2. ACCURACY DISCLAIMER (CRITICAL) */}
        <section id="accuracy" aria-labelledby="accuracy-heading">
          <h2
            id="accuracy-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            2. Accuracy Disclaimer and No Reliance
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 dark:border-amber-500/30 dark:bg-amber-500/5">
              <p className="text-zinc-800 dark:text-zinc-100">
                <strong>
                  The UCAS Tariff calculator, tariff tables and grade guides on
                  UCASCalculator.com are for guidance and estimation only. While every
                  effort is made to cross-check values against the official UCAS 2025/2026
                  published table, we accept no responsibility or liability for decisions
                  made on the basis of figures from this site. Always verify Tariff values
                  and entry requirements with the official UCAS website at UCAS.com and with
                  each university&apos;s published course page before applying.
                </strong>
              </p>
            </div>
            <p>
              UCAS Tariff values, grade boundaries, qualification listings and entry
              requirements are subject to change by UCAS, individual universities and the UK
              government at any time without prior notice. Errors may exist in the
              calculator logic, the tariff tables or the supporting explanatory text on this
              Website, despite our best efforts to maintain accuracy.
            </p>
            <p>
              The calculator tool on this Website is a client-side utility that runs in your
              browser and does not pull live data from UCAS servers. The calculator uses a
              static lookup table based on the 2025/2026 published tariff; values for past
              or future cycles may differ. No output from the calculator should be treated
              as a formal statement of your UCAS Tariff score or a guarantee that you meet a
              university&apos;s entry requirements.
            </p>
            <p>
              Before submitting a UCAS application, accepting a conditional or unconditional
              offer, declining a place, applying through Clearing or making any other
              financial or academic decision based on Tariff points, you must independently
              verify every figure with the official UCAS Tariff publication on UCAS.com and
              with the admissions office of the relevant university.
            </p>
          </div>
        </section>

        {/* 3. INTELLECTUAL PROPERTY */}
        <section id="ip" aria-labelledby="ip-heading">
          <h2
            id="ip-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            3. Intellectual Property Rights
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              All content, materials and software on the Website, including but not limited
              to text, HTML, CSS, JavaScript, graphics, photographs, illustrations, logos,
              button icons, user interface designs, interactive calculators and data
              compilations, is the property of {OPERATOR} or its content suppliers and is
              protected by United Kingdom copyright law, database right law, trade mark law
              and other applicable intellectual property laws. All rights are reserved.
            </p>
            <p>
              The SVG icon set used throughout the Website (including qualification icons,
              user interface icons and decorative illustrations) was hand-authored for
              UCASCalculator.com and is protected by copyright. Redistribution, extraction
              or republication of these SVGs, whether in whole or in part, in any medium,
              is strictly forbidden without the prior written consent of {OPERATOR}.
            </p>
            <p>
              You are granted a limited, revocable, non-exclusive, non-transferable licence
              to access and view the Website on a personal, non-commercial basis for the
              sole purpose of estimating your UCAS Tariff score and reading the associated
              guidance. This licence does not permit you to copy, reproduce, republish,
              upload, post, transmit, distribute, modify, create derivative works of, or
              commercially exploit any material from the Website without our prior written
              permission.
            </p>
            <p>
              You may not frame, mirror, embed via iframe or scrape any page of the Website,
              including the calculator tool or the tariff tables, for inclusion on another
              website, application or service without a written commercial licence from
              {OPERATOR}. You may link to pages on the Website from your own site provided
              the link is fair, not misleading, and does not suggest endorsement or
              affiliation where none exists.
            </p>
          </div>
        </section>

        {/* 4. USER CONDUCT */}
        <section id="conduct" aria-labelledby="conduct-heading">
          <h2
            id="conduct-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            4. Acceptable Use and User Conduct
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              When using the Website you agree that you will not, and will not assist or
              permit any third party to, engage in any of the following prohibited acts:
            </p>
            <ul role="list" className="space-y-3 pl-6">
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                Scraping, crawling, indexing or otherwise automatically extracting data,
                HTML, CSS, JavaScript, calculator output or tariff values from the Website
                using bots, spiders, scrapers, browser extensions, APIs, scripts or any
                other automated or manual process in bulk.
              </li>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                Misusing the Website by submitting excessive or abusive numbers of
                requests, attempting to cause denial-of-service conditions, probing for
                security vulnerabilities, faking request headers, spoofing your identity or
                impersonating another person or entity.
              </li>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                Attempting to circumvent any access restriction, rate limit, paywall,
                authentication gate, content protection or content-blocking measure on the
                Website, including any technical measure designed to prevent or restrict
                copying or scraping of content.
              </li>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                Using the Website or any content from the Website to create a competing
                product, competing calculator tool, competing reference site or white-label
                service that targets the same audience or purpose as UCASCalculator.com.
              </li>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                />
                Using the Website in any way that violates any applicable local, national
                or international law or regulation, or for any unlawful, fraudulent,
                harmful or malicious purpose.
              </li>
            </ul>
            <p>
              We reserve the right, at our sole discretion, to suspend or terminate access
              to the Website for any user or IP address that we reasonably believe has
              breached this acceptable use policy or is acting in a manner detrimental to
              the Website, other users or the operator.
            </p>
          </div>
        </section>

        {/* 5. THIRD-PARTY LINKS */}
        <section id="third-party" aria-labelledby="third-party-heading">
          <h2
            id="third-party-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            5. Third-Party Links
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              The Website may contain editorial links to third-party websites, including the
              official UCAS website (UCAS.com), individual university course pages,
              government bodies, student finance providers and other resources that we
              believe may be of interest to users. These links are provided for your
              convenience only. We have no control over the availability or nature of those
              external sites and accept no responsibility or liability for any loss or
              damage arising from your use of or reliance on any content, goods or services
              available on or through any such third-party website.
            </p>
          </div>
        </section>

        {/* 6. LIMITATION OF LIABILITY */}
        <section id="liability" aria-labelledby="liability-heading">
          <h2
            id="liability-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            6. Limitation of Liability
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              Nothing in these terms and conditions shall exclude or limit our liability
              for death or personal injury caused by our negligence, for fraud or fraudulent
              misrepresentation, or for any other liability which cannot be excluded or
              limited under applicable English law.
            </p>
            <p>
              Subject to the paragraph above, {OPERATOR}, its directors, employees, agents
              and affiliates shall in no event be liable to you for any total aggregate
              claim, loss, damage or expense (including reasonable legal fees) arising out
              of or in connection with your use of the Website, whether in contract, tort
              (including negligence), breach of statutory duty or otherwise, exceeding the
              sum of one hundred pounds sterling (&#163;100.00 GBP) in total.
            </p>
            <p>
              In no event shall {OPERATOR} be liable to you for any indirect, consequential,
              incidental, special, punitive or exemplary damages, or for any loss of
              profits, loss of revenue, loss of business, loss of opportunity, loss of
              savings, loss of data, loss of reputation or any similar loss or damage,
              whether or not such losses were foreseeable and whether or not {OPERATOR} has
              been advised of the possibility of such losses.
            </p>
            <p>
              Without limiting the generality of the foregoing, we specifically disclaim
              any and all liability for decisions made on the basis of UCAS Tariff values,
              grade estimates, university entry requirements or any other information
              presented on the Website, including but not limited to decisions relating to
              UCAS applications, university offers, choice of course, choice of
              qualification, retakes, Clearing applications or financial planning for
              university study.
            </p>
          </div>
        </section>

        {/* 7. GOVERNING LAW */}
        <section id="law" aria-labelledby="law-heading">
          <h2
            id="law-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            7. Governing Law and Jurisdiction
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              These terms and conditions, and any dispute or claim arising out of or in
              connection with them or their subject matter (including non-contractual
              disputes or claims), shall be governed by and construed in accordance with
              the laws of England and Wales.
            </p>
            <p>
              You irrevocably agree that the courts of England and Wales shall have
              exclusive jurisdiction to settle any dispute or claim that arises out of or
              in connection with these terms and conditions or their subject matter
              (including non-contractual disputes or claims). Notwithstanding this, we
              reserve the right to bring proceedings against you for breach of these terms
              in your country of residence or any other relevant country.
            </p>
            <p>
              If any provision of these terms and conditions is found by a court of
              competent jurisdiction to be invalid, unlawful or unenforceable, such
              provision shall to the extent required be severed from the remaining terms
              and the remaining provisions shall continue to be valid and enforceable to
              the fullest extent permitted by law.
            </p>
          </div>
        </section>

        {/* 8. CHANGES TO TERMS */}
        <section id="changes" aria-labelledby="changes-heading">
          <h2
            id="changes-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            8. Changes to These Terms
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              {OPERATOR} reserves the right to modify, update or replace these terms and
              conditions at any time at our sole discretion, without prior individual
              notice to you. When changes are made we will update the &ldquo;Last
              updated&rdquo; date at the top of this page and, where appropriate, may
              additionally post a notice on the Website homepage or within the calculator
              tool.
            </p>
            <p>
              These terms were last updated on {LAST_UPDATED}. It is your responsibility to
              check this page regularly and review the current version of the terms before
              each use of the Website. Your continued use of the Website following the
              posting of revised terms constitutes your acceptance of those revised terms
              in full.
            </p>
            <p>
              Material changes to these terms, in particular changes to the accuracy
              disclaimer, limitation of liability, user conduct or intellectual property
              provisions, will be dated and highlighted for a reasonable period after they
              are made. If you object to any change to these terms, your sole and exclusive
              remedy is to stop using the Website immediately.
            </p>
          </div>
        </section>

        {/* 9. CONTACT */}
        <section id="contact" aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
          >
            9. Contact and Notices
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <p>
              If you have any questions, comments, complaints or requests relating to
              these terms and conditions, the operation of the Website, the accuracy of the
              UCAS Tariff calculator or any other matter concerning UCASCalculator.com, you
              may contact us in the following ways:
            </p>
            <ul role="list" className="space-y-4">
              <li className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Email (primary)
                  </div>
                  <a
                    href="mailto:hello@ucascalculator.com"
                    className="mt-1 block text-base font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                  >
                    hello@ucascalculator.com
                  </a>
                </div>
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Post (registered office)
                  </div>
                  <div className="mt-1 text-base text-zinc-800 dark:text-zinc-100">
                    {OPERATOR}
                    <br />
                    {ADDRESS}
                  </div>
                </div>
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Contact form
                  </div>
                  <Link
                    href="/contact-us/"
                    className="mt-1 inline-block text-base font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                  >
                    Visit the Contact page &rarr;
                  </Link>
                </div>
              </li>
            </ul>
            <p>
              We aim to acknowledge and respond to email enquiries within five working
              days. Please note that nothing in this contact section creates a contractual
              relationship beyond the terms set out above, and that responses to general
              guidance questions are provided without charge and on the same no-reliance
              basis set out in Section 2 (Accuracy Disclaimer).
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          These terms and conditions were last revised on {LAST_UPDATED}. They are
          governed by the laws of England and Wales and are effective between you and{" "}
          {OPERATOR}, registered office {ADDRESS}.
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          <Link
            href="/"
            className="font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
          >
            &larr; Back to UCASCalculator.com home
          </Link>
        </p>
      </footer>
    </article>
  );
}
