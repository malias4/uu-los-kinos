import { createMap, forMember, mapFrom } from "@automapper/core"
import mapper from "../mapper/mapper.mapper";
import User from "../entity/user.entity";
import { UserLoginDto } from "../dto/user/userLogin.dto";
import { getUserByEmailDao } from "../repository/user.repository";

export const getUserLoginDto = async (email: string) => {
    createMap(mapper, User, UserLoginDto, 
        forMember(
            (destination) => destination.role,
            mapFrom((source) => source.role?.name)
        )
    );

    try {
        const user = await getUserByEmailDao(email);
        return mapper.map(user, User, UserLoginDto);
    } catch (error) {
        console.log(error);
        throw error;
    }
}