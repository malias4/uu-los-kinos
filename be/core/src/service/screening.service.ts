import {createMap, forMember, mapFrom} from "@automapper/core"
import {ScreeningDto} from "../dto/program/screening.dto"
import Screening from "../entity/screening.entity"
import mapper from "../mapper/mapper.mapper"
import Hall from "../entity/hall.entity"
import {HallDto} from "../dto/hall/hall.dto"
import {SeatDto} from "../dto/seat/seat.dto"
import Seat from "../entity/seat.entity"
import {addScreeningDao, deleteScreeningDao, getScreeningByIdDao} from "../repository/screening.repository"
import Movie from "../entity/movie.entity"
import {MovieOverviewDto} from "../dto/movie/movieOverview.dto"
import ReservedSeat from "../entity/reservedSeat.entity"
import {ReservedSeatDto} from "../dto/program/reservedSeat.dto"
import {ScreeningCreateDto} from "../dto/screening/screeningCreate.dto"

export const getScreeningByIdDto = async (screeningId: number) => {
    createMap(mapper, Seat, SeatDto);
    createMap(mapper, Hall, HallDto,
        forMember(
            (destination) => destination.seats,
            mapFrom((source) => source.seats ? mapper.mapArray(source.seats, Seat, SeatDto) : [])
        )
    );
    createMap(mapper, Movie, MovieOverviewDto);
    createMap(mapper, ReservedSeat, ReservedSeatDto);
    createMap(mapper, Screening, ScreeningDto,
        forMember(
            (destination) => destination.reservedSeats,
            mapFrom((source) => source.reserved_seats ? mapper.mapArray(source.reserved_seats, ReservedSeat, ReservedSeatDto) : [])
        )
    );

    try {
        const screening = await getScreeningByIdDao(screeningId);
        return mapper.map(screening, Screening, ScreeningDto);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const addScreeningDto = async (screeningData: ScreeningCreateDto ) => {
    createMap(mapper, ScreeningCreateDto, Screening);

    try{
        const mappedValue = mapper.map(screeningData, ScreeningCreateDto, Screening);
        await addScreeningDao(mappedValue)
        return;
    }catch(error){
        throw error;
    }
}