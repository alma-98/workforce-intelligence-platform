import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function PlatformStrategy(){

const datasetReady=false;

return(

<PageLayout
title="🎯 Platform Strategy"
description="Product strategy and scalability"
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


<Card title="Vision">
AI Workforce Operating System
</Card>

<Card title="Roadmap">
90 Days Product Roadmap
</Card>


</div>

}

</PageLayout>

)

}
