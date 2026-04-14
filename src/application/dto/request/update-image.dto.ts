import { IsBase64, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UpdateImageDto {
    @IsUUID('4')
    @IsNotEmpty()
    id: string;
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