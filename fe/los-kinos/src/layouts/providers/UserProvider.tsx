import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { UserContext } from "./hooks/useUserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<number | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            // @ts-expect-error - userId is not defined in decodedToken, but id does exist
            setUserId(decodedToken.userId);
            // @ts-expect-error - role is not defined in decodedToken, but role does exist
            setRole(decodedToken.role);
        }
    }, []);

    return (
        <UserContext.Provider value={{ userId, role, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};