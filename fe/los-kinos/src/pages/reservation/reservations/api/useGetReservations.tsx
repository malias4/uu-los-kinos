import { useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";

export interface Reservation {
  id: number;
  code: number;
  movie: {
    id: number;
    title: string;
    duration: number;
    cover: string
  };
}

export interface Reservations {
  id: string;
  reservations: Reservation[];
}

type GetReservations = () => Promise<AxiosResponse<Reservations> | null>;
type UseGetReservations = [Reservations | undefined, GetReservations];

export const useGetReservations = (userId?: string): UseGetReservations => {
  const [response, setResponse] = useState<Reservations>();

  const apiCall = useCallback(async () => {
    try {
      const r = await axios.get(`/core/secured/reservations/${userId}`);
      setResponse(r.data);
      return r;
    } catch (err: unknown) {
      return null;
    }
  }, [userId]);

  return [response, apiCall];
};

