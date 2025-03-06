import { useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import { MovieScreeningDetailDto } from "./MovieScreeningDetailDto";

type GetMovieScreeningDetail =
  () => Promise<AxiosResponse<MovieScreeningDetailDto> | null>;
type UseGetMovieScreeningDetailReturn = [
  MovieScreeningDetailDto | undefined,
  GetMovieScreeningDetail
];

export const useGetMovieScreeningDetail = (
  movieId?: string
): UseGetMovieScreeningDetailReturn => {
  const [response, setResponse] = useState<MovieScreeningDetailDto>();

  const apiCall = useCallback(async () => {
    try {
      const r = await axios.get(`/core/movies/detail/${movieId}`);
      setResponse(r.data);
      return r;
    } catch (err: unknown) {
      return null;
    }
  }, [movieId]);

  return [response, apiCall];
};
