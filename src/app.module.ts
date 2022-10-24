import { Module } from '@nestjs/common';
import { AppController } from './app.controllers';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
