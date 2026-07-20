import Sidebar from "../../components/Sidebar";


const Card=(
{
title,
children
}:{
title:string,
children:any
})=>(
<div
style={{
background:"#0f172a",
padding:"25px",
borderRadius:"20px",
border:"1px solid rgba(255,255,255,.08)"
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
)



export default function Employee360(){

return(

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
👤 Employee 360
</h1>


<p
style={{
color:"#94a3b8",
fontSize:"18px"
}}
>
AI Workforce Intelligence Profile powered by employee data,
skill intelligence and decision AI.
</p>




<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"30px"
}}
>


<Card title="👤 Employee Identity">

<p>
Employee:
<b> Ahmad Santoso</b>
</p>

<p>
Unified ID:
MN-EMP-0002938
</p>

<p>
Source:
SAP SuccessFactors + Workable
</p>

<p>
Identity Confidence:
<span style={{color:"#22c55e"}}>
94%
</span>
</p>

</Card>




<Card title="🧠 Workforce Readiness Score">

<h1>
82%
</h1>

<p>
Digital Readiness: 65%
</p>

<p>
Future Role Fit: 88%
</p>

<p>
AI Confidence: 91%
</p>

</Card>



<Card title="🧩 Skill Intelligence">

<p>
Clinical Knowledge
</p>

<p>
██████████ 92%
</p>


<p>
Data Analytics
</p>

<p>
████░░░░░░ 40%
</p>


<p>
AI Literacy
</p>

<p>
███░░░░░░░ 30%
</p>

</Card>



<Card title="📈 Performance Intelligence">

<p>
Performance Score:
<b>88%</b>
</p>

<p>
Productivity Risk:
LOW
</p>

<p>
Performance Trend:
Growing
</p>

</Card>



<Card title="🤖 AI Skill Inference">

<p>
Missing Skill Record Detected
</p>

<p>
AI inferred:

<br/>

AI Literacy:
45%

</p>

<p>
Confidence:
76%
</p>

<p>
⚠ Human Review Required
</p>

</Card>



<Card title="🎯 Career Prediction">

<p>
Current Role:

Senior Nurse

</p>

<p>
AI Future Role:

Healthcare Data Specialist

</p>

<p>
Readiness:

72%

</p>

</Card>


<Card title="⚠ Risk Detection">

<p>
Skill Obsolescence:
MEDIUM
</p>

<p>
Attrition Risk:
MEDIUM
</p>

<p>
Reason:

Low digital adoption

</p>

</Card>


</div>




<section
style={{
marginTop:"30px",
background:"rgba(37,99,235,.15)",
padding:"30px",
borderRadius:"20px"
}}
>


<h2>
🤖 AI Executive Insight
</h2>


<p>
AI detected strong operational capability,
but digital capability gap may impact future workforce readiness.
</p>


<h3>
Recommended Action:
</h3>


<ul>

<li>
Launch AI Healthcare Upskilling Program
</li>

<li>
Create Individual Development Plan
</li>

<li>
Prepare Future Leadership Pipeline
</li>

</ul>


</section>





<section
style={{
marginTop:"30px",
background:"#0f172a",
padding:"30px",
borderRadius:"20px"
}}
>


<h2>
🚀 HR Action Center
</h2>


<button>
Assign Training
</button>


<button style={{marginLeft:"10px"}}>
Human Review
</button>


<button style={{marginLeft:"10px"}}>
Update Skill Profile
</button>


</section>




</main>


</div>

)

}
