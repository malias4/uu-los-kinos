import { DataTypes, Model, Optional } from "sequelize";
import Review from "./review.entity";
import { sequelize } from "../db.connector";
import Screening from "./screening.entity";
import { AutoMap } from "@automapper/classes";

export interface IMovie {
    id: number;
    title: string;
    description: string;
    duration: number;
    releaseDate: Date;
    cover: string;
    trailer: string;
    reviews?: Review[];
    screenings?: Screening[];
}

class Movie extends Model<IMovie> implements IMovie {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public title!: string;

    @AutoMap()
    public description!: string;

    @AutoMap()
    public duration!: number;

    @AutoMap()
    public releaseDate!: Date;

    @AutoMap()
    public cover!: string;

    @AutoMap()
    public trailer!: string;

    @AutoMap(() => Review)
    public reviews?: Review[];

    @AutoMap(() => Screening)
    public screenings?: Screening[];
}

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'movie',
    timestamps: false
});

Movie.hasMany(Review);
Review.belongsTo(Movie);

export default Movie;