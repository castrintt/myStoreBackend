import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { CreateUserDto } from 'src/application/dto/request/create-user.dto';
import { CreateUserUseCase } from 'src/application/service/user/create-user.case';
import { Public } from 'src/shared/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly _create_user_use_case: CreateUserUseCase
  ) { }


  @Post('create')
  @Public()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<{ id: string }> {
    return this._create_user_use_case.execute(createUserDto);
  }

}
