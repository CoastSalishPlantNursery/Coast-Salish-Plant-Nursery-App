import {PlantType, Exposure, Soil, Moisture, ContainerTolerance, Attracts} from "../Enums/Enums"

export type Plant = {
    PlantName: string,
    LatinName: string,
    PlantType: PlantType,
    Exposure: Exposure,
    Soil: Soil,
    Moisture: Moisture,
    ContainerTolerance: ContainerTolerance,
    Attracts: Array<string> | string,
    Summary: String,
    Tags: Array<string> | string
    
}