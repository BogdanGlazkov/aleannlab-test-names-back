import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: '127.0.0.1',
  database: 'names',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
