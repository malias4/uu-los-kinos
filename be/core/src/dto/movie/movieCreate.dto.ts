import { AutoMap } from "@automapper/classes";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class MovieCreateDto {
    @AutoMap()
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    title!: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    description!: string;

    @AutoMap()
    duration!: number;

    @AutoMap()
    releaseDate!: Date;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    cover!: string;

    @AutoMap()
    @IsString()
    @IsNotEmpty()
    trailer!: string;
}
