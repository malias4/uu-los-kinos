import { createMap } from "@automapper/core";
import { ReviewCreateDto } from "../dto/review/reviewCreate.dto"
import mapper from "../mapper/mapper.mapper";
import Review from "../entity/review.entity";
import { createReviewDao } from "../repository/review.repository";

export const createReviewDto = async (reviewData: ReviewCreateDto) => {
    createMap(mapper, ReviewCreateDto, Review);

    try {
        const review = mapper.map(reviewData, ReviewCreateDto, Review);
        await createReviewDao(review);
        return;
    } catch (error) {
        console.log(error);
        throw error;
    }
};