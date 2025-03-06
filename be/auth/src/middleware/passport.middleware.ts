import { PassportStatic } from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../entity/user.entity";
import {getUserByGoogleId} from "../repository/user.repository";
import {UserRegisterDto} from "../dto/userRegister.dto";
import {createUserDto} from "../service/user.service";

export default (passport: PassportStatic) => {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET || 'jvns',
    },
        async (payload, done) => {
            try {
                const user = await User.findByPk(payload.id);
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            } catch (error) {
                return done(error, false);
            }
        }
        )
    );
    //someone should fix the ts-ignore issue, I don't know how nor do I want to know
    //I HATE TYPESCRIPT I HATE TYPESCRIPT I HATE TYPESCRIPT
    //@ts-ignore
    passport.use('google', new GoogleStrategy({
            //@ts-ignore
            clientID: process.env.CLIENT_ID,
            //@ts-ignore
            clientSecret: process.env.CLIENT_SECRET,
            //@ts-ignore
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        //@ts-ignore
        async (accessToken, refreshToken, profile, done) => {
            //@ts-ignore
            const existingUser = await getUserByGoogleId(profile.id);
            //@ts-ignore
            if (existingUser) {
                //@ts-ignore
                return done(null, existingUser);
            }
            //@ts-ignore
            const newUser = new UserRegisterDto();
            //@ts-ignore
            newUser.name = profile.displayName;
            //@ts-ignore
            newUser.email = profile.emails ? profile.emails[0].value : '';
            //@ts-ignore
            newUser.googleId = profile.id;

            try {
                //@ts-ignore
                const createdUser = await createUserDto(newUser, 'google');
                //@ts-ignore
                return done(null, createdUser);
            } catch (error) {
                console.error("Error creating user:", error);
                //@ts-ignore
                return done(error, false);
            }
        }));
}