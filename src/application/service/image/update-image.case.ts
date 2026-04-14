import { Inject, Injectable } from "@nestjs/common";
import { UpdateImageDto } from "src/application/dto/request/update-image.dto";
import { type IImageRepository } from "src/domain/interfaces/image/IImageRepository";
import { ImageRepositorySymbol } from "src/modules/symbols/image.symbol";

@Injectable()
export class UpdateImageUseCase {
    constructor(
        @Inject(ImageRepositorySymbol)
        private readonly _image_repository: IImageRepository
    ) { }

    async execute(id: string, image: UpdateImageDto): Promise<boolean> {
        return this._image_repository.update(id, image);
    }
}