import { Inject, Injectable } from '@nestjs/common';
import { type IProductRepository } from 'src/domain/interfaces/product/IProductRepository';
import { IProductService } from 'src/domain/interfaces/product/IProductService';
import { ProductRepositorySymbol } from 'src/IoC/symbols/product.symbol';


@Injectable()
export class ProductService implements IProductService {

  constructor(
    @Inject(ProductRepositorySymbol)
    private readonly _product_repository: IProductRepository
  ) { }

}
