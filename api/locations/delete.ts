import { VercelRequest, VercelResponse } from "@vercel/node";
import { initDB } from "../db/init";
import { LocationService } from "../services/locations";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    await initDB();

    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const locationService = new LocationService();
    await locationService.deleteLocation(id);

    return res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error occurred while deleting location" });
  }
}
