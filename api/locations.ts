import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.status(200).json([
    {
      id: "1",
      name: "Test Cafe",
      latitude: 43.15,
      longitude: -77.61,
      hasChangingTable: true
    }
  ]);
}