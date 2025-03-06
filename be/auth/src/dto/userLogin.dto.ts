import { AutoMap } from "@automapper/classes";

export class UserLoginDto {
    @AutoMap()
    id!: number;

    @AutoMap()
    email!: string;

    @AutoMap()
    password!: string;

    @AutoMap()
    role!: string;
}