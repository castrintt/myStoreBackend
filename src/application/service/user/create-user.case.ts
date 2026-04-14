import { Inject } from "@nestjs/common";
import { CreateUserDto } from "src/application/dto/request/create-user.dto";
import { type IUserRepository } from "src/domain/interfaces/user/IUserRepository";
import { UserRepositorySymbol } from "src/modules/symbols/user.symbol";


export class CreateUserUseCase {
    constructor(
        @Inject(UserRepositorySymbol)
        private readonly _user_repository: IUserRepository
    ) { }

    async execute(user: CreateUserDto): Promise<{ id: string }> {
        return this._user_repository.create(user);
    }

}