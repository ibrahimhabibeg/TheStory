import {
  Alert,
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../components/copyright/Copyright";
import { sendSignupReqToBackend } from "../api/auth.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [loadingSignup, setLoadingSignup] = useState(false);
  const [errorInputField, setErrorInputField] = useState("");
  const [errorInputHelperText, setErrorInputHelperText] = useState("");
  const [isServerError, setIsServerError] = useState(false);
  const [serverErrMessage, setServerErrMessage] = useState("");
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    clearAllErrs();
    setLoadingSignup(true);
    const data = new FormData(e.currentTarget);
    const signupPromise = sendSignupReqToBackend({
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });
    signupPromise.then(signupSuccess).catch(signupFail);
  };
  const clearAllErrs = () => {
    setErrorInputField("");
    setErrorInputHelperText("");
    setIsServerError(false);
    setServerErrMessage("");
  };
  const signupSuccess = (res) => {
    navigate("/");
    setLoadingSignup(false);
  };
  const signupFail = (err) => {
    if (err.response.data) {
      handleErrFromClient(err);
    } else {
      handleErrFromServer(err);
    }
    setLoadingSignup(false);
  };
  const handleErrFromClient = (err) => {
    setErrorInputField(err.response.data.wrongField);
    setErrorInputHelperText(err.response.data.message);
  };
  const handleErrFromServer = (err) => {
    setIsServerError(true);
    setServerErrMessage(err.message);
  };
  const handleAlertClose = () => {
    setIsServerError(false);
    setServerErrMessage("");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={signup} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={errorInputField === "firstName"}
                helperText={errorInputField === "firstName" && errorInputHelperText}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                error={errorInputField === "lastName"}
                helperText={errorInputField === "lastName" && errorInputHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                error={errorInputField === "username"}
                helperText={errorInputField === "username" && errorInputHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errorInputField === "email"}
                helperText={errorInputField === "email" && errorInputHelperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={errorInputField === "password"}
                helperText={errorInputField === "password"? errorInputHelperText: "* At least 6 characters"}
                inputProps={{ minLength: 6 }}
              />
            </Grid>
          </Grid>
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
            loading={loadingSignup}
          >
            Sign In
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
