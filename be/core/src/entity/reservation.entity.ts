import { AutoMap } from "@automapper/classes";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.connector";
import ReservedSeat from "./reservedSeat.entity";
import Screening from "./screening.entity";

export interface IReservation {
    id: number;
    code: number;
    reservedSeats?: ReservedSeat[];
    userId?: number;
    screeningId: number;
    email?: string;
    fullname?: string;
    screening?: Screening;
}

class Reservation extends Model<IReservation> implements IReservation {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public code!: number;

    @AutoMap(() => ReservedSeat)
    public reservedSeats?: ReservedSeat[];

    @AutoMap(() => Screening)
    public screening?: Screening;

    @AutoMap()
    public userId?: number;

    @AutoMap()
    public screeningId!: number;

    @AutoMap()
    public email?: string;

    @AutoMap()
    public fullname?: string;
}

Reservation.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    screeningId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'reservation',
    timestamps: false
});

Reservation.hasMany(ReservedSeat);
ReservedSeat.belongsTo(Reservation);

Screening.hasMany(Reservation);
Reservation.belongsTo(Screening);

export default Reservation;