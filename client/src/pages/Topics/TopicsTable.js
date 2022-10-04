import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getTopicsWithGenreTitle } from "../../api/topics.api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  border: "none",
  textAlign: "left",
}));

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

const columns = ["No.", "Title", "Genre"];

export default function TopicsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rowsPromise = getTopicsWithGenreTitle({});
    rowsPromise
      .then((res) => {
        setRows(res.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="topics table" size="small">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" sx={{ width: 100 }}>
                {row.id}.
              </StyledTableCell>
              <StyledTableCell
                component={Link}
                sx={{
                  width: 500,
                  textDecoration: "none",
                  ":hover": { textDecoration: "underline", cursor: "pointer" },
                }}
              >
                {row.title}
              </StyledTableCell>
              <StyledTableCell>{row.genre.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
