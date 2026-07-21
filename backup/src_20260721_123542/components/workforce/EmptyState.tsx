export default function EmptyState({
message
}:{
message:string
}){

return(
<div
style={{
marginTop:"30px",
padding:"40px",
background:"#0f172a",
borderRadius:"20px",
textAlign:"center"
}}
>

<h2>
📂 No Dataset Available
</h2>

<p style={{color:"#94a3b8"}}>
{message}
</p>

</div>
)

}
