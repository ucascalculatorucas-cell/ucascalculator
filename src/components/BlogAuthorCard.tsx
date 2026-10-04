import Image from "next/image";
import type { SanityAuthor, SanitySocial } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

const SOCIAL_LABELS: { key: keyof SanitySocial; label: string }[] = [
  { key: "website", label: "Website" },
  { key: "twitter", label: "X" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
  { key: "tiktok", label: "TikTok" },
  { key: "bluesky", label: "Bluesky" },
  { key: "github", label: "GitHub" },
];

function authorPhotoUrl(author: SanityAuthor) {
  if (!author.image) return null;
  try {
    return urlFor(author.image).width(160).height(160).fit("crop").url();
  } catch {
    return null;
  }
}

export function BlogAuthorCard({ authors }: { authors?: SanityAuthor[] }) {
  if (!authors?.length) return null;

  return (
    <section
      aria-labelledby="authors-heading"
      className="mt-10 space-y-4 border-t border-zinc-200 pt-8 dark:border-zinc-800"
    >
      <h2
        id="authors-heading"
        className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
      >
        {authors.length > 1 ? "Authors" : "Author"}
      </h2>
      <ul role="list" className="space-y-5">
        {authors.map((author) => {
          const photo = authorPhotoUrl(author);
          const socialLinks = SOCIAL_LABELS.filter(
            ({ key }) => author.social?.[key]
          );

          return (
            <li
              key={author._id}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              {photo ? (
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={photo}
                    alt={author.image?.alt || author.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              ) : (
                <div
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                >
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {author.name}
                </p>
                {author.role ? (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {author.role}
                  </p>
                ) : null}
                {author.bio ? (
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {author.bio}
                  </p>
                ) : null}
                {socialLinks.length > 0 ? (
                  <ul
                    role="list"
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label={`${author.name} social links`}
                  >
                    {socialLinks.map(({ key, label }) => (
                      <li key={key}>
                        <a
                          href={author.social?.[key]}
                          target="_blank"
                          rel="noopener noreferrer me"
                          className="inline-flex rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-indigo-200 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-indigo-800 dark:hover:text-indigo-400"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
