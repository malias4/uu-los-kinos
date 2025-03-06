import axios from "axios";
import { useCallback, useState } from "react";

type GetUsernameById = (id: number) => Promise<string>;
type UseGetUsernameByIdReturn = [
    string | undefined,
    GetUsernameById
]

export const useGetUsernameById = (): UseGetUsernameByIdReturn => {
    const [ response, setResponse ] = useState<string>();

    const apiRequest = useCallback<GetUsernameById>(
        async (id: number) => {
            const r = await axios.get(`/core/secured/users/${id}`);
            setResponse(r.data.name);
            return r.data.name;
        },
        []
    );

    return [
        response,
        apiRequest
    ]
};