import axios from "axios";
import { useCallback } from "react";

export const useCreateReview = () => {
    return useCallback(
        async (rating: number, comment: string, userId: number, movieId: number) => {
            return await axios.post('/core/secured/reviews', { rating, comment, userId, movieId });
        },
        []
    );
};