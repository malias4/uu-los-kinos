import { PassportStatic } from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { getUserByIdDao } from "../repository/user.repository";

export default (passport: PassportStatic) => {
    passport.use(new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET || 'jvns',
    },
        (payload, done) => {
            try {
                const user = getUserByIdDao(payload.userId);

                if (user) {
                    return done(null, user);
                }
            } catch (error) {
                console.log(error);
                return done(null, false);
            }
        }));
};