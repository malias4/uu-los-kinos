import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.connector";
import { AutoMap } from "@automapper/classes";
import ReservedSeat from "./reservedSeat.entity";

export interface ISeat {
    id: number;
    row: number;
    column: number;
    reservedSeats?: ReservedSeat[];
}

class Seat extends Model<ISeat> implements ISeat {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public row!: number;
    
    @AutoMap()
    public column!: number;
    
    @AutoMap(() => ReservedSeat)
    public reservedSeats?: ReservedSeat[];
}

Seat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    row: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    column: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'seat',
    timestamps: false
});

Seat.hasMany(ReservedSeat);
ReservedSeat.belongsTo(Seat);

export default Seat;