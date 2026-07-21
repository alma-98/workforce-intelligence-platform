export interface EmployeePrediction{
  name:string;
  employeeId:string;
  department:string;
  position:string;
  workforceReadiness:number;
  digitalReadiness:number;
  aiConfidence:number;
  performance:number;
  futureRole:string;
  promotionReadiness:number;
  retentionRisk:string;
  skillGap:string[];
  trainingRecommendation:string[];
  executiveInsight:string;
}

const num=(v:any,d=0)=>{
  const n=Number(v);
  return Number.isFinite(n)?n:d;
}

export function predictEmployee(row:any):EmployeePrediction{

  const performance=num(row["Performance Score"]??row["Performance"],75);
  const digital=num(row["Digital Readiness"]??row["Digital Skill"],60);
  const training=num(row["Training Hours"],20);
  const tenure=num(row["Years of Service"]??row["Tenure"],3);

  const workforce=Math.round(
      performance*0.45+
      digital*0.35+
      Math.min(training,40)*0.20
  );

  const confidence=Math.min(
      99,
      Math.max(70,Math.round(workforce*0.9+10))
  );

  const promotion=Math.min(
      100,
      Math.round(
          performance*0.5+
          digital*0.2+
          tenure*5
      )
  );

  let futureRole=row["Position"]||"";

  if(performance>=90 && digital>=80)
      futureRole="Healthcare Data Specialist";
  else if(performance>=85)
      futureRole="Clinical Supervisor";
  else if(digital>=80)
      futureRole="Digital Health Officer";

  const gaps=[];

  if(digital<70) gaps.push("AI Literacy");
  if(training<20) gaps.push("Continuous Learning");
  if(performance<80) gaps.push("Leadership");

  return{

      name:
          row["Employee Name"] ??
          row["Name"] ??
          row["Employee_Name"] ??
          row["Full Name"] ??
          "Unknown",

      employeeId:
          row["Employee ID"] ??
          row["EmployeeID"] ??
          row["Employee Id"] ??
          row["ID"] ??
          row["Emp ID"] ??
          "",

      department:
          row["Department"] ??
          row["Dept"] ??
          row["Division"] ??
          "",

      position:
          row["Position"] ??
          row["Job Title"] ??
          row["Role"] ??
          "",

      workforceReadiness:workforce,

      digitalReadiness:digital,

      aiConfidence:confidence,

      performance,

      futureRole,

      promotionReadiness:promotion,

      retentionRisk:
          performance>=85?"LOW":
          performance>=70?"MEDIUM":"HIGH",

      skillGap:gaps,

      trainingRecommendation:[
          "AI Healthcare Fundamentals",
          "Data Analytics",
          "Digital Transformation"
      ],

      executiveInsight:
          "AI analysed performance, digital capability, training history and tenure to generate workforce prediction."
  }

}
