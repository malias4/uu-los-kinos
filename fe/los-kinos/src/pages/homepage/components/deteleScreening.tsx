import { Button, Dialog,DialogActions, DialogTitle } from "@mui/material";
import { useDeleteScreening } from "../api/useDeleteScreening";
import { useState, Fragment } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface DeleteButtonProps {
    screeningId: number;
}

export const DeleteScreening = (props: DeleteButtonProps) => {
    const { screeningId } = props;
    const deleteScreening = useDeleteScreening(screeningId);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await deleteScreening();
        window.location.reload();
    };

    return (
      <Fragment>
        <Button variant="contained" onClick={handleClickOpen} sx={{ marginLeft: 1 }}>
          <DeleteOutlineIcon/>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>
            {"Opravdu si přejete zrušit promítání"}
          </DialogTitle>
          <DialogActions>
            <Button variant="outlined" color="info" onClick={handleClose}>Close</Button>
            <Button variant="outlined" color="secondary" onClick={handleDelete} autoFocus>
              Potvrdit
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
};
