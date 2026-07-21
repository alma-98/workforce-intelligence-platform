import * as XLSX from "xlsx";
import { predictEmployee } from "./employeeAI";

export async function parseEmployeeExcel(file: File){

    const buffer = await file.arrayBuffer();

    const workbook = XLSX.read(buffer,{
        type:"array"
    });


    const sheet = workbook.Sheets[
        workbook.SheetNames[0]
    ];


    const rows:any[] = XLSX.utils.sheet_to_json(
        sheet,
        {
            defval:""
        }
    );


    console.log("========== RAW EXCEL DATA ==========");
    console.table(rows);


    const result = rows.map((row)=>{

        return predictEmployee(row);

    });


    console.log("========== AI EMPLOYEE RESULT ==========");
    console.table(result);

    console.log(
        "TOTAL EMPLOYEES:",
        result.length
    );


    return result;

}
