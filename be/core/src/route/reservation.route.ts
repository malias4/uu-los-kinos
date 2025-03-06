import express from 'express';
import { createReservation, deleteReservation, getReservation } from '../controller/reservation.controller';

const reservationRouter = express.Router();

reservationRouter.get("/:userId", getReservation)
reservationRouter.delete("/:reservationId", deleteReservation)
reservationRouter.post('/', createReservation);

export default reservationRouter;