import { useCallback } from "react";
import axios from "axios";
import { AddScreeningDto } from "./AddScreeningDto";

export const useAddScreening = () => {
  return useCallback(async (requestParams: AddScreeningDto) => {
    return await axios.post("/core/secured/admin/screenings", requestParams, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);
};
