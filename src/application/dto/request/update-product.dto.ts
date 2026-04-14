import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class UpdateProductDto {
    @ApiProperty({ example: "550e8400-e29b-41d4-a716-446655440000", format: "uuid" })
    @IsUUID("4")
    @IsNotEmpty()
    id: string;

    @ApiProperty({ example: "Notebook Pro" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 2499.9, type: Number })
    @IsNumber()
    @IsNotEmpty()
    price: number;
}
