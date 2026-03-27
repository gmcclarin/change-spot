import { VercelRequest, VercelResponse } from "@vercel/node";
import { initDB } from "../db/init";
import { LocationService } from "../services/locations";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await initDB();
    const locationService = new LocationService();

    if (req.method !== "PUT") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { id, name, latitude, longitude, address, googlePlaceId } = req.body;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const updatedLocation = await locationService.updateLocation(id, {
      name,
      latitude,
      longitude,
      address,
      googlePlaceId,
    });

    if (!updatedLocation) {
      return res.status(404).json({ error: "Location not found" });
    }

    return res.status(200).json(updatedLocation);
  } catch (error) {
    console.log("🔥 FULL ERROR:", error);
    return res.status(500).json({ error: "Something broke" });
  }
}
