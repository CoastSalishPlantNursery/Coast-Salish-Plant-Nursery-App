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
const cors_1 = __importDefault(require("cors"));
const services_1 = require("./services");
app.use((0, cors_1.default)({ origin: "*" }));
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
app.post("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plants = yield (0, services_1.getFilteredPlantsAsync)(req.body);
    if (plants.length != 0) {
        console.log(req.body);
        res.setHeader("content-type", "application/json");
        res.status(200).send(JSON.stringify(plants));
    }
    else {
        res.send(JSON.stringify({ Error: "Bad Request" })).sendStatus(400);
    }
}));
