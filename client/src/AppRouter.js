import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/signin"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <Signin />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <Signup />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}
