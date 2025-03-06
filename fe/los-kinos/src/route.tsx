import { App } from "./App";
import { IAppRoute } from "./route/IAppRoute";

export const appRoute: IAppRoute = {
    code: 'app',
    path: '/',
    element: <App />
};