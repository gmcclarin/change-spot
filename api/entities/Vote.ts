import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Location } from "./Location";
import { Feature } from "./Feature";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Location, (location) => location.votes, {
    onDelete: "CASCADE",
  })
  location!: Location;

  @ManyToOne(() => Feature, (feature) => feature.votes, {
    onDelete: "CASCADE",
  })
  feature!: Feature;

  @Column()
  vote!: boolean; // true = has feature, false = does not

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;
}