import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Location } from "./Location";
import { Feature } from "./Feature";

@Entity()
export class LocationFeature {
  @PrimaryColumn("uuid")
  locationId!: string;

  @PrimaryColumn("uuid")
  featureId!: string;

  @ManyToOne(() => Location, (location) => location.locationFeatures, {
    onDelete: "CASCADE",
  })
  location!: Location;

  @ManyToOne(() => Feature, (feature) => feature.locationFeatures, {
    onDelete: "CASCADE",
  })
  feature!: Feature;
}