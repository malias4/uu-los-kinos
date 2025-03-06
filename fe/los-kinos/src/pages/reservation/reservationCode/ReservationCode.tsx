import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router-dom";

export const ReservationCode = () => {
    const { code } = useParams();

    return (
        <Grid2 container justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant={'h1'}>Rezervace vytvořena</Typography>
            <Typography
                variant={'h2'}
                sx={{
                    border: '2px solid #A24936',
                    borderRadius: '5px',
                    padding: '10px',
                    margin: '20px'
                }}
            >
                Kód rezervace: {code}
            </Typography>
        </Grid2>
    )
}