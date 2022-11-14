import {
  Avatar,
  Box,
  IconButton,
  Typography,
  Menu,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState({});
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (
      currentUser &&
      currentUser.email &&
      currentUser.firstName &&
      currentUser.id &&
      currentUser.lastName &&
      currentUser.username
    ) {
      setIsUserLoggedin(true);
      setUser(currentUser);
    }
  }, []);
  return isUserLoggedin?<UserLogged user={user}/>:<UserNotLogged/>;
}

const UserLogged = ({user}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    handleCloseUserMenu();
    window.location.reload();
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings" placement="right">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.username} src="/" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const UserNotLogged = () => {};
