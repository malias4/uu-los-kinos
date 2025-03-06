import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";

export interface DeleteMessage {
    message: string;
}

type DeleteReservation = () => Promise<AxiosResponse<DeleteMessage> | null>;


export const useDeleteReservation = (reservationId?: string): DeleteReservation => {
  const apiCall = useCallback(async () => {
    if (!reservationId) {
      console.warn("Reservation ID is not provided");
      return null;
    }

    try {
      const response = await axios.delete<DeleteMessage>(`/core/secured/reservations/${reservationId}`);
      return response;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error(`Axios error: ${err.message}`);
      } else {
        console.error("An unknown error occurred");
      }
      return null;
    }
  }, [reservationId]);

  return apiCall;
};