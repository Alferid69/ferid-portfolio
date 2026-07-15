import { ImageResponse } from "next/og";

export const alt =
  "Alferid Hassen Mohammed — Full Stack Developer | Flutter & MERN Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%)",
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
        {/* Decorative teal glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(20,184,166,0.12)",
            border: "1px solid rgba(20,184,166,0.3)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{ color: "#2dd4bf", fontSize: "18px", fontWeight: 600 }}
          >
            • Available for new opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-2px",
          }}
        >
          Alferid Hassen
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #2dd4bf, #a5f3fc, #818cf8)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "28px",
            WebkitBackgroundClip: "text",
          }}
        >
          Full Stack Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Specializing in Flutter, React & Node.js — Crafting robust, beautiful
          cross-platform apps.
        </div>

        {/* Skills pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Flutter", "React", "Node.js", "MongoDB", "Next.js"].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 20px",
                background: "rgba(15,23,42,0.8)",
                border: "1px solid rgba(51,65,85,0.8)",
                borderRadius: "8px",
                color: "#cbd5e1",
                fontSize: "18px",
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
            fontSize: "20px",
            color: "#475569",
            fontWeight: 500,
          }}
        >
          ferid.me
        </div>
      </div>
    ),
    { ...size }
  );
}
