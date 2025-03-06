import { sequelize } from '../middleware/db-connector.middleware';
import { Model, DataTypes } from 'sequelize';
import { AutoMap } from '@automapper/classes';
import Role from "./role.entity";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    roleId?: number;
    role?: Role;
    googleId?: string;
}

class User extends Model<IUser> implements IUser {
    @AutoMap()
    public id!: number;

    @AutoMap()
    public name!: string;

    @AutoMap()
    public email!: string;

    @AutoMap()
    public password!: string;

    @AutoMap()
    public roleId?: number;

    @AutoMap(() => Role)
    public role?: Role;

    @AutoMap()
    public googleId?: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    googleId: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
});

Role.hasMany(User);
User.belongsTo(Role);

export default User;