import "reflect-metadata";
import { DataSource } from "typeorm";
import { Location } from "../entities/Location";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,

  entities: [Location],

  synchronize: true, // ✅ dev only
  logging: true,
});
