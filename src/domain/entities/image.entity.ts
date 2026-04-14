import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Product, (product) => product.image)
    product: Product;

    @Column()
    url: string;

    @Column()
    type: string;

    @Column()
    bytes: number;
}