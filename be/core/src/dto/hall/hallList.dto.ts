import {AutoMap} from "@automapper/classes";

export class HallListDto {
    @AutoMap()
    id!: number;

    @AutoMap()
    name!: string;
}