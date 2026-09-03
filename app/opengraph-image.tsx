import { ImageResponse } from "next/og";

export const alt =
  "Alferid Hassen Mohammed — Full Stack Developer | Flutter & Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        backgroundColor: "#090a0f",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Top Spec Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(245, 158, 11, 0.15)",
          border: "1px solid #f59e0b",
          borderRadius: "9999px",
          padding: "6px 18px",
          marginBottom: "28px",
        }}
      >
        <span style={{ color: "#fbbf24", fontSize: "14px", fontWeight: 600 }}>
          ENGINEER PROFILE // ADDIS ABABA, ET
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: "56px",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.1,
          marginBottom: "12px",
          letterSpacing: "-1px",
        }}
      >
        Alferid Hassen
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#fbbf24",
          marginBottom: "24px",
        }}
      >
        Full Stack & Mobile Engineer
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "18px",
          color: "#94a3b8",
          lineHeight: 1.5,
          maxWidth: "750px",
        }}
      >
        Specializing in Flutter (Dart) & Next.js/Node ecosystems. Engineering
        resilient cross-platform applications and scalable systems.
      </div>

      {/* Skills pills */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "40px",
        }}
      >
        {["Flutter", "Dart", "Next.js", "React", "Node.js", "PostgreSQL"].map((skill) => (
          <div
            key={skill}
            style={{
              padding: "6px 16px",
              background: "#161822",
              border: "1px solid #232736",
              borderRadius: "8px",
              color: "#f8fafc",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* URL badge */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          right: "80px",
          fontSize: "18px",
          color: "#f59e0b",
          fontWeight: 600,
        }}
      >
        ferid.me
      </div>
    </div>,
    { ...size },
  );
}
