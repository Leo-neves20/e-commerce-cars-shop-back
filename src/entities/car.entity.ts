import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./user.entity";
import { ImageCar } from "./image.entity";
import { Brand } from "./brand.entity";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 100 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 20 })
  fuel: string;

  @Column({ type: "decimal", precision: 3 })
  km: number;

  @Column({ length: 20 })
  color: string;

  @Column({ type: "decimal", precision: 10 })
  price: number;

  @Column({ type: "decimal", precision: 10 })
  fipe: number;

  @Column({ length: 300 })
  description: string;

  @Column()
  is_good_price: boolean;

  @Column({ default: true })
  published: boolean;

  @Column({ length: 300 })
  cover_image: string;

  @ManyToOne(() => User, (user) => user.cars, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => ImageCar, (image) => image.car)
  images: ImageCar[];

  @ManyToOne(() => Brand, (brand) => brand.cars)
  brand_car: Brand;
}
