import express from "express";
const app = express();
import { getFilteredPlantsAsync, getPlantsAsync } from "./services";
import { Plant } from "./Types/Plant";
import { PlantType, Soil, Exposure, Moisture, ContainerTolerance, Attracts} from "./Enums/Enums";



app.listen(3000, () => {
    console.log("App is running on port 3000");
})

app.get("/api", async (req, res) => {
    const plants = await getPlantsAsync();

    
    if (plants.length != 0) {
        res.setHeader("content-type", "application/json");
        res.status(200).send(JSON.stringify(plants));
    } else {
        res.send(JSON.stringify({Error: "Bad Request"})).sendStatus(400);
    }
})

app.get("/test", async (req, res) => {
    const plants = await getFilteredPlantsAsync({
        PlantType: [PlantType.Annual, PlantType.Tree],
        Soil: [Soil["Medium (Loamy) - Heavy (Clay)"], Soil["Light (Sandy) - Heavy (Clay) / Well-drained"]],
        Exposure: [Exposure["Part Shade - Shade"], Exposure["Sun - Part Shade"], Exposure.Sun],
        Moisture: [Moisture["Dry - Moist"], Moisture.Moist, Moisture["Dry - Wet"], Moisture.Dry],
        ContainerTolerance: [ContainerTolerance.High, ContainerTolerance.Medium, ContainerTolerance.Low],
        Attracts: [Attracts["Bees and Butterflies"]],
        Edible: "yes",

    });
    if (plants.length != 0) {
        console.log(req.body)
        res.setHeader("content-type", "application/json");
        res.status(200).send(JSON.stringify(plants));
    } else {
        res.send(JSON.stringify({Error: "Bad Request"})).sendStatus(400);
    }
})