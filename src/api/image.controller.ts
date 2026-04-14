import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateImageUseCase } from 'src/application/service/image/create-image.case';
import { FindByIdImageUseCase } from 'src/application/service/image/find-by-id-image.case';
import { UpdateImageUseCase } from 'src/application/service/image/update-image.case';


@Controller('image')
export class ImageController {
  constructor(
    private readonly _create_image_use_case: CreateImageUseCase,
    private readonly _update_image_use_case: UpdateImageUseCase,
    private readonly _find_by_id_image_use_case: FindByIdImageUseCase,
  ) { }


  @Get('by-id')
  async getImageById(@Param('id') id: string) {
    return this._find_by_id_image_use_case.execute(id);
  }


  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async createImage(@UploadedFile() file: Express.Multer.File) {
    return this._create_image_use_case.execute({
      url: file.originalname,
      type: file.mimetype,
      bytes: file.size,
    });
  }

  @Post('update')
  @UseInterceptors(FileInterceptor('file'))
  async updateImage(@Query('id', ParseUUIDPipe) id: string, @UploadedFile() file: Express.Multer.File) {
    return this._update_image_use_case.execute({
      id,
      url: file.originalname,
      type: file.mimetype,
      bytes: file.size,
    });
  }

}
