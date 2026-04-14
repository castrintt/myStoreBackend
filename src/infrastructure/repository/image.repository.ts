import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Image } from "src/domain/entities/image.entity";
import { Repository } from "typeorm";

@Injectable()
export class ImageRepository {
    constructor(
        @InjectRepository(Image)
        private readonly _image_entity: Repository<Image>) {
    }
}