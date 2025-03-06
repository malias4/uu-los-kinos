import { sequelize } from "../db.connector";
import { DataTypes, Model } from "sequelize";
import { AutoMap } from "@automapper/classes";
import User, { IUser } from "./user.entity";

export interface IReview {
    id: number;
    rating: number;
    comment: string;
    user?: IUser;
    userId: number;
    movieId: number;
}

class Review extends Model<IReview> implements IReview {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public rating!: number;

    @AutoMap()
    public comment!: string;

    @AutoMap()
    public user?: User;

    @AutoMap()
    public userId!: number;

    @AutoMap()
    public movieId!: number;
}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'review',
    timestamps: false
});

export default Review;