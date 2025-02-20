"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attracts = exports.ContainerTolerance = exports.Moisture = exports.Soil = exports.Exposure = exports.PlantType = void 0;
var PlantType;
(function (PlantType) {
    PlantType[PlantType["Annual"] = 0] = "Annual";
    PlantType[PlantType["Fern"] = 1] = "Fern";
    PlantType[PlantType["Grass"] = 2] = "Grass";
    PlantType[PlantType["Perennial"] = 3] = "Perennial";
    PlantType[PlantType["Shrub"] = 4] = "Shrub";
    PlantType[PlantType["Tree"] = 5] = "Tree";
})(PlantType || (exports.PlantType = PlantType = {}));
var Exposure;
(function (Exposure) {
    Exposure[Exposure["Part Shade"] = 0] = "Part Shade";
    Exposure[Exposure["Part Shade - Shade"] = 1] = "Part Shade - Shade";
    Exposure[Exposure["Sun"] = 2] = "Sun";
    Exposure[Exposure["Sun - Part Shade"] = 3] = "Sun - Part Shade";
    Exposure[Exposure["Sun - Shade"] = 4] = "Sun - Shade";
})(Exposure || (exports.Exposure = Exposure = {}));
var Soil;
(function (Soil) {
    Soil[Soil["Light (Sandy) - Heavy (Clay)"] = 0] = "Light (Sandy) - Heavy (Clay)";
    Soil[Soil["Light (Sandy) - Heavy (Clay) / Well-drained"] = 1] = "Light (Sandy) - Heavy (Clay) / Well-drained";
    Soil[Soil["Light (Sandy) - Medium (Loamy)"] = 2] = "Light (Sandy) - Medium (Loamy)";
    Soil[Soil["Light (Sandy) - Medium (Loamy) / Well-drained"] = 3] = "Light (Sandy) - Medium (Loamy) / Well-drained";
    Soil[Soil["Medium (Loamy) - Heavy (Clay)"] = 4] = "Medium (Loamy) - Heavy (Clay)";
})(Soil || (exports.Soil = Soil = {}));
var Moisture;
(function (Moisture) {
    Moisture[Moisture["Dry"] = 0] = "Dry";
    Moisture[Moisture["Dry - Moist"] = 1] = "Dry - Moist";
    Moisture[Moisture["Dry - Wet"] = 2] = "Dry - Wet";
    Moisture[Moisture["Moist"] = 3] = "Moist";
    Moisture[Moisture["Moist - Dry"] = 4] = "Moist - Dry";
    Moisture[Moisture["Moist - Wet"] = 5] = "Moist - Wet";
    Moisture[Moisture["Wet"] = 6] = "Wet";
})(Moisture || (exports.Moisture = Moisture = {}));
var ContainerTolerance;
(function (ContainerTolerance) {
    ContainerTolerance[ContainerTolerance["High"] = 0] = "High";
    ContainerTolerance[ContainerTolerance["Low"] = 1] = "Low";
    ContainerTolerance[ContainerTolerance["Medium"] = 2] = "Medium";
    ContainerTolerance[ContainerTolerance["Moderate"] = 3] = "Moderate";
})(ContainerTolerance || (exports.ContainerTolerance = ContainerTolerance = {}));
var Attracts;
(function (Attracts) {
    Attracts[Attracts["Bees and Butterflies"] = 0] = "Bees and Butterflies";
    Attracts[Attracts["Birds"] = 1] = "Birds";
    Attracts[Attracts["Hummingbirds"] = 2] = "Hummingbirds";
})(Attracts || (exports.Attracts = Attracts = {}));
