import { AutoMap } from "@automapper/classes";

export class UserBasicDto {
    @AutoMap()
    name!: string;
}