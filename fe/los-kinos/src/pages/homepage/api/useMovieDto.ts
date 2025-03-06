import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { MovieDto } from "./MovieDto";

type GetMovies = () => Promise<AxiosResponse<Array<MovieDto>> | null>;
type UseGetMoviesReturn = [Array<MovieDto> | undefined, GetMovies];

export const useGetMovies = (): UseGetMoviesReturn => {
  const [movies, setMovies] = useState<Array<MovieDto>>();

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get("/core/movies/list");
      setMovies(response.data);
      return response;
    } catch (err: unknown) {
      console.log("An error occurred");
      return null;
    }
  }, []);

  return [movies, fetchMovies];
};
