import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PagesBigScreen({
  pages,
  changeTheme,
  getThemeText,
  openModal,
}) {
  const navigate = useNavigate();
  const handleClick = (page) => {
    if (page.isPrivate) {
      openModal();
      return;
    }
    navigate(page.href);
    return;
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.name}
          component="a"
          color="inherit"
          onClick={() => handleClick(page)}
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
