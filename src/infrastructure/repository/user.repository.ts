import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "src/application/dto/request/create-user.dto";
import { User } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/interfaces/user/IUserRepository";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly _user_entity: Repository<User>) {
    }
    async create(user: CreateUserDto): Promise<{ id: string; }> {
        const userExists = await this._user_entity.findOne({ where: { email: user.email } });
        if (userExists) throw new ConflictException('User already exists');
        const dtoToEntity = plainToInstance(User, user);
        const userEntity = await this._user_entity.save(dtoToEntity);
        return { id: userEntity.id };
    }

    async findOne(email: string): Promise<User | null> {
        return this._user_entity.findOne({ where: { email } });
    }

}