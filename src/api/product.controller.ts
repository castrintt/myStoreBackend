import {
  Body,
  Controller,
  Delete,
  Get,
  ParseUUIDPipe,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { CreateProductDto } from 'src/application/dto/request/create-product.dto';
import { UpdateProductDto } from 'src/application/dto/request/update-product.dto';
import { CreateProductUseCase } from 'src/application/service/product/create-product.case';
import { DeleteProductUseCase } from 'src/application/service/product/delete-product.case';
import { FindByIdProductUseCase } from 'src/application/service/product/find-by-id-product.case';
import { UpdateProductUseCase } from 'src/application/service/product/update-product.case';


@Controller('product')
export class ProductController {

  constructor(
    private readonly _create_product_use_case: CreateProductUseCase,
    private readonly _update_product_use_case: UpdateProductUseCase,
    private readonly _find_by_id_product_use_case: FindByIdProductUseCase,
    private readonly _delete_product_use_case: DeleteProductUseCase,
  ) { }


  @Post('create')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this._create_product_use_case.execute(createProductDto);
  }

  @Put('update')
  async updateProduct(@Body() updateProductDto: UpdateProductDto) {
    return this._update_product_use_case.execute(updateProductDto);
  }

  @Get('find-by-id')
  async findByIdProduct(@Query('id', ParseUUIDPipe) id: string) {
    return this._find_by_id_product_use_case.execute(id);
  }

  @Delete('delete')
  async deleteProduct(@Query('id', ParseUUIDPipe) id: string) {
    return this._delete_product_use_case.execute(id);
  }

}
