import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar", nullable: true })
  address!: string;

  @Column({ type: "double precision" })
  latitude!: number;

  @Column({ type: "double precision" })
  longitude!: number;

  @Column({ type: "varchar", name: "google_place_id", nullable: true })
  googlePlaceId!: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt!: Date;
}