import { Request, Response } from 'express';
import {UserRegisterDto} from "../dto/userRegister.dto";
import {createUserDto, getUserByEmailDto} from "../service/user.service";
import bcrypt from "bcryptjs";
import {getUserByEmailDao, getUserByIdDao} from "../repository/user.repository";
import jwt from 'jsonwebtoken';
import Role from "../entity/role.entity";

export const login = async (req: Request, res: Response) => {
    if (req.headers) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).send({ error: 'Email or password not provided' });
            return;
        }

        try {
            const user = await getUserByEmailDao(email);

            if (!user) {
                res.status(400).send({ error: 'User does not exist' });
                return;
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                res.status(400).send({ error: 'Failed to login, invalid password' });
                return;
            }

            const role = await Role.findByPk(user.roleId)

            const token = jwt.sign({ userId: user.id, role: role?.name }, process.env.JWT_SECRET || 'jvns', { expiresIn: '24h' });
            res.status(200).send({ token });
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: 'Internal server error' });
            return;
        }
    }
};

export const register = async (req: Request, res: Response) => {
    const userReq: UserRegisterDto = req.body;
    console.log(userReq);

    if (!userReq.email || !userReq.password || !userReq.name) {
        res.status(400).send({ error: 'Email/password/name not provided' });
        return;
    }

    try {
        const user = await getUserByEmailDto(userReq.email);

        if (user) {
            res.status(400).send({ error: 'User already exists' });
            return;
        }

        await createUserDto(userReq);
        res.status(200).send({ message: 'User created' });
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal server error' });
        return;
    }
}

export const googleLogin = async (req: Request, res: Response) => {
    //@ts-ignore
    const { id } = req.user;
    console.log('test')

    try {
        const user = await getUserByIdDao(id);

        if (!user) {
            res.status(400).send({ error: 'User does not exist' });
            return;
        }

        const role = await Role.findByPk(user.roleId)

        const token = jwt.sign({ userId: user.id, role: role?.name }, process.env.JWT_SECRET || 'jvns', { expiresIn: '24h' });
        res.redirect(`http://localhost:5173/google/auth/success?token=${token}`);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal server error' });
        return;
    }
}