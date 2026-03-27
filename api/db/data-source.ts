import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Location } from "../entities/Location";
import { Feature } from "../entities/Feature";
import { LocationFeature } from "../entities/LocationFeature";
import { Vote } from "../entities/Vote";
import { Test } from "../entities/Test";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
   ssl: {
    rejectUnauthorized: false,
  },
  entities: [Location, Feature, LocationFeature, Vote],
  logging: true,
});
