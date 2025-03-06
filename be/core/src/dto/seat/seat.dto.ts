import { AutoMap } from "@automapper/classes";

export class SeatDto {
    @AutoMap()
    id!: number;

    @AutoMap()
    row!: number;
    
    @AutoMap()
    column!: number;

    reserved!: boolean;
}