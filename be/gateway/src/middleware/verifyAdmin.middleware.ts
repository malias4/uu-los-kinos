import { NextFunction, Response, Request } from "express";

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.user || !req.body.user.role) {
        res.status(401).send("Unauthorized");
        return
    }

    if (req.body.user.role !== 'Admin') {
        res.status(403).send("Forbidden");
        return;
    }

    next();
}