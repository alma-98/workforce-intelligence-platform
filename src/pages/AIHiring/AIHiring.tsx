import { Link } from "react-router-dom";

export default function AIHiring(){

return (
<div
style={{
minHeight:"100vh",
background:"#020617",
color:"#fff",
padding:"50px",
fontFamily:"Inter,Arial"
}}
>

<Link
to="/dashboard"
style={{
color:"#38bdf8",
textDecoration:"none",
fontWeight:700,
fontSize:"18px"
}}
>
🚀 Dashboard
</Link>

<h1>
🚀 AI Hiring Intelligence
</h1>

<p>
AI-powered recruitment and workforce planning engine.
</p>

<section
style={{
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"20px",
marginTop:"30px"
}}
>

<h2>
AI Candidate Matching
</h2>

<p>
Analyze candidate skills, experience,
and workforce requirements.
</p>

<h3>
Match Accuracy: 94%
</h3>

</section>

</div>
)

}
