import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { parseEmployeeExcel } from "../../services/excelParser";
import type { EmployeePrediction } from "../../services/employeeAI";


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
const [, setProcessing] = useState(false);
const [completed,setCompleted]=useState(false);

const [employee,setEmployee]=useState<EmployeePrediction|null>(null);

const selectEmployee=(employeeId:string)=>{

    const found=employees.find(e=>e.employeeId===employeeId);

    if(found){

        setEmployee(found);

    }

};



const [employees,setEmployees]=useState<EmployeePrediction[]>([]);

const [file,setFile]=useState<File|null>(null);




const startProcessing=async()=>{

    if(!file){

        alert("Please upload Employee Dataset first.");

        return;

    }

    setProcessing(true);

    try{

        const result=await parseEmployeeExcel(file);

        setEmployees(result);

        if(result.length>0){

            setEmployee(result[0]);

        }

        setCompleted(true);

    }catch(err){

        console.error(err);

        alert("AI Processing Failed");

    }finally{

        setProcessing(false);

    }

};






const handleUpload=(e:any)=>{

    const selected=e.target.files?.[0];

    if(!selected) return;

    setFile(selected);

    setFileName(selected.name);

    setCompleted(false);

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


<div
style={{
display:"flex",
flexDirection:"row",
alignItems:"center",
gap:"12px"
}}
>


<label
style={{
width:"220px",
height:"42px",
display:"flex",
alignItems:"center",
justifyContent:"center",
background:"#2563eb",
color:"#fff",
borderRadius:"12px",
cursor:"pointer",
fontWeight:700,
whiteSpace:"nowrap"
}}
>

📥 Upload Employee Dataset

<input
type="file"
accept=".xlsx,.csv"
onChange={handleUpload}
style={{
display:"none"
}}
/>

</label>


<button
onClick={startProcessing}
style={{
width:"220px",
height:"42px",
background:"#2563eb",
color:"#fff",
border:"none",
borderRadius:"12px",
cursor:"pointer",
fontWeight:700,
whiteSpace:"nowrap"
}}
>

🤖 Start AI Processing

</button>


</div>


{
fileName &&

<div
style={{
marginTop:"20px"
}}
>

<p>
Dataset:
<b>{fileName}</b>
</p>

<div style={{marginTop:"16px"}}>

<label><b>Select Employee</b></label>

<br/>

<select
value={employee?.employeeId??""}
onChange={(e)=>selectEmployee(e.target.value)}
style={{
padding:"10px",
width:"320px",
borderRadius:"8px",
marginTop:"8px"
}}
>

<option value="">Choose Employee</option>

{employees.map(emp=>(
<option
key={emp.employeeId}
value={emp.employeeId}
>
{emp.name} ({emp.employeeId})
</option>
))}

</select>

</div>



<p>
Records:
{employees.length===0?"Waiting AI Processing":employees.length}
</p>

<p>
Data Status:
{employees.length>0?"Validated":"Validation Required"}
</p>

<p>
AI Processing:
{completed?"Completed":"Pending"}
</p>


</div>

}


{
completed &&

<p
style={{
color:"#22c55e"
}}
>
✓ AI Processing Completed
<br/>
Employee Intelligence Ready
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


<Box title="📊 Dataset Summary">

<p>Total Employees: {employees.length}</p>

<p>Processed: {employees.length}</p>

<p>AI Status: {completed ? "Completed" : "Pending"}</p>

</Box>



<Box title="👤 Employee Profile">

<p>
Name:
{employee?.name ?? "-"}
</p>

<p>
Employee ID:
{employee?.employeeId ?? "-"}
</p>

<p>
Department:
{employee?.department ?? "-"}
</p>

<p>
Position:
{employee?.position ?? "-"}
</p>

</Box>



<Box title="🧠 AI Workforce Readiness">

<h1>
{employee?.workforceReadiness ?? 0}%
</h1>

<p>
Digital Readiness:
{employee?.digitalReadiness ?? 0}%
</p>

<p>
Promotion Readiness: <b>{employee?.promotionReadiness ?? 0}%</b>
</p>

<p>
AI Confidence:
{employee?.aiConfidence ?? 0}%
</p>

</Box>




<Box title="🧩 Skill Intelligence">

<p>
Overall Workforce Readiness</p>

<p>
██████████ {employee?.workforceReadiness ?? 0}%
</p>


<p>
Digital Readiness</p>

<p>
████████ {employee?.digitalReadiness ?? 0}%
</p>


<p>
AI Confidence</p>

<p>
████████ {employee?.aiConfidence ?? 0}%
</p>

</Box>




<Box title="🤖 AI Skill Inference">

<p>
Detected Skill Gap:</p>

<p>
AI Prediction:
</p>

<ul>
{employee?.skillGap?.map(skill=>(
<li key={skill}>{skill}</li>
))}
</ul>


<p>
Confidence:
{employee?.aiConfidence ?? 0}%
</p>


<p>
⚠ Human Review Required
</p>

</Box>



<Box title="📈 Performance Intelligence">

<p>
Performance Score:
<b>{employee?.performance ?? 0}%</b>
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

{employee?.position ?? "-"}

</p>


<p>
AI Future Role:

{employee?.futureRole ?? "-"}

</p>


<p>
Promotion Readiness:

{employee?.promotionReadiness ?? 0}%

</p>

</Box>



<Box title="⚠ Risk Detection">

<p>
Skill Gap:
{employee?.skillGap?.length ?? 0}
</p>

<p>
Retention Risk:
<b>{employee?.retentionRisk}</b>
</p>

<p>
Digital Adoption Risk:
MEDIUM
</p>

</Box>



<Box title="📚 Training Recommendation">

<p>Recommended Program</p>

<ul>
{employee?.trainingRecommendation?.map(item=>(
<li key={item}>{item}</li>
))}
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
{employee?.executiveInsight}
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
