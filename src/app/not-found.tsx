import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "The page you are looking for could not be found or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "var(--black)",
        color: "var(--white)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div
        className="glass"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          width: "100%",
          padding: "clamp(32px, 6vw, 64px) clamp(24px, 5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div className="chip">
          <span className="dot" style={{ background: "#ef4444" }}></span>
          <span>HTTP 404</span>
        </div>

        <h1
          style={{
            margin: "0",
            fontSize: "clamp(4.5rem, 14vw, 8rem)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          404
        </h1>

        <h2
          style={{
            margin: "0",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--white)",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            margin: "0",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "var(--muted)",
            maxWidth: "380px",
          }}
        >
          The page you requested does not exist or may have been relocated.
        </p>

        <div style={{ marginTop: "12px" }}>
          <Link className="btn btn--light" href="/">
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
