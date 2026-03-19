import "reflect-metadata";
import { DataSource } from "typeorm";
import { Location } from "../entities/Location";
import { Feature } from "../entities/Feature";
import { LocationFeature } from "../entities/LocationFeature";
import { Vote } from "../entities/Vote";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,

  entities: [Location, Feature, LocationFeature, Vote],

  synchronize: true, // dev only
  logging: true,
});
