export default function Dashboard() {
  const stats = [
    { title: "Employees", value: "15,230" },
    { title: "Hospitals", value: "90" },
    { title: "Skill Gap", value: "38%" },
    { title: "AI Accuracy", value: "96.2%" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#0f172a",
          fontSize: "32px",
          marginBottom: "8px",
        }}
      >
        Executive Dashboard
      </h1>

      <p
        style={{
          color: "#64748b",
          fontSize: "18px",
          marginBottom: "35px",
        }}
      >
        AI-powered workforce analytics for Medika Nusantara
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "24px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#ffffff",
              padding: "28px",
              borderRadius: "18px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                fontSize: "38px",
                color: "#2563eb",
                margin: 0,
              }}
            >
              {item.value}
            </h2>

            <p
              style={{
                color: "#64748b",
                fontWeight: 600,
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "35px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "18px",
        }}
      >
        <h2>🧩 Skill Gap Analysis</h2>

        <p>
          AI detected workforce capability gaps requiring strategic
          development.
        </p>

        <ul>
          <li>AI Literacy: 45% → Target 80%</li>
          <li>Data Analytics: 55% → Target 85%</li>
          <li>Leadership: 70% → Target 90%</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "35px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "18px",
        }}
      >
        <h2>🤖 AI Recommendation Engine</h2>

        <p>
          Prioritize upskilling 320 employees in Data Analytics
          to improve workforce readiness.
        </p>

        <strong>
          Predicted Impact: +18% productivity
        </strong>
      </div>

      <footer
        style={{
          marginTop: "70px",
          color: "#64748b",
          textAlign: "center",
        }}
      >
        Powered by{" "}
        <a
          href="https://investment-tech-indonesia.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2563eb",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Investment Technology Indonesia
        </a>
      </footer>
    </div>
  );
}
