import { Inject, Injectable } from '@nestjs/common';
import { type IUserRepository } from 'src/domain/interfaces/user/IUserRepository';
import { IUserService } from 'src/domain/interfaces/user/IUserService';
import { UserRepositorySymbol } from 'src/IoC/symbols/user.symbol';


@Injectable()
export class UserService implements IUserService {

  constructor(
    @Inject(UserRepositorySymbol)
    private readonly _user_repository: IUserRepository
  ) { }

}
