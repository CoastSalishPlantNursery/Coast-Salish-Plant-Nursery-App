import { JWT } from "google-auth-library";
import {createTokenAsync} from "./GoogleAuth";
import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { Plant } from "./Types/Plant";
import { ContainerTolerance, Exposure, Moisture, PlantType, Soil } from "./Enums/Enums";
import { Criteria } from "./Types/Criteria";

export async function getPlantsAsync(): Promise<Plant[]> {
    let plants: Array<Plant> = [];
    try {
        let i: number = 1;
        const token: JWT = await createTokenAsync();
        const doc: GoogleSpreadsheet = new GoogleSpreadsheet("1lr0Js5rcaaetcg6lEX37Yvf7F3NtTN2wfUm35AusReo", token);
        await doc.loadInfo();
        const sheet: GoogleSpreadsheetWorksheet = doc.sheetsByTitle["Plants"];
        await sheet.loadCells();
        while (i < sheet.rowCount) {
            
            plants.push({
                PlantName: <string>sheet.getCell(i, 0).value,
                LatinName: <string>sheet.getCell(i, 1).value,
                PlantType: <PlantType>sheet.getCell(i, 2).value,
                Exposure: <Exposure>sheet.getCell(i, 3).value,
                Soil: <Soil>sheet.getCell(i, 4).value,
                Moisture: <Moisture>sheet.getCell(i, 5).value,
                ContainerTolerance: <ContainerTolerance>sheet.getCell(i, 6).value,
                Attracts: (sheet.getCell(i, 7).value?.toString().includes(",") ? 
                            <Array<string>>sheet.getCell(i, 7).value?.toString().split(", ") :
                            <string>sheet.getCell(i, 7).value?.toString()
                        ),
                Summary: <string>sheet.getCell(i, 8).value,
                Tags: (sheet.getCell(i, 9).value?.toString().includes(",") ? 
                    <Array<string>>sheet.getCell(i, 9).value?.toString().split(", ") :
                    <string>sheet.getCell(i, 9).value?.toString()
                    ),
            });
            i++;
        }
} catch (error) {
    console.log(error)
    plants = [];
}
finally {return plants}
}

export async function getFilteredPlantsAsync(creteria: Criteria) {
    let plants = await getPlantsAsync();
    let filteredPlants = plants.filter(item => {
        return (creteria.PlantType?.length == 0 ? true : (creteria.PlantType?.includes(item.PlantType) ? true : false)) && 
                (creteria.Soil?.length == 0 ? true : (creteria.Soil?.includes(item.Soil) ? true : false) ) &&
                (creteria.Exposure?.length == 0 ? true : (creteria.Exposure?.includes(item.Exposure) ? true : false)) && 
                (creteria.Moisture?.length == 0 ? true : (creteria.Moisture?.includes(item.Moisture) ? true : false)) && 
                (creteria.ContainerTolerance?.length == 0 ? true : (creteria.ContainerTolerance?.includes(item.ContainerTolerance) ? true : false)) &&
                (creteria.Attracts?.length == 0 ? true : (arrayEntryInText(<Array<string>>creteria.Attracts, item.Attracts.toString()) == true ? true : false))    
    })
    console.log(filteredPlants.length)
    return filteredPlants;
}



function arrayEntryInText(array: String[], text: string) {
    let result = false;
    let textToLowerCase = text.toLowerCase();
    array.forEach(element => {
        if (textToLowerCase.includes(element.toLowerCase())) {
            result = true;
        }
    });
    return result;
}