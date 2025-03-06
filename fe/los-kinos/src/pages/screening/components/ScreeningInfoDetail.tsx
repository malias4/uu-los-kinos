import { Grid2, Typography } from "@mui/material";
import { ScreeningHallDto } from "../api/ScreeningHallDto";
import { formatDateForScreening } from "../utils/formatDateForScreening";
import { formatTimeForScreening } from "../utils/formatTimeForScreening";

interface ScreeningInfoDetailProps {
    screening: ScreeningHallDto;
}

export const ScreeningInfoDetail = (props: ScreeningInfoDetailProps) => {
    const { screening } = props;
    
    return (
        <Grid2 container flexDirection='column' spacing={1} margin={15} >
            <Typography variant="h3">
                {formatDateForScreening(screening.date)} 
            </Typography>
            <Typography variant="h2">
                {formatTimeForScreening(screening.date)}, {screening.hall.name}
            </Typography>
        </Grid2>
    );
}