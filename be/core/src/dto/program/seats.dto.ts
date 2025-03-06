import { AutoMap } from "@automapper/classes";
import { SeatStatus } from "../../entity/seat.entity";

export class SeatsDto {
    @AutoMap()
    row!: number;

    @AutoMap()
    column!: number;

    @AutoMap()
    status?: SeatStatus;
}