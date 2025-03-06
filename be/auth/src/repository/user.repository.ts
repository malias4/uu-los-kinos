import User from "../entity/user.entity";

export const getUserByIdDao = async (userId: number): Promise<User> => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createUserDao = async (user: User) => {
    try {
        await user.save();
        return;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getUserByEmailDao = async (email: string): Promise<User | null> => {
    try {
        return await User.findOne({ where: { email } });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getUserByGoogleId = async (googleId: string) => {
    try {
        return await User.findOne({ where: { googleId: googleId } })
    } catch (error) {
        console.log(error);
        throw error;
    }
}