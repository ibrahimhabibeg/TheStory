import { styled } from "@mui/material/styles";
import { TableRow } from "@mui/material";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[850]
        : theme.palette.grey[200],
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.background.default,
  },
}));
export default StyledTableRow;
