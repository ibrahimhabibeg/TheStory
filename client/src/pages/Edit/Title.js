import { styled } from "@mui/material/styles";
import { TextField, Box } from "@mui/material";

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

export default function Title({ initialTitle, updateTitle }) {
  const handleChange = (event) => {
    updateTitle(event.target.value);
  };

  return (
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
        multiline
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: 500,
          border: "none",
        }}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        placeholder="Type you story title ..."
        defaultValue={initialTitle}
        onChange={handleChange}
      />
    </Box>
  );
}
