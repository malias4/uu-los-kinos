import { AutoMap } from "@automapper/classes";

export class ReservedSeatCreateDto {
    @AutoMap()
    seatId!: number;

    @AutoMap()
    reservationId!: number;

    @AutoMap()
    screeningId!: number;
}