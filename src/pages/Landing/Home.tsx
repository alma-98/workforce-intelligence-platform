import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          textAlign: "center",
          padding: 40,
        }}
      >
        <p
          style={{
            color: "#2563eb",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Prototype for Medika Nusantara
        </p>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            marginBottom: 16,
          }}
        >
          Workforce Intelligence Platform
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "20px",
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          Powered by investment-tech-indonesia.web.app
        </p>

        <p
          style={{
            color: "#475569",
            fontSize: "18px",
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          AI-powered workforce decision platform designed to help HR leaders
          transform fragmented workforce data into trusted business decisions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/dashboard"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Launch Demo
          </Link>

          <Link
            to="/about"
            style={{
              border: "2px solid #2563eb",
              color: "#2563eb",
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
