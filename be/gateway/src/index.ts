import express, { Express } from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import {verifyTokenMiddleware} from "./middleware/verifyToken.middleware";
import {verifyAdmin} from "./middleware/verifyAdmin.middleware";
import cors from 'cors';

dotenv.config();

const coreServiceProxy = proxy(process.env.CORE_SERVICE ?? 'http://localhost:8082')
const coreUploadServiceProxy = proxy(process.env.CORE_SERVICE ?? 'http://localhost:8082', {
    parseReqBody: false
});
const authServiceProxy = proxy(process.env.AUTH_SERVICE ?? 'http://localhost:8081');

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

app.use('/api/core/secured/admin/upload', verifyTokenMiddleware, verifyAdmin, coreUploadServiceProxy)
app.use('/api/core/secured/admin', verifyTokenMiddleware, verifyAdmin, coreServiceProxy);
app.use('/api/core/secured', verifyTokenMiddleware, coreServiceProxy);
app.use('/api/core', coreServiceProxy);
app.use('/api/auth', authServiceProxy);

app.listen(port, () => {
    console.log(`[server]: Gateway is running at http://localhost:${port}`);
});