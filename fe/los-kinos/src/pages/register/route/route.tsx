import { IAppRoute } from "../../../route/IAppRoute";
import { Register } from "../Register";

export const registerRoute: IAppRoute = {
    code: 'register',
    path: '/register',
    element: <Register />
}