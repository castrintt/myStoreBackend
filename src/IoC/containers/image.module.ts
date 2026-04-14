import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from 'src/api/image.controller';
import { ImageService } from 'src/application/service/image.service';
import { Image } from 'src/domain/entities/image.entity';
import { ImageRepository } from 'src/infrastructure/repository/image.repository';
import { ImageRepositorySymbol, ImageServiceSymbol } from '../symbols/image.symbol';

@Module({
    imports: [TypeOrmModule.forFeature([Image])],
    controllers: [ImageController],
    providers: [
        {
            provide: ImageRepositorySymbol,
            useClass: ImageRepository,
        },
        {
            provide: ImageServiceSymbol,
            useClass: ImageService,
        }
    ],
})
export class ImageModule { }
