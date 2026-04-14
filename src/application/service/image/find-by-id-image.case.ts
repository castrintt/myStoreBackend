import { Inject, Injectable } from "@nestjs/common";
import { FindImageDto } from "src/application/dto/response/find-image.dto";
import { type IImageRepository } from "src/domain/interfaces/image/IImageRepository";
import { ImageRepositorySymbol } from "src/modules/symbols/image.symbol";

@Injectable()
export class FindByIdImageUseCase {
    constructor(
        @Inject(ImageRepositorySymbol)
        private readonly _image_repository: IImageRepository
    ) { }

    async execute(id: string): Promise<FindImageDto | null> {
        return this._image_repository.findOne(id);
    }
}