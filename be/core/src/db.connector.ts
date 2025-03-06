import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import Seat from './entity/seat.entity';

dotenv.config();

const sequelize = new Sequelize(
    `${process.env.PGDATABASE}`,
    `${process.env.PGUSER}`,
    `${process.env.PGPASSWORD}`, {
        host: `${process.env.PGHOST}`,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    },
);

(async () => {
    //Setting force to true deletes all the tables on each reload of the server
    await sequelize.sync({ force: false });


})();

export { sequelize };