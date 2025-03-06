import express from 'express';
import { addScreening, deleteScreening, getScreeningById } from '../controller/screening.controller';

const screeningRouter = express.Router();

screeningRouter.get('/:screeningId', getScreeningById);
screeningRouter.delete("/:screeningId", deleteScreening)
screeningRouter.post("/", addScreening)

export default screeningRouter;