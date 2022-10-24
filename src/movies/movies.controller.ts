import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

    constructor(private readonly MoviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.MoviesService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId);
        return this.MoviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        console.log(movieData);
        return this.MoviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        return this.MoviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patchMoive(@Param('id') movieId: number, @Body() updateData) {
        return this.MoviesService.update(movieId, updateData);
    }

}
