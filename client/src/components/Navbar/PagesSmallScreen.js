import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function PagesSmallScreen({
  pages,
  changeTheme,
  getThemeText,
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleThemeButtonClick = () => {
    changeTheme();
    handleCloseNavMenu();
  };
  return (
    <Box sx={{ flex: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Button
              component="a"
              href={page.href}
              color="inherit"
              sx={{
                textDecoration: "none",
              }}
            >
              {page.name}
            </Button>
          </MenuItem>
        ))}
        <MenuItem onClick={handleThemeButtonClick}>
          <Button
            color="inherit"
            sx={{
              textDecoration: "none",
            }}
          >
            {getThemeText()}
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}
