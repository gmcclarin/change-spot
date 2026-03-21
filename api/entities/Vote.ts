import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Location } from "./Location";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Location)
  location!: Location;
}