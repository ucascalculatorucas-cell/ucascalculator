import Link from "next/link";
import { IconBrandLogo } from "@/components/icons";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/ucas-tariff-points-table/", label: "Tariff Table" },
  { href: "/blogs/", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <IconBrandLogo size={36} aria-hidden />
          <span className="hidden sm:inline">
            UCAS<span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Calculator</span>
            <span className="ml-1 text-[10px] font-normal text-zinc-500 dark:text-zinc-400">
              .com
            </span>
          </span>
          <span className="sm:hidden text-indigo-600 dark:text-indigo-400 font-bold text-sm">
            UCASCalc
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Calculate
          </Link>
        </nav>
      </div>
    </header>
  );
}
