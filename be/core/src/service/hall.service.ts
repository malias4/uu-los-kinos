import {createMap} from "@automapper/core";
import mapper from "../mapper/mapper.mapper";
import Hall from "../entity/hall.entity";
import {HallListDto} from "../dto/hall/hallList.dto";
import {getAllHallsDao} from "../repository/hall.repository";

export const getAllHallsDto = async () => {
    createMap(mapper, Hall, HallListDto);

    try {
        const rawHallList = await getAllHallsDao();
        const hallListDto = mapper.mapArray(rawHallList, Hall, HallListDto);
        return hallListDto;
    } catch (error) {
        throw error;
    }
}