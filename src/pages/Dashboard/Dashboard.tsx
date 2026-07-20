import Sidebar from "../../components/Sidebar";

export default function Dashboard() {

  const kpis = [
    {
      value: "15,230",
      label: "Employees",
      detail: "Workforce analyzed by AI"
    },
    {
      value: "90",
      label: "Hospitals",
      detail: "Business units monitored"
    },
    {
      value: "38%",
      label: "Skill Gap",
      detail: "Critical capability gap"
    },
    {
      value: "96.2%",
      label: "AI Accuracy",
      detail: "Prediction confidence"
    }
  ];

  const skills = [
    {
      name:"AI Literacy",
      current:"45%",
      target:"80%"
    },
    {
      name:"Data Analytics",
      current:"55%",
      target:"85%"
    },
    {
      name:"Leadership",
      current:"70%",
      target:"90%"
    }
  ];


  return (

<div
style={{
display:"flex",
minHeight:"100vh",
background:"#020617",
fontFamily:"Inter, Arial"
}}
>


{/* SIDEBAR */}

<Sidebar />



{/* CONTENT */}

<main
style={{
flex:1,
padding:"40px",
color:"#fff",
background:
"linear-gradient(135deg,#020617,#1e3a8a)"
}}
>


<h1>
Executive Dashboard
</h1>

<p
style={{
color:"#94a3b8"
}}
>
AI-powered workforce analytics & strategic decision intelligence
</p>



{/* AI EXECUTIVE BRIEF */}

<section
style={{
marginTop:"30px",
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
🤖 AI Executive Brief
</h2>

<p>
Based on 15,230 employee analysis,
AI detected critical workforce capability gaps.
</p>


<strong>
Recommended Action:
</strong>

<p>
Launch AI Healthcare Upskilling Program
for 320 employees.
</p>


</section>



{/* KPI */}

<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginTop:"30px"
}}
>


{kpis.map(kpi=>(

<div
key={kpi.label}
style={{
background:"rgba(255,255,255,.08)",
padding:"25px",
borderRadius:"20px",
border:
"1px solid rgba(255,255,255,.15)"
}}
>

<h1>
{kpi.value}
</h1>

<h3>
{kpi.label}
</h3>

<p
style={{
color:"#94a3b8"
}}
>
{kpi.detail}
</p>

</div>

))}

</div>



{/* INTELLIGENCE */}

<div
style={{
display:"grid",
gridTemplateColumns:
"1fr 1fr",
gap:"25px",
marginTop:"30px"
}}
>


<section
style={{
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
🧠 Workforce Intelligence Score
</h2>


<h1
style={{
fontSize:"70px",
color:"#22c55e"
}}
>
82%
</h1>


<p>
Based on skills, performance,
learning progress and business demand.
</p>

</section>



<section
style={{
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
🔮 AI Prediction Engine
</h2>


<p>
Next 12 Months Forecast
</p>

<h3>
📈 +18% Productivity
</h3>

<h3>
🚀 +25% Skill Readiness
</h3>

<h3>
⚠ -30% Workforce Risk
</h3>


</section>


</div>




{/* SKILL GAP */}

<section
style={{
marginTop:"30px",
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
🧩 Skill Gap Intelligence
</h2>


{
skills.map(skill=>(

<div key={skill.name}
style={{
marginTop:"20px"
}}
>

<p>
{skill.name}
<br/>
Current {skill.current}
&nbsp; | &nbsp;
Target {skill.target}
</p>


</div>

))
}


</section>




{/* BUSINESS IMPACT */}

<section
style={{
marginTop:"30px",
background:"rgba(34,197,94,.15)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
📈 Business Impact Forecast
</h2>


<p>
Potential saving:
<b> Rp 2.4B</b>
</p>

<p>
Internal Mobility:
<b> +22%</b>
</p>

<p>
Retention Improvement:
<b> +15%</b>
</p>


</section>




{/* AI RECOMMENDATION */}

<section
style={{
marginTop:"30px",
background:"rgba(59,130,246,.15)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
🤖 AI Workforce Copilot
</h2>


<p>
Problem:
320 employees have critical AI skill gaps.
</p>

<p>
Recommendation:
Create AI Healthcare Academy.
</p>



</section>



<footer
style={{
marginTop:"60px",
textAlign:"center",
color:"#94a3b8"
}}
>

Powered by{" "}

<a
href="https://investment-tech-indonesia.web.app/"
style={{
color:"#38bdf8",
fontWeight:700
}}
>
Investment Technology Indonesia
</a>

</footer>



</main>

</div>

);

}
