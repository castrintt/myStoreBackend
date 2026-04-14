import { Inject, Injectable } from '@nestjs/common';
import { type IImageRepository } from 'src/domain/interfaces/image/IImageRepository';
import { IImageService } from 'src/domain/interfaces/image/IImageService';
import { ImageRepositorySymbol } from 'src/IoC/symbols/image.symbol';


@Injectable()
export class ImageService implements IImageService {

    constructor(
        @Inject(ImageRepositorySymbol)
        private readonly _image_repository: IImageRepository
    ) { }

}
