import { VercelRequest, VercelResponse } from "@vercel/node";
import { initDB } from "../db/init";
import { LocationRepository } from "../repositories/locationRepository";

export default async function handler(req:VercelRequest, res: VercelResponse) {
    try {

        await initDB();

        const { name, latitude, longitude } = req.body;
        
        if (!name || !latitude || !longitude) {
            return res.status(400).json({ error: "Name and description are required" });
        }

        const locationRepo = new LocationRepository();
        const location = await locationRepo.create({name, latitude, longitude, ...req.body    });

        return res.status(201).json(location);
    } catch ( err ) {
        console.log("🔥 FULL ERROR:", err);
        return res.status(500).json({ error: "Something broke" });
    }
}