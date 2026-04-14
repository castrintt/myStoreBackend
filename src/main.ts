import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './shared/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
