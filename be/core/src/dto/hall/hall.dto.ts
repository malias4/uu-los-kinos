import { AutoMap } from "@automapper/classes";
import { SeatDto } from "../seat/seat.dto";

export class HallDto {
    @AutoMap()
    name!: string;

    @AutoMap(() => SeatDto)
    seats?: SeatDto[];
}