import { IAppRoute } from "../../../route/IAppRoute";
import { Login } from "../Login";

export const loginRoute: IAppRoute = {
    code: 'login',
    path: '/login',
    element: <Login />
};