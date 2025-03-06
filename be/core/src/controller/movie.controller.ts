import { Request, Response } from "express";
import {
    getMovieDetailDto,
    getMovieOverviewDto,
    getMoviesWithScreeningsDto,
    createMovieDto,
    deleteMovieDto
} from "../service/movie.service";
import { isValidDate } from "../utils/dateValidator.utils";
import { MovieCreateDto } from "../dto/movie/movieCreate.dto";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { deleteMovieDao } from "../repository/movie.repository";

export const getMoiveOverview = async (req: Request, res: Response) => {
    try {
        const movies = await getMovieOverviewDto();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send('Failed to fetch movie overview');
    }
};

export const getMovieDetail = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    if (!movieId || isNaN(parseInt(movieId))) {
        res.status(400).send('Invalid ID');
        return;
    }

    try {
        const movie = await getMovieDetailDto(parseInt(movieId));
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send('Failed to fetch movie details');
    }
};

export const getMoviesWithScreenings = async (req: Request, res: Response) => {
    const { date } = req.body;

    if (!date || !isValidDate(date)) {
        res.status(400).send('Invalid date');
        return;
    }

    try {
        const movies = await getMoviesWithScreeningsDto(date);
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send('Failed to fetch movies with screenings');
    }
};

export const createMovie = async (req: Request, res: Response) => {
    const movieData = plainToClass(MovieCreateDto, req.body);
    movieData.cover = req.file?.originalname || '';
        
    try {
        const errors = await validate(movieData);

        if (errors.length > 0) {
            console.log('Validation errors:', errors);
            res.status(400).send({ error: "Invalid movie data" });
            return;
        }

        await createMovieDto(movieData);
        res.status(201).send({ message: "Movie created successfully" });
    } catch (error) {
        console.error('Error creating movie:', error);
        res.status(500).send('Failed to create movie');
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    if(!movieId || isNaN(parseInt(movieId))){
        res.status(400).send("No movie provided")
        return;
    }

    try{
        await deleteMovieDto(parseInt(movieId))
        res.status(200).send("Movie canceled")
        return;
    }catch (error){
        res.status(500).json({ message: 'Failed to delete movie' });
        console.log(error);
        return;
    }
}