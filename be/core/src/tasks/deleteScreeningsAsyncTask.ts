import { Op } from "sequelize";
import Screening from "../entity/screening.entity";

export const deleteScreeningsAsyncTask = async () => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        await Screening.destroy({
            where: {
                date: {
                    [Op.lt]: today
                }
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};