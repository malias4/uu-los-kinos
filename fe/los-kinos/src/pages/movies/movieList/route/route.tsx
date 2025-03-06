import { IAppRoute } from "../../../../route/IAppRoute";
import { MovieList } from "../MovieList";

export const movieListRoute: IAppRoute = {
    code: 'movieList',
    path: 'movies/list',
    element: <MovieList />
};