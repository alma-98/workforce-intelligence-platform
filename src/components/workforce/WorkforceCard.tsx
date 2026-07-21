export default function WorkforceCard({
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
border:"1px solid rgba(255,255,255,.08)",
borderRadius:"20px",
padding:"24px",
boxShadow:"0 10px 30px rgba(0,0,0,.25)"
}}
>

<h3
style={{
marginTop:0,
color:"#fff"
}}
>
{title}
</h3>

<div
style={{
color:"#cbd5e1",
lineHeight:1.7
}}
>
{children}
</div>

</div>
)

}
