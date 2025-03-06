import { useNavigate } from "react-router-dom"

export const useScreeningNavigate = () => {
    const navigate = useNavigate();

    const toScreening = (screeningId: number, movieId: number) => {
        navigate(`/screening/${screeningId}`, { state: { movieId } });
    }

    return toScreening;
}