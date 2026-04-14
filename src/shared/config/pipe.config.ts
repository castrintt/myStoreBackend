import { INestApplication, ValidationPipe } from "@nestjs/common";

export class Pipe {
    static configure(app: INestApplication<any>) {
        app.useGlobalPipes(new ValidationPipe({
            whitelist: true,
        }));
    }
}