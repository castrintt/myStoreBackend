import { CreateImageDto } from "src/application/dto/request/create-image.dto";
import { UpdateImageDto } from "src/application/dto/request/update-image.dto";
import { FindImageDto } from "src/application/dto/response/find-image.dto";

export interface IImageRepository {
    create(image: CreateImageDto): Promise<{ id: string; }>;
    findOne(id: string): Promise<FindImageDto | null>;
    update(id: string, image: UpdateImageDto): Promise<boolean>;
}