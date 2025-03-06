import {
  Typography,
  Stack,
  Grid2,
  Avatar,
  ListItemText,
  List,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Review } from "../api/useGetMovieDetail";

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <>
      <Typography variant="h2">Recenze</Typography>
      <List sx={{ width: "100%", maxWidth: 360, backgroundColor: "#0F060B" }}>
        {reviews.map((review) => (
          <Stack
            key={review.id}
            direction="column"
            spacing={1}
            sx={{ padding: "20px" }}
          >
            <Grid2 container spacing={2}>
              <Grid2 container spacing={1} alignItems="center">
                <Avatar alt={review.user.name} />
                <Typography>{review.user.name}</Typography>
              </Grid2>
              <Grid2 container spacing={0.2} alignItems="center">
                <Typography variant="h3">{review.rating}</Typography>
                <StarIcon sx={{ color: "#FF871F", fontSize: "1.2rem" }} />
              </Grid2>
            </Grid2>
            <ListItemText>
              <Typography variant="body1">{review.comment}</Typography>
            </ListItemText>
          </Stack>
        ))}
      </List>
    </>
  );
}
