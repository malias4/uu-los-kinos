import { AutoMap } from "@automapper/classes";

export class MovieOverviewDto {
    @AutoMap()
    id!: number;
    
    @AutoMap()
    title!: string;

    @AutoMap()
    duration!: number;

    @AutoMap()
    cover!: string;
}