import Sidebar from "../Sidebar";

export default function PageLayout({
title,
description,
children
}:{
title:string;
description:string;
children:any;
}){

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

<h1>{title}</h1>

<p
style={{
color:"#94a3b8",
fontSize:"17px"
}}
>
{description}
</p>


{children}


</main>

</div>
)

}
