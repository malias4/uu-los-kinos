import { Box, Typography } from "@mui/material";
import { useGetScreeningHallById } from "./api/useGetScreeningHallById";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SeatRenderer } from "./components/SeatRenderer";
import { SeatReservationExplainer } from "./components/SeatReservationExplainer";
import { ScreeningHallHeaderInfo } from "./components/ScreeningHallHeaderInfo";

export const ScreeningHall = () => {
  const { screeningId } = useParams();
  const [screeningHall, getScreeningHall] = useGetScreeningHallById(screeningId);
  //This is a temporary solution to get the movieId, after implementaion of movie program, the id will be passed through navigation state
  const { state } = useLocation();

  useEffect(() => {
    const asyncCall = async () => {
      await getScreeningHall();
    };
    asyncCall().then();
  }, [getScreeningHall]);

  if (!screeningHall) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Box>
      <ScreeningHallHeaderInfo movieId={state.movieId} screening={screeningHall} />
      <SeatRenderer seats={screeningHall?.hall.seats} />
      <SeatReservationExplainer />
    </Box>
  );
};
