export interface HallDto {
  id: number;
  name: string;
}

export interface ScreeningDto {
  id: number;
  date: Date;
  hall: HallDto;
}

export interface MovieScreeningDetailDto {
  id: number;
  title: string;
  cover: string;
  duration: number;
  screenings: ScreeningDto[];
}
