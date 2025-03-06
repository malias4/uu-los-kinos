import ReservedSeat from "../entity/reservedSeat.entity";

export const createReservedSeatDao = async (reservedSeat: ReservedSeat) => {
    try {
        await reservedSeat.save();
        return;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getReservedSeatBySeatIdAndScreeningId = async (seatId: number, screeningId: number) => {
    try {
        return await ReservedSeat.findOne({ where: { seatId: seatId, screeningId: screeningId } });
    } catch (error) {
        console.log(error);
        throw error;
    }
}