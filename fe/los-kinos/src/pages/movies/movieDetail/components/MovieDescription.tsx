import { useState } from "react";
import { Grid2, Stack, Button, Typography } from "@mui/material";
import TrailerButton from "./TrailerButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MovieDetail } from "../api/useGetMovieDetail";
import { formatReleaseDate } from "../utils/formatReleaseDate";


interface MovieDescriptionProps {
  data: MovieDetail;
}

export default function MovieDescription({ data }: MovieDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const maxLength = 200;

  return (
    <Stack spacing={3}>
      <Typography variant="h1">{data.title}</Typography>
      <Typography variant="body1">
        {isExpanded
          ? data.description
          : `${data.description.slice(0, maxLength)}...`}
        <Button onClick={toggleDescription} variant="text" color="primary">
          {isExpanded ? (
            <>
              {"Skrýt"}
              <KeyboardArrowUpIcon />
            </>
          ) : (
            <>
              {"Celý text"}
              <KeyboardArrowDownIcon />
            </>
          )}
        </Button>
      </Typography>
      <Grid2 container spacing={3}>
        <Typography variant="body1">Délka: {data.duration} minut</Typography>
        <Typography variant="body1">
          Premiéra: {formatReleaseDate(data.releaseDate)}
        </Typography>
      </Grid2>
      <TrailerButton trailer={data.trailer} />
    </Stack>
  );
}
