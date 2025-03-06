import Movie from "../entity/movie.entity";
import Reservation from "../entity/reservation.entity";
import Screening from "../entity/screening.entity";
import User from "../entity/user.entity";

export const getReservationDao = async (userId: number) => {
    try{
        return await User.findOne({
            where: { id: userId },
            include: [
                {
                    model: Reservation,
                    include: [
                        {
                            model: Screening,
                            include: [Movie]
                        }
                    ]
                }
            ]
        })
    }catch (error){
        throw error;
    }
}

export const deleteReservationDao = async (reservationId: number) => {
    try{
        return await Reservation.destroy({
            where: { id: reservationId }
        })
    }catch (error){
        throw error;
    }
}

export const createReservationDao = async (reservation: Reservation): Promise<Reservation> => {
    try {
        return await reservation.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
}