import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          🚀 Prototype For Medika Nusantara
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          <a
            href="https://investment-tech-indonesia.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Workforce Intelligence Platform Powered Investment Technology Indonesia
          </a>
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#64748b",
            maxWidth: "760px",
            margin: "0 auto 45px",
            lineHeight: 1.8,
          }}
        >
          AI-powered Workforce Intelligence Platform that helps HR leaders
          analyze workforce readiness, identify skill gaps, and generate
          intelligent recommendations for strategic workforce planning.
        </p>

        <Link
          to="/dashboard"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "#fff",
            padding: "16px 36px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "18px",
            marginBottom: "60px",
          }}
        >
          🚀 Launch Platform
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "24px",
          }}
        >
          {[
            { value: "15,230", label: "Employees" },
            { value: "90", label: "Hospitals" },
            { value: "38%", label: "Skill Gap" },
            { value: "96.2%", label: "AI Accuracy" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  color: "#2563eb",
                  margin: 0,
                }}
              >
                {item.value}
              </h2>

              <p
                style={{
                  marginTop: "12px",
                  color: "#64748b",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <footer
          style={{
            marginTop: "70px",
            color: "#64748b",
            fontSize: "15px",
          }}
        >
          Powered by{" "}
          <a
            href="https://investment-tech-indonesia.web.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Investment Technology Indonesia
          </a>
        </footer>
      </div>
    </div>
  );
}
