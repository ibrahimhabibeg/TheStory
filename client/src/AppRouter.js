import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  CircularProgress,
  Box,
} from "@mui/material";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
const Signin = lazy(() => import("./pages/Signin/Signin"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Topics = lazy(() => import("./pages/Topics/Topics"));

function SuspenseLoader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

export default function AppRouter() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );
  const changeTheme = () => {
    if(localStorage.getItem("theme") === "dark"){
      localStorage.setItem("theme","light");
      setTheme(lightTheme);
    }else{
      localStorage.setItem("theme","dark");
      setTheme(darkTheme);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route
            path="/signin"
            element={
              <Suspense fallback={SuspenseLoader}>
                <Signin />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={SuspenseLoader}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/topics"
            element={
              <Suspense fallback={SuspenseLoader}>
                <Topics changeTheme={changeTheme}/>
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
