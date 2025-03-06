import { Homepage } from "../Homepage";
import { IAppRoute } from "../../../route/IAppRoute";

export const homeRoute: IAppRoute = {
    code: 'homepage',
    path: '/',
    element: <Homepage />
};