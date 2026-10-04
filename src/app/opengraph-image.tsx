import { ImageResponse } from "next/og";

export const alt =
  "UCAS Calculator — free UCAS Tariff points calculator and grade guides";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #312e81 0%, #4f46e5 45%, #7c3aed 100%)",
          color: "#ffffff",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            UC
          </div>
          UCAS Calculator
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Free UCAS Tariff Points Calculator
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              opacity: 0.9,
              maxWidth: 900,
            }}
          >
            A-Level, BTEC, IB, Scottish Highers, T-Levels, Access and EPQ —
            official 2025/26 values
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            opacity: 0.88,
          }}
        >
          <span>No signup · Instant results</span>
          <span>ucascalculator.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
