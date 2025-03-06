import axios, { AxiosResponse } from "axios";
import { MovieScreeningDetailDto } from "../../screening/api/MovieScreeningDetailDto";
import { useCallback, useState } from "react";

type GetMovieProgram = (date: string) => Promise<AxiosResponse<MovieScreeningDetailDto[]> | null>;
type UseGetMovieProgramReturn = [
    MovieScreeningDetailDto[] | undefined,
    GetMovieProgram
];

export const useGetMovieProgram = (): UseGetMovieProgramReturn => {
    const [response, setResponse] = useState<MovieScreeningDetailDto[]>();

    const apiCall = useCallback(
        async (date: string) => {
            try {
                const r = await axios.post(`/core/movies/program`, {
                    date: date
                });
                setResponse(r.data);
                return r;
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    console.log(err.message);
                } else {
                    console.log("An unknown error occurred");
                }
                return null;
            }
        }, []
    );

    return [
        response,
        apiCall
    ]
}