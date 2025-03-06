import { AutoMap } from "@automapper/classes";

export class ReservationCreateDto {
    @AutoMap()
    screeningId!: number;

    @AutoMap()
    seats!: Array<number>;

    @AutoMap()
    fullname?: string;

    @AutoMap()
    email?: string;

    @AutoMap()
    userId?: number;
}