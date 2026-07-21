import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function HRActionCenter(){

const datasetReady=false;

return(

<PageLayout
title="🚀 HR Action Center"
description="Execute approved workforce actions"
>

{
!datasetReady ?

<EmptyState message="Connect dataset from Data Pipeline to generate intelligence."/>

:

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"20px"
}}
>


<Card title="Training">
Assign Training
</Card>

<Card title="Development">
Employee Development Plan
</Card>


</div>

}

</PageLayout>

)

}
