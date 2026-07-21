import { NavLink } from "react-router-dom";


const menu=[
{
label:"📊 Dashboard",
path:"/dashboard"
},
{
label:"📥 Data Pipeline",
path:"/data-pipeline"
},
{
label:"📚 Dataset Comparison",
path:"/dataset-comparison"
},
{
label:"👤 Employee 360",
path:"/employee-360"
},
{
label:"🧩 Skill Gap Analysis",
path:"/skill-gap"
},
{
label:"🤖 AI Recommendation",
path:"/ai-recommendation"
},
{
label:"👥 Human Review",
path:"/human-review"
},
{
label:"🚀 HR Action Center",
path:"/hr-action-center"
},
{
label:"📈 Impact Monitoring",
path:"/impact-monitoring"
},
{
label:"🎯 Platform Strategy",
path:"/platform-strategy"
},
{
label:"ℹ About",
path:"/about"
}
];


export default function Sidebar(){

return(

<aside
style={{
width:"260px",
minHeight:"100vh",
background:"#020617",
borderRight:"1px solid rgba(255,255,255,.08)",
padding:"24px",
boxSizing:"border-box"
}}
>

<h2
style={{
color:"#fff",
marginBottom:"30px"
}}
>
🧠 Workforce Intelligence
</h2>


<nav
style={{
display:"flex",
flexDirection:"column",
gap:"10px"
}}
>

{
menu.map(item=>(

<NavLink
key={item.path}
to={item.path}
style={({isActive})=>({

padding:"14px 16px",
borderRadius:"12px",
textDecoration:"none",
color:"#fff",
background:isActive
?"#2563eb"
:"transparent",
fontWeight:600

})}
>

{item.label}

</NavLink>

))
}

</nav>


</aside>

)

}
