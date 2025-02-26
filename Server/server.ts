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
app.use(express.json());

app
  .route("/api")
  .get(async (req, res) => {
    const plants = await getPlantsAsync();

    if (plants.length != 0) {
      res.setHeader("content-type", "application/json");
      res.status(200).send(JSON.stringify(plants));
    } else {
      res.send(JSON.stringify({ Error: res.statusMessage })).sendStatus(500);
    }
  })
  .post(async (req, res) => {
    if (req.body === undefined) {
      res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
    } else {
      const reqBody: Criteria = JSON.parse(JSON.stringify(req.body));
      const plants = await getFilteredPlantsAsync(reqBody);
      if (plants.length != 0) {
        console.log(req.body);
        res.setHeader("content-type", "application/json");
        res.status(200).send(JSON.stringify(plants));
      } else {
        res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
      }
    }
  });

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
