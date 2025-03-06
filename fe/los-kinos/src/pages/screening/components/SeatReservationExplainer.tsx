import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography } from "@mui/material";

export const SeatReservationExplainer: React.FC = () => {
  return (
    <Grid2
      container
      sx={{
        marginTop: "60px",
        padding: "10px 20px",
        backgroundColor: "#54786E",
        color: "white",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Grid2>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginRight: "50px", flexShrink: 0 }}
        >
          Legenda
        </Typography>
      </Grid2>
      <Grid2 container spacing={3} alignItems="center">
        <Grid2 container alignItems="center" spacing={1}>
          <Grid2
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "#F9F0F5",
              borderRadius: "3px 3px 10px 10px",
              border: "1px solid white",
            }}
          />
          <Grid2>
            <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
              Standardní sedadlo
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container alignItems="center" spacing={1}>
          <Grid2
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "#2A3C37",
              borderRadius: "3px 3px 10px 10px",
              border: "1px solid white",
            }}
          />
          <Grid2>
            <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
              Vybráno
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container alignItems="center" spacing={1}>
          <Grid2
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "#A24936",
              borderRadius: "3px 3px 10px 10px",
              border: "1px solid white",
            }}
          />
          <Grid2>
            <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
              Obsazeno
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
