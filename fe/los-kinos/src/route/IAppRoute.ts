import { RouteObject } from "react-router-dom";

export interface IAppRoute {
    readonly code: string;

    readonly index?: RouteObject['index'];
    readonly element?: RouteObject['element'];
    readonly path?: RouteObject['path'];

    readonly children?: IAppRoute[];
}