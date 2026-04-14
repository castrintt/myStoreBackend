import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from 'src/application/service/product.service';
import { Product } from 'src/domain/entities/product.entity';
import { ProductRepository } from 'src/infrastructure/repository/product.repository';
import { ProductRepositorySymbol, ProductServiceSymbol } from '../symbols/product.symbol';
import { ProductController } from 'src/api/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    {
      provide: ProductRepositorySymbol,
      useClass: ProductRepository,
    },
    {
      provide: ProductServiceSymbol,
      useClass: ProductService,
    }
  ],
})
export class ProductModule { }
