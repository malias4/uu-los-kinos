import { AutoMap } from "@automapper/classes";

export class UserRegisterDto {
    @AutoMap()
    name!: string;

    @AutoMap()
    email!: string;
    
    @AutoMap()
    password!: string;

    @AutoMap()
    roleId?: number;

    @AutoMap()
    googleId?: string;
}