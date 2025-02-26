import express from "express";
const app = express();
import cors from "cors";
import { getFilteredPlantsAsync, getPlantsAsync } from "./services";
import { Criteria } from "./Types/Criteria";
import { Plant } from "./Types/Plant";
import {
  PlantType,
  Soil,
  Exposure,
  Moisture,
  ContainerTolerance,
  Attracts,
} from "./Enums/Enums";

app.use(cors({ origin: "*" }));

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

app.get("/api", async (req, res) => {
  const plants = await getPlantsAsync();

  if (plants.length != 0) {
    res.setHeader("content-type", "application/json");
    res.status(200).send(JSON.stringify(plants));
  } else {
    res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
  }
});

app.post("/test", async (req, res) => {
  const plants = await getFilteredPlantsAsync(<Criteria>req.body);
  if (plants.length != 0) {
    console.log(req.body);
    res.setHeader("content-type", "application/json");
    res.status(200).send(JSON.stringify(plants));
  } else {
    res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
  }
});
