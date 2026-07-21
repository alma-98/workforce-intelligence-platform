export default function Card({
title,
children
}:{
title:string;
children:any;
}){

return(
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

}
