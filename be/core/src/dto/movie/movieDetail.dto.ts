import { AutoMap } from "@automapper/classes";
import { ReviewDto } from "../review/review.dto";

export class MovieDetailDto {    
    @AutoMap()
    id!: number;

    @AutoMap()
    title!: string;
    
    @AutoMap()
    description!: string;
    
    @AutoMap()
    duration!: number;
    
    @AutoMap()
    releaseDate!: Date;
    
    @AutoMap()
    cover!: string;
    
    @AutoMap()
    trailer!: string;
    
    @AutoMap(() => ReviewDto)
    reviews?: ReviewDto[];
}