"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const services_1 = require("./services");
const Enums_1 = require("./Enums/Enums");
app.listen(3000, () => {
    console.log("App is running on port 3000");
});
app.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plants = yield (0, services_1.getPlantsAsync)();
    if (plants.length != 0) {
        res.setHeader("content-type", "application/json");
        res.status(200).send(JSON.stringify(plants));
    }
    else {
        res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
    }
}));
app.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plants = yield (0, services_1.getFilteredPlantsAsync)({
        PlantType: [Enums_1.PlantType.Annual, Enums_1.PlantType.Tree],
        Soil: [Enums_1.Soil["Medium (Loamy) - Heavy (Clay)"], Enums_1.Soil["Light (Sandy) - Heavy (Clay) / Well-drained"]],
        Exposure: [Enums_1.Exposure["Part shade - shade"], Enums_1.Exposure["Sun - Part shade"], Enums_1.Exposure.Sun],
        Moisture: [Enums_1.Moisture["Dry - Moist"], Enums_1.Moisture.Moist, Enums_1.Moisture["Dry - Wet"], Enums_1.Moisture.Dry],
        ContainerTolerance: [Enums_1.ContainerTolerance.High, Enums_1.ContainerTolerance.Medium, Enums_1.ContainerTolerance.Low],
        Attracts: [Enums_1.Attracts.Bees, Enums_1.Attracts.Butterflies],
        Edible: "yes",
    });
    if (plants.length != 0) {
        console.log(req.body);
        res.setHeader("content-type", "application/json");
        res.status(200).send(JSON.stringify(plants));
    }
    else {
        res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
    }
}));
