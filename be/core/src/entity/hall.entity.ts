import { DataTypes, Model } from "sequelize";
import Seat from "./seat.entity";
import { AutoMap } from "@automapper/classes";
import { sequelize } from "../db.connector";
import Screening from "./screening.entity";

export interface IHall {
    id: number;
    name: string;
    seats?: Seat[];
    screenings?: Screening[];
}

class Hall extends Model<IHall> implements IHall {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public name!: string;

    @AutoMap()
    public seats?: Seat[];

    @AutoMap()
    public screenings?: Screening[];
}

Hall.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'hall',
    timestamps: false
});

Hall.hasMany(Seat);
Seat.belongsTo(Hall);

export default Hall;