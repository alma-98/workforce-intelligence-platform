import { Link } from "react-router-dom";

export default function Employee360() {

const employees = [
{
name:"Ahmad Santoso",
role:"Senior Nurse",
department:"Clinical Operation",
skill:"AI Literacy 40%",
performance:"88%",
potential:"Clinical Data Specialist"
},
{
name:"Budi Wijaya",
role:"Data Analyst",
department:"Digital Healthcare",
skill:"Analytics 90%",
performance:"92%",
potential:"AI Specialist"
}
];


return (

<div
style={{
display:"flex",
minHeight:"100vh",
background:"#020617",
color:"#fff",
fontFamily:"Inter, Arial"
}}
>

{/* SIDEBAR */}

<aside
style={{
width:"260px",
background:"#0f172a",
padding:"30px 20px"
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


<p
style={{
color:"#94a3b8"
}}
>
Workforce Intelligence Platform
</p>


{
[
{label:"📊 Executive Dashboard", path:"/dashboard"},
{label:"👤 Employee 360", path:"/employee-360"},
{label:"🧩 Skill Gap Analysis", path:"/skill-gap"},
{label:"🤖 AI Recommendation", path:"/ai-recommendation"},
{label:"🚀 AI Hiring", path:"/ai-hiring"},
{label:"👥 Human Review", path:"/human-review"},
{label:"📂 Dataset Comparison", path:"/dataset-comparison"},
{label:"⚙ Data Pipeline", path:"/data-pipeline"},
{label:"🎯 Platform Strategy", path:"/platform-strategy"},
{label:"ℹ About", path:"/about"}
].map(item=>(

<Link
key={item.label}
to={item.path}
style={{
display:"block",
padding:"14px",
marginTop:"8px",
borderRadius:"12px",
color:"#fff",
textDecoration:"none",
background:
item.path==="/employee-360"
?"#2563eb"
:"transparent",
transition:"0.3s"
}}

onMouseEnter={(e)=>
e.currentTarget.style.background="#1e40af"
}

onMouseLeave={(e)=>
e.currentTarget.style.background=
item.path==="/employee-360"
?"#2563eb"
:"transparent"
}

>
{item.label}
</Link>

))
}


</aside>



{/* CONTENT */}

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
color:"#94a3b8"
}}
>
Complete employee intelligence profile powered by AI.
</p>



<section
style={{
marginTop:"30px",
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",
gap:"20px"
}}
>


{employees.map(emp=>(

<div
key={emp.name}
style={{
background:"rgba(255,255,255,.08)",
padding:"25px",
borderRadius:"20px"
}}
>

<h2>
{emp.name}
</h2>

<p>
Position:
<br/>
<b>{emp.role}</b>
</p>

<p>
Department:
<br/>
{emp.department}
</p>

<hr/>

<h3>
🧩 Skill Intelligence
</h3>

<p>
{emp.skill}
</p>


<h3>
📈 Performance
</h3>

<p>
{emp.performance}
</p>


<h3>
🎯 Career Potential
</h3>

<p>
{emp.potential}
</p>


<button>
✏ Edit
</button>

<button
style={{
marginLeft:"10px"
}}
>
🗑 Delete
</button>


</div>

))}


</section>




<section
style={{
marginTop:"30px",
background:"rgba(37,99,235,.2)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
🤖 AI Employee Insight
</h2>

<p>
AI detected high performance employees
with digital skill gaps.
</p>

<p>
Recommendation:
Launch AI Healthcare Upskilling Program.
</p>


</section>




<section
style={{
marginTop:"30px",
background:"rgba(34,197,94,.15)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
Risk Analysis
</h2>

<p>
Skill Risk:
Medium
</p>

<p>
Retention Risk:
Low
</p>

<p>
Promotion Potential:
High
</p>

</section>



<section
style={{
marginTop:"30px",
background:"rgba(255,255,255,.08)",
padding:"30px",
borderRadius:"20px"
}}
>

<h2>
Action Center
</h2>

<button>
Assign Training
</button>

<button
style={{
marginLeft:"10px"
}}
>
Create Development Plan
</button>

<button
style={{
marginLeft:"10px"
}}
>
Recommend Promotion
</button>

</section>



</main>


</div>

);

}
