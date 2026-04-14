import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from 'src/api/image.controller';
import { Image } from 'src/domain/entities/image.entity';
import { ImageRepository } from 'src/infrastructure/repository/image.repository';
import { ImageRepositorySymbol } from '../symbols/image.symbol';
import { AuthModule } from './auth.module';
import { CreateImageUseCase } from 'src/application/service/image/create-image.case';
import { UpdateImageUseCase } from 'src/application/service/image/update-image.case';
import { FindByIdImageUseCase } from 'src/application/service/image/find-by-id-image.case';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Image])],
    controllers: [ImageController],
    providers: [
        {
            provide: ImageRepositorySymbol,
            useClass: ImageRepository,
        },
        CreateImageUseCase,
        UpdateImageUseCase,
        FindByIdImageUseCase,

    ],
})
export class ImageModule { }
