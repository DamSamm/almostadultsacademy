import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Almost Adults Academy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b2e 0%, #3a3560 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {["#7b2d8b", "#ff6b35", "#06d6a0", "#ffd166", "#e63946", "#2d6a4f"].map(
            (color) => (
              <div
                key={color}
                style={{
                  width: "48px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: color,
                }}
              />
            )
          )}
        </div>

        {/* Academy name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: "20px",
          }}
        >
          The Almost Adults Academy
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "#ffd166",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "40px",
            fontStyle: "italic",
          }}
        >
          Small Humans, Big Plans.
        </div>

        {/* Programme pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Coding", color: "#7b2d8b" },
            { label: "Life Skills", color: "#ff6b35" },
            { label: "Creative Arts", color: "#06d6a0" },
            { label: "STEM", color: "#cc9a00" },
            { label: "Performing Arts", color: "#e63946" },
            { label: "Outdoor Classes", color: "#2d6a4f" },
          ].map(({ label, color }) => (
            <div
              key={label}
              style={{
                backgroundColor: color,
                color: "#fff",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: "48px",
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: "400",
          }}
        >
          After-school enrichment for ages 5–12 · Singapore
        </div>
      </div>
    ),
    { ...size }
  );
}
