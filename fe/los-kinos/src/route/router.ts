import { createBrowserRouter } from "react-router-dom";
import { pageRoutesConverter } from "./pageRoutesConvertor";
import { pageRoutes } from "../pages/page-routes";
import { appRoute } from "../route";

export const router = createBrowserRouter([
    {
        path: appRoute.path,
        element: appRoute.element,
        children: pageRoutesConverter(pageRoutes)
    }
])