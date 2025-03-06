import express, { Express } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import userRouter from "./route/user.route";
import { sequelize } from "./db.connector";
import movieRouter from "./route/movie.route";
import screeningRouter from "./route/screening.route";
import { defaultDbData } from "./utils/defaultDbData";
import reservationRouter from "./route/reservation.route";
import reviewRouter from "./route/review.route";
import path from "path";
import { deleteScreeningsAsyncTaskScheduler } from "./tasks/deleteScreeningAsyncTaskScheduler";
import hallRouter from "./route/hall.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// This task runs every 24 hours at the end of each day to delete all screenings (with reservations) that have already passed
deleteScreeningsAsyncTaskScheduler();

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

app.use('/halls', hallRouter)
app.use('/movies', movieRouter);
app.use('/screenings', screeningRouter);
app.use('/reservations', reservationRouter)
app.use('/reviews', reviewRouter);
app.use('/users', userRouter);

app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);

  try {
    await sequelize.authenticate();
    console.log('database connection successful');
    await defaultDbData();
  } catch (error) {
    console.log('database connection failed');
  }
});