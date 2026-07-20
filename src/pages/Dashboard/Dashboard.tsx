import { Link } from "react-router-dom";

export default function Dashboard() {
  const menu = [
    "📊 Executive Dashboard",
    "👤 Employee 360",
    "🧩 Skill Gap Analysis",
    "🤖 AI Recommendation",
    "👥 Human Review",
    "📂 Dataset Comparison",
    "⚙ Data Pipeline",
    "🎯 Platform Strategy",
    "ℹ About",
  ];

  const metrics = [
    {
      value: "15,230",
      label: "Employees",
      icon: "👥",
    },
    {
      value: "90",
      label: "Hospitals",
      icon: "🏥",
    },
    {
      value: "38%",
      label: "Skill Gap",
      icon: "🧩",
    },
    {
      value: "96.2%",
      label: "AI Accuracy",
      icon: "🤖",
    },
  ];

  const skills = [
    ["AI Literacy", "45%"],
    ["Data Analytics", "55%"],
    ["Leadership", "70%"],
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "#ffffff",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >

      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          background: "#0f172a",
          padding: "30px 20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          <h2>
            🚀 Medika Nusantara
          </h2>
        </Link>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Workforce Intelligence Platform
        </p>

        {menu.map((item, index) => (
          <div
            key={item}
            style={{
              padding: "14px",
              marginBottom: "8px",
              borderRadius: "12px",
              background:
                index === 0
                  ? "#2563eb"
                  : "transparent",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}

      </aside>


      {/* MAIN DASHBOARD */}
      <main
        style={{
          flex: 1,
          padding: "40px",
          background:
            "linear-gradient(135deg,#020617,#1e3a8a)",
        }}
      >

        <h1
          style={{
            fontSize: "38px",
            marginBottom: "10px",
          }}
        >
          Executive Dashboard
        </h1>

        <p
          style={{
            color:"#94a3b8",
            fontSize:"18px",
          }}
        >
          AI-powered workforce analytics & strategic planning
        </p>


        {/* KPI */}
        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px",
            marginTop:"35px",
          }}
        >

        {metrics.map((item)=>(

          <div
            key={item.label}
            style={{
              background:"rgba(255,255,255,.08)",
              border:
                "1px solid rgba(255,255,255,.15)",
              padding:"25px",
              borderRadius:"20px",
              backdropFilter:"blur(15px)",
            }}
          >

            <div style={{fontSize:"30px"}}>
              {item.icon}
            </div>

            <h2
              style={{
                fontSize:"40px",
                margin:"10px 0",
              }}
            >
              {item.value}
            </h2>

            <p style={{color:"#94a3b8"}}>
              {item.label}
            </p>

          </div>

        ))}

        </div>


        {/* AI SECTION */}

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap:"25px",
            marginTop:"30px",
          }}
        >

          <section
            style={{
              background:"rgba(255,255,255,.08)",
              padding:"30px",
              borderRadius:"25px",
            }}
          >

            <h2>
              🧠 Workforce Intelligence Score
            </h2>

            <h1
              style={{
                fontSize:"70px",
                color:"#22c55e",
              }}
            >
              82%
            </h1>

            <p>
              Future workforce readiness index
            </p>

          </section>


          <section
            style={{
              background:"rgba(255,255,255,.08)",
              padding:"30px",
              borderRadius:"25px",
            }}
          >

            <h2>
              🤖 AI Prediction Engine
            </h2>

            <p>
              Next 12 Months Forecast
            </p>

            <h3>
              🚀 +18% Productivity
            </h3>

            <h3>
              📈 +25% Skill Coverage
            </h3>

            <h3>
              ⚠ -30% Capability Risk
            </h3>

          </section>

        </div>


        {/* SKILL GAP */}

        <section
          style={{
            marginTop:"30px",
            background:"rgba(255,255,255,.08)",
            padding:"30px",
            borderRadius:"25px",
          }}
        >

          <h2>
            🧩 Skill Gap Analytics
          </h2>


          {skills.map(skill=>(

            <div key={skill[0]}>

              <p>
                {skill[0]} — {skill[1]}
              </p>

              <div
                style={{
                  height:"12px",
                  background:"#1e293b",
                  borderRadius:"20px",
                }}
              >

                <div
                  style={{
                    width:skill[1],
                    height:"12px",
                    background:"#38bdf8",
                    borderRadius:"20px",
                  }}
                />

              </div>

            </div>

          ))}

        </section>


        <section
          style={{
            marginTop:"30px",
            background:"rgba(239,68,68,.15)",
            padding:"30px",
            borderRadius:"25px",
          }}
        >

          <h2>
            ⚠ Workforce Risk Detection
          </h2>

          <p>
            320 employees require strategic upskilling intervention.
          </p>

          <strong>
            Recommendation:
            AI & Data Academy Program
          </strong>

        </section>


        <footer
          style={{
            marginTop:"60px",
            textAlign:"center",
            color:"#94a3b8",
          }}
        >
          Powered by{" "}

          <a
            href="https://investment-tech-indonesia.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color:"#38bdf8",
              fontWeight:700,
              textDecoration:"none",
            }}
          >
            Investment Technology Indonesia
          </a>

        </footer>


      </main>

    </div>
  );
}
