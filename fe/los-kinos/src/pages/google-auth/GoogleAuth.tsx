import {Typography} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export const GoogleAuth = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const authorizeToken = () => {
        const token = searchParams.get('token');
        localStorage.setItem("token", token);
        window.location.href = 'http://localhost:5173'
    }

    useEffect(() => {
        authorizeToken();
    }, []);

    return (
        <>
            <Typography>
                Autorizace...
            </Typography>
            <Typography>
                Prosím vyčkejte
            </Typography>
        </>
    )
}