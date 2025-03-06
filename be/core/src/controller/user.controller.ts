import { Request, Response } from "express";
import { getUserByIdDto } from "../service/user.service"

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId || isNaN(parseInt(userId))) {
        res.status(400).send('Invalid ID');
    }

    try {
        const user = await getUserByIdDto(parseInt(userId));
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}