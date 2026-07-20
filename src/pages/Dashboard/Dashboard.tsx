import { Link } from "react-router-dom";

export default function Dashboard() {
  const cards = [
    { title: "Employees", value: "15,230" },
    { title: "Hospitals", value: "90" },
    { title: "Skill Gap", value: "38%" },
    { title: "AI Accuracy", value: "96.2%" },
  ];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <header
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Workforce Intelligence Platform</h2>

        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            background: "#1d4ed8",
            padding: "10px 18px",
            borderRadius: 8,
          }}
        >
          Home
        </Link>
      </header>

      <main style={{ padding: 40 }}>
        <h1 style={{ marginBottom: 30 }}>
          Executive Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                padding: 24,
                borderRadius: 16,
                boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              }}
            >
              <h3>{card.title}</h3>

              <h1
                style={{
                  color: "#2563eb",
                  marginTop: 10,
                }}
              >
                {card.value}
              </h1>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            background: "#fff",
            borderRadius: 16,
            padding: 30,
            boxShadow: "0 8px 24px rgba(0,0,0,.08)",
          }}
        >
          <h2>AI Workforce Summary</h2>

          <p style={{ lineHeight: 1.8 }}>
            Workforce Intelligence Platform analyzes employee skills,
            predicts workforce readiness, identifies skill gaps,
            and recommends AI-driven development plans for HR leaders.
          </p>
        </div>

        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 20,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
            }}
          >
            <h3>Skill Gap</h3>
            <p>Clinical : 41%</p>
            <p>IT : 27%</p>
            <p>HR : 18%</p>
            <p>Finance : 14%</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
            }}
          >
            <h3>Recent Activities</h3>

            <ul>
              <li>✓ AI Recommendation Generated</li>
              <li>✓ Employee Skill Updated</li>
              <li>✓ Dataset Imported</li>
              <li>✓ Human Review Completed</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
