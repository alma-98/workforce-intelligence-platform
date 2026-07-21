import PageLayout from "../../components/workforce/PageLayout";
import Card from "../../components/workforce/Card";
import EmptyState from "../../components/workforce/EmptyState";


export default function ImpactMonitoring(){

const datasetReady=false;

return(

<PageLayout
title="📈 Impact Monitoring"
description="Measure workforce improvement impact"
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


<Card title="Before vs After">
Impact Comparison
</Card>

<Card title="Business Impact">
Outcome Measurement
</Card>


</div>

}

</PageLayout>

)

}
