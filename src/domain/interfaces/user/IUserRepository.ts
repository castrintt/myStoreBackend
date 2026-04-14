import { CreateUserDto } from "src/application/dto/request/create-user.dto";
import { User } from "src/domain/entities/user.entity";

export interface IUserRepository {
    create(user: CreateUserDto): Promise<{ id: string }>;
    findOne(email: string): Promise<User | null>;
}