import { AutoMap } from "@automapper/classes";
import { ScreeningDto } from "../program/screening.dto";
import { MovieOverviewDto } from "./movieOverview.dto";

export class MoiveScreeningDto extends MovieOverviewDto {
    @AutoMap(() => ScreeningDto)
    screenings?: ScreeningDto[];
}