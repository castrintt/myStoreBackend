import {
  Controller,
  Get,
  Param
} from '@nestjs/common';


@Controller('image')
export class ImageController {
  constructor(

  ) { }


  @Get('by-id')
  async getImageById(@Param('id') id: string) {
  }

}
