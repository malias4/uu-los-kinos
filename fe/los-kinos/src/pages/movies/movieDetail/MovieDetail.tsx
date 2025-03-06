import { Box, Grid2, Skeleton } from "@mui/material";
import MovieDescription from "./components/MovieDescription";
import ReviewList from "./components/ReviewList";
import { useEffect } from "react";
import { useGetMovieDetail } from "./api/useGetMovieDetail";
import { useParams } from "react-router-dom";
import { AddReview } from "./components/AddReview";
import { useUserContext } from "../../../layouts/providers/hooks/useUserContext";
import {EnvVariables} from "../../../env-variables.ts";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, getMovieDetail] = useGetMovieDetail(movieId);
  const { userId } = useUserContext();

  useEffect(() => {
    const asyncCall = async () => {
      await getMovieDetail();
    };
    asyncCall().then();
  }, [getMovieDetail]);

  if (!movieDetail) {
    return (
      <Skeleton variant='rounded' width={40} height={40} />
    );
  }

  return (
    <Box>
      <Grid2
        container
        spacing={5}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          backgroundColor: "#0F060B",
          padding: "30px",
          borderBottom: "0.2px solid #525252",
        }}
      >
        <Grid2 justifyContent="center" size={{ xs: 12, sm: 8, md: 8, lg: 4 }}>
          <MovieDescription data={movieDetail} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
          <img
            src={EnvVariables.BeAddress + 'static/assets/img/' + movieDetail.cover}
            alt={movieDetail.title}
            style={{ maxWidth: "100%", height: "auto", maxHeight: "400px" }}
          />
        </Grid2>
      </Grid2>
      <Grid2 padding={5}>
        {userId && (
          <AddReview movieId={movieDetail.id} userId={userId} />
        )}
        <ReviewList reviews={movieDetail.reviews} />
      </Grid2>
    </Box>
  );
};
