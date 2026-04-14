import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/api/user.controller';
import { CreateUserUseCase } from 'src/application/service/user/create-user.case';
import { User } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { UserRepositorySymbol } from '../symbols/user.symbol';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepositorySymbol,
      useClass: UserRepository,
    },
    CreateUserUseCase
  ],
  exports: [
    UserRepositorySymbol,
  ]
})
export class UserModule { }
