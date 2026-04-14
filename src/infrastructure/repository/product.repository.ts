import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/domain/entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly _product_entity: Repository<Product>) {
    }
}