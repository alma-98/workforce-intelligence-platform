import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function SkillGapAnalysis(){

const datasetReady=false;

return(

<PageLayout
title="🧩 Skill Gap Analysis"
description="Organization capability and skill intelligence"
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


<Card title="Skill Gap">
Waiting Dataset Analysis
</Card>

<Card title="Training Priority">
AI Generated Priority
</Card>


</div>

}

</PageLayout>

)

}
