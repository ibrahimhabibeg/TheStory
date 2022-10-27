import { AppBar, Toolbar, Container } from "@mui/material";
import LogoBigScreen from "./LogoBigScreen";
import LogoSmallScreen from "./LogoSmallScreen";
import PagesBigScreen from "./PagesBigScreen";
import PagesSmallScreen from "./PagesSmallScreen";
import AnonymusUserBox from "./AnonymusUserBox";
import UserLoggedBox from "./UserLoggedBox";
import SigninModal from "../SigninModal/SigninModal";
import { useEffect, useState } from "react";

const pages = [
  { name: "Home", href: "/" },
  { name: "Inspirational Prompts", href: "/topics"},
  { name: "Create", href: "/create", isPrivate:true },
];
const settings = ["Profile"];

export default function Navbar({ changeTheme }) {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const [user, setUser] = useState({});
  const [noOfTimesOpenedModal, setNoOfTimesOpenedModal] = useState(0);
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
  const openModal = () => {
    setNoOfTimesOpenedModal(currentVal=>currentVal+1);
  }
  const getThemeText = () => {
    if (localStorage.getItem("theme") === "dark") {
      return "Light Theme";
    }
    return "Dark Theme";
  };
  return (
    <AppBar position="static">
      <SigninModal noOfTimesOpened={noOfTimesOpenedModal}/>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoBigScreen />
          <PagesSmallScreen
            pages={pages}
            changeTheme={changeTheme}
            getThemeText={getThemeText}
            openModal={openModal}
          />
          <LogoSmallScreen />
          <PagesBigScreen
            pages={pages}
            changeTheme={changeTheme}
            getThemeText={getThemeText}
            openModal={openModal}
          />
          {isUserLoggedin ? (
            <UserLoggedBox settings={settings} user={user} />
          ) : (
            <AnonymusUserBox />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
