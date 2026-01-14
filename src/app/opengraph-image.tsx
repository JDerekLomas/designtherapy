import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Design Therapy - Transform Your Inner World";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F0E8",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #C9BBA8 1px, transparent 1px), linear-gradient(to bottom, #C9BBA8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.15,
          }}
        />

        {/* Main content card */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 80,
            width: 700,
            height: 470,
            background: "white",
            borderRadius: 16,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            padding: 50,
          }}
        >
          {/* Tape decorations */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: 70,
              width: 80,
              height: 28,
              background: "rgba(245,245,220,0.9)",
              transform: "rotate(-2deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -12,
              right: 70,
              width: 80,
              height: 28,
              background: "rgba(245,245,220,0.9)",
              transform: "rotate(3deg)",
            }}
          />

          <span style={{ color: "#C9774E", fontSize: 32, fontWeight: 400 }}>
            Psychotherapy & Coaching
          </span>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  background: "rgba(255,235,59,0.7)",
                  padding: "8px 12px",
                  fontSize: 64,
                  fontWeight: 300,
                  color: "#1a1a1a",
                }}
              >
                Design
              </span>
              <span style={{ fontSize: 64, fontWeight: 300, color: "#1a1a1a", marginLeft: 12 }}>
                your
              </span>
            </div>
            <span style={{ fontSize: 64, fontWeight: 300, color: "#1a1a1a", marginTop: 10 }}>
              inner world
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <span style={{ color: "#666", fontSize: 24 }}>
              Amsterdam • In-person & Online
            </span>
            <span style={{ color: "#888", fontSize: 20, marginTop: 8 }}>
              English • German • Dutch
            </span>
          </div>
        </div>

        {/* Post-it notes */}
        {/* Yellow post-it */}
        <div
          style={{
            position: "absolute",
            right: 170,
            top: 100,
            width: 180,
            height: 140,
            background: "#FFEB3B",
            transform: "rotate(-5deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <span style={{ fontSize: 28, color: "#5D4E00", fontStyle: "italic" }}>
            fresh ideas
          </span>
        </div>

        {/* Pink post-it with heart */}
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 280,
            width: 200,
            height: 180,
            background: "#F48FB1",
            transform: "rotate(3deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {/* Heart shape using emoji */}
          <span style={{ fontSize: 80 }}>💗</span>
        </div>

        {/* Blue post-it */}
        <div
          style={{
            position: "absolute",
            right: 200,
            bottom: 60,
            width: 160,
            height: 120,
            background: "#81D4FA",
            transform: "rotate(-3deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <span style={{ fontSize: 26, color: "#0D3C55", fontStyle: "italic" }}>
            your future
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 40,
            display: "flex",
          }}
        >
          <span style={{ fontSize: 28, color: "#1a1a1a", fontWeight: 300 }}>Design</span>
          <span style={{ fontSize: 28, color: "#C9774E", fontWeight: 300 }}>Therapy</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
