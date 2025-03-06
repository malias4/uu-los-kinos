import express from 'express';
import { getMoiveOverview, getMovieDetail, getMoviesWithScreenings, createMovie, deleteMovie } from '../controller/movie.controller';
import { upload } from '../middleware/fileUpload.middleware';

const movieRouter = express.Router();

movieRouter.get("/list", getMoiveOverview);
movieRouter.get("/detail/:movieId", getMovieDetail);
movieRouter.post('/program', getMoviesWithScreenings);
movieRouter.post('/add', upload.single('cover'), createMovie);
movieRouter.delete("/:movieId", deleteMovie)

export default movieRouter;
