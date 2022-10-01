import { Box, Button } from "@mui/material";

export default function PagesBigScreen({pages, changeTheme, getThemeText}) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.name}
          component="a"
          href={page.href}
          color="inherit"
          sx={{
            textDecoration: "none",
          }}
        >
          {page.name}
        </Button>
      ))}
      <Button
        onClick={changeTheme}
        color="inherit"
        sx={{
          textDecoration: "none",
        }}
      >
        {getThemeText()}
      </Button>
    </Box>
  );
}
