import axios, { AxiosResponse } from "axios";
import { ScreeningHallDto } from "./ScreeningHallDto";
import { useCallback, useState } from "react";
import { mapReservedSeatsToSeat } from "../utils/mapReservedSeatsToSeat";

type GetScreeningHall = () => Promise<AxiosResponse<ScreeningHallDto> | null>;
type UseGetScreeningHallReturn = [
    ScreeningHallDto | undefined,
    GetScreeningHall
]

export const useGetScreeningHallById = (screeningId?: string): UseGetScreeningHallReturn => {
    const [response, setResponse] = useState<ScreeningHallDto>();

    const apiCall = useCallback(async () => {
        try {
            const r = await axios.get(`/core/screenings/${screeningId}`);
            if (r.data) {
                r.data = mapReservedSeatsToSeat(r.data);
            }
            setResponse(r.data);
            return r;
        } catch (err: unknown) {
            return null;
        }
    }, [screeningId]);

    return [response, apiCall];
}