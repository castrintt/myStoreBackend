import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticateUserDto } from "src/application/dto/request/authenticate-user.dto";
import { AuthCase } from "src/application/service/auth/auth.case";
import { Public } from "src/shared/decorators/public.decorator";


@Controller('auth')
export class AuthController {
    constructor(
        private readonly _auth_service: AuthCase
    ) { }


    @Post('login')
    @Public()
    async login(@Body() loginDto: AuthenticateUserDto): Promise<{ access_token: string }> {
        return this._auth_service.execute(loginDto);
    }
}