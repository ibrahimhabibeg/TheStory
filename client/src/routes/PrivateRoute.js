import { validateToken } from "../api/token.api";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SuspenseLoader from "../components/Loaders/SuspenseLoader/SuspenseLoader";

export default function PrivateRoute({ children }) {
  const LOADING_CODE_NUMBER = 0;
  const VALID_CODE_NUMBER = 1;
  const ERROR_CODE_NUMBER = 2;

  const [tokenState, setTokenState] = useState(LOADING_CODE_NUMBER);

  useEffect(() => {
    validateToken()
      .then((res) => {
        setTokenState(VALID_CODE_NUMBER);
      })
      .catch((err) => {
        setTokenState(ERROR_CODE_NUMBER);
      });
  }, []);

  if (tokenState === LOADING_CODE_NUMBER) {
    return <SuspenseLoader />;
  } else if (tokenState === VALID_CODE_NUMBER) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}
