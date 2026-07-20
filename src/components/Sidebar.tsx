import { Link } from "react-router-dom";

export default function Sidebar(){

const menus=[
["📊 Executive Dashboard","/dashboard"],
["👤 Employee 360","/employee-360"],
["🧩 Skill Gap Analysis","/skill-gap"],
["🤖 AI Recommendation","/ai-recommendation"],
["🚀 AI Hiring","/ai-hiring"],
["👥 Human Review","/human-review"],
["📂 Dataset Comparison","/dataset-comparison"],
["⚙ Data Pipeline","/data-pipeline"],
["🎯 Platform Strategy","/platform-strategy"],
["ℹ About","/about"]
];

return (

<aside
style={{
width:"260px",
background:"#0f172a",
padding:"30px 20px",
color:"#fff"
}}
>

<h2>
🚀 Medika Nusantara
</h2>

<p
style={{
color:"#94a3b8"
}}
>
Workforce Intelligence Platform
</p>


{
menus.map(menu=>(

<Link
key={menu[0]}
to={menu[1]}
style={{
display:"block",
padding:"14px",
marginTop:"8px",
borderRadius:"12px",
color:"#fff",
textDecoration:"none",
transition:"all .25s ease"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.background="#2563eb";
e.currentTarget.style.transform="translateX(8px)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.background="transparent";
e.currentTarget.style.transform="translateX(0)";
}}

>
{menu[0]}
</Link>

))
}


</aside>

)

}
