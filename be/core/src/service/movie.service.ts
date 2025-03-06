import { createMap, forMember, mapFrom } from "@automapper/core";
import mapper from "../mapper/mapper.mapper";
import Movie from "../entity/movie.entity";
import { MovieOverviewDto } from "../dto/movie/movieOverview.dto";
import {
    getMovieDetailDao,
    getMovieOverviewDao,
    getMoviesWithScreeningsDao,
    createMovieDao,
    deleteMovieDao,
    getMovieByIdDao
} from "../repository/movie.repository";
import Review from "../entity/review.entity";
import { ReviewDto } from "../dto/review/review.dto";
import { MovieDetailDto } from "../dto/movie/movieDetail.dto";
import User from "../entity/user.entity";
import { UserBasicDto } from "../dto/user/userBasic.dto";
import Screening from "../entity/screening.entity";
import { ScreeningDto } from "../dto/program/screening.dto";
import { MoiveScreeningDto } from "../dto/movie/movieScreening.dt";
import { MovieCreateDto } from "../dto/movie/movieCreate.dto";

export const getMovieOverviewDto = async () => {
    createMap(mapper, Movie, MovieOverviewDto);

    try {
        const movies = await getMovieOverviewDao();
        return mapper.mapArray(movies, Movie, MovieOverviewDto);
    } catch (error) {
        throw error;
    }
};

export const getMovieDetailDto = async (movieId: number) => {
    createMap(mapper, User, UserBasicDto);
    createMap(mapper, Review, ReviewDto,
        forMember(
            (destination) => destination.user,
            mapFrom((source) => mapper.map(source.user, User, UserBasicDto))
        )
    );
    createMap(mapper, Movie, MovieDetailDto);

    try {
        const movieDetail = await getMovieDetailDao(movieId);
        return mapper.map(movieDetail, Movie, MovieDetailDto);
    } catch (error) {
        throw error;
    }
};

export const getMoviesWithScreeningsDto = async (screeningDate: Date) => {
    createMap(mapper, Screening, ScreeningDto);
    createMap(mapper, Movie, MoiveScreeningDto,
        forMember(
            (destination) => destination.screenings,
            mapFrom((source) => source.screenings ? mapper.mapArray(source.screenings, Screening, ScreeningDto) : [])
        )
    );

    try {
        const movies = await getMoviesWithScreeningsDao(screeningDate);
        return mapper.mapArray(movies, Movie, MoiveScreeningDto);
    } catch (error) {
        throw error;
    }
};

export const createMovieDto = async (movieData: MovieCreateDto) => {
    createMap(mapper, MovieCreateDto, Movie);

    try {
        const mappedValue = mapper.map(movieData, MovieCreateDto, Movie);
        await createMovieDao(mappedValue);
        return;
    } catch (error) {
        throw error;
    }
};

export const deleteMovieDto = async (movieId: number) => {
    const movie = await getMovieByIdDao(movieId)

    if (!movie) {
        throw new Error("Movie not found")
    }

    try{
        await deleteMovieDao(movieId)
        return;
    }catch (error){
        throw error;
    }
}