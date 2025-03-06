import {useCallback} from "react";
import axios from "axios";

export const useDeleteMovie = () => {
    return useCallback(
        async (movieId: number) => {
            return await axios.delete(`/core/secured/admin/movies/${movieId}`)
        }, []
    )
}