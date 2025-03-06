import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "./api/useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const login = useLogin();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [navigate]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const response = await login(data.email, data.password);
        localStorage.setItem("token", response.data.token);
        window.location.reload();
        navigate("/");
    }

    const googleLogin = () => {
        window.location.href = 'http://localhost:8080/api/auth/google'
    }

    return (
        <Grid2
            container
            justifyContent='center'
        >
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
                    <Typography variant='h1'>Přihlášení</Typography>
                    <TextField type="email" {...register("email")} placeholder="Email" />
                    <TextField type="password" {...register("password")} placeholder="Heslo" />
                    <Button color='secondary' variant='contained' type="submit">Login</Button>
                    <Button onClick={googleLogin}><GoogleIcon /></Button>
                </Stack>
            </form>
        </Grid2>
    );
};