
import { Link } from "react-router-dom";

export default function Dashboard() {

const metrics=[
["15,230","Employees"],
["90","Hospitals"],
["38%","Skill Gap"],
["96.2%","AI Accuracy"]
];

const skills=[
["AI Literacy","45%"],
["Data Analytics","55%"],
["Leadership","70%"]
];

return (

<div
style={{
display:"flex",
minHeight:"100vh",
background:"linear-gradient(135deg,#020617,#0f172a,#1e3a8a)",
padding:"40px",
fontFamily:"Inter,Arial",
color:"#fff"
}}
>

<aside
style={{
width:"260px",
background:"#0f172a",
padding:"30px 20px",
color:"#fff",
minHeight:"100vh"
}}
>

<Link
to="/"
style={{
color:"#fff",
textDecoration:"none"
}}
>
<h2>
🚀 Medika Nusantara
</h2>
</Link>

<p style={{color:"#94a3b8"}}>
Workforce Intelligence Platform
</p>

{[
"📊 Executive Dashboard",
"👤 Employee 360",
"🧩 Skill Gap Analysis",
"🤖 AI Recommendation",
"👥 Human Review",
"📂 Dataset Comparison",
"⚙ Data Pipeline",
"🎯 Platform Strategy",
"ℹ About"
].map(item=>(
<div
key={item}
style={{
padding:"14px",
marginTop:"8px",
borderRadius:"10px",
background:item.includes("Executive")
?"#2563eb"
:"transparent"
}}
>
{item}
</div>
))}

</aside>

<main
style={{
flex:1,
padding:"40px"
}}
>

<h1 style={{fontSize:"38px"}}>
Executive Dashboard
</h1>

<p style={{color:"#94a3b8"}}>
AI-powered workforce analytics & strategic planning
</p>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginTop:"35px"
}}
>

{metrics.map(m=>(

<div
key={m[1]}
style={{
background:"rgba(255,255,255,.08)",
backdropFilter:"blur(20px)",
padding:"25px",
borderRadius:"20px",
border:"1px solid rgba(255,255,255,.15)"
}}
>

<h2 style={{fontSize:"40px"}}>
{m[0]}
</h2>

<p style={{color:"#94a3b8"}}>
{m[1]}
</p>

</div>

))}

</div>


<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"25px",
marginTop:"30px"
}}
>


<div
style={{
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"25px"
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
Future workforce readiness index
</p>

</div>



<div
style={{
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"25px"
}}
>

<h2>
🤖 AI Prediction Engine
</h2>

<p>
Next 12 Months Forecast:
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


</div>

</div>



<div
style={{
marginTop:"30px",
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"25px"
}}
>

<h2>
📊 Skill Gap Analytics
</h2>


{skills.map(s=>(

<div key={s[0]}>

<p>
{s[0]} — {s[1]}
</p>

<div
style={{
height:"12px",
background:"#1e293b",
borderRadius:"20px"
}}
>

<div
style={{
width:s[1],
height:"12px",
background:"#38bdf8",
borderRadius:"20px"
}}
/>

</div>

</div>

))}


</div>



<div
style={{
marginTop:"30px",
background:"rgba(239,68,68,.15)",
padding:"30px",
borderRadius:"25px"
}}
>

<h2>
⚠ Workforce Risk Detection
</h2>

<p>
320 employees require strategic upskilling intervention.
</p>

<strong>
Recommended Action:
AI & Data Academy Program
</strong>

</div>


<footer
style={{
marginTop:"60px",
textAlign:"center"
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


</div>

)

}
