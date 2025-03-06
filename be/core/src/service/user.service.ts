import { createMap } from "@automapper/core";
import { getUserByIdDao } from "../repository/user.repository"
import User from "../entity/user.entity";
import mapper from "../mapper/mapper.mapper";
import { UserBasicDto } from "../dto/user/userBasic.dto";

export const getUserByIdDto = async (userId: number) => {
    createMap(mapper, User, UserBasicDto);
    try {
        const user = await getUserByIdDao(userId);
        return mapper.map(user, User, UserBasicDto);
    } catch (error) {
        console.log(error);
        throw error;
    }
}