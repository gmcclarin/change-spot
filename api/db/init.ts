import { AppDataSource } from "./data-source";
import "dotenv/config";

let initialized = false;

export async function initDB() {
  console.log("1️⃣ initDB called");

  if (initialized) {
    console.log("2️⃣ already initialized");
    return;
  }

  console.log("3️⃣ before initialize");

  try {
    await AppDataSource.initialize();
    console.log("4️⃣ after initialize");
  } catch (err) {
    console.error("💥 INIT FAILED:", err);
    throw err;
  }

  initialized = true;
}