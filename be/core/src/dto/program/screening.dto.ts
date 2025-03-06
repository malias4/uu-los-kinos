import { AutoMap } from "@automapper/classes";
import { HallDto } from "../hall/hall.dto";
import { MovieOverviewDto } from "../movie/movieOverview.dto";
import ReservedSeat from "../../entity/reservedSeat.entity";
import { ReservedSeatDto } from "./reservedSeat.dto";

export class ScreeningDto {
    @AutoMap()
    id!: number;

    @AutoMap()
    date!: Date;

    @AutoMap(() => HallDto)
    hall?: HallDto;

    @AutoMap(() => ReservedSeatDto)
    reservedSeats?: ReservedSeatDto[];
}