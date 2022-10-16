import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function PagesSmallScreen({
  pages,
  changeTheme,
  getThemeText,
  openModal
}) {
  const navigate = useNavigate();
  const handleClick = (page) =>{
    if(page.isPrivate){
      openModal();
      return;
    }
    navigate(page.href);
    return;
  }
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
              onClick={()=>handleClick(page)}
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
