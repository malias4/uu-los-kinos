import { createMap } from "@automapper/core";
import User from "../entity/user.entity";
import bcrypt from "bcryptjs";
import mapper from "../middleware/mapper.middleware";
import {UserRegisterDto} from "../dto/userRegister.dto";
import {UserBasicDto} from "../dto/userBasic.dto";
import {createUserDao, getUserByEmailDao, getUserByIdDao} from "../repository/user.repository";

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

export const getUserByEmailDto = async (email: string) => {
    createMap(mapper, User, UserBasicDto);
    try {
        const user = await getUserByEmailDao(email);
        if (!user) {
            return null;
        }
        return mapper.map(user, User, UserBasicDto);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createUserDto = async (user: UserRegisterDto, isGoogleLogin?: string) => {
    createMap(mapper, UserRegisterDto, User);
    try {
        const newUser = mapper.map(user, UserRegisterDto, User);
        if (!isGoogleLogin) {
            newUser.password = await bcrypt.hash(user.password, 10);
        }
        newUser.roleId = 2;

        await createUserDao(newUser);
        return;
    } catch (error) {
        console.log(error);
        throw error;
    }
}