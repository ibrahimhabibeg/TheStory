import { Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function LogoSmallScreen() {
  return (
    <>
      <AutoStoriesIcon
        sx={{ display: { xs: "flex", md: "none" }, mr: 1, width: 17 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "flex", md: "none" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".15rem",
          color: "inherit",
          textDecoration: "none",
          flexGrow: 1,
          fontSize: 17,
        }}
      >
        Words War
      </Typography>
    </>
  );
}
