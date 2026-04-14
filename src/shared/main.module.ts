import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/infrastructure/config/db.config';
import { ImageModule } from 'src/IoC/containers/image.module';
import { ProductModule } from 'src/IoC/containers/product.module';
import { UserModule } from 'src/IoC/containers/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UserModule,
    ProductModule,
    ImageModule
  ],
 
})
export class MainModule { }
