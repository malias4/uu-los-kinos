import { Grid2 } from "@mui/material";
import { MovieScreeningDetail } from "./MovieScreeningDetail";
import { ScreeningInfoDetail } from "./ScreeningInfoDetail";
import { ScreeningHallDto } from "../api/ScreeningHallDto";

interface ScreeningHallHeaderInfoProps {
  movieId: string;
  screening: ScreeningHallDto;
}

export const ScreeningHallHeaderInfo = (props: ScreeningHallHeaderInfoProps) => {
  const { movieId, screening } = props;

  return (
    <Grid2 container justifyContent='space-between'>
      <MovieScreeningDetail movieId={movieId} />
      <ScreeningInfoDetail screening={screening} />
    </Grid2>
  )
};
