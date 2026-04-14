import { Inject, Injectable } from "@nestjs/common";
import { type IProductRepository } from "src/domain/interfaces/product/IProductRepository";
import { ProductRepositorySymbol } from "src/modules/symbols/product.symbol";

@Injectable()
export class DeleteProductUseCase {
    constructor(
        @Inject(ProductRepositorySymbol)
        private readonly _product_repository: IProductRepository
    ) { }

    async execute(id: string): Promise<boolean> {
        return this._product_repository.delete(id);
    }
}