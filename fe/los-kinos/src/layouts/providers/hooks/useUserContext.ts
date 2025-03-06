import { createContext, useContext } from "react";

interface UserContextProps {
    userId: number | null;
    setUserId: React.Dispatch<React.SetStateAction<number | null>>;
    role: string | null;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};