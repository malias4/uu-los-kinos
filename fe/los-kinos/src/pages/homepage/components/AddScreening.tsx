import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddScreening } from "../api/useAddScreening";
import { useGetMovies } from "../api/useMovieDto";
import { useGetHalls } from "../api/useHallDto";
import { formatDateForScreeningRequest } from "../utils/formatDateForScreeningRequest";
import { formatTimeForScreeningRequest } from "../utils/formatTimeForScreeningRequest";
import styled from "@emotion/styled";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const AddScreening = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const addScreening = useAddScreening();
  const [movies, fetchMovies] = useGetMovies();
  const [halls, fetchHalls] = useGetHalls();

  useEffect(() => {
    const asyncCall = async () => {
      await fetchMovies();
      await fetchHalls();
    };
    if (open) {
      asyncCall().then();
    }
  }, [open, fetchMovies, fetchHalls]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await addScreening({
      date: formatTimeForScreeningRequest(data.date, data.time),
      hallId: parseInt(data.hallId),
      movieId: parseInt(data.movieId),
    });
    setOpen(false);
    window.location.reload();
  };

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ marginBottom: "20px" }}
      >
        Přidat promítání
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#54786E",
            padding: "20px",
            borderRadius: "15px",
            width: "400px",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Přidání promítání
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              margin="dense"
              label="Vybrat datum"
              {...register("date")}
              placeholder="YYYY-MM-DD"
              fullWidth
              sx={{
                backgroundColor: "#2A3C37",
                borderRadius: "5px",
                input: { color: "white" },
              }}
            />
            <TextField
              required
              margin="dense"
              label="Vybrat čas"
              {...register("time")}
              placeholder="HH:MM"
              fullWidth
              sx={{
                backgroundColor: "#2A3C37",
                borderRadius: "5px",
                input: { color: "white" },
              }}
            />
            <FormControl
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "#2A3C37", borderRadius: "5px" }}
            >
              <InputLabel sx={{ color: "white" }}>Vybrat sál</InputLabel>
              <Select
                required
                {...register("hallId")}
                label="Vybrat sál"
                defaultValue=""
                sx={{ color: "white" }}
              >
                {halls?.length === 0 ? (
                  <MenuItem disabled>Načítám sály...</MenuItem>
                ) : (
                  halls?.map((hall) => (
                    <MenuItem key={hall.id} value={hall.id}>
                      {hall.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              margin="dense"
              sx={{ backgroundColor: "#2A3C37", borderRadius: "5px" }}
            >
              <InputLabel sx={{ color: "white" }}>Vybrat film</InputLabel>
              <Select
                required
                {...register("movieId")}
                label="Vybrat film"
                defaultValue=""
                sx={{ color: "white" }}
              >
                {movies?.length === 0 ? (
                  <MenuItem disabled>Načítám filmy...</MenuItem>
                ) : (
                  movies?.map((movie) => (
                    <MenuItem key={movie.id} value={movie.id}>
                      {movie.title}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
            <Stack direction={"column"} spacing={2} marginTop={3}>
              <Button onClick={onSubmit} variant="contained" type="submit">
                Potvrdit
              </Button>
              <Button onClick={() => setOpen(false)} variant="contained">
                Zrušit
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
