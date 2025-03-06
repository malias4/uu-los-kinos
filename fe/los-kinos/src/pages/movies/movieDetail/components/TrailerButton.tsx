import { Button } from "@mui/material";

interface TrailerButtonProps {
  trailer: string;
}

export default function TrailerButton({ trailer }: TrailerButtonProps) {
  return (
    <>
      <Button
        onClick={() => window.open(trailer, "_blank")}
        variant="outlined"
        color="primary"
        sx={{ width: { xs: "60%", sm: "60%", md: "40%" } }}
      >
        Přehrát trailer
      </Button>
    </>
  );
}
