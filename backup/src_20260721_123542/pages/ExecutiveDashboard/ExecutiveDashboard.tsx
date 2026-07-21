import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function ExecutiveDashboard(){

const datasetReady=false;

return(

<PageLayout
title="📊 Executive Dashboard"
description="Workforce executive intelligence overview"
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


<Card title="👥 Total Employees">
Dataset Employee Count
</Card>

<Card title="🤖 AI Status">
Processing Status
</Card>

<Card title="🧠 Workforce Readiness">
AI Workforce Score
</Card>


</div>

}

</PageLayout>

)

}
