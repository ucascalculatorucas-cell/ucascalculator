import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  title: {
    default: "UCAS Tariff Points Calculator & Grade Guides 2025/26",
    template: "%s | UCASCalculator.com",
  },
  description:
    "Free UCAS Tariff points calculator & grade guides for A-Level, BTEC, IB, Scottish Highers, T-Levels, Access & EPQ. 2025/26 values. No signup.",
  keywords: [
    "ucas calculator",
    "ucas tariff points calculator",
    "ucas points calculator",
    "ucas points converter",
    "ucas tariff table 2025",
    "ucas tariff table 2026",
  ],
  authors: [{ name: "UCASCalculator.com" }],
  creator: "UCASCalculator.com",
  publisher: "UCASCalculator.com",
  openGraph: {
    title: "UCAS Tariff Points Calculator & Grade Guides 2025/26",
    description:
      "Free UCAS Tariff calculator & guides for A-Level, BTEC, IB, Scottish, T-Levels, Access & EPQ. 2025/26 values.",
    url: "https://ucascalculator.com/",
    siteName: "UCASCalculator.com",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UCAS Tariff Points Calculator & Guides 2025/26",
    description:
      "Free UCAS Tariff calculator for A-Level, BTEC, IB, Scottish, T-Levels, Access & EPQ.",
  },
  robots: {
    index: false,
    follow: false,
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
  applicationName: "UCASCalculator.com",
  appleWebApp: {
    capable: true,
    title: "UCASCalculator.com",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
