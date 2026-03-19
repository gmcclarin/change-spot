import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Vote } from "./Vote";
import { LocationFeature } from "./LocationFeature";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  address!: string;

  @Column("double precision")
  latitude!: number;

  @Column("double precision")
  longitude!: number;

  @Column({ name: "google_place_id", nullable: true })
  googlePlaceId!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @OneToMany(() => LocationFeature, (lf) => lf.location)
locationFeatures!: LocationFeature[];

@OneToMany(() => Vote, (vote) => vote.location)
votes!: Vote[];
}