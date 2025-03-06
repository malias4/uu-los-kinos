import { IAppRoute } from "../../../../route/IAppRoute";
import { MovieDetail } from "../MovieDetail";


export const movieRoute: IAppRoute = {
    code: 'movieDetail',
    path: '/movies/detail/:movieId',
    element: <MovieDetail />
};