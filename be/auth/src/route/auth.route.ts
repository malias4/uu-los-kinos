import express from 'express';
import {googleLogin, login, register} from '../controller/auth.controller';
import passport from "passport";

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:5173/login', session: false }),
    googleLogin
);

export default authRouter;