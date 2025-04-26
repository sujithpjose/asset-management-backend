import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  warrantyExpiry: Date;

  @Column({ nullable: true })
  maintenanceDate: Date;
}
