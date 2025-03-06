import { useCallback } from "react";
import axios from "axios";
import { AddMovieDto } from "./AddMovieDto";

export const useAddMovie = () => {
  return useCallback(async (requestParams: AddMovieDto) => {
    return await axios.post("/core/secured/admin/upload/movies/add", { ...requestParams }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  }, []);
};
