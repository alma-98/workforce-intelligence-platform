import Sidebar from "../../components/Sidebar";


const Card=({
title,
children
}:{
title:string,
children:any
})=>(
<div
style={{
background:"#0f172a",
padding:"28px",
borderRadius:"20px",
border:"1px solid rgba(255,255,255,.08)",
boxShadow:"0 10px 30px rgba(0,0,0,.25)"
}}
>

<h2>{title}</h2>

<div
style={{
color:"#cbd5e1",
lineHeight:"1.8"
}}
>
{children}
</div>

</div>
);


export default function AIHiring(){

return (

<div
style={{
display:"flex",
minHeight:"100vh",
background:"#020617",
color:"#fff",
fontFamily:"Inter,Arial"
}}
>

<Sidebar/>


<main
style={{
flex:1,
padding:"40px"
}}
>


<h1>
🤖 AI Hiring Intelligence
</h1>


<p
style={{
color:"#94a3b8",
fontSize:"18px"
}}
>
AI-powered candidate matching and workforce acquisition intelligence.
</p>



<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"24px",
marginTop:"30px"
}}
>


<Card title="📊 Hiring Overview">

<h1>
85%
</h1>

<p>
AI Candidate Match Accuracy
</p>

<p>
Active Hiring Pipeline:
50 Candidates
</p>

</Card>



<Card title="🎯 AI Candidate Matching">

<p>
Recommended Candidates
</p>

<ul>
<li>Candidate A - 92% Match</li>
<li>Candidate B - 87% Match</li>
<li>Candidate C - 82% Match</li>
</ul>

</Card>



<Card title="🧠 Skill Matching">

<p>
Required Skills:

</p>

<ul>
<li>AI Literacy</li>
<li>Data Analytics</li>
<li>Digital Healthcare</li>
</ul>

</Card>



<Card title="🤖 AI Hiring Recommendation">

<p>
AI Recommendation:
</p>

<h3>
Proceed Interview
</h3>

<p>
Based on skill compatibility,
experience and role requirement.
</p>

</Card>


</div>



<section
style={{
marginTop:"30px",
padding:"30px",
background:"linear-gradient(145deg,#1e3a8a,#0f172a)",
borderRadius:"22px"
}}
>

<h2>
🚀 Hiring Action Center
</h2>


<button
style={{
height:"48px",
padding:"0 24px",
background:"#2563eb",
color:"#fff",
border:"none",
borderRadius:"12px",
fontWeight:700,
cursor:"pointer"
}}
>
Schedule Interview
</button>


</section>



</main>

</div>

)

}
