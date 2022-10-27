import Editor from "./Editor/Editor";
import Navbar from "../../components/Navbar/Navbar";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import DateComponent from "./DateComponent";

const TitleTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    overflowY: "visible",
    fontSize: 22,
    border: "none",
    ["@media (max-width:780px)"]: { // eslint-disable-line no-useless-computed-key
      fontSize: 18,
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export default function Create(props) {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Navbar {...props} />
      <Box
        sx={{
          mt: 5,
          marginX: "auto",
          width: "80%",
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        <TitleTextField
          autoFocus
          multiline
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: 500,
            border: "none",
          }}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          placeholder="Type you story title ..."
        />
      </Box>
      <DateComponent />
      <Editor />
    </Box>
  );
}
