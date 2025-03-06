import { Request, Response } from "express";
import { deleteScreeningDao } from "../repository/screening.repository";
import { addScreeningDto, getScreeningByIdDto } from "../service/screening.service";
import { plainToClass } from "class-transformer";
import { ScreeningCreateDto } from "../dto/screening/screeningCreate.dto";
import { validate } from "class-validator";

export const getScreeningById = async (req: Request, res: Response) => {
    const { screeningId } = req.params

    if (!screeningId || isNaN(parseInt(screeningId))) {
        res.status(400).send('Invalid ID')
    }

    try {
        const screening = await getScreeningByIdDto(parseInt(screeningId))
        res.status(200).send(screening)
    } catch (error) {
        res.status(500)
    }
}

export const deleteScreening = async (req: Request, res: Response) => {
    const { screeningId } = req.params;

    if(!screeningId || isNaN(parseInt(screeningId))) {
        res.status(400).send("Screening not found!")
        return;
    }

    try{
        await deleteScreeningDao(parseInt(screeningId))
        res.status(200).send("Screening cancled")
    }catch (error){
        res.status(500)
    }
}

export const addScreening = async (req: Request, res: Response) => {
    const screeningData = plainToClass(ScreeningCreateDto, req.body);

    try{
        const errors = await validate(screeningData);

        if(errors.length > 0){
            console.log('Validation errors:', errors);
            res.status(400).send({ error: "Invalid screening data" });
            return; 
        }

        await addScreeningDto(screeningData);
        res.status(201).send({message: "Screening created sucessfully"})

    } catch (error){
        res.status(500).send("Failed to create screening")
    }

}