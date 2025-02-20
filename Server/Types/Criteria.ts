import { PlantType, Exposure, Soil, Moisture, ContainerTolerance, Attracts } from "../Enums/Enums"

export type Criteria = {
    PlantType?: Array<PlantType>,
    Exposure?: Array<Exposure>,
    Soil?: Array<Soil>,
    Moisture?: Array<Moisture>,
    ContainerTolerance?: Array<ContainerTolerance>
    Attracts?: Array<Attracts>
    Edible?: string
}