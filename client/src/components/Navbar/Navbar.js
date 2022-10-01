import { AppBar, Toolbar, Container } from "@mui/material";
import LogoBigScreen from "./LogoBigScreen";
import LogoSmallScreen from "./LogoSmallScreen";
import PagesBigScreen from "./PagesBigScreen";
import PagesSmallScreen from "./PagesSmallScreen";
import AnonymusUserBox from "./AnonymusUserBox";
import UserLoggedBox from "./UserLoggedBox";
import { useEffect, useState } from "react";

const pages = [
  { name: "Home", href: "/" },
  { name: "Leaderboards", href: "/leaderboards" },
  { name: "View", href: "/view" },
];
const settings = ["Profile"];

export default function Navbar({ changeTheme }) {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const [user, setUser] = useState({});
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
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, []);
  const getThemeText = () => {
    if (localStorage.getItem("theme") === "dark") {
      return "Light Theme";
    }
    return "Dark Theme";
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoBigScreen />
          <PagesSmallScreen
            pages={pages}
            changeTheme={changeTheme}
            getThemeText={getThemeText}
          />
          <LogoSmallScreen />
          <PagesBigScreen
            pages={pages}
            changeTheme={changeTheme}
            getThemeText={getThemeText}
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
