import { SeatDto } from "../api/ScreeningHallDto";

export const groupSeatsByRow = (seats: SeatDto[]) => {
    return seats.reduce((acc, seat) => {
        if (!acc[seat.row]) {
            acc[seat.row] = [];
        }
        acc[seat.row].push(seat);
        return acc;
    }, {} as Record<string, SeatDto[]>);
};