import { AutoMap } from "@automapper/classes";
import { ReservationDto } from "../reservation/Reservation.dto";

export class UserReservationDto {
    @AutoMap()
    id!: number;

    @AutoMap(() => ReservationDto)
    reservations?: ReservationDto[];
}