import { AutoMap } from "@automapper/classes";
import { SeatDto } from "../seat/seat.dto";
import { MovieOverviewDto } from "../movie/movieOverview.dto";

export class ReservationDto {
    @AutoMap()
    id!: number;

    @AutoMap()
    code!: number;

    @AutoMap(() => SeatDto)
    reservedSeats?: SeatDto[];

    @AutoMap(() => MovieOverviewDto)
    movie?: MovieOverviewDto;
}