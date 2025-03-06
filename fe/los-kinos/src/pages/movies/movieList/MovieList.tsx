import {Box, Button, Grid2, Typography} from "@mui/material";
import { useGetMovieList } from "./api/useGetMovieList";
import { useEffect } from "react";
import { MovieCard } from "./components/MovieCard";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../layouts/providers/hooks/useUserContext";
import { AddMovie } from "./components/AddMovie";
import {useDeleteMovie} from "./api/useDeleteMovie.ts";
import {isMobile} from 'react-device-detect';

export const MovieList = () => {
    const [movies, getMovies] = useGetMovieList();
    const navigate = useNavigate();
    const deleteMovie = useDeleteMovie();
    const { role } = useUserContext();

    useEffect(
        () => {
            console.log(role)
            const asyncCall = async () => {
                await getMovies();
            }
            asyncCall().then();
        },
        [getMovies]
    );

    const handleDelete = async (movieId: number) => {
        await deleteMovie(movieId);
        window.location.reload();
    };

    if (!movies) {
        return (
            <Typography>Načítám data...</Typography>
        );
    }

    return (
        <Box>
            <Grid2 container justifyContent='center' direction='column' alignContent='center'>
                <Grid2 size={8} margin={2}>
                    <Typography variant="h2">Filmy které promítáme</Typography>
                </Grid2>
                {
                    role === 'Admin' && <AddMovie />
                }
                <Grid2 container spacing={3} size={10} direction={isMobile ? 'column' : 'row'}>
                    {movies.map((movie) => (
                        <Grid2 key={movie.id}>
                            <Grid2
                                size={2}
                                onClick={() => navigate(`/movies/detail/${movie.id}`)}
                                sx={{
                                    cursor: 'pointer',
                                    height: { xs: '15em', sm: '22em' },
                                    width: { xs: '70%', sm: '15em' },
                                    marginBottom: 15
                                }}
                            >
                                <MovieCard movie={movie} />
                            </Grid2>
                            {
                                role === 'Admin' &&
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(movie.id)}
                                    sx={{ marginLeft: 6 }}
                                >
                                    Odstrániť film
                                </Button>
                            }
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>
        </Box>
    )
};