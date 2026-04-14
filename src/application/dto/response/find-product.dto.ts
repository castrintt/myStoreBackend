import { ApiProperty } from "@nestjs/swagger";

export class FindProductDto {
    @ApiProperty({ example: "550e8400-e29b-41d4-a716-446655440000", format: "uuid" })
    id: string;

    @ApiProperty({ example: "Notebook" })
    name: string;

    @ApiProperty({ example: 1999.9, type: Number })
    price: number;

    @ApiProperty({ example: "550e8400-e29b-41d4-a716-446655440001", format: "uuid", nullable: true })
    imageId: string | null;
}
