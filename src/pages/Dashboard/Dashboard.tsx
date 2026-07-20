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
    ["15,230", "Employees"],
    ["90", "Hospitals"],
    ["38%", "Skill Gap"],
    ["96.2%", "AI Accuracy"],
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f1f5f9",
        fontFamily: "Inter, Arial",
      }}
    >

      <aside
        style={{
          width: "260px",
          background: "#0f172a",
          color: "#fff",
          padding: "30px 20px",
        }}
      >
        <Link
          to="/"
          style={{
            color:"#ffffff",
            textDecoration:"none",
          }}
        >
          <h2>
            🚀 Medika Nusantara
          </h2>
        </Link>

        {menu.map((item)=>(
          <div
            key={item}
            style={{
              padding:"14px",
              marginTop:"8px",
              borderRadius:"10px",
              background:
                item.includes("Executive")
                ? "#2563eb"
                : "transparent",
            }}
          >
            {item}
          </div>
        ))}
      </aside>


      <main
        style={{
          flex:1,
          padding:"35px",
        }}
      >

        <h1
          style={{
            fontSize:"32px",
            color:"#0f172a",
          }}
        >
          Executive Dashboard
        </h1>

        <p style={{color:"#64748b"}}>
          AI-powered workforce analytics & strategic planning
        </p>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px",
            marginTop:"30px",
          }}
        >

        {metrics.map((m)=>(
          <div
            key={m[1]}
            style={{
              background:"#fff",
              padding:"25px",
              borderRadius:"20px",
              boxShadow:"0 10px 30px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                fontSize:"38px",
                color:"#2563eb",
              }}
            >
              {m[0]}
            </h2>

            <span style={{color:"#64748b"}}>
              {m[1]}
            </span>
          </div>
        ))}

        </div>


        <div
          style={{
            marginTop:"30px",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"25px",
          }}
        >

          <section
            style={{
              background:"#fff",
              padding:"30px",
              borderRadius:"20px",
            }}
          >
            <h2>🧠 Workforce Readiness Score</h2>

            <h1 style={{color:"#16a34a"}}>
              82%
            </h1>

            <p>
              Organization readiness for future workforce needs.
            </p>
          </section>


          <section
            style={{
              background:"#fff",
              padding:"30px",
              borderRadius:"20px",
            }}
          >

            <h2>
              🤖 AI Recommendation
            </h2>

            <p>
              Upskill 320 employees in Data Analytics.
            </p>

            <strong>
              Impact Prediction: +18% Productivity
            </strong>

          </section>

        </div>


        <section
          style={{
            marginTop:"25px",
            background:"#fff",
            padding:"30px",
            borderRadius:"20px",
          }}
        >

          <h2>
            🧩 Skill Gap Analysis
          </h2>

          <p>
            AI detected critical capability gaps:
          </p>

          <ul>
            <li>AI Literacy ━━━━━ 45%</li>
            <li>Data Analytics ━━━ 55%</li>
            <li>Leadership ━━━━━ 70%</li>
          </ul>

        </section>


        <footer
          style={{
            marginTop:"50px",
            textAlign:"center",
            color:"#64748b",
          }}
        >
          Powered by{" "}
          <a
            href="https://investment-tech-indonesia.web.app/"
            style={{
              color:"#2563eb",
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
