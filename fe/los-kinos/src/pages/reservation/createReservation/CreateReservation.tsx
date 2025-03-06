import { Grid2, Typography } from "@mui/material";
import { useCreateReservation } from "./api/useCreateReservation";
import { useLocation, useNavigate } from "react-router-dom";
import { SeatReservationDto } from "../../screening/components/SeatRenderer";
import { CreateReservationUserInfo } from "./components/CreateReservationUserInfo";

export const CreateReservation = () => {
  const createReservation = useCreateReservation();
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.seats) {
    return <Typography variant="h4">No seats selected</Typography>;
  }

  const onSubmit = async (screeningId: string, userId?: number, email?: string, fullname?: string) => {
    const seatIds = state.seats.map((seat: SeatReservationDto) => seat.id);
    const response = await createReservation({
      seats: seatIds,
      screeningId: parseInt(screeningId),
      userId: userId,
      email: email,
      fullname: fullname
    });
    
    navigate(`/reservation/${response.data.code}`);
  };

  return (
    <Grid2>
      <Grid2
        container
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h1" marginBottom={2}>Rezervace</Typography>
        <Grid2 border={'2px solid #A24936'} borderRadius={2}>
          {state.seats.map((seat: SeatReservationDto) => (
            <Grid2
              key={seat.id}
              container
              margin={"20px"}
              justifyContent={"start"}
              flexDirection={"row"}
            >
              <Typography
                border={"solid 1px #A24936"}
                borderRadius={"5px"}
                variant="h2"
                color="primary"
                sx={{ height: "20%", marginRight: "100px", padding: "10px" }}
              >
                Sedačka: {seat.rowColumn}
              </Typography>
              <Typography
                border={"solid 1px #A24936"}
                borderRadius={"5px"}
                sx={{ padding: "10px" }}
                variant="h2"
              >
                100kč
              </Typography>
            </Grid2>
          ))}
        </Grid2>
        <CreateReservationUserInfo createReservation={onSubmit} />
      </Grid2>
    </Grid2>
  );
};
