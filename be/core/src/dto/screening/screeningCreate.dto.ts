import { AutoMap } from "@automapper/classes";
import { IsInt } from "class-validator";

export class ScreeningCreateDto {
    
    @AutoMap()
    date!: Date;

    @AutoMap()
    @IsInt()
    hallId!: Number

    @AutoMap()
    @IsInt()
    movieId!: Number
}