import { Request, Response } from "express";
import { ReviewCreateDto } from "../dto/review/reviewCreate.dto";
import { validate } from "class-validator";
import { createReviewDto } from "../service/review.service";
import { plainToClass } from "class-transformer";

export const createReview = async (req: Request, res: Response) => {
    const reviewData = plainToClass(ReviewCreateDto, req.body);

    try {
        const errors = await validate(reviewData);

        if (errors.length > 0) {
            res.status(400).send({ error: "Invalid review data" });
            return;
        }

        await createReviewDto(reviewData);
        res.status(201).send({ message: "Review created successfully" });
        return;
    } catch (error) {
        res.status(500).send({ error: "Failed to create review" });
        return;
    }
};