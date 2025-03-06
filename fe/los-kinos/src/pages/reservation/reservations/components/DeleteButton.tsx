import { Button, Dialog,DialogActions, DialogTitle } from "@mui/material";
import { useDeleteReservation } from "../api/useDeleteReservation";
import { useState, Fragment } from "react";

interface DeleteButtonProps {
    reservationId: string;
    onSuccess: () => void; // Callback pro obnovení rezervací
}

export const DeleteButton = ({ reservationId, onSuccess }: DeleteButtonProps) => {
  const deleteReservation = useDeleteReservation(reservationId);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const result = await deleteReservation();
    if (result) {
      console.log(`Reservation ${reservationId} deleted.`);
      onSuccess();
    } else {
      console.error("Failed to delete reservation.");
    }
  };
  
  return (
    <Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Zrušit rezervaci
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Opravdu si přejete zrušit tuto rezervaci"}
        </DialogTitle>
        <DialogActions>
          <Button variant="outlined" color="info" onClick={handleClose}>Zrušit</Button>
          <Button variant="outlined" color="secondary" onClick={handleDelete} autoFocus>
            Potvrdit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
