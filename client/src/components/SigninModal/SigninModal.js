import { Box, Typography, Modal, Button, Stack, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { Email } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useNavigate } from "react-router-dom";

export default function SigninModal({ noOfTimesOpened }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (noOfTimesOpened > 0) {
      setOpen(true);
    }
  }, [noOfTimesOpened]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {md:500, xs:"90%"},
          minHeight: 500,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <AutoStoriesIcon sx={{ display: "inline", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "inline",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            The Story
          </Typography>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ mt: 5 }}
        >
          Join The Story
        </Typography>
        <Stack sx={{ mt: 8 }}>
          <Button variant="contained" onClick={()=>navigate("/signup")} startIcon={<Email />}>
            Sign up with Email
          </Button>
        </Stack>
        <Typography id="modal-modal-description" sx={{ mt: 8 }}>
          Already have an account? <Link href="/signin"> Sign In</Link>
        </Typography>
      </Box>
    </Modal>
  );
}
