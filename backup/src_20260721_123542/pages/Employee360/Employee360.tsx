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
background:"linear-gradient(145deg,#0f172a,#111827)",
padding:"30px",
borderRadius:"22px",
minHeight:"220px",
border:"1px solid rgba(148,163,184,.15)",
boxShadow:"0 10px 30px rgba(0,0,0,.25)",
transition:"0.3s"
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

const [employees, setEmployees] = useState<EmployeePrediction[]>([]);
const [selectedIndex, setSelectedIndex] = useState(0);

const [activeAction,setActiveAction]=useState<string>("");

const [actionStatus,setActionStatus]=useState<string>("");


const selectEmployee=(index:string)=>{
    const idx = Number(index);
    console.log("Selected:", idx, employees[idx]);
    if(!Number.isNaN(idx) && employees[idx]){
        setEmployee(employees[idx]);
    }
};




const [file,setFile]=useState<File|null>(null);





const resetEmployee360=()=>{

    setEmployee(null);
    setEmployees([]);
    setCompleted(false);
    setFile(null);
    setFileName("");
    setProcessing(false);

};

const startProcessing=async()=>{


    if(!file){

        alert("Please upload  first.");

        return;

    }

    setProcessing(true);

    try{

        const result=await parseEmployeeExcel(file);

        setEmployees(result);

        console.log("========== EMPLOYEES ==========");
        console.table(result);
        console.log("Total Employees:",result.length);


        setEmployees(result);

        if(result.length>0){

            setSelectedIndex(0);
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







const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
) => {

    const selected = e.target.files?.[0];

    if(!selected) return;


    setFile(selected);

    setFileName(selected.name);


    try{

        const result = await parseEmployeeExcel(selected);


        console.log("========== EMPLOYEE DATA ==========");
        console.table(result);
        console.log("TOTAL:", result.length);


        setEmployees(result);


        if(result.length > 0){

            setSelectedIndex(0);
            setEmployee(result[0]);

        }


    }catch(err){

        console.error(err);

        alert("Failed loading employee dataset");

    }


    setCompleted(false);

};





const assignTraining=()=>{
    setActiveAction("training");
};


const requestHumanReview=()=>{
    setActiveAction("review");
};


const updateEmployeeProfile=()=>{
    setActiveAction("profile");
};




const sendActionEmail=(type:string)=>{

let subject="";
let body="";

if(type==="training"){

subject="[Workforce Intelligence] Training Assignment Created";

body=`
Employee:
${employee?.name ?? "-"}

Action:
Assign Training

Recommended Training:
- AI Healthcare Fundamentals
- Data Analytics
- Digital Transformation

Status:
Assigned
`;

}

else if(type==="review"){

subject="[Workforce Intelligence] Human Review Required";

body=`
Employee:
${employee?.name ?? "-"}

Action:
Request Human Review

AI Finding:
Promotion Readiness ${employee?.promotionReadiness ?? 0}%

Risk:
${employee?.retentionRisk ?? "-"}

Status:
Waiting Review
`;

}

else{

subject="[Workforce Intelligence] Employee Profile Updated";

body=`
Employee:
${employee?.name ?? "-"}

Action:
Update Employee Profile

Department:
${employee?.department ?? "-"}

Position:
${employee?.position ?? "-"}

Status:
Updated
`;

}


window.location.href =
"mailto:alma.budsteddy88@gmail.com?subject="
+encodeURIComponent(subject)
+"&body="
+encodeURIComponent(body);

};


const confirmAction=()=>{

sendActionEmail(activeAction);


if(activeAction==="training"){

    setActionStatus(
    "✅ Training Assignment Created"
    );

}

else if(activeAction==="review"){

    setActionStatus(
    "✅ Human Review Request Submitted"
    );

}

else if(activeAction==="profile"){

    setActionStatus(
    "✅ Employee Profile Updated"
    );

}

setActiveAction("");

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


<h1 style={{
fontSize:"36px",
marginBottom:"10px"
}}>
👤 Employee 360 Intelligence Dashboard
</h1>


<p
style={{
color:"#94a3b8",
fontSize:"18px"
}}
>
AI Employee Intelligence Profile powered by Workforce Data Platform.
</p>



<Box title="📂 Employee Dataset">


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
width:"180px",
height:"48px",
display:"flex",
alignItems:"center",
justifyContent:"center",
background:"#2563eb",
color:"#fff",
borderRadius:"12px",
cursor:"pointer",
opacity:1,
fontWeight:700,
whiteSpace:"nowrap"
}}
>

📂 Choose Excel File

<input
type="file"
accept=".xlsx,.csv"
onChange={handleUpload}
style={{
display:"none"
}}
/>

</label>



</div>

<div style={{height:"24px"}}></div>

<div
style={{
marginTop:"8px",
padding:"20px",
background:"#0f172a",
borderRadius:"12px",
border:"1px solid rgba(255,255,255,.08)"
}}
>

<h3 style={{margin:'0 0 12px 0'}}>📁 Dataset Information</h3>

<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"20px"
}}
>

<p style={{margin:0}}>
File:
<b>{fileName}</b>
</p>

<div
style={{
display:"flex",
gap:"12px"
}}
>

<button
onClick={startProcessing}
style={{
width:"180px",
height:"48px",
background:"#2563eb",
color:"#fff",
border:"none",
borderRadius:"12px",
fontWeight:700,
cursor:"pointer"
}}
>
🤖 Analyze Data
</button>

<button
onClick={resetEmployee360}
style={{
width:"180px",
height:"48px",
background:"#ef4444",
color:"fff",
border:"none",
borderRadius:"12px",
fontWeight:700,
cursor:"pointer"
}}
>
↺ Reset
</button>

</div>

</div>

<div style={{marginTop:"16px"}}>

<label><b>👥 Select Employee</b></label>

<br/>

<select
disabled={!completed}
value={selectedIndex}
onChange={(e)=>{
const idx=Number(e.target.value);
setSelectedIndex(idx);
selectEmployee(e.target.value);
}}
style={{
padding:"10px",
width:"320px",
borderRadius:"12px",
marginTop:"8px"
}}
>

<option value="">Choose Employee</option>

{employees.map((emp,index)=>(
<option
key={emp.employeeId}
value={index}
>
{emp.name} ({emp.employeeId})
</option>
))}

</select>

</div>



<p>
Total Employees:
{employees.length===0?"Waiting AI Processing":employees.length}
</p>

<p>
Validation Status:
{employees.length>0?"Validated":"Validation Required"}
</p>

<p>
Processing Status:
{completed?"Completed":"Pending"}
</p>


</div>


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
gridTemplateColumns:"repeat(2,minmax(320px,1fr))",
gap:"24px",
marginTop:"30px",
alignItems:"stretch"
}}
>


<Box title="📊 Workforce Overview">

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"16px"
}}
>

<div
style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}
>
<h3>👥 Total Employees</h3>
<h1>{employees.length}</h1>
</div>


<div
style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}
>
<h3>🤖 AI Status</h3>
<h1>{completed ? "Ready" : "Pending"}</h1>
</div>


<div
style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}
>
<h3>📈 Processed</h3>
<h1>{employees.length}</h1>
</div>

</div>

</Box>



<Box title="👤 Employee Intelligence Profile">

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"16px"
}}
>

<div>
<h2>
{employee?.name ?? "-"}
</h2>

<p>
🆔 {employee?.employeeId ?? "-"}
</p>

</div>


<div>
<p>
🏢 Department
</p>

<b>
{employee?.department ?? "-"}
</b>

</div>


<div>
<p>
💼 Position
</p>

<b>
{employee?.position ?? "-"}
</b>

</div>


<div>
<p>
🟢 Employment Status
</p>

<b>
{employee?.employmentStatus ?? "-"}
</b>

</div>


<div>
<p>
📍 Location
</p>

<b>
{employee?.location ?? "-"}
</b>

</div>


<div>
<p>
👨‍💼 Manager
</p>

<b>
{employee?.manager ?? "-"}
</b>

</div>


<div>
<p>
⭐ Skill Level
</p>

<b>
{employee?.skillLevel ?? "-"}
</b>

</div>


</div>

</Box>



<Box title="🧠 Workforce Intelligence Score">

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"16px"
}}
>

<div style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}>
<h3>🧠 Workforce Readiness</h3>
<h1>
{employee?.workforceReadiness ?? 0}%
</h1>
</div>


<div style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}>
<h3>📈 Performance Score</h3>
<h1>
{employee?.performance ?? 0}%
</h1>
</div>


<div style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}>
<h3>🤖 AI Confidence</h3>
<h1>
{employee?.aiConfidence ?? 0}%
</h1>
</div>


<div style={{
background:"linear-gradient(145deg,#1e293b,#0f172a)",
padding:"24px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)"
}}>
<h3>🚀 Promotion Readiness</h3>
<h1>
{employee?.promotionReadiness ?? 0}%
</h1>
</div>

</div>

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
background:"linear-gradient(145deg,#1e3a8a,#0f172a)",
borderRadius:"22px",
border:"1px solid rgba(255,255,255,.1)"
}}
>

<h2>
🤖 AI Executive Insight
</h2>


<div
style={{
background:"#0f172a",
padding:"20px",
borderRadius:"16px",
marginTop:"15px"
}}
>

<p>
{employee?.executiveInsight ??
"AI detected workforce capability patterns and generated recommendations."}
</p>


<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"15px",
marginTop:"20px"
}}
>

<div>
<b>🤖 AI Confidence</b>
<h2>{employee?.aiConfidence ?? 0}%</h2>
</div>


<div>
<b>⚠ Risk Level</b>
<h2>{employee?.retentionRisk ?? "-"}</h2>
</div>


<div>
<b>🚀 Future Role</b>
<h2>{employee?.futureRole ?? "-"}</h2>
</div>

</div>

</div>

</section>


<section
style={{
marginTop:"25px",
padding:"30px",
background:"#0f172a",
borderRadius:"22px"
}}
>

<h2>
🚀 HR Action Center
</h2>


<div
style={{
display:"flex",
gap:"15px",
flexWrap:"wrap",
marginTop:"20px"
}}
>

<button
onClick={assignTraining}
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
🎓 Assign Training
</button>


<button
onClick={requestHumanReview}
style={{
height:"48px",
padding:"0 24px",
background:"#f59e0b",
color:"#fff",
border:"none",
borderRadius:"12px",
fontWeight:700,
cursor:"pointer"
}}
>
👥 Request Human Review
</button>


<button
onClick={updateEmployeeProfile}
style={{
height:"48px",
padding:"0 24px",
background:"#10b981",
color:"#fff",
border:"none",
borderRadius:"12px",
fontWeight:700,
cursor:"pointer"
}}
>
📝 Update Employee Profile
</button>

</div>


</section>









{
activeAction &&

<div
style={{
position:"fixed",
top:0,
left:0,
right:0,
bottom:0,
background:"rgba(0,0,0,.65)",
display:"flex",
alignItems:"center",
justifyContent:"center",
zIndex:999
}}
>

<div
style={{
width:"520px",
background:"#0f172a",
padding:"30px",
borderRadius:"20px",
border:"1px solid rgba(255,255,255,.1)"
}}
>


<h2>
{
activeAction==="training"
?
"🎓 AI Training Assignment"
:
activeAction==="review"
?
"👥 Human Review Request"
:
"📝 Update Employee Profile"
}
</h2>


<p>
Employee:
<b> {employee?.name ?? "-"} </b>
</p>


{
activeAction==="training" &&
<div>

<p>
Recommended Training:
</p>

<ul>
<li>AI Healthcare Fundamentals</li>
<li>Data Analytics</li>
<li>Digital Transformation</li>
</ul>

</div>
}


{
activeAction==="review" &&
<div>

<p>
AI Recommendation requires HR validation.</p>

<p>
Risk Level:
<b>{employee?.retentionRisk ?? "-"}</b>
</p>

</div>
}


{
activeAction==="profile" &&
<div>

<p>
Profile editor will update employee intelligence data.
</p>

<p>
Department:
{employee?.department ?? "-"}
</p>

<p>
Position:
{employee?.position ?? "-"}
</p>

</div>
}


<div
style={{
display:"flex",
gap:"12px",
marginTop:"25px"
}}
>

<button
onClick={confirmAction}
style={{
background:"#2563eb",
color:"#fff",
border:"none",
padding:"12px 24px",
borderRadius:"12px",
fontWeight:700,
cursor:"pointer"
}}
>
Confirm
</button>


<button
onClick={()=>setActiveAction("")}
style={{
background:"#ef4444",
color:"#fff",
border:"none",
padding:"12px 24px",
borderRadius:"12px",
fontWeight:700
}}
>
Close
</button>


</div>


</div>

</div>

}


{
actionStatus &&

<div
style={{
marginTop:"20px",
padding:"16px",
background:"#064e3b",
borderRadius:"12px",
fontWeight:700
}}
>
{actionStatus}
</div>

}

</main>


</div>

)

}