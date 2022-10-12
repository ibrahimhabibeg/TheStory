import { Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function LogoBigScreen() {
  return (
    <>
      <AutoStoriesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        The Story
      </Typography>
    </>
  );
}
