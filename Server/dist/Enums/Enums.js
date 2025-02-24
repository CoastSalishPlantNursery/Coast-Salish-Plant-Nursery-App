"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attracts = exports.ContainerTolerance = exports.Moisture = exports.Soil = exports.Exposure = exports.PlantType = void 0;
var PlantType;
(function (PlantType) {
    PlantType["Annual"] = "Annual";
    PlantType["Fern"] = "Fern";
    PlantType["Grass"] = "Grass";
    PlantType["Perennial"] = "Perennial";
    PlantType["Shrub"] = "Shrub";
    PlantType["Tree"] = "Tree";
})(PlantType || (exports.PlantType = PlantType = {}));
var Exposure;
(function (Exposure) {
    Exposure["Part Shade"] = "Part Shade";
    Exposure["Part Shade - Shade"] = "Part Shade - Shade";
    Exposure["Sun"] = "Sun";
    Exposure["Sun - Part Shade"] = "Sun - Part Shade";
    Exposure["Sun - Shade"] = "Sun - Shade";
})(Exposure || (exports.Exposure = Exposure = {}));
var Soil;
(function (Soil) {
    Soil["Light (Sandy) - Heavy (Clay)"] = "Light (Sandy) - Heavy (Clay)";
    Soil["Light (Sandy) - Heavy (Clay) / Well-drained"] = "Light (Sandy) - Heavy (Clay) / Well-drained";
    Soil["Light (Sandy) - Medium (Loamy)"] = "Light (Sandy) - Medium (Loamy)";
    Soil["Light (Sandy) - Medium (Loamy) / Well-drained"] = "Light (Sandy) - Medium (Loamy) / Well-drained";
    Soil["Medium (Loamy) - Heavy (Clay)"] = "Medium (Loamy) - Heavy (Clay)";
})(Soil || (exports.Soil = Soil = {}));
var Moisture;
(function (Moisture) {
    Moisture["Dry"] = "Dry";
    Moisture["Dry - Moist"] = "Dry - Moist";
    Moisture["Dry - Wet"] = "Dry - Wet";
    Moisture["Moist"] = "Moist";
    Moisture["Moist - Dry"] = "Moist - Dry";
    Moisture["Moist - Wet"] = "Moist - Wet";
    Moisture["Wet"] = "Wet";
})(Moisture || (exports.Moisture = Moisture = {}));
var ContainerTolerance;
(function (ContainerTolerance) {
    ContainerTolerance["High"] = "High";
    ContainerTolerance["Low"] = "Low";
    ContainerTolerance["Medium"] = "Medium";
    ContainerTolerance["Moderate"] = "Moderate";
})(ContainerTolerance || (exports.ContainerTolerance = ContainerTolerance = {}));
var Attracts;
(function (Attracts) {
    Attracts["Bees and Butterflies"] = "Bees and Butterflies";
    Attracts["Birds"] = "Birds";
    Attracts["Hummingbirds"] = "Hummingbirds";
})(Attracts || (exports.Attracts = Attracts = {}));
