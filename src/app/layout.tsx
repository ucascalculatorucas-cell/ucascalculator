import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteChrome } from "@/components/SiteChrome";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { DEFAULT_OG_IMAGES, SITE_NAME } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ucascalculator.com"),
  title: "Free UCAS Tariff Points Calculator | 2025/26 Guide",
  description:
    "Free UCAS Tariff points calculator and grade guides for A-Level, BTEC, IB, Scottish Highers, T-Levels, Access and EPQ. Official 2025/26 values, no signup.",
  keywords: [
    "ucas calculator",
    "ucas tariff points calculator",
    "ucas points calculator",
    "ucas points converter",
    "ucas tariff table 2025",
    "ucas tariff table 2026",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    title: "Free UCAS Tariff Points Calculator | 2025/26 Guide",
    description:
      "Free UCAS Tariff points calculator and grade guides for A-Level, BTEC, IB, Scottish Highers, T-Levels, Access and EPQ. Official 2025/26 values, no signup.",
    url: "https://ucascalculator.com/",
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free UCAS Tariff Points Calculator | 2025/26 Guide",
    description:
      "Free UCAS Tariff points calculator and grade guides for A-Level, BTEC, IB, Scottish Highers, T-Levels, Access and EPQ. Official 2025/26 values, no signup.",
    images: [DEFAULT_OG_IMAGES[0].url],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "180x180",
      },
    ],
  },
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { color: "#4f46e5" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <GoogleAnalytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SiteChrome>
          <SiteHeader />
        </SiteChrome>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteChrome>
          <SiteFooter />
        </SiteChrome>
      </body>
    </html>
  );
}
