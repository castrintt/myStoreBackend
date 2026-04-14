import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/api/product.controller';
import { Product } from 'src/domain/entities/product.entity';
import { ProductRepository } from 'src/infrastructure/repository/product.repository';
import { ProductRepositorySymbol } from '../symbols/product.symbol';
import { CreateProductUseCase } from 'src/application/service/product/create-product.case';
import { UpdateProductUseCase } from 'src/application/service/product/update-product.case';
import { FindByIdProductUseCase } from 'src/application/service/product/find-by-id-product.case';
import { DeleteProductUseCase } from 'src/application/service/product/delete-product.case';

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
    DeleteProductUseCase,
  ],
})
export class ProductModule { }
