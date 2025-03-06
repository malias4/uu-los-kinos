import axios, { AxiosResponse } from "axios";
import { MovieListCardDto } from "./MovieListCardDto";
import { useCallback, useState } from "react";

type GetMovieList = () => Promise<AxiosResponse<Array<MovieListCardDto>> | null>;
type UseGetMovieListReturn = [
    Array<MovieListCardDto> | undefined,
    GetMovieList
];

export const useGetMovieList = (): UseGetMovieListReturn => {
    const [response, setResponse] = useState<Array<MovieListCardDto>>();

    const apiCall = useCallback(async () => {
        try {
            const r = await axios.get('/core/movies/list');
            setResponse(r.data);
            return r;
        } catch (err: unknown) {
            return null;
        }
    }, []
    );

    return [
        response,
        apiCall
    ]
};