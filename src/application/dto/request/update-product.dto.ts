import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class UpdateProductDto {
    @IsUUID('4')
    @IsNotEmpty()
    id: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    price: number;
}