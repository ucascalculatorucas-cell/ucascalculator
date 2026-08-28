import type { SVGProps } from "react";
import type { QualificationKey } from "@/lib/ucasTariff";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/* ========== BRAND ICONS ========== */

export function IconBrandLogo(props: IconProps) {
  const p = props;
  return (
    <svg {...defaults(p)} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none">
      <defs>
        <linearGradient id="capGrad" x1="16" y1="6" x2="16" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="calcGrad" x1="24" y1="20" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
        <linearGradient id="tasselGrad" x1="34.5" y1="9" x2="34.5" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      {/* Graduation cap */}
      <path
        d="M24 6L4 13.5L24 21L44 13.5L24 6Z"
        fill="url(#capGrad)"
      />
      <path
        d="M40 14.5V20.5"
        stroke="url(#tasselGrad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="34.5" cy="9.5" r="1.2" fill="#A855F7" />
      <path
        d="M33.6 10.8C33.6 10.8 33.2 12.8 33.9 13.5C34.6 14.2 35.5 14 35.5 14L35 17.7C35 17.7 34.8 18.4 34.3 18.4C33.8 18.4 33.7 17.7 33.7 17.7L33.3 14C33.3 14 32.3 14.1 32.9 13.3C33.5 12.5 33.4 10.8 33.4 10.8H33.6Z"
        fill="url(#tasselGrad)"
      />
      <path
        d="M18 20V29C18 30.1 18.9 31 20 31H28C29.1 31 30 30.1 30 29V20"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="#EEF2FF"
        opacity="0.06"
      />
      {/* Calculator body */}
      <rect x="8" y="22" width="32" height="22" rx="5" fill="url(#calcGrad)" />
      {/* Calculator LCD */}
      <rect x="13" y="26" width="22" height="5" rx="1.5" fill="#DBEAFE" opacity="0.9" />
      {/* 6 keypad buttons */}
      <rect x="13" y="33.5" width="4.3" height="3.5" rx="0.9" fill="#1E3A8A" opacity="0.7" />
      <rect x="18.8" y="33.5" width="4.3" height="3.5" rx="0.9" fill="#1E3A8A" opacity="0.7" />
      <rect x="24.6" y="33.5" width="4.3" height="3.5" rx="0.9" fill="#1E3A8A" opacity="0.7" />
      <rect x="13" y="38.4" width="4.3" height="3.5" rx="0.9" fill="#1E3A8A" opacity="0.7" />
      <rect x="18.8" y="38.4" width="4.3" height="3.5" rx="0.9" fill="#1E3A8A" opacity="0.7" />
      <rect x="24.6" y="38.4" width="4.3" height="3.5" rx="0.9" fill="#1E3A8A" opacity="0.7" />
      {/* Vertical equal button */}
      <rect x="30.4" y="33.5" width="4.6" height="8.4" rx="1.1" fill="#60A5FA" opacity="0.95" />
    </svg>
  );
}

export function IconBrandLogoMark(props: IconProps) {
  const p = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={p.size ?? 32}
      height={p.size ?? 32}
      viewBox="0 0 64 64"
      fill="none"
    >
      <defs>
        <linearGradient id="bgGrad" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F0A1F" />
          <stop offset="1" stopColor="#1E1B4B" />
        </linearGradient>
        <linearGradient id="capGrad2" x1="32" y1="8" x2="32" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="calcGrad2" x1="32" y1="30" x2="32" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#bgGrad)" />
      {/* Graduation cap */}
      <path d="M32 8L6 18L32 28L58 18L32 8Z" fill="url(#capGrad2)" />
      <circle cx="46" cy="12.5" r="1.8" fill="#C084FC" />
      <path d="M44 14.5V24" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M42.4 15.2C42.4 15.2 41.6 18.2 42.6 19.2C43.6 20.2 45.2 19.9 45.2 19.9L44.5 25.4C44.5 25.4 44.2 26.4 43.5 26.4C42.8 26.4 42.5 25.4 42.5 25.4L42 20C42 20 40.4 20.1 41.3 18.9C42.2 17.7 42 15.2 42 15.2H42.4Z"
        fill="#A855F7"
      />
      {/* Calculator */}
      <rect x="14" y="30" width="36" height="26" rx="6" fill="url(#calcGrad2)" />
      <rect x="20" y="35" width="24" height="6" rx="2" fill="#DBEAFE" opacity="0.92" />
      <rect x="20" y="43.5" width="5" height="4" rx="1.1" fill="#1E3A8A" opacity="0.8" />
      <rect x="27.5" y="43.5" width="5" height="4" rx="1.1" fill="#1E3A8A" opacity="0.8" />
      <rect x="35" y="43.5" width="5" height="4" rx="1.1" fill="#1E3A8A" opacity="0.8" />
      <rect x="20" y="49.5" width="5" height="4" rx="1.1" fill="#1E3A8A" opacity="0.8" />
      <rect x="27.5" y="49.5" width="5" height="4" rx="1.1" fill="#1E3A8A" opacity="0.8" />
      <rect x="35" y="49.5" width="5" height="4" rx="1.1" fill="#1E3A8A" opacity="0.8" />
      <rect x="42" y="43.5" width="5" height="10" rx="1.3" fill="#93C5FD" opacity="0.95" />
    </svg>
  );
}

/* ========== QUALIFICATION ICONS ========== */

export function IconALevel(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M10.3 13.1h2.5l-.9-2.7h-1L10 13.1zM10 8.5l.9 2.6m1.6-2.6l-.9 2.6" />
    </svg>
  );
}

export function IconBTEC(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      <path d="M12 7l.9 3h3l-2.4 1.7.9 3L12 12.4 9.6 14.7l.9-3L8.1 10h3L12 7z" />
    </svg>
  );
}

export function IconIB(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 15V9l2.5 3L12 9v6" />
      <path d="M14.5 9H17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2.5V9zm0 3h2.5" />
    </svg>
  );
}

export function IconScottish(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 5h18M3 9h18M3 13h18M3 17h18" />
      <path d="M7 3L17 21" />
      <path d="M17 3L7 21" />
    </svg>
  );
}

export function IconTLevel(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M6 9h12M12 9v9" />
      <path d="M9.5 6h5a.8.8 0 0 0 0-1.6h-5a.8.8 0 0 0 0 1.6z" />
    </svg>
  );
}

export function IconAccess(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}

export function IconEPQ(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M12 14a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 0v7" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function IconTrophy(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function IconCertificate(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <circle cx="15" cy="12" r="2.5" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function IconFlag(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M4 22V4M4 4h13l-2 4 2 4H4" />
    </svg>
  );
}

/* ========== UI ICONS ========== */

export function IconCheck(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function IconCalculator(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="16" y1="14" x2="16" y2="18" />
      <line x1="8" y1="18" x2="12" y2="18" />
    </svg>
  );
}

export function IconTable(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}

export function IconList(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function IconSmartphone(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <line x1="10.5" y1="18" x2="13.5" y2="18" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
    </svg>
  );
}

/* ========== STEP ICONS ========== */

export function IconClipboard(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <rect x="9" y="3" width="6" height="3.5" rx="1" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  );
}

export function IconGradeCheck(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="m11.2 10.8 2.3 2.3 3.8-3.8" />
    </svg>
  );
}

export function IconLightbulb(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3V18h6v-1c0-.9.3-1.7 1-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

export function IconAlertTriangle(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M10.3 3.9 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function IconPuzzle(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M19.4 12a1.6 1.6 0 0 0-2.8-1.1 1.6 1.6 0 0 1 0-2.3A1.6 1.6 0 0 0 14.4 6.5 1.6 1.6 0 0 0 12 3.6a1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0-2.8 1.1 1.6 1.6 0 0 0 0 2.3 1.6 1.6 0 0 1-2.4 1.2A1.6 1.6 0 0 0 2 12a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 1 0 2.8 1.6 1.6 0 0 0 1.1 2.9 1.6 1.6 0 0 0 2.8-1.1 1.6 1.6 0 0 1 2.3 0 1.6 1.6 0 0 0 2.9 1.1 1.6 1.6 0 0 0 1.1-2.9 1.6 1.6 0 0 1 0-2.8A1.6 1.6 0 0 0 22 12a1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 1-1-2.4z" />
    </svg>
  );
}

export function IconGift(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

/* ========== LEGAL / PAGES ICONS ========== */

export function IconMail(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <path d="M20 10c0 7-8 12-8 12S4 17 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...defaults(props)}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

/* ========== QUALICON mapper — takes a qualKey and renders the correct SVG icon ========== */

export function QualIcon({
  qualKey,
  size,
  className,
}: {
  qualKey: QualificationKey | string;
  size?: number;
  className?: string;
}) {
  const commonProps = { size: size ?? 20, className: className ?? "" };
  const k = qualKey as string;
  if (k.startsWith("a-level")) return <IconALevel {...commonProps} />;
  if (k.startsWith("as-level")) return <IconALevel {...commonProps} />;
  if (k.startsWith("btec-") || k === "btec-extended" || k === "btec-diploma") return <IconBTEC {...commonProps} />;
  if (k.startsWith("t-level") || k === "t-level") return <IconTLevel {...commonProps} />;
  if (k.startsWith("scottish")) return <IconScottish {...commonProps} />;
  if (k.startsWith("access-to-he") || k.startsWith("access")) return <IconAccess {...commonProps} />;
  if (k === "epq") return <IconEPQ {...commonProps} />;
  if (k === "ib") return <IconIB {...commonProps} />;
  if (k.startsWith("core-maths") || k.includes("maths")) return <IconCalculator {...commonProps} />;
  if (k.startsWith("irish")) return <IconGlobe {...commonProps} />;
  if (k.startsWith("welsh")) return <IconFlag {...commonProps} />;
  if (k.startsWith("cambridge-pre-u") || k === "cambridge-pre-u") return <IconCertificate {...commonProps} />;
  return <IconCertificate {...commonProps} />;
}

/* ========== HERO ILLUSTRATIONS (small decorative SVGs, no external images) ========== */

export function GradeBarChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 80"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="bg1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g fill="url(#bg1)">
        <rect x="10" y="40" width="24" height="40" rx="4" />
        <rect x="42" y="30" width="24" height="50" rx="4" />
        <rect x="74" y="20" width="24" height="60" rx="4" />
        <rect x="106" y="12" width="24" height="68" rx="4" />
        <rect x="138" y="6" width="24" height="74" rx="4" />
        <rect x="170" y="2" width="24" height="78" rx="4" />
        <rect x="202" y="0" width="24" height="80" rx="4" />
      </g>
      <g fill="#fff" opacity="0.85" fontFamily="ui-sans-serif, system-ui" fontSize="7" fontWeight="600">
        <text x="22" y="76" textAnchor="middle">E</text>
        <text x="54" y="76" textAnchor="middle">D</text>
        <text x="86" y="76" textAnchor="middle">C</text>
        <text x="118" y="76" textAnchor="middle">B</text>
        <text x="150" y="76" textAnchor="middle">A</text>
        <text x="182" y="76" textAnchor="middle">A*</text>
        <text x="214" y="76" textAnchor="middle">+</text>
      </g>
    </svg>
  );
}
