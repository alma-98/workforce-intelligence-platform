import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function DatasetComparison(){

const datasetReady=false;

return(

<PageLayout
title="📚 Dataset Comparison"
description="Messy vs Clean Dataset Quality Analysis"
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


<Card title="Before Cleaning">
Raw Enterprise Data
</Card>

<Card title="After Cleaning">
AI Ready Dataset
</Card>


</div>

}

</PageLayout>

)

}
