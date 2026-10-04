import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio | UCASCalculator",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-white">
      {children}
    </div>
  );
}
