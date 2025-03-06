import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRegister } from "./api/useRegister";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { register, handleSubmit } = useForm();
    const userRegister = useRegister();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await userRegister(data.name, data.email, data.password);
        navigate("/login");
    };

    return (
        <Grid2 container justifyContent='center' >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    direction='column'
                    spacing={2}
                    marginTop={2}
                    sx={{
                        border: '2px solid #2A3C37'
                    }}
                    padding={4}
                    borderRadius={2}
                >
                    <Typography variant='h1'>Registrace</Typography>
                    <TextField type="text" {...register('name')} placeholder="Jméno a Příjmení" />
                    <TextField type="email" {...register('email')} placeholder="Email" />
                    <TextField type="password" {...register('password')} placeholder="Heslo" />
                    <Button variant='contained' color='secondary' type="submit">Register</Button>
                </Stack>
            </form>
        </Grid2>
    );
};