import { Inject, Injectable } from "@nestjs/common";
import { CreateImageDto } from "src/application/dto/request/create-image.dto";
import { type IImageRepository } from "src/domain/interfaces/image/IImageRepository";
import { ImageRepositorySymbol } from "src/modules/symbols/image.symbol";

@Injectable()
export class CreateImageUseCase {
    constructor(
        @Inject(ImageRepositorySymbol)
        private readonly _image_repository: IImageRepository
    ) { }

    async execute(image: CreateImageDto): Promise<{ id: string }> {
        return this._image_repository.create(image);
    }
}