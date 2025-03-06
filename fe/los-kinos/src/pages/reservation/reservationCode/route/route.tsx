import { IAppRoute } from "../../../../route/IAppRoute";
import { ReservationCode } from "../ReservationCode";

export const reservationCodeRoute: IAppRoute = {
  code: "reservationCode",
  path: "/reservation/:code",
  element: <ReservationCode />,
};
