import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { CreateProductDto } from "src/application/dto/request/create-product.dto";
import { UpdateProductDto } from "src/application/dto/request/update-product.dto";
import { FindProductDto } from "src/application/dto/response/find-product.dto";
import { Product } from "src/domain/entities/product.entity";
import { IProductRepository } from "src/domain/interfaces/product/IProductRepository";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository implements IProductRepository {
    constructor(
        @InjectRepository(Product)
        private readonly _product_entity: Repository<Product>) {
    }
    async create(product: CreateProductDto): Promise<{ id: string; }> {
        const dtoToEntity = plainToInstance(Product, product);
        const productEntity = await this._product_entity.save(dtoToEntity);
        return { id: productEntity.id };
    }

    async findOne(id: string): Promise<FindProductDto | null> {
        const productEntity = await this._product_entity.findOne({ where: { id } });
        return productEntity ? plainToInstance(FindProductDto, productEntity) : null;
    }
    
    async findAll(): Promise<FindProductDto[]> {
        const productEntities = await this._product_entity.find();
        return productEntities.map(productEntity => plainToInstance(FindProductDto, productEntity));
    }

    async update(id: string, product: UpdateProductDto): Promise<boolean> {
        const dtoToEntity = plainToInstance(Product, product);
        const productEntity = await this._product_entity.update(id, dtoToEntity);
        return productEntity.affected ? productEntity.affected > 0 : false;
    }

    async delete(id: string): Promise<boolean> {
        const productEntity = await this._product_entity.delete(id);
        return productEntity.affected ? productEntity.affected > 0 : false;
    }

}