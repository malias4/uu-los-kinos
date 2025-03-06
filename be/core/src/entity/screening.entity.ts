import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.connector";
import { AutoMap } from "@automapper/classes";
import Hall from "./hall.entity";
import ReservedSeat from "./reservedSeat.entity";
import Reservation from "./reservation.entity";
import Movie from "./movie.entity";

export interface IScreening {
    id: number;
    date: Date;
    hall?: Hall;
    reserved_seats?: ReservedSeat[];
    reservations?: Reservation[];
    movie?: Movie;
    hallId?: number;
    movieId?: number;
}

class Screening extends Model<IScreening> implements IScreening {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public date!: Date;

    @AutoMap(() => Hall)
    public hall?: Hall;

    @AutoMap(() => ReservedSeat)
    public reserved_seats?: ReservedSeat[];

    @AutoMap(() => Reservation)
    public reservations?: Reservation[];

    @AutoMap(() => Movie)
    public movie?: Movie;

    @AutoMap()
    public hallId?: number;

    @AutoMap()
    public movieId?: number
}

Screening.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'screening',
    timestamps: false
});

Screening.hasMany(ReservedSeat);
ReservedSeat.belongsTo(Screening);

Hall.hasMany(Screening);
Screening.belongsTo(Hall);

Movie.hasMany(Screening);
Screening.belongsTo(Movie);

export default Screening;