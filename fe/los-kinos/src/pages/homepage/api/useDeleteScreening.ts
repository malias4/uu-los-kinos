import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";


export const useDeleteScreening = (screeningId: number) => {
  return useCallback(
      async () => {
        return await axios.delete(`/core/secured/admin/screenings/${screeningId}`)
      }, []
  )
};