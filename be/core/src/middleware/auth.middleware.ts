import { NextFunction, Request, Response } from "express";
import { getUserByIdDao } from "../repository/user.repository";
import jwt from 'jsonwebtoken';

//TODO: Middleware to verify the JWT token, add role checks here whenever implemented
export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers) {
        let token = req.headers.authorization;

        if (!token) {
            res.status(400).json({ error: 'No token provided' });
            return;
        }

        token = token.split(' ')[1];

        return jwt.verify(token, process.env.JWT_SECRET || 'jvns', async (err: any, decoded: any) => {
            if (err) {
                res.status(400).json({ error: err });
                return;
            }
            req.body.id = decoded.userId;

            const user = await getUserByIdDao(req.body.id);

            if (!user) {
                res.status(400).json({ error: 'User does not exist' });
                return;
            }

            if (user.role?.name !== 'Admin' && decoded.role !== 'Admin') {
                res.status(401).json({ error: 'Unauthorized' });
                return
            }

            next();
            return;
        });
    }
    res.status(400).json({ error: 'No headers provided' });
    return;
}