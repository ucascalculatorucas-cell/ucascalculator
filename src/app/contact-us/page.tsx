import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | UCASCalculator.com",
  description:
    "Contact UCASCalculator.com for UCAS Tariff questions, table corrections, accessibility feedback, business enquiries and privacy requests. Email ucascalculatorucas@gmail.com.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | UCASCalculator.com",
    description:
      "Get in touch with UCASCalculator.com for tariff questions, error reports, accessibility feedback and privacy requests. We aim to respond within a few working days.",
    url: "https://ucascalculator.com/contact-us",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | UCASCalculator.com",
    description:
      "Contact UCASCalculator.com at ucascalculatorucas@gmail.com for general enquiries and privacy requests.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const HELP_TOPICS = [
  {
    title: "Tariff questions",
    body: "Ask how a grade maps to UCAS points, how package sizes work for BTEC or T-Levels, or how to read a Scottish Band-1 / Band-2 split. We will point you to the relevant guide and table on this site.",
  },
  {
    title: "Correction reports",
    body: "If a points value looks wrong, tell us the qualification name, grade, the value you expected, and a link to an official source. Correction reports are prioritised so other students are not misled.",
  },
  {
    title: "Accessibility feedback",
    body: "Report barriers with navigation, contrast, forms, screen readers or keyboard use. Clear reports help us improve the calculator and content pages for every visitor.",
  },
  {
    title: "Privacy requests",
    body: "Use the same email for subject access, erasure or other UK GDPR questions. Include enough detail for us to identify your request, but do not send unnecessary sensitive documents.",
  },
];

const FAQ = [
  {
    q: "Do you give formal university admission advice?",
    a: "No. UCASCalculator.com is an independent Tariff reference tool. We can explain how points are calculated from published tables, but we cannot confirm whether a university will accept a specific qualification mix for a named course. Always check the university course page and UCAS.com.",
  },
  {
    q: "Can you update my UCAS application for me?",
    a: "No. We do not operate UCAS accounts, submit applications, or contact universities on your behalf. For account or application issues, use official UCAS support channels.",
  },
  {
    q: "What should I include when reporting a Tariff error?",
    a: "Include the qualification title (for example BTEC National Extended Diploma), the exact grade string, the points shown on our site, the points you believe are correct, and a link to the official UCAS or awarding-body source you used. Screenshots help if the page layout is relevant.",
  },
  {
    q: "How quickly will I get a reply?",
    a: "Most general messages receive a reply within two to three working days. Tariff error reports are treated as a priority and usually reviewed within one working day. Privacy requests are acknowledged quickly and handled within the statutory timeframe.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      {/* Compact hero */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-indigo-50/40 to-zinc-50 dark:border-zinc-800 dark:from-zinc-950 dark:via-indigo-950/20 dark:to-zinc-950">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Ask a question, report a Tariff error, or send a privacy request. Email{" "}
              <a
                href="mailto:ucascalculatorucas@gmail.com"
                className="font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
              >
                ucascalculatorucas@gmail.com
              </a>{" "}
              or use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact details near top */}
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-7">
            <h2
              id="contact-form-heading"
              className="text-xl font-bold tracking-tight sm:text-2xl"
            >
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Fill in the form and we will get back to you at the email you provide.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Email
              </h3>
              <a
                href="mailto:ucascalculatorucas@gmail.com"
                className="mt-2 inline-flex break-all text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                ucascalculatorucas@gmail.com
              </a>
              <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                General enquiries, corrections, accessibility and privacy requests.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Postal address
              </h3>
              <address className="mt-2 not-italic text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                UCASCalculator.com, c/o Calc Digital Ltd
                <br />
                Suite 221, 123 New Oxford Street
                <br />
                London WC1A 1HH
                <br />
                United Kingdom
              </address>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Typical reply time
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <li>General questions: 2–3 working days</li>
                <li>Tariff error reports: ~1 working day</li>
                <li>Privacy requests: acknowledged within 48 hours</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section
        aria-labelledby="when-to-contact-heading"
        className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2
            id="when-to-contact-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            When to contact us
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Before you write, check whether the answer is already on our free calculator,
            full Tariff table, or qualification guides. If you still need a human reply, the
            topics below are the best reasons to get in touch.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {HELP_TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="report-error-heading"
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2
          id="report-error-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          How to report a Tariff table error
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Accuracy matters because students use these figures when comparing offers and
          clearing options. If you think a value is wrong, send a short structured report.
        </p>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          <li>Name the qualification exactly as shown on our page or in the official source.</li>
          <li>State the grade string (for example D*D*D*, HL 6, or Higher A Band-2).</li>
          <li>Tell us the points value currently shown on UCASCalculator.com.</li>
          <li>Tell us the points value you believe is correct.</li>
          <li>Include a link to the official source you used for the check.</li>
        </ol>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Please do not send passwords, UCAS login details, or full application files.
        </p>
      </section>

      <section
        aria-labelledby="limits-heading"
        className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 id="limits-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            What we cannot do
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            UCASCalculator.com is not affiliated with UCAS and is not a university admissions
            office.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            <li>We cannot guarantee a university offer based on a Tariff total alone.</li>
            <li>We cannot change UCAS forms, predicted grades, or reference letters.</li>
            <li>We cannot provide legal advice, immigration advice, or paid counselling.</li>
            <li>
              We cannot process spam, abusive messages, or requests that ask us to bypass
              official admissions rules.
            </li>
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            See our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/cookies-policy"
              className="font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
            >
              Cookies Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
          Contact FAQ
        </h2>
        <div className="mt-8 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
