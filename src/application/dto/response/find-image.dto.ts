import { ApiProperty } from "@nestjs/swagger";

export class FindImageDto {
    @ApiProperty({ example: "https://example.com/image.png" })
    url: string;

    @ApiProperty({ example: "image/png" })
    type: string;

    @ApiProperty({ example: 1024, type: Number })
    bytes: number;
}
