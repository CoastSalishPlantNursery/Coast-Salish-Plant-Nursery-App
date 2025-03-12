import { Criteria } from "../Types/Criteria";
import { Plant } from "../Types/Plant";

async function getAllPlants() {
  let error: string | null = null;
  let data: Plant[] = [];
  try {
    const res = await fetch(
      "https://coast-salish-plant-nursery-app.vercel.app/api"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    data = await res.json();
  } catch (e) {
    error = e as string;
  }
  return { data, error };
}

async function getPlantsByCriteria(criteria: Criteria) {
  let error: string | null = null;
  let data: Plant[] = [];
  try {
    const res = await fetch(
      "https://coast-salish-plant-nursery-app.vercel.app/api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(criteria),
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    data = await res.json();
  } catch (e) {
    error = e as string;
  }

  return { data, error };
}

export { getPlantsByCriteria, getAllPlants };
