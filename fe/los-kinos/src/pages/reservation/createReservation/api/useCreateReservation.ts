import axios from "axios";
import { useCallback } from "react";

interface CreateReservationRequest {
  screeningId: number;
  seats: string[];
  userId?: number;
  email?: string;
  fullname?: string;
}

export const useCreateReservation = () => {
  return useCallback(async (requestParams: CreateReservationRequest) => {
    return await axios.post("/core/secured/reservations", { ...requestParams });
  }, []);
};
