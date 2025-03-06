import { Request, Response } from "express";
import {getAllHallsDto} from "../service/hall.service";

export const getAllHalls = async (req: Request, res: Response) => {
    try {
        const hallListDto = await getAllHallsDto();
        res.status(200).send(hallListDto);
    } catch (error) {
        res.status(500).send('Internal error')
        console.log(error);
    }
}