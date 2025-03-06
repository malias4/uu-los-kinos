import { createMap, forMember, mapFrom } from "@automapper/core"
import mapper from "../mapper/mapper.mapper"
import Reservation from "../entity/reservation.entity"
import { ReservationDto } from "../dto/reservation/Reservation.dto"
import { deleteReservationDao, getReservationDao } from "../repository/reservation.repository"
import User from "../entity/user.entity"
import { UserReservationDto } from "../dto/user/userReservation.dto"
import Movie from "../entity/movie.entity"
import { MovieOverviewDto } from "../dto/movie/movieOverview.dto"
import { ReservationCreateDto } from "../dto/reservation/reservationCreate.dto";
import ReservedSeat from "../entity/reservedSeat.entity";
import { generateReservationCode } from "../utils/generateReservationCode";
import { ReservedSeatCreateDto } from "../dto/reservation/reservedSeatCreate.dto";
import { createReservationDao } from "../repository/reservation.repository";
import { createReservedSeatDao } from "../repository/reservedSeat.repository";
import { mapReservedSeats } from "./utils/mapReservedSeats.utils";


export const getReservationDto = async (userId: number) => {
    createMap(mapper, Movie, MovieOverviewDto)
    createMap(mapper, Reservation, ReservationDto,
        forMember(
            (destionation) => destionation.movie,
            mapFrom((source) => source.screening?.movie ? mapper.map(source.screening.movie, Movie, MovieOverviewDto) : null)
        )
    )
    createMap(mapper, User, UserReservationDto,
        forMember(
            (destination) => destination.reservations,
            mapFrom((source) => source.reservations ? mapper.mapArray(source.reservations, Reservation, ReservationDto): [])
        )
    )

    try{
        const reservations = await getReservationDao(userId);
        const mappedData = mapper.map(reservations, User, UserReservationDto);
        return mappedData;
    }catch (error){
        throw error;
    }
}

export const deleteReservationDto = async (reservationId: number) => {
    try{
        await deleteReservationDao(reservationId)
        return;
    }catch (error){
        throw error;
    }
}

export const createReservationDto = async (reservationDto: ReservationCreateDto): Promise<number> => {
    createMap(mapper, ReservedSeatCreateDto, ReservedSeat);
    createMap(mapper, ReservationCreateDto, Reservation);

    try {
        const reservation = mapper.map(reservationDto, ReservationCreateDto, Reservation);
        reservation.code = generateReservationCode();

        const reservationCreate = await createReservationDao(reservation);

        const reservedSeatsDtos = mapReservedSeats(reservationCreate.dataValues.id, reservationDto.seats, reservationDto.screeningId);
        const reservedSeats = mapper.mapArray(reservedSeatsDtos, ReservedSeatCreateDto, ReservedSeat);

        await Promise.all(reservedSeats.map(reservedSeat => createReservedSeatDao(reservedSeat)));

        return reservation.code;
    } catch (error) {
        console.log(error);
        throw error;
    }
}