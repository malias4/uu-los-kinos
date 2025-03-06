import axios from "axios";
import { useCallback } from "react";

export const useLogin = () => {
    return useCallback(
        async (email: string, password: string) => {
            return await axios.post('/auth/login', { email, password });
        },
        []
    );
};