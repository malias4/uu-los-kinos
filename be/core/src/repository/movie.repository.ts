import { Op } from "sequelize";
import Review from "../entity/review.entity";
import Screening from "../entity/screening.entity";
import User from "../entity/user.entity";
import Movie from "../entity/movie.entity";
import { MovieCreateDto } from "../dto/movie/movieCreate.dto";

// Fetch all movies for the overview
export const getMovieOverviewDao = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        throw error;
    }
};

// Fetch movie details by ID, including reviews and user info
export const getMovieDetailDao = async (movieId: number) => {
    try {
        return await Movie.findOne({
            where: { id: movieId },
            include: [
                {
                    model: Review,
                    include: [User]
                }
            ]
        });
    } catch (error) {
        throw error;
    }
};

// Fetch movies with screenings on a specific date
export const getMoviesWithScreeningsDao = async (screeningDate: Date) => {
    try {
        const startOfDay = new Date(screeningDate);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(screeningDate);
        endOfDay.setHours(23, 59, 59, 999);

        return await Movie.findAll({
            include: [{
                model: Screening,
                where: {
                    date: {
                        [Op.between]: [startOfDay, endOfDay]
                    }
                }
            }]
        });
    } catch (error) {
        throw error;
    }
};

// Create a new movie
export const createMovieDao = async (movieData: Movie) => {
    try {
        await movieData.save();
        return;
    } catch (error) {
        throw error;
    }
};

export const deleteMovieDao = async (movieId: number) => {
    try{
        return await Movie.destroy({
            where: { id: movieId }
        })
    }catch (error){
        throw error;
    }
}

export const getMovieByIdDao = async (movieId: number) => {
    try {
        return await Movie.findOne({
            where: { id: movieId }
        });
    } catch (error) {
        throw error;
    }
}