import { ReservedSeatCreateDto } from "../../dto/reservation/reservedSeatCreate.dto";

export const mapReservedSeats = (reservationId: number, seats: number[], screeningId: number): ReservedSeatCreateDto[] => {
    return seats.map(seatId => ({
        reservationId,
        seatId,
        screeningId
    }));
};