import { Criteria } from "../Types/Criteria";
import { Plant } from "../Types/Plant";

async function getAllPlants() {
  try {
    const res = await fetch("http://192.168.68.52:3000/api");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data as Plant[];
  } catch (error) {
    console.log("Error fetching plants:", error);
    return [];
  }
}

async function getPlantsByCriteria(criteria: Criteria) {
  try {
    const res = await fetch("http://192.168.68.52:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(criteria),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data as Plant[];
  } catch (error) {
    console.error("Error fetching plants:", error);
    return [];
  }
}

export { getPlantsByCriteria, getAllPlants };
