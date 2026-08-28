import Link from "next/link";
import { IconBrandLogo } from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              <IconBrandLogo size={36} aria-hidden />
              <span>
                UCAS<span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Calculator</span>.com
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              Free, independent UCAS Tariff tools, tables and grade guides for the 2025–2026
              application cycle and beyond.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Popular Tools
            </h2>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  UCAS Tariff Points Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/ucas-tariff-points-table/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Full UCAS Tariff Table (2025/26)
                </Link>
              </li>
              <li>
                <Link
                  href="/a-level-ucas-points/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  A-Level Tariff Points
                </Link>
              </li>
              <li>
                <Link
                  href="/btec-ucas-points/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  BTEC Tariff Points
                </Link>
              </li>
              <li>
                <Link
                  href="/ib-ucas-points/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  IB Tariff Points
                </Link>
              </li>
              <li>
                <Link
                  href="/t-level-ucas-points/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  T-Level Tariff Points
                </Link>
              </li>
              <li>
                <Link
                  href="/scottish-highers-ucas-points/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Scottish Highers Tariff
                </Link>
              </li>
              <li>
                <Link
                  href="/access-epq-ucas-points/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Access to HE &amp; EPQ Tariff
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Guides</h2>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link
                  href="/blogs/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  UCAS Advice Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/ucas-tariff-points-table/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Full UCAS Tariff Table 2025/2026
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Complete Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Legal</h2>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies-policy/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility-statement/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer/"
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Disclaimer &amp; UCAS Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {year} UCASCalculator.com. This tool is independent and not affiliated with UCAS.
            Always confirm entry requirements with UCAS.com and your chosen university.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Figures based on the 2025–2026 UCAS Tariff table.
          </p>
        </div>
      </div>
    </footer>
  );
}
