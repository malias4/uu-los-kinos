import express, { Express } from "express";
import dotenv from "dotenv";
import {sequelize} from "./middleware/db-connector.middleware";
import passportMiddleware from "./middleware/passport.middleware";
import passport from "passport";
import cors from 'cors';
import authRouter from "./route/auth.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

passportMiddleware(passport);

app.use(passport.initialize());
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

app.use('/', authRouter);

app.listen(port, async () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);

    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log(error)
        console.log('database connection failed');
    }
});