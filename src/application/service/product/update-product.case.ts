import { Inject, Injectable } from "@nestjs/common";
import { UpdateProductDto } from "src/application/dto/request/update-product.dto";
import { type IProductRepository } from "src/domain/interfaces/product/IProductRepository";
import { ProductRepositorySymbol } from "src/modules/symbols/product.symbol";

@Injectable()
export class UpdateProductUseCase {
    constructor(
        @Inject(ProductRepositorySymbol)
        private readonly _product_repository: IProductRepository
    ) { }

    async execute(product: UpdateProductDto): Promise<boolean> {
        return this._product_repository.update(product.id, product);
    }
}