import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { MovieListCardDto } from "../api/MovieListCardDto";
import {EnvVariables} from "../../../../env-variables.ts";

interface MovieCardProps {
    movie: MovieListCardDto;
}

export const MovieCard = (props: MovieCardProps) => {
    const { movie } = props;

    return (
        <Card 
            sx={{
                maxWidth: { xs: '90%', sm: '20em' },
                backgroundColor: '#0f060b',
                margin: 'auto'
            }}
        >
            <CardMedia
                image={EnvVariables.BeAddress +'static/assets/img/' + movie.cover}
                sx={{
                    height: { xs: '15em', sm: '22em' },
                    width: { xs: '70%', sm: '15em' },
                    backgroundColor: '#0f060b',
                    borderRadius: '0.5em'
                }}
            />
            <CardContent sx={{ backgroundColor: '#0f060b' }}>
                <Stack direction='column' justifyContent='space-between' alignItems='center'>
                    <Typography variant="h2">{movie.title}</Typography>
                    <Typography variant="h4" padding={1} marginTop={1} color="secondary.b" sx={{ border: '1px solid white '}}>{movie.duration} min</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

