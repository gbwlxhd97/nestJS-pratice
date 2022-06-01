
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/boards/entity/board.entity';
import * as config from 'config';

const dbConfig = config.get('db')



// export const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: process.env.DATABASE_HOST,
//   port: +process.env.DATABASE_PORT,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PW,
//   database: process.env.DATABASE_NAME,
//   // entities: [__dirname + '/../**/*.entity.{js.ts}'],
//   entities: [Board], // 사용할 entity의 클래스명을 넣어둔다.
//   synchronize: true, // false로 해두는 게 안전하다.
// };

export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: 'root',
  password: '12341234',
  database: dbConfig.database,
  // entities: [__dirname + '/../**/*.entity.{js.ts}'],
  entities: [Board], // 사용할 entity의 클래스명을 넣어둔다.
  synchronize: dbConfig.synchronize, // false로 해두는 게 안전하다.
};