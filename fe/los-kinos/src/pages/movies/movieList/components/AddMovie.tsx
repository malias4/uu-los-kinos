import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddMovie } from "../api/useAddMovie";
import styled from "@emotion/styled";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const AddMovie = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const addMovie = useAddMovie();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await addMovie({
      title: data.title,
      duration: parseInt(data.duration),
      releaseDate: data.releaseDate,
      cover: data.cover[0],
      trailer: data.trailer,
      description: data.description,
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
        Přidat film
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
          Přidání filmu
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              margin="dense"
              label="Název filmu"
              fullWidth
              {...register("title")}
              sx={{
                backgroundColor: "#2A3C37",
                borderRadius: "5px",
                input: { color: "white" },
              }}
            />
            <TextField
              required
              margin="dense"
              label="Délka filmu"
              {...register("duration")}
              type="number"
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
              label="Release Date"
              {...register("releaseDate")}
              placeholder="YYYY-MM-DD"
              fullWidth
              sx={{
                backgroundColor: "#2A3C37",
                borderRadius: "5px",
                input: { color: "white" },
              }}
            />
            <Button>
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
              >
                Nahrát obrázek filmu
                <VisuallyHiddenInput
                  type="file"
                  {...register("cover")}
                  multiple
                />
              </Button>
            </Button>
            <TextField
              required
              margin="dense"
              label="Trailer (URL)"
              {...register("trailer")}
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
              label="Popis"
              {...register("description")}
              fullWidth
              multiline
              rows={4}
              sx={{
                backgroundColor: "#2A3C37",
                borderRadius: "5px",
                textarea: { color: "white" },
              }}
            />
            <Stack direction={'column'} spacing={2} marginTop={3}>
              <Button
                onClick={onSubmit}
                variant="contained"
                type="submit"
              >
                Potvrdit
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="contained"
              >
                Zrušit
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
