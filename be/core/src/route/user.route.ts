import express from 'express';
import { getUserById } from '../controller/user.controller';

const userRouter = express.Router();

//Declare which HTTP method to use - GET
//Define the final path for the endpoint, the :userId means that it is a variable, use the controller method
userRouter.get('/:userId', getUserById);

export default userRouter;