import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

export const verifyTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).send("Unauthorized");
        return
    }

    const token = authHeader.split(" ")[1];

    try {
        req.body.user = jwt.verify(token, process.env.JWT_SECRET || 'jvns');
        next();
    } catch (error) {
        res.status(401).send("Unauthorized");
        return
    }
}