import {
  Controller,
  Inject
} from '@nestjs/common';
import { type IUserService } from 'src/domain/interfaces/user/IUserService';
import { UserServiceSymbol } from 'src/IoC/symbols/user.symbol';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserServiceSymbol)
    private readonly _user_service: IUserService
  ) { }


}
