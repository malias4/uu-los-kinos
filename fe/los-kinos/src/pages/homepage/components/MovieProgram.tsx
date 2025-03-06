import { useEffect, useState } from "react";
import { useGetMovieProgram } from "../api/useGetMovieProgram"
import {Box, Grid2, Typography} from "@mui/material";
import { MovieProgramEntry } from "./MovieProgramEntry";
import { MovieProgramDatePicker } from "./MovieProgramDatePicker";
import { getDaysForScreenings } from "../utils/getDaysForScreenings";
import { formatDateForScreeningRequest } from "../utils/formatDateForScreeningRequest";

export const MovieProgram = () => {
    const [movieProgram, getMovieProgram] = useGetMovieProgram();
    const dates = getDaysForScreenings();
    const [ selectedDate, setSelectedDate ] = useState<Date>(dates[0]);

    useEffect(() => {
        const asyncCall = async () => {
            await getMovieProgram(formatDateForScreeningRequest(selectedDate));
        };
        asyncCall().then();
    }, [getMovieProgram, selectedDate]);

    const handleDateChange = async (date: Date) => {
        setSelectedDate(date);
    }

    if (!movieProgram) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Box>
            <Grid2 container flexDirection='column'>
                <Grid2>
                    <MovieProgramDatePicker dates={dates} onDateChange={handleDateChange} selectedDate={selectedDate} />
                </Grid2>
                {
                    movieProgram.length > 0 ?
                    movieProgram.map((movie) => (
                        <MovieProgramEntry key={movie.id} movieId={movie.id.toString()} screenings={movie.screenings} />
                    )) :
                        <Typography variant='h2' marginTop={5} marginLeft={5}>
                            V tento den žádné filmy nepromítáme
                        </Typography>
                }
            </Grid2>
        </Box>
    )
}