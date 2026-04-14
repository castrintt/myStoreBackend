import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
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
  @ApiResponse({ status: 200, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return this._create_user_use_case.execute(createUserDto);
  }

}
