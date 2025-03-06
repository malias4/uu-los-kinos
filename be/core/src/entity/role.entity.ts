import { sequelize } from "../db.connector";
import { AutoMap } from "@automapper/classes";
import { DataTypes, Model } from "sequelize";

export interface IRole {
    id: number;
    name: string;
}

class Role extends Model<IRole> implements IRole {
    @AutoMap()
    public id!: number;
    
    @AutoMap()
    public name!: string;
}

Role.init({
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
    modelName: 'role',
    timestamps: false
});

export default Role;