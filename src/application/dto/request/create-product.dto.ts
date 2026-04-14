import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: "Notebook" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 1999.9, type: Number })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({ example: "550e8400-e29b-41d4-a716-446655440000", format: "uuid" })
    @IsUUID("4")
    @IsNotEmpty()
    imageId: string;
}
