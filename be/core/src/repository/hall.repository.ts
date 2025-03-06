import Hall from "../entity/hall.entity";

export const getAllHallsDao = async (): Promise<Hall[]> => {
    try {
        return await Hall.findAll();
    } catch (error) {
        console.log(error);
        return [];
    }
}