import { Inject, Injectable } from "@nestjs/common";
import { CreateProductDto } from "src/application/dto/request/create-product.dto";
import { type IProductRepository } from "src/domain/interfaces/product/IProductRepository";
import { ProductRepositorySymbol } from "src/modules/symbols/product.symbol";

@Injectable()
export class CreateProductUseCase {
    constructor(
        @Inject(ProductRepositorySymbol)
        private readonly _product_repository: IProductRepository
    ) { }

    async execute(product: CreateProductDto): Promise<{ id: string }> {
        return this._product_repository.create(product);
    }
}