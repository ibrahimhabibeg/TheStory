import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import SigninModal from "../../../components/SigninModal/SigninModal";

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
  return isUserLoggedin ? <UserLogged user={user} /> : <UserNotLogged />;
}

const UserLogged = ({ user }) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings" placement="right">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt={user.username} src="/" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const UserNotLogged = () => {
  const [noOfTimesOpened, setNoOfTimesOpened] = useState(0);
  const openModal = () => {
    setNoOfTimesOpened((currentVal) => (currentVal += 1));
  };
  return (
    <>
      <SigninModal noOfTimesOpened={noOfTimesOpened} />
      <AccountCircle sx={{ height: "40px", width: "40px" }} onClick={openModal}/>
    </>
  );
};
