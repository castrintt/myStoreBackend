import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/api/product.controller';
import { UserService } from 'src/application/service/user.service';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { UserRepositorySymbol, UserServiceSymbol } from '../symbols/user.symbol';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ProductController],
  providers: [
    {
      provide: UserRepositorySymbol,
      useClass: UserRepository,
    },
    {
      provide: UserServiceSymbol,
      useClass: UserService,
    }
  ],
  exports: [
    UserRepositorySymbol,
  ]
})
export class UserModule { }
