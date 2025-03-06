import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.connector";
import { AutoMap } from "@automapper/classes";

interface IReservedSeat {
    id: number;
    seatId: number;
    reservationId: number;
    screeningId: number;
}

class ReservedSeat extends Model<IReservedSeat> implements IReservedSeat {
    public id!: number;

    @AutoMap()
    public seatId!: number;

    @AutoMap()
    public reservationId!: number;

    @AutoMap()
    public screeningId!: number;
}

ReservedSeat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    seatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reservationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    screeningId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'reserved_seat',
    timestamps: false
});

export default ReservedSeat;