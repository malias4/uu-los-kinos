import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { HallDto } from "./HallDto";

type GetHalls = () => Promise<AxiosResponse<Array<HallDto>> | null>;
type UseGetHallsReturn = [Array<HallDto> | undefined, GetHalls];

export const useGetHalls = (): UseGetHallsReturn => {
  const [halls, setHalls] = useState<Array<HallDto>>();

  const fetchHalls = useCallback(async () => {
    try {
      const response = await axios.get("/core/secured/admin/halls/list");
      setHalls(response.data);
      return response;
    } catch (err: unknown) {
      console.log("An error occurred");
      return null;
    }
  }, []);

  return [halls, fetchHalls];
};
