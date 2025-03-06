import {IAppRoute} from "../../../route/IAppRoute.ts";
import {GoogleAuth} from "../GoogleAuth.tsx";

export const googleAuthRoute: IAppRoute = {
    code: 'googleAuth',
    path: '/google/auth/success',
    element: <GoogleAuth />
}