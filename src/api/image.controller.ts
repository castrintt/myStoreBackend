import {
  Controller,
  Inject
} from '@nestjs/common';
import { type IImageService } from 'src/domain/interfaces/image/IImageService';
import { ImageServiceSymbol } from 'src/IoC/symbols/image.symbol';


@Controller('image')
export class ImageController {
  constructor(
    @Inject(ImageServiceSymbol)
    private readonly _image_service: IImageService) { }

}
