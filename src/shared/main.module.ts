import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'src/infrastructure/config/db.config';
import { AuthModule } from 'src/modules/containers/auth.module';
import { ImageModule } from 'src/modules/containers/image.module';
import { ProductModule } from 'src/modules/containers/product.module';
import { UserModule } from 'src/modules/containers/user.module';
import { JwtAuthGuard } from './guard/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UserModule,
    ProductModule,
    ImageModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ]

})
export class MainModule { }
