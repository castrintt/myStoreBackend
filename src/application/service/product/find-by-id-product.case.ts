import { Inject, Injectable } from "@nestjs/common";
import { FindProductDto } from "src/application/dto/response/find-product.dto";
import { type IProductRepository } from "src/domain/interfaces/product/IProductRepository";
import { ProductRepositorySymbol } from "src/modules/symbols/product.symbol";

@Injectable()
export class FindByIdProductUseCase {
    constructor(
        @Inject(ProductRepositorySymbol)
        private readonly _product_repository: IProductRepository
    ) { }

    async execute(id: string): Promise<FindProductDto | null> {
        return this._product_repository.findOne(id);
    }
}