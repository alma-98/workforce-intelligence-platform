import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function HumanReview(){

const datasetReady=false;

return(

<PageLayout
title="👥 Human Review"
description="Human validation workflow for AI decisions"
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


<Card title="Review Queue">
No Pending Review
</Card>

<Card title="Decision">
Approve / Reject
</Card>


</div>

}

</PageLayout>

)

}
