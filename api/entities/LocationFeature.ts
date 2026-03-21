import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Location } from "./Location";
import { Feature } from "./Feature";

@Entity()
export class LocationFeature {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Location)
  location!: Location;

  @ManyToOne(() => Feature)
  feature!: Feature;
}