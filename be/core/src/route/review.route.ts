import express from 'express';
import { createReview } from '../controller/review.controller';

const reviewRouter = express.Router();

reviewRouter.post("/", createReview);

export default reviewRouter;