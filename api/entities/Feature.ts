import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { LocationFeature } from "./LocationFeature";
import { Vote } from "./Vote";

@Entity()
export class Feature {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => LocationFeature, (lf) => lf.feature)
  locationFeatures!: LocationFeature[];

  @OneToMany(() => Vote, (vote) => vote.feature)
  votes!: Vote[];
}