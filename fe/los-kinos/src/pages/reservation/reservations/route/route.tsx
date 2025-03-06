
import { IAppRoute } from "../../../../route/IAppRoute";
import { Reservations } from "../Reservations";

export const reservationRoute: IAppRoute = {
    code: 'reservation',
    path: '/reservations/:userId',
    element: <Reservations />
};