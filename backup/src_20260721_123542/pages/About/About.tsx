import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function About(){

const datasetReady=false;

return(

<PageLayout
title="ℹ About"
description="Product information"
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


<Card title="Product">
Workforce Intelligence Platform
</Card>

<Card title="AI Principle">
Responsible AI
</Card>


</div>

}

</PageLayout>

)

}
