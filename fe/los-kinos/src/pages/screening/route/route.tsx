import { IAppRoute } from "../../../route/IAppRoute";
import { ScreeningHall } from "../ScreeningHall";

export const screeningHallRouter: IAppRoute = {
    code: 'screeningHall',
    path: '/screening/:screeningId',
    element: <ScreeningHall />
}