import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "Maria Silva" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "maria@example.com", format: "email" })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: "senhaSegura1" })
    @IsString()
    @IsNotEmpty()
    password: string;
}
