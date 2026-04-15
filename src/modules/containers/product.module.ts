import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/api/product.controller';
import { CreateProductUseCase } from 'src/application/service/product/create-product.case';
import { DeleteProductUseCase } from 'src/application/service/product/delete-product.case';
import { FindByIdProductUseCase } from 'src/application/service/product/find-by-id-product.case';
import { ListProductsUseCase } from 'src/application/service/product/list-products.case';
import { UpdateProductUseCase } from 'src/application/service/product/update-product.case';
import { Product } from 'src/domain/entities/product.entity';
import { ProductRepository } from 'src/infrastructure/repository/product.repository';
import { ProductRepositorySymbol } from '../symbols/product.symbol';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    {
      provide: ProductRepositorySymbol,
      useClass: ProductRepository,
    },
    CreateProductUseCase,
    UpdateProductUseCase,
    FindByIdProductUseCase,
    ListProductsUseCase,
    DeleteProductUseCase,
  ],
})
export class ProductModule { }
