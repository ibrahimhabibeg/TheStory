import { CircularProgress, Box } from "@mui/material";

export default function SuspenseLoader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
