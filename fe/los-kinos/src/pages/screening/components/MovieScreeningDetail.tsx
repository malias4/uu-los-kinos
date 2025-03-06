import { Grid2, Typography } from "@mui/material";
import { useGetMovieScreeningDetail } from "../api/useGetMovieScreeningDetail";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {EnvVariables} from "../../../env-variables.ts";

interface MovieScreeningDetailProps {
  movieId: string;
}

export const MovieScreeningDetail = (props: MovieScreeningDetailProps) => {
  const { movieId } = props;
  const [movieDetail, getMovieDetail] = useGetMovieScreeningDetail(movieId);
  const navigate = useNavigate();

  useEffect(() => {
    const asyncCall = async () => {
      await getMovieDetail();
    };
    asyncCall().then();
  }, [getMovieDetail]);

  if (!movieDetail) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Grid2 container alignItems='center'>
      <Grid2 container width={'15em'} marginLeft={5} marginTop={5}>
        <img
          src={EnvVariables.BeAddress + 'static/assets/img/' + movieDetail.cover}
          alt={movieDetail.title}
          style={{
            width: "200px",
            minWidth: "100px",
            height: "300px",
            border: '1px solid white',
            cursor: "pointer",
          }}
          onClick={() => navigate(`/movies/detail/${movieId}`)}
        />
      </Grid2>
      <Grid2>
        <Typography variant="h2" margin={3}>{movieDetail.title}</Typography>
        <Typography variant="h4" padding={1} margin={3} sx={{ border: '1px solid white'}}>{movieDetail.duration} MIN</Typography>
      </Grid2>
    </Grid2>
  );
};
