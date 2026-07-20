import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function Employee360(){

const [employees,setEmployees]=useState([
{
id:"EMP-00123",
name:"Ahmad Santoso",
role:"Senior Nurse",
department:"Clinical Operation",
skill:"AI Literacy 40%",
performance:"88%",
risk:"Medium"
},
{
id:"EMP-00124",
name:"Budi Wijaya",
role:"Data Analyst",
department:"Digital Healthcare",
skill:"Analytics 90%",
performance:"92%",
risk:"Low"
}
]);


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
Complete employee intelligence profile powered by AI.
</p>



<section className="grid">


<Card
title="👥 Total Employee"
value="15,230"
/>

<Card
title="🧠 AI Skill Readiness"
value="82%"
/>

<Card
title="⚠ Skill Gap Detected"
value="320 Employees"
/>

<Card
title="🎯 High Potential Talent"
value="1,240"
/>


</section>



<section
style={{
marginTop:"30px",
background:"#0f172a",
padding:"25px",
borderRadius:"20px"
}}
>

<h2>
🔎 Employee Search
</h2>


<input
placeholder="Search employee..."
style={{
width:"100%",
padding:"15px",
borderRadius:"10px",
border:"none"
}}
/>


</section>




<section
style={{
marginTop:"30px"
}}
>

<h2>
👤 Employee Intelligence Profile
</h2>


<div className="grid">


{
employees.map(emp=>(

<div
key={emp.id}
style={{
background:"#0f172a",
padding:"25px",
borderRadius:"20px"
}}
>


<h2>
{emp.name}
</h2>

<p>
ID:
{emp.id}
</p>


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
⚠ Risk Analysis
</h3>

<p>
{emp.risk}
</p>


<button>
✏ Edit
</button>


<button
style={{marginLeft:"10px"}}
onClick={()=>{
setEmployees(
employees.filter(
x=>x.id!==emp.id
)
)
}}
>
🗑 Delete
</button>


</div>

))

}


</div>

</section>




<section
style={{
marginTop:"30px",
padding:"30px",
background:"rgba(37,99,235,.15)",
borderRadius:"20px"
}}
>

<h2>
🤖 AI Employee Insight
</h2>


<p>
AI detected employees with strong operational
performance but requiring digital capability improvement.
</p>


<h3>
AI Recommendation
</h3>


<ul>
<li>Launch AI Healthcare Upskilling Program</li>
<li>Create Individual Development Plan</li>
<li>Prepare Future Leadership Pipeline</li>
</ul>


</section>




<section
style={{
marginTop:"30px",
padding:"30px",
background:"#0f172a",
borderRadius:"20px"
}}
>

<h2>
🚀 HR Action Center
</h2>


<button>
+ Add Training
</button>

<button style={{marginLeft:"10px"}}>
Update Skill
</button>

<button style={{marginLeft:"10px"}}>
Recommend Promotion
</button>


</section>


</main>


<style>
{`

.grid{

display:grid;
grid-template-columns:
repeat(auto-fit,minmax(240px,1fr));
gap:20px;

}

button{

padding:10px 18px;
border-radius:10px;
border:none;
cursor:pointer;

}

`}
</style>


</div>

)

}



function Card(
{
title,
value
}:{
title:string,
value:string
}
){

return(

<div
style={{
background:"#0f172a",
padding:"25px",
borderRadius:"20px"
}}
>

<h3>
{title}
</h3>

<h1>
{value}
</h1>

</div>

)

}
