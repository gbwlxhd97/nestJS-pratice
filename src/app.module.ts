import { Module } from '@nestjs/common';
import { MoviesModule } from './controller/movies/movies.module';
import { BoardsModule } from './boards/boards.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';


@Module({
  imports: [
    MoviesModule,
    BoardsModule,
    TypeOrmModule.forRoot(typeORMConfig),
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.test',
    //   ignoreEnvFile: process.env.NODE_ENV === 'prod',
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
