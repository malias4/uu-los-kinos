import { IAppRoute } from "../../../../route/IAppRoute";
import { CreateReservation } from "../CreateReservation";

export const createReservationRoute: IAppRoute = {
  code: "reservation",
  path: "/:screeningId/reservation",
  element: <CreateReservation />,
};
