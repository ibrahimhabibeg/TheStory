import { Button, Stack } from "@mui/material";

export default function AnonymusUserBox() {
  return (
    <Stack direction={"row"} spacing={2} sx={{ flex: 0 }}>
      <Button
        color="inherit"
        variant="outlined"
        componen="a"
        href="/signin"
        sx={{ fontSize: 11, display: { xs: "none", md: "block" } }}
      >
        signin
      </Button>
      <Button
        color="secondary"
        variant="contained"
        componen="a"
        href="/signup"
        sx={{ fontSize: 11 }}
      >
        signup
      </Button>
    </Stack>
  );
}
