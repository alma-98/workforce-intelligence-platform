import { useState } from "react";
import Sidebar from "../../components/Sidebar";


const Box=({
title,
children
}:{
title:string,
children:any
})=>(
<div
style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
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

const [fileName,setFileName]=useState("");

const handleUpload=(e:any)=>{
const file=e.target.files[0];
if(file){
setFileName(file.name);
}
};

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
👤 Employee 360
</h1>


<p
style={{
color:"#94a3b8",
fontSize:"18px"
}}
>
AI Employee Intelligence Profile powered by Workforce Data Platform.
</p>



<Box title="📥 Data Source">

<p>
Upload Employee Dataset
</p>

<input
type="file"
accept=".xlsx,.csv"
onChange={handleUpload}
/>


{
fileName &&

<div
style={{
marginTop:"15px"
}}
>

<p>
Dataset:
<b>{fileName}</b>
</p>


<p>
Records:
Waiting AI Processing
</p>


<p>
Data Status:
<span style={{color:"#facc15"}}>
Validation Required
</span>
</p>


<p>
AI Processing:
Pending
</p>

</div>

}


{
!fileName &&

<p
style={{
color:"#94a3b8"
}}
>
No dataset uploaded
</p>

}


</Box>



<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"20px",
marginTop:"25px"
}}
>


<Box title="👤 Employee Profile">

<p>
Name:
Ahmad Santoso
</p>

<p>
Employee ID:
EMP-00123
</p>

<p>
Department:
Clinical Operation
</p>

<p>
Position:
Senior Nurse
</p>

</Box>



<Box title="🧠 AI Workforce Readiness">

<h1>
82%
</h1>

<p>
Digital Readiness:
70%
</p>

<p>
Future Role Fit:
88%
</p>

<p>
AI Confidence:
91%
</p>

</Box>




<Box title="🧩 Skill Intelligence">

<p>
Clinical Skill
</p>

<p>
██████████ 95%
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

</Box>




<Box title="🤖 AI Skill Inference">

<p>
Missing skill detected from dataset.
</p>

<p>
AI Prediction:
</p>

<p>
Digital Healthcare Skill
70%
</p>


<p>
Confidence:
82%
</p>


<p>
⚠ Human Review Required
</p>

</Box>



<Box title="📈 Performance Intelligence">

<p>
Performance Score:
88%
</p>

<p>
Productivity:
High
</p>

<p>
Trend:
Increasing
</p>

</Box>



<Box title="🎯 Career Prediction">

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

</Box>



<Box title="⚠ Risk Detection">

<p>
Skill Obsolescence:
MEDIUM
</p>

<p>
Retention Risk:
LOW
</p>

<p>
Digital Adoption Risk:
MEDIUM
</p>

</Box>



<Box title="📚 Training Recommendation">

<p>
Recommended Program:

</p>

<ul>

<li>
AI Healthcare Fundamentals
</li>

<li>
Data Analytics
</li>

<li>
Digital Transformation
</li>

</ul>

</Box>


</div>



<section
style={{
marginTop:"30px",
padding:"30px",
background:"rgba(37,99,235,.15)",
borderRadius:"20px"
}}
>


<h2>
🤖 AI Executive Insight
</h2>


<p>
Based on employee analysis,
AI detected capability gaps that may impact future workforce readiness.
</p>


<h3>
Recommended Action:
</h3>


<p>
Launch AI Healthcare Upskilling Program for selected employees.
</p>


</section>




<section
style={{
marginTop:"25px",
padding:"30px",
background:"#0f172a",
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
Send Human Review
</button>


<button style={{marginLeft:"10px"}}>
Update Employee Data
</button>


</section>



</main>


</div>

)

}

