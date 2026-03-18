import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

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
}