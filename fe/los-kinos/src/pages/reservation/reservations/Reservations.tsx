import { Box, Grid2, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useGetReservations } from "./api/useGetReservations";
import { useParams } from "react-router-dom";
import { DeleteButton } from "./components/DeleteButton";
import {EnvVariables} from "../../../env-variables.ts";

export const Reservations = () => {
  const { userId } = useParams();
  const [reservationsData, getReservationsData] = useGetReservations(userId);

  useEffect(() => {
    const asyncCall = async () => {
      await getReservationsData();
    };
    asyncCall().then();
  }, [getReservationsData]);

  if (!reservationsData) {
    return <Skeleton variant="rounded" width={40} height={40} />;
  }

  if (reservationsData.reservations.length === 0) {
    return (
        <Grid2 container justifyContent='center' alignItems='center' width='100vw'>
          <Typography marginTop={10}>Nemáte žádné rezervace</Typography>
        </Grid2>
    )
  }

  const refreshReservations = async () => {
    await getReservationsData();
  };

  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px", md: "30px" } }}>
      {reservationsData.reservations.map((reservation) => (
        <Grid2
          key={reservation.id}
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: "#0F060B",
            padding: { xs: "15px", sm: "20px", md: "30px" },
            borderBottom: "0.2px solid #525252",
          }}
        >
          <Grid2 size={{xs:12, sm:8, md:6, lg:4}}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <img
                src={EnvVariables.BeAddress + 'static/assets/img/' + reservation.movie.cover}
                alt={reservation.movie.title}
                style={{
                  maxWidth: "150px",
                  height: "auto",
                  maxHeight: "200px",
                }}
              />
              <Stack spacing={1}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
                >
                  {reservation.movie.title}
                </Typography>
                <Typography variant="body1">
                  {reservation.movie.duration} minut
                </Typography>
                <Typography variant="body1">Kód: {reservation.code}</Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 size={{xs:12, sm:4, md:2, lg:2}}>
            <DeleteButton
              reservationId={String(reservation.id)}
              onSuccess={refreshReservations}
            />
          </Grid2>
        </Grid2>
      ))}
    </Box>
  );
};
