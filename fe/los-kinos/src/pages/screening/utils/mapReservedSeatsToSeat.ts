import { ScreeningHallDto } from "../api/ScreeningHallDto";

export const mapReservedSeatsToSeat = (screeningHall: ScreeningHallDto): ScreeningHallDto => {
  if (screeningHall?.reservedSeats) {
    const reservedSeats = screeningHall?.reservedSeats.map((seat) => seat.seatId);
    screeningHall?.hall.seats.forEach((seat) => {
      if (reservedSeats?.includes(seat.id)) {
        seat.reserved = true;
      }
    })
  }

  screeningHall.hall.seats = screeningHall.hall.seats.sort((a, b) => a.id - b.id);

  return screeningHall;
};