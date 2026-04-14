import { Inject } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "src/application/dto/request/create-user.dto";
import { User } from "src/domain/entities/user.entity";
import { type IUserRepository } from "src/domain/interfaces/user/IUserRepository";
import { UserRepositorySymbol } from "src/modules/symbols/user.symbol";


export class CreateUserUseCase {
    constructor(
        @Inject(UserRepositorySymbol)
        private readonly _user_repository: IUserRepository
    ) { }

    async execute(user: CreateUserDto): Promise<boolean> {
        const dtoToEntity = plainToInstance(User, user);
        dtoToEntity.createdAt = new Date();
        dtoToEntity.updatedAt = new Date();
        const userEntity = await this._user_repository.create(dtoToEntity);
        return userEntity.id ? true : false;
    }

}