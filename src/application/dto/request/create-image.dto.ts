import { ApiProperty } from "@nestjs/swagger";
import { IsBase64, IsNotEmpty, IsString } from "class-validator";

export class CreateImageDto {
    @ApiProperty({ example: "https://example.com/image.png" })
    @IsString()
    @IsNotEmpty()
    url: string;

    @ApiProperty({ example: "image/png" })
    @IsString()
    @IsNotEmpty()
    type: string;

    @ApiProperty({ example: 1024, type: Number })
    @IsBase64()
    @IsNotEmpty()
    bytes: number;
}
