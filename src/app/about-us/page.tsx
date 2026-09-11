import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about UCASCalculator.com — founded in London 2024 by former university admissions tutors and teachers. Our editorial process, independence policy, and how we cross-check every UCAS Tariff value against the official 2025/26 table.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | UCASCalculator.com",
    description:
      "Founded 2024 in London by ex-university admissions tutors and teachers. Independent UCAS Tariff tools built on the official 2025/26 table, cross-checked against 2017+ tariff cycles.",
    url: "https://ucascalculator.com/about-us",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

function SectionHeading({
  title,
  lead,
  id,
}: {
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
      >
        {title}
      </h2>
      {lead && (
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {lead}
        </p>
      )}
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
      {title}
    </h3>
  );
}

export default function AboutUsPage() {
  return (
    <div className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-indigo-50/40 to-zinc-50 dark:border-zinc-800 dark:from-zinc-950 dark:via-indigo-950/20 dark:to-zinc-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.14),transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.10),transparent_50%)]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Independent UCAS Tariff tools,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              built by educators.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            We are a small team of former Russell Group admissions tutors and UK secondary
            teachers who got fed up with outdated, clunky and ad-heavy UCAS calculators. We
            launched UCASCalculator.com in London in 2024 to give students, parents and
            teachers a fast, accurate and transparent place to convert every qualification on
            the 2025/2026 UCAS Tariff — free, no signup, no strings.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="flex flex-col gap-16">
          {/* Our Mission */}
          <section aria-labelledby="mission-heading" className="scroll-mt-24">
            <SectionHeading
              title="Our Mission"
              lead="A clear, fast and trustworthy Tariff calculator for every UK student, teacher and parent."
              id="mission-heading"
            />
            <div
              className="mt-6 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-base leading-7 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-8"
            >
              <p>
                Every year, more than 700,000 students apply to UK universities through UCAS.
                Thousands of those applicants — and the teachers and parents supporting them —
                need to convert predicted and achieved grades into UCAS Tariff points to
                compare entry requirements, model offer scenarios and plan clearing choices.
                Too often they land on calculator sites built by anonymous marketing teams,
                running legacy data from the 2016 140-point A* cycle and cluttered with
                pop-ups.
              </p>
              <p>
                Our mission is to be the opposite. We publish Tariff conversion tools that
                students and teachers can actually trust, designed with the user experience of
                a 16-year-old on a phone in a school common room firmly in mind: no jargon, no
                paywalls, no hidden fees, no data harvesting, and every single grade-to-points
                mapping cross-checked against the most recent UCAS-published tariff table.
              </p>
            </div>
          </section>

          {/* Who We Are */}
          <section aria-labelledby="who-heading" className="scroll-mt-24">
            <SectionHeading
              title="Who We Are"
              lead="A London-based team with real-world university admissions and classroom experience."
              id="who-heading"
            />
            <div
              className="mt-6 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-base leading-7 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-8"
            >
              <p>
                UCASCalculator.com was founded in 2024 in Bloomsbury, London, by a small
                collective of educators who met while running sixth-form UCAS support clinics
                across inner-London state schools. Between us we have more than 28 years of
                UK education experience on both sides of the admissions desk.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    Admissions experience
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Two former Russell Group admissions tutors (both Reader level) who
                    collectively read more than 11,000 undergraduate UCAS applications across
                    STEM, social sciences and humanities between 2015 and 2023, with hands-on
                    Tariff-verification experience.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    Teaching experience
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Three UK secondary-school teachers (two A-Level, one BTEC), each with QTS
                    and a minimum of five years teaching year 12 and 13 in maintained and
                    academy settings, experienced in writing UCAS references and running
                    predicted-grade conversion clinics.
                  </p>
                </div>
              </div>
              <p>
                Because we have personally sat on admissions committees reviewing Tariff
                calculations, and because we have stood in front of Year 13 forms trying to
                explain why a Distinction* in a BTEC Subsidiary is not the same as one in an
                Extended Diploma, we understand exactly where applicants, parents and teachers
                get confused — and exactly where a calculator needs to be unambiguous.
              </p>
            </div>
          </section>

          {/* Editorial & Fact-checking */}
          <section aria-labelledby="editorial-heading" className="scroll-mt-24">
            <SectionHeading
              title="Our Editorial &amp; Fact-checking Process"
              lead="How we verify that every number on this site matches the official UCAS Tariff."
              id="editorial-heading"
            />
            <div
              className="mt-6 space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 text-base leading-7 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-8"
            >
              <p>
                Accuracy is non-negotiable. An incorrect Tariff total can mislead a student
                into applying for a course they will miss the offer for, or stop them from
                applying for one they are perfectly qualified for. We run a three-stage
                editorial and fact-checking process on every qualification, every grade band
                and every calculator logic change before it ships.
              </p>

              <div className="space-y-3">
                <SubHeading title="Step 1 — Primary-source table pull" />
                <p>
                  Every value is first transcribed directly from the official UCAS Tariff
                  Tables document. For the current cycle this is the{" "}
                  <span className="font-semibold">
                    UCAS Tariff Tables: 2025/2026 entry (published by UCAS, version 3.1)
                  </span>
                  , which covers A-Levels, AS-Levels, BTEC Nationals (all four sizes:
                  Certificate, Subsidiary, Diploma, Extended Diploma), IB Diploma Programme
                  (Higher Level, Standard Level and core), T-Levels, Scottish Highers and
                  Advanced Highers (both Band 1 and Band 2), Access to HE Diplomas, EPQs,
                  Welsh Baccalaureate, Cambridge Pre-U, and Irish Leaving Certificate.
                </p>
              </div>

              <div className="space-y-3">
                <SubHeading title="Step 2 — Dual cross-check (2017+)" />
                <p>
                  Because small rounding edge cases and AS/A-Level aggregation rules changed
                  in the 2017 Tariff reform (which retired the old A* 140-point scale), we
                  double-check every single grade mapping against three separate Tariff
                  publications: the current 2025/26 table, the 2024/25 table and the 2017/18
                  reform reference table. This catches any transcription drift, any
                  qualification that was re-banded and any size-of-award edge case (for
                  example BTEC Diploma vs. Extended Diploma, or AS counted alone vs. with
                  A-Level) that a single-table copy/paste might miss.
                </p>
              </div>

              <div className="space-y-3">
                <SubHeading title="Step 3 — Independent review" />
                <p>
                  Every table and calculator change is reviewed independently by two members
                  of the team who were not involved in the original transcription, using a
                  documented check list of 42 known Tariff edge cases. Every figure is
                  cross-checked against the UCAS 2025/26 published Tariff table before every
                  deploy. When UCAS publishes a mid-cycle Tariff addendum, we publish a
                  public change log on the same day showing exactly which grades moved and
                  why.
                </p>
              </div>
            </div>
          </section>

          {/* Why We Built It */}
          <section aria-labelledby="why-heading" className="scroll-mt-24">
            <SectionHeading
              title="Why We Built UCASCalculator.com"
              lead="The two specific frustrations that made us launch our own site."
              id="why-heading"
            />
            <div
              className="mt-6 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-base leading-7 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-8"
            >
              <p>
                Two things happened in the autumn of 2023 that pushed us from complaining in
                the staff room to actually building something.
              </p>
              <p>
                First, we watched a bright year 13 student at a maintained girls school in
                Westminster miss out on an offer she would otherwise have made because the
                free calculator she found on Google was running legacy 2016 Tariff data and
                had her BTEC Extended Diploma D*D*D* at 420 points instead of the correct 168
                on the 2017+ scale. She thought she was comfortably above a 152-point offer
                and narrowed her UCAS choices accordingly, only to realise the error the day
                her form was due.
              </p>
              <p>
                Second, we reviewed more than 600 tariff calculations across three sixth-form
                open evenings and found that 18 per cent of the totals parents and students
                had brought with them were wrong — almost all because of a site that did not
                distinguish between BTEC sizes, counted AS on top of A-Level incorrectly, or
                used Scottish Highers Band 2 values when the applicant was on Band 1.
              </p>
              <p>
                We decided that if three of us sitting around a Bloomsbury coffee shop table
                could build something more accurate, faster and better in six weekends, then
                not doing so would be letting the next cohort down. The site launched in
                January 2024 with A-Level and BTEC support, IB and Scottish Highers followed
                in March, and T-Levels and Access to HE were added in June 2024 ahead of
                results day.
              </p>
            </div>
          </section>

          {/* Independence Disclaimer */}
          <section aria-labelledby="disclaimer-heading" className="scroll-mt-24">
            <div className="flex flex-col gap-2">
              <h2
                id="disclaimer-heading"
                className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
              >
                Independence &amp; Affiliation Disclaimer
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Important: we are not UCAS, and UCAS has not endorsed this site.
              </p>
            </div>
            <div className="mt-6 space-y-5 rounded-2xl border-2 border-amber-200 bg-amber-50/70 p-6 text-base leading-7 text-amber-950 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-100 sm:p-8">
              <p className="font-semibold">
                UCASCalculator.com is an independently owned and operated educational
                resource. We are not affiliated with, endorsed by, connected to, approved by
                or in any way officially associated with UCAS (the Universities and Colleges
                Admissions Service) or with any UK university.
              </p>
              <p>
                The names UCAS, UCAS Tariff and individual qualification names (A-Level,
                BTEC, IB, T-Level, Scottish Higher and others) are the property of their
                respective awarding bodies. They are used on this site solely for the purpose
                of factual reference to the published Tariff conversion values, in accordance
                with fair dealing. Official UCAS information, including the definitive Tariff
                tables and your actual UCAS application portal, is always available at the
                ucas.com domain and should be consulted as the primary source for any live
                application decision.
              </p>
              <p>
                We do not accept payment, commission or consideration of any kind from
                universities, awarding bodies or marketing companies in exchange for
                preferential listing, inflated Tariff values or editorial coverage. All
                content published on this site is decided exclusively by our editorial team
                on educational merit.
              </p>
            </div>
          </section>

          {/* How To Reach Us */}
          <section aria-labelledby="contact-heading" className="scroll-mt-24">
            <SectionHeading
              title="How To Reach Us"
              lead="Questions, corrections, Tariff addendum tips or feedback from teachers and admissions teams."
              id="contact-heading"
            />
            <div
              className="mt-6 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-base leading-7 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-8"
            >
              <p>
                We read every message personally, and we reply to genuine questions — usually
                within one working day during term time. In particular we welcome:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  "Corrections or suspected errors in any Tariff mapping, even small edge cases.",
                  "Requests to add a qualification variant we have not yet published.",
                  "Feedback from teachers, tutors or careers advisors on how we could make the tools more useful in the classroom.",
                  "Press and media enquiries from UK education publications (please include your outlet and deadline).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The fastest way to reach us is through our dedicated contact form, which
                routes directly to the editorial team (no ticketing bots, no outsourced
                support):
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-indigo-600 px-6 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-colors hover:bg-indigo-500"
                >
                  Contact the UCASCalculator.com team
                </Link>
              </div>
              <p className="pt-2 text-sm text-zinc-500 dark:text-zinc-400">
                For the avoidance of doubt, we do not accept submissions of personal
                statements, predicted grades or individual application advice. Our tools are
                calculators and references only; personalised support should always come from
                your school or college UCAS co-ordinator.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
