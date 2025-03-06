import { AutoMap } from "@automapper/classes";

export class ReservedSeatDto {
    @AutoMap()
    seatId?: number;
}