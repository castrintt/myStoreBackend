import {
  Controller,
  Inject
} from '@nestjs/common';
import { type IProductService } from 'src/domain/interfaces/product/IProductService';
import { ProductServiceSymbol } from 'src/IoC/symbols/product.symbol';


@Controller('product')
export class ProductController {

  constructor(
    @Inject(ProductServiceSymbol)
    private readonly _product_service: IProductService) { }


}
