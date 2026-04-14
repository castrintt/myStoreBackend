import { NestFactory } from '@nestjs/core';
import { Pipe } from './shared/config/pipe.config';
import { Swagger } from './shared/config/swagger.config';
import { MainModule } from './shared/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  Pipe.configure(app);
  Swagger.configure(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
