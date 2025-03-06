import { useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user: {
    id: number;
    name: string;
  };
}

export interface MovieDetail {
  id: number;
  cover: string;
  description: string;
  duration: number;
  releaseDate: string;
  reviews: Review[];
  title: string;
  trailer: string;
}

export type GetMovieDetail = () => Promise<AxiosResponse<MovieDetail> | null>;
type UseGetMovieDetailReturn = [MovieDetail | undefined, GetMovieDetail];

export const useGetMovieDetail = (movieId?: string): UseGetMovieDetailReturn => {
  const [response, setResponse] = useState<MovieDetail>();

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
