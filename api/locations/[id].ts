import { VercelRequest, VercelResponse } from "@vercel/node";
import { initDB } from "../db/init";
import { LocationService } from "../services/locations";

export default async function handler(req:VercelRequest, res: VercelResponse) {
    try {
        if (req.method !== "GET") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        const { id } = req.query;
        await initDB();

        const locationService = new LocationService();
        const location = await locationService.getLocationById(Number(id));

        return res.status(200).json(location);

    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({ error: "Internal server error" });    
    }
}