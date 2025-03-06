import { IndexRouteObject, NonIndexRouteObject, RouteObject } from "react-router-dom";
import { IAppRoute } from "./IAppRoute";

export const pageRoutesConverter = (pageRoutes: IAppRoute[]): RouteObject[] => {
    return pageRoutes.map(pageRoute => {
        const children = pageRoute.children && pageRoutesConverter(pageRoute.children);

        if (pageRoute.index) {
            return {
                index: true,
                path: pageRoute.path,
                element: pageRoute.element,
                children: children
            } as IndexRouteObject;
        }
        return {
            index: false,
            path: pageRoute.path,
            element: pageRoute.element,
            children: children
        } as NonIndexRouteObject;
    });
};
