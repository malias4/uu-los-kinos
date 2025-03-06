export interface ReservedSeatDto {
  seatId: number;
}

export interface ScreeningHallDto {
  id: number;
  date: Date;
  hall: HallDto;
  reservedSeats: ReservedSeatDto[];
}

export interface HallDto {
  name: string;
  seats: SeatDto[];
}

export interface SeatDto {
  id: number;
  row: number;
  column: number;
  reserved: boolean;
}

export interface Screening {
  id: number;
  date: Date;
  hall?: Hall;
}

export interface Hall {
  id: number;
  name: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  duration: number;
  cover: string;
  screenings?: Screening[];
}
