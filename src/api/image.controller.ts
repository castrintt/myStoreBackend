import {
  Body,
  Controller,
  Get,
  Param,
  Post
} from '@nestjs/common';
import { CreateImageDto } from 'src/application/dto/request/create-image.dto';
import { UpdateImageDto } from 'src/application/dto/request/update-image.dto';
import { CreateImageUseCase } from 'src/application/service/image/create-image.case';
import { UpdateImageUseCase } from 'src/application/service/image/update-image.case';


@Controller('image')
export class ImageController {
  constructor(
    private readonly _create_image_use_case: CreateImageUseCase,
    private readonly _update_image_use_case: UpdateImageUseCase,
  ) { }


  @Get('by-id')
  async getImageById(@Param('id') id: string) {
  }
  @Post('create')
  async createImage(@Body() createImageDto: CreateImageDto) {
    return this._create_image_use_case.execute(createImageDto);
  }
  @Post('update')
  async updateImage(@Body() updateImageDto: UpdateImageDto) {
    return this._update_image_use_case.execute(updateImageDto);
  }

}
