import { MovieProgram } from "./components/MovieProgram";
import { AddScreening } from "./components/AddScreening";
import { useUserContext } from "../../layouts/providers/hooks/useUserContext";
import { Box } from "@mui/material";

export const Homepage = () => {
  const { role } = useUserContext();

  return (
    <Box>
      {role === "Admin" && <AddScreening />}
      <MovieProgram />
    </Box>
  );
};
