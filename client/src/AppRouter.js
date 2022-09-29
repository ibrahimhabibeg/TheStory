import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { CircularProgress, Box } from "@mui/material";
const Signin = lazy(() => import("./pages/Signin/Signin"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Topics = lazy(() => import("./pages/Topics/Topics"));

function SuspenseLoader(){
  return(
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
} 

export default function AppRouter() {
  return (
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
              <Topics />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}
