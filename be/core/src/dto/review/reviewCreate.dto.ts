import { AutoMap } from "@automapper/classes";
import { IsDefined, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class ReviewCreateDto {
    @IsInt()
    @IsDefined()
    @Min(1)
    @Max(5)
    @AutoMap()
    rating!: number;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @AutoMap()
    comment!: string;

    @IsInt()
    @IsDefined()
    @AutoMap()
    userId!: number;

    @IsInt()
    @IsDefined()
    @AutoMap()
    movieId!: number;
}