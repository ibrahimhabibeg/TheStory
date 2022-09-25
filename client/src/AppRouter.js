import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

export default function AppRouter() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline enableColorScheme/>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}

