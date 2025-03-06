import Review from "../entity/review.entity";

export const createReviewDao = async (review: Review) => {
    try {
        await review.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};