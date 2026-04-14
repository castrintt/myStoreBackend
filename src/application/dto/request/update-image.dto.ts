import { IsBase64, IsNotEmpty, IsString } from "class-validator";

export class UpdateImageDto {
    @IsString()
    @IsNotEmpty()
    url: string;
    @IsString()
    @IsNotEmpty()
    type: string;
    @IsBase64()
    @IsNotEmpty()
    bytes: number;
}