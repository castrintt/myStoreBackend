import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: '113644Abe!ig',
    database: 'mystore',
    entities: [__dirname + "/../../**/*.entity{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: true,
} 