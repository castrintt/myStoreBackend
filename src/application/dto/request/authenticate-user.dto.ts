import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthenticateUserDto {
    @ApiProperty({ example: "user@example.com", format: "email" })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: "senha1234", minLength: 8, maxLength: 20 })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    password: string;
}
