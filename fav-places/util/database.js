import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

let database;

async function initDatabase() {
  if (!database) {
    database = await SQLite.openDatabaseAsync("places.db");
  }
  return database;
}

export async function init() {
  try {
    const db = await initDatabase();
    await db.execAsync(
      `
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      );
    `,
      false,
    );
  } catch (error) {
    console.error("Failed to initialize database:", error);
    throw error;
  }
}

export async function insertPlace(place) {
  try {
    const db = await initDatabase();

    console.log({ place });

    // Ekstrak dan validasi data dengan strict checks
    const title = String(place?.title || "").trim();
    const imageUri = String(place?.imageUri || "").trim();
    const address = String(place?.address || "").trim();
    const lat = Number(place?.location?.lat) || 0;
    const lng = Number(place?.location?.lng) || 0;

    // Debug log
    console.log("Inserting place:", { title, imageUri, address, lat, lng });

    // Validasi mandatory fields di sisi database juga
    if (!title) {
      throw new Error("Title is required and cannot be empty");
    }

    // Gunakan runAsync untuk INSERT dengan binding yang benar
    const result = await db.runAsync(
      `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [title, imageUri, address, lat, lng],
    );

    console.log("Place inserted successfully:", result);
    return result;
  } catch (error) {
    console.error("Failed to insert place:", error);
    throw error;
  }
}

export async function fetchPlaces() {
  try {
    const db = await initDatabase();
    const result = await db.getAllAsync(`SELECT * FROM places`);

    const places = result.map(
      (dp) =>
        new Place(
          dp.title,
          dp.imageUri,
          {
            address: dp.address,
            lat: dp.lat,
            lng: dp.lng,
          },
          dp.id,
        ),
    );
    return places;
  } catch (error) {
    console.error("Failed to fetch places:", error);
    throw error;
  }
}

export async function fetchPlaceDetails(id) {
  try {
    const db = await initDatabase();
    const result = await db.getFirstAsync(`SELECT * FROM places WHERE id = ?`, [
      id,
    ]);
    const places = new Place(
      result.title,
      result.imageUri,
      {
        address: result.address,
        lat: result.lat,
        lng: result.lng,
      },
      result.id,
    );
    return places;
  } catch (error) {
    console.error("Failed to fetch place details:", error);
    throw error;
  }
}
