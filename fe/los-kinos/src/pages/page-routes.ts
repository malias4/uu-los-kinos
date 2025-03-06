import { IAppRoute } from "../route/IAppRoute";
import { homeRoute } from "./homepage/route/route";
import { loginRoute } from "./login/route/route";
import { movieRoute } from "./movies/movieDetail/route/route";
import { movieListRoute } from "./movies/movieList/route/route";
import { registerRoute } from "./register/route/route";
import { createReservationRoute } from "./reservation/createReservation/route/route";
import { reservationCodeRoute } from "./reservation/reservationCode/route/route";
import { reservationRoute } from "./reservation/reservations/route/route";
import { screeningHallRouter } from "./screening/route/route";
import {googleAuthRoute} from "./google-auth/route/route.tsx";

export const pageRoutes: IAppRoute[] = [
    homeRoute,
    loginRoute,
    registerRoute,
    movieRoute,
    movieListRoute,
    screeningHallRouter,
    reservationRoute,
    createReservationRoute,
    reservationCodeRoute,
    googleAuthRoute
];
