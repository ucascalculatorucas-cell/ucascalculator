import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with UCASCalculator.com. Report tariff errors, ask general questions, make business enquiries, or submit GDPR privacy requests. Full address and email details.",
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    title: "Contact Us | UCASCalculator.com",
    description:
      "Contact UCASCalculator.com for general questions, tariff error reports, business enquiries and GDPR privacy requests. We aim to respond within 3 working days.",
    url: "https://ucascalculator.com/contact-us/",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | UCASCalculator.com",
    description:
      "Contact details for UCASCalculator.com. Email hello@ucascalculator.com or dpo@ucascalculator.com for privacy requests.",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-indigo-50/40 to-zinc-50 dark:border-zinc-800 dark:from-zinc-950 dark:via-indigo-950/20 dark:to-zinc-950">
        <div className="mx-auto w-full max-w-[1000px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm dark:border-indigo-900/60 dark:bg-zinc-900 dark:text-indigo-300">
              We are here to help
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Have a question about UCAS Tariff points, spotted a discrepancy in our tables, or
              need to reach our team for any other reason? Use the details below or send us a
              message — we read every email.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-info-heading"
        className="mx-auto w-full max-w-[1000px] px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <h2
            id="contact-info-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Contact Information
          </h2>
        </div>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Reach our team through any of the channels below. We respond to all legitimate
          enquiries.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Postal Address
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

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Email
            </h3>
            <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-medium text-zinc-800 dark:text-zinc-200">General Enquiries</p>
                <a
                  href="mailto:hello@ucascalculator.com"
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  hello@ucascalculator.com
                </a>
              </div>
              <div>
                <p className="font-medium text-zinc-800 dark:text-zinc-200">
                  Privacy &amp; GDPR Requests
                </p>
                <a
                  href="mailto:dpo@ucascalculator.com"
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  dpo@ucascalculator.com
                </a>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                  For subject access requests, data erasure and other GDPR matters. See our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-form-heading"
        className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="mx-auto w-full max-w-[1000px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <h2
              id="contact-form-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Send us a message
            </h2>
          </div>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Prefer writing it out? Fill in the form below and we will get back to you at the
            email address you provide.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="response-times-heading"
        className="mx-auto w-full max-w-[1000px] px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <h2
            id="response-times-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Response Times FAQ
          </h2>
        </div>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          How long it typically takes us to reply, depending on the type of request.
        </p>

        <div className="mt-10 space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                General questions &amp; feedback
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                2–3 working days. We read and reply to every genuine email, so if it takes us a
                bit longer during busy periods, your patience is appreciated.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Tariff error reports
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Prioritised — 1 working day. If you have spotted an incorrect grade-to-points
                mapping or a qualification that is missing, please include the subject, grade
                and a source link so we can cross-check and publish a correction fast.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                GDPR subject access requests (DSARs)
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                By law, within 1 calendar month from receipt. We will send an acknowledgement
                within 48 hours. For any personal-data concerns, always email{" "}
                <a
                  href="mailto:dpo@ucascalculator.com"
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  dpo@ucascalculator.com
                </a>{" "}
                directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
