import "reflect-metadata";
import "dotenv/config";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { LocationRepository } from "../repositories/locationRepository";
import { initDB } from "../db/init";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    await initDB();
    const locationRepo = new LocationRepository();
    const locations = await locationRepo.find();

    return res.status(200).json(locations);
  } catch (error) {
    console.error("🔥 FULL ERROR:", error);
    return res.status(500).json({ error: "Something broke" });
  }
}
