import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface CreateReservationFormProps {
    createReservation: (email: string, fullname: string) => Promise<void>;
};

export const CreateReservationForm = (props: CreateReservationFormProps) => {
    const { createReservation } = props;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!data.email || !data.fullname) {
            return;
        }
        await createReservation(data.email, data.fullname);
    }

    return (
        <Grid2
            padding={5}
            sx={{
                backgroundColor: '#436058',
                borderRadius: 2
            }}
        >
            <Typography variant="h2">Pro vytvoření rezervace zadejte své informace:</Typography>
            <Grid2 marginBottom={5}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction='column' spacing={2} marginTop={2}>
                        <TextField required type="text" {...register('fullname')} placeholder="Jméno a Příjmení" />
                        <TextField required type="email" {...register('email')} placeholder="Email" />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Vytvořit rezervaci
                        </Button>
                    </Stack>
                </form>
            </Grid2>
            <Grid2>
                <Stack direction='column' spacing={2} marginTop={2}>
                    <Typography variant="h5">Mate už účet?</Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/login')}
                    >
                        Přihlásit se
                    </Button>
                </Stack>
            </Grid2>
        </Grid2>
    )
};