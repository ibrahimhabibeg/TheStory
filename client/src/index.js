import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline enableColorScheme/>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </ThemeProvider>
);

