import express from 'express';
import {getAllHalls} from "../controller/hall.controller";

const hallRouter = express.Router();

hallRouter.get('/list', getAllHalls);

export default hallRouter;