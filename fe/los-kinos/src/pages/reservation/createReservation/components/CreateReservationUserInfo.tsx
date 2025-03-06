import { Button, Grid2 } from "@mui/material";
import { useUserContext } from "../../../../layouts/providers/hooks/useUserContext";
import { useParams } from "react-router-dom";
import { CreateReservationForm } from "./CreateReservationForm";

interface CreateReservationUserInfoProps {
    createReservation: (screeningId: string, userId?: number, email?: string, fullname?: string) => Promise<void>;
};

export const CreateReservationUserInfo = (props: CreateReservationUserInfoProps) => {
    const { createReservation } = props;
    const { userId } = useUserContext();
    const { screeningId } = useParams();

    const onSubmitLoggedIn = async () => {
        await createReservation(screeningId || "", userId || undefined);
    }

    const onSubmitNotLoggedIn = async (email: string, fullname: string) => {
        await createReservation(screeningId || "", undefined, email, fullname);
    }

    return (
        <Grid2
            marginTop={5}
        >
            {
                !userId ?
                    <CreateReservationForm createReservation={onSubmitNotLoggedIn} /> :
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ height: "20%", margin: "50px " }}
                        onClick={() => onSubmitLoggedIn()}
                    >
                        Vytvořit rezervaci
                    </Button>
            }

        </Grid2>
    )
};