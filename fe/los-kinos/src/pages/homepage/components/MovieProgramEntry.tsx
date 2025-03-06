import { Button, Grid2 } from "@mui/material";
import { MovieScreeningDetail } from "../../screening/components/MovieScreeningDetail";
import { ScreeningDto } from "../../screening/api/MovieScreeningDetailDto";
import { formatTimeForScreening } from "../../screening/utils/formatTimeForScreening";
import { useScreeningNavigate } from "../../screening/route/useScreeningNavigate";
import { DeleteScreening } from "./deteleScreening";
import {useUserContext} from "../../../layouts/providers/hooks/useUserContext.ts";




interface MovieProgramEntryProps {
    movieId: string;
    screenings: ScreeningDto[];
}

export const MovieProgramEntry = (props: MovieProgramEntryProps) => {
    const { movieId, screenings } = props;
    const navigate = useScreeningNavigate();
    const { role } = useUserContext();

    return (
        <Grid2 container flexDirection='row' alignItems='center'>
            <MovieScreeningDetail movieId={movieId} />
            {
                screenings.map((screening) => (
                    <Grid2 key={screening.id}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ height: '20%', marginLeft: '100px' }}
                            onClick={() => navigate(screening.id, parseInt(movieId))}
                        >
                            {formatTimeForScreening(screening.date)}
                        </Button>

                        {
                            role === 'Admin' && <DeleteScreening screeningId={screening.id} />
                        }

                    </Grid2>
                ))
            }
        </Grid2>
    )
}