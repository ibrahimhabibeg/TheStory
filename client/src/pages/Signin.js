import {
  Alert,
  Avatar,
  Box,
  Collapse,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from '@mui/icons-material/Close';
import signinSidePhoto from "../images/signinSidePhoto.jpg";
import { useState } from "react";
import { sendSigninReqToBackend } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Words War
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSignin, setLoadingSignin] = useState(false);
  const [errorInputField, setErrorInputField] = useState("");
  const [errorInputHelperText, setErrorInputHelperText] = useState("");
  const [isServerError, setIsServerError] = useState(false);
  const [serverErrMessage, setServerErrMessage] = useState("");
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    clearAllErrs();
    setLoadingSignin(true);
    const signinPromise = sendSigninReqToBackend(email, password);
    signinPromise.then(signinSuccess).catch(signinFail);
  };
  const clearAllErrs = () => {
    setErrorInputField("");
    setErrorInputHelperText("");
    setIsServerError(false);
    setServerErrMessage("");
  };
  const signinSuccess = (res) => {
    navigate("/");
    setLoadingSignin(false);
  };
  const signinFail = (err) => {
    if (err.response.data) {
      handleErrFromClient(err);
    } else {
      handleErrFromServer(err);
    }
    setLoadingSignin(false);
  };
  const handleErrFromClient = (err) => {
    setErrorInputField(err.response.data.wrongField);
    setErrorInputHelperText(err.response.data.message);
  };
  const handleErrFromServer = (err) => {
    setIsServerError(true);
    setServerErrMessage(err.message);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleAlertClose = () => {
    setIsServerError(false);
    setServerErrMessage("");
  }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${signinSidePhoto})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={signin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              autoFocus
              error={errorInputField === "email"}
              helperText={errorInputField === "email" && errorInputHelperText}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              error={errorInputField === "password"}
              helperText={
                errorInputField === "password" && errorInputHelperText
              }
            />
            <Collapse in={isServerError}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleAlertClose}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                severity="error"
                sx={{ mt: 1 }}
              >
                {serverErrMessage}
              </Alert>
            </Collapse>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={loadingSignin}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
