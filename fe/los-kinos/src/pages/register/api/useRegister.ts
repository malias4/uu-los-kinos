import axios from "axios";
import { useCallback } from "react";

export const useRegister = () => {
    return useCallback(
        async (name: string, email: string, password: string) => {
            return await axios.post('/auth/register', { name, email, password });
        },
        []
    );
};