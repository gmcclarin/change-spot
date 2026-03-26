import "reflect-metadata";
import "dotenv/config";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { initDB } from "../db/init";
import { LocationService } from "../services/locations";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    await initDB();
    const locationService = new LocationService();
    const locations = await locationService.getAllLocations();

    return res.status(200).json(locations);
  } catch (error) {
    console.error("🔥 FULL ERROR:", error);
    return res.status(500).json({ error: "Something broke" });
  }
}
