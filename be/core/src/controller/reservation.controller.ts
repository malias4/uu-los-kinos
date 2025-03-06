import { Request, Response } from "express";
import { ReservationCreateDto } from "../dto/reservation/reservationCreate.dto";
import { createReservationDto, getReservationDto } from "../service/reservation.service";
import { getReservedSeatBySeatIdAndScreeningId } from "../repository/reservedSeat.repository";
import { deleteReservationDao } from "../repository/reservation.repository"

export const createReservation = async (req: Request, res: Response) => {
    const reservationReq = req.body as ReservationCreateDto;

    if (!reservationReq.screeningId || reservationReq.seats.length === 0) {
        res.status(400).send("screeningId and seats are required");
        return;
    }

    if (!reservationReq.userId && !reservationReq.fullname && !reservationReq.email) {
        res.status(400).send("no user provided");
        return;
    }

    try {
        for (const seat of reservationReq.seats) {
            const reservedSeat = await getReservedSeatBySeatIdAndScreeningId(seat, reservationReq.screeningId);
            if (reservedSeat) {
                res.status(400).send("seat is already reserved");
                return;
            }
        }

        const code = await createReservationDto(reservationReq);
        res.status(201).send({ code});
        return;
    } catch (error) {
        res.status(500);
        return;
    }
}

export const getReservation = async (req: Request, res: Response) => {
    const {userId} = req.params

    if(!userId || isNaN(parseInt(userId))){
        res.status(400).send("Invalid user ID!")
        return;
    }


    try{
        const reservations = await getReservationDto(parseInt(userId))
        res.status(200).send(reservations)
    }catch(error){
        res.status(500)
    }
}

export const deleteReservation = async (req: Request, res: Response) => {
    const { reservationId } = req.params;

    if(!reservationId || isNaN(parseInt(reservationId))){
        res.status(400).send("Reservation not found!")
        return;
    }

    try{
        await deleteReservationDao(parseInt(reservationId))
        res.status(200).send("Reservation cancled")
    }catch (error){
        res.status(500)
    }
}