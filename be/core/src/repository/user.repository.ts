import Role from "../entity/role.entity";
import User from "../entity/user.entity";

export const getUserByIdDao = async (userId: number) => {
    try {
        return await User.findOne({ where: { id: userId } });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getUserByEmailDao = async (email: string) => {
    try {
        return await User.findOne({ where: { email }, include: [Role] });
    } catch (error) {
        console.log(error);
        throw error;
    }
};