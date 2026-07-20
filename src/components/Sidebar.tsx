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


<Link
to="/"
style={{
color:"#ffffff",
textDecoration:"none",
display:"inline-block",
fontWeight:800,
transition:"all .3s ease"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.color="#38bdf8";
e.currentTarget.style.transform="translateY(-5px) scale(1.1)";
e.currentTarget.style.textShadow="0 0 20px #38bdf8";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.color="#ffffff";
e.currentTarget.style.transform="translateY(0) scale(1)";
e.currentTarget.style.textShadow="none";
}}
>
<h2>
<span
className="rocket-logo"
>
🚀
</span>
 Medika Nusantara
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
