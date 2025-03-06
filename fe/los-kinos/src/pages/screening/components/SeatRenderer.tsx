import { Button, Grid2, Typography } from "@mui/material";
import { SeatDto } from "../api/ScreeningHallDto";
import { useState } from "react";
import { groupSeatsByRow } from "../utils/getGroupSeatsByRow";
import { useNavigate, useParams } from "react-router-dom";

interface SeatRendererProps {
  seats: SeatDto[];
}

export interface SeatReservationDto {
  id: number;
  rowColumn: string;
}

export const SeatRenderer = (props: SeatRendererProps) => {
  const { seats } = props;
  const { screeningId } = useParams();
  const groupedSeats = groupSeatsByRow(seats);
  const [reservedSeats, setReservedSeats] = useState<Array<SeatReservationDto>>([]);
  const navigate = useNavigate();

  const handleSeatClick = (seat: SeatDto) => {
    const isReserved = reservedSeats.some(reservedSeat => reservedSeat.id === seat.id);

    if (!isReserved && !seat.reserved) {
      setReservedSeats([...reservedSeats, { id: seat.id, rowColumn: `${seat.row} - ${seat.column}` }]);
    } else {
      setReservedSeats(reservedSeats.filter((seat) => seat.id !== seat.id));
    }
  };

  const getSeatColor = (seat: SeatDto) => {
    if (seat.reserved) {
      return "primary";
    }
    if (reservedSeats.some(reservedSeat => reservedSeat.id === seat.id)) {
      return "secondary";
    }
    return "info";
  };

  const rowLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const navigateToReservation = () => {
    if (reservedSeats.length > 0) {
      navigate(`/${screeningId}/reservation`, { state: { seats: reservedSeats } });
    }
  }

  return (
    <Grid2 container direction="column" alignItems="center">
      <Typography variant="h1" margin={5}>
        Plátno
      </Typography>
      <Grid2 container spacing={1} justifyContent="center" width="80%">
        {Object.keys(groupedSeats).map((row, index) => (
          <Grid2
            container
            spacing={1}
            columnSpacing={2}
            key={row}
            alignItems={"center"}
            style={{ marginBottom: "20px" }}
          >
            <Typography variant="h2">{rowLabels[index]}</Typography>
            {groupedSeats[row].map((seat) => (
              <Grid2 key={seat.id}>
                <Button
                  onClick={() => handleSeatClick(seat)}
                  variant="contained"
                  color={getSeatColor(seat)}
                  style={{
                    height: "60px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  {seat.row} - {seat.column}
                </Button>
              </Grid2>
            ))}
            <Grid2>
              <Typography variant="h2">{rowLabels[index]}</Typography>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={navigateToReservation}
        >
          POTVRDIT REZERVACI
        </Button>
      </Grid2>
    </Grid2>
  );
};
