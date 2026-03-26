import { VercelRequest, VercelResponse } from "@vercel/node";
import { initDB } from "../db/init";
import { LocationRepository } from "../repositories/locationRepository";
import { LocationService } from "../services/locations";

export default async function handler(req:VercelRequest, res: VercelResponse) {
    try {

        await initDB();

        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });   
        }

        const { name, latitude, longitude, address, googlePlaceId,  } = req.body;
        
        if (!name || !latitude || !longitude) {
            return res.status(400).json({ error: "Name and description are required" });
        }

        const locationService = new LocationService();
        const location = await locationService.createLocation({name, latitude, longitude, address, googlePlaceId    });

        return res.status(201).json(location);
    } catch ( err ) {
        console.log("🔥 FULL ERROR:", err);
        return res.status(500).json({ error: "Something broke" });
    }
}