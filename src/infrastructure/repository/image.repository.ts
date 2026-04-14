import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { CreateImageDto } from "src/application/dto/request/create-image.dto";
import { UpdateImageDto } from "src/application/dto/request/update-image.dto";
import { FindImageDto } from "src/application/dto/response/find-image.dto";
import { Image } from "src/domain/entities/image.entity";
import { IImageRepository } from "src/domain/interfaces/image/IImageRepository";
import { Repository } from "typeorm";

@Injectable()
export class ImageRepository implements IImageRepository {
    constructor(
        @InjectRepository(Image)
        private readonly _image_entity: Repository<Image>) {
    }

    async create(image: CreateImageDto): Promise<{ id: string; }> {
        const dtoToEntity = plainToInstance(Image, image);
        const imageEntity = await this._image_entity.save(dtoToEntity);
        return { id: imageEntity.id };
    }

    async findOne(id: string): Promise<FindImageDto | null> {
        const imageEntity = await this._image_entity.findOne({ where: { id } });
        return imageEntity ? plainToInstance(FindImageDto, imageEntity) : null;
    }

    async update(id: string, image: UpdateImageDto): Promise<boolean> {
        const dtoToEntity = plainToInstance(Image, image);
        const imageEntity = await this._image_entity.update(id, dtoToEntity);
        return imageEntity.affected ? imageEntity.affected > 0 : false;
    }

}