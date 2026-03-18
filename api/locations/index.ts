import { VercelRequest, VercelResponse } from "@vercel/node";
import { LocationRepository } from "../repositories/locationRepository";

const locationRepo = new LocationRepository();

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
    const locations = await locationRepo.find();
    if (!locations) {
        return res.status(404).json({ message: "No locations found" });
    }
  res.status(200).json(locations);
}