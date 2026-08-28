"use client";

import { useState } from "react";

type SubjectOption =
  | "general"
  | "tariff-error"
  | "business"
  | "privacy";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<SubjectOption>("general");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/40"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-emerald-900 dark:text-emerald-100">
          Thank you for your message
        </h3>
        <p className="mt-2 text-sm leading-6 text-emerald-800 dark:text-emerald-200">
          We have received your enquiry and will get back to you as soon as possible.
          A confirmation has been noted on our end.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setSubject("general");
            setMessage("");
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-zinc-900 dark:text-emerald-200 dark:hover:bg-emerald-950/60"
        >
          Send another message
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-heading"
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100"
        >
          Your name
        </label>
        <div className="mt-2">
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="block w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="block w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100"
        >
          Subject
        </label>
        <div className="mt-2">
          <select
            id="contact-subject"
            name="subject"
            required
            aria-required="true"
            value={subject}
            onChange={(e) => setSubject(e.target.value as SubjectOption)}
            className="block w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-indigo-500"
          >
            <option value="general">General Question</option>
            <option value="tariff-error">Tariff Error Report</option>
            <option value="business">Business</option>
            <option value="privacy">Privacy Request</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100"
        >
          Message
        </label>
        <div className="mt-2">
          <textarea
            id="contact-message"
            name="message"
            required
            aria-required="true"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can help..."
            className="block w-full resize-y rounded-lg border-0 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
