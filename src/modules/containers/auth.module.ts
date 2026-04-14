import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from 'src/api/auth.controller';
import { AuthCase } from 'src/application/service/auth/auth.case';
import { JwtStrategy } from 'src/shared/strategy/jwt.strategy';
import { jwtKey } from 'src/shared/utils/jwt.key';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtKey,
      signOptions: { expiresIn: '40m' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthCase,
    JwtStrategy
  ],
  exports: [AuthCase]
})
export class AuthModule { }
