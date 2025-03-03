enum PlantType {
  "Annual" = "Annual",
  "Fern" = "Fern",
  "Grass" = "Grass",
  "Perennial" = "Perennial",
  "Shrub" = "Shrub",
  "Tree" = "Tree",
}

enum Exposure {
  "Part shade" = "Part shade",
  "Part shade - shade" = "Part shade - Shade",
  "Sun" = "Sun",
  "Sun - Part shade" = "Sun - Part shade",
  "Sun - Shade" = "Sun - Shade",
}

enum Soil {
  "Light (Sandy) - Heavy (Clay)" = "Light (Sandy) - Heavy (Clay)",
  "Light (Sandy) - Heavy (Clay) / Well-drained" = "Light (Sandy) - Heavy (Clay) / Well-drained",
  "Light (Sandy) - Medium (Loamy)" = "Light (Sandy) - Medium (Loamy)",
  "Light (Sandy) - Medium (Loamy) / Well-drained" = "Light (Sandy) - Medium (Loamy) / Well-drained",
  "Medium (Loamy) - Heavy (Clay)" = "Medium (Loamy) - Heavy (Clay)",
}

enum Moisture {
  "Dry" = "Dry",
  "Dry - Moist" = "Dry - Moist",
  "Dry - Wet" = "Dry - Wet",
  "Moist" = "Moist",
  "Moist - Dry" = "Moist - Dry",
  "Moist - Wet" = "Moist - Wet",
  "Wet" = "Wet",
}

enum ContainerTolerance {
  "High" = "High",
  "Low" = "Low",
  "Medium" = "Medium",
  "Moderate" = "Moderate",
}

enum Attracts {
  "Bees" = "Bees",
  "Butterflies" = "Butterflies",
  "Birds" = "Birds",
  "Hummingbirds" = "Hummingbirds",
}

export { PlantType, Exposure, Soil, Moisture, ContainerTolerance, Attracts };
