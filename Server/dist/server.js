"use strict";
// import express from "express";
// const app = express();
// import { getFilteredPlantsAsync, getPlantsAsync } from "./services";
// import { Plant } from "./Plant";
// import { PlantType } from "./Enums";
// app.listen(3000, () => {
//     console.log("App is running on port 3000");
// })
// app.get("/api", async (req, res) => {
//     const plants = await getPlantsAsync();
//     Array
//     if (plants.length != 0) {
//         res.setHeader("content-type", "application/json");
//         res.status(200).send(JSON.stringify(plants));
//     } else {
//         res.send(JSON.stringify({Error: "Bad Request"})).sendStatus(400);
//     }
// })
// app.get("/test", async (req, res) => {
//     const plants = await getFilteredPlantsAsync({
//         PlantType: [PlantType.Annual, PlantType.Fern],
//     });
//     if (plants.length != 0) {
//         res.setHeader("content-type", "application/json");
//         res.status(200).send(JSON.stringify(plants));
//     } else {
//         res.send(JSON.stringify({Error: "Bad Request"})).sendStatus(400);
//     }
// })
