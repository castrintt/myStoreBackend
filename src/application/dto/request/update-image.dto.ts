import { ApiProperty } from "@nestjs/swagger";
import { IsBase64, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UpdateImageDto {
    @ApiProperty({ example: "550e8400-e29b-41d4-a716-446655440000", format: "uuid" })
    @IsUUID("4")
    @IsNotEmpty()
    id: string;

    @ApiProperty({ example: "https://example.com/image.png" })
    @IsString()
    @IsNotEmpty()
    url: string;

    @ApiProperty({ example: "image/png" })
    @IsString()
    @IsNotEmpty()
    type: string;

    @ApiProperty({ example: 2048, type: Number })
    @IsBase64()
    @IsNotEmpty()
    bytes: number;
}
