import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from "@nestjs/mapped-types";


export class UpdateMovieDto extends PartialType(CreateMovieDto) {}



// import { IsString, IsNumber } from "class-validator";

// export class UpdateMovieDto {
//     @IsString()
//     readonly title?: string;
//     @IsNumber()
//     readonly year?: number;
//     @IsString({ each: true })
//     readonly genres?: string[];
// }
