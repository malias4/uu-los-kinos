import { deleteScreeningsAsyncTask } from "./deleteScreeningsAsyncTask";

export const deleteScreeningsAsyncTaskScheduler = async () => {
    const now = new Date();
    const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0, 0
    );
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    setTimeout(() => {
        deleteScreeningsAsyncTask();
        setInterval(deleteScreeningsAsyncTask, 24 * 60 * 60 * 1000); // Run every 24 hours
    }, timeUntilMidnight);
};