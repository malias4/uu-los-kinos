import Hall from "../entity/hall.entity";
import ReservedSeat from "../entity/reservedSeat.entity";
import Screening from "../entity/screening.entity";
import Seat from "../entity/seat.entity";

export const getScreeningByIdDao = async (screeningId: number) => {
    try {
        return await Screening.findOne({ 
            where: { id: screeningId }, 
            include: [
                {
                    model: Hall,
                    include: [{
                        model: Seat,
                        include: [ReservedSeat]
                    }],
                },
                {
                    model: ReservedSeat
                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteScreeningDao = async (screeningId: number) => {
    try{
        return await Screening.destroy({
            where: { id: screeningId }, 
        })
    }catch (error){
        throw error;
    }
}


export const addScreeningDao = async (screeningData: Screening) => {
    try{
        await screeningData.save()
        return;
    }catch(error){
        throw error
    }
}