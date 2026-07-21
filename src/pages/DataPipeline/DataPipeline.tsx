import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function DataPipeline(){

const datasetReady=false;

return(

<PageLayout
title="📥 Data Pipeline"
description="Employee data ingestion and AI preparation"
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


<Card title="📂 Dataset Upload">
Upload Employee Dataset
</Card>

<Card title="🔍 Data Validation">
Missing Data Detection
</Card>

<Card title="🤖 AI Processing">
Cleaning → Normalization → Intelligence
</Card>


</div>

}

</PageLayout>

)

}
