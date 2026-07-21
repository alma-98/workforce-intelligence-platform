import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function AIRecommendation(){

const datasetReady=false;

return(

<PageLayout
title="🤖 AI Recommendation"
description="AI generated workforce actions"
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


<Card title="Recommendation">
Waiting AI Analysis
</Card>

<Card title="Confidence">
AI Confidence Score
</Card>


</div>

}

</PageLayout>

)

}
