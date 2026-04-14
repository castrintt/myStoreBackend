import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { AuthenticateUserDto } from "src/application/dto/request/authenticate-user.dto";
import { User } from "src/domain/entities/user.entity";
import { type IUserRepository } from "src/domain/interfaces/user/IUserRepository";
import { UserRepositorySymbol } from "src/modules/symbols/user.symbol";

@Injectable()
export class AuthCase {

    constructor(
        @Inject(UserRepositorySymbol)
        private readonly _user_repository: IUserRepository,
        @Inject(JwtService)
        private readonly _jwt_service: JwtService
    ) { }


    async execute(user: AuthenticateUserDto): Promise<{ access_token: string }> {
        const userEntity = await this.validateUser(user.email, user.password);
        if (!userEntity) throw new UnauthorizedException('Invalid credentials');
        const payload = { email: userEntity.email, sub: userEntity.id };
        const access_token = await this._jwt_service.signAsync(payload);
        return { access_token }
    }


    private async validateUser(email: string, password: string): Promise<User | null> {
        const userEntity = await this._user_repository.findOne(email);
        if (!userEntity) return null;
        const isPasswordValid = await compare(password, userEntity.password);
        if (!isPasswordValid) return null;
        return userEntity;
    }
}