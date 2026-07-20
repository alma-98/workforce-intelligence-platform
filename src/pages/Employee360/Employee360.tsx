import Sidebar from "../../components/Sidebar";

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

<Sidebar />



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
